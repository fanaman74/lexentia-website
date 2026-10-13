#!/usr/bin/env python3
"""Refresh the public EU JUST catalogue through Chromium; keep the prior snapshot on failure.
Requires Python 3.10+, pip install playwright, and python -m playwright install chromium.
CHROMIUM_PATH optionally selects an installed browser. HTTPS_PROXY is respected.
"""
import asyncio,json,os,re,tempfile
from datetime import datetime, timezone
from pathlib import Path
from playwright.async_api import async_playwright
OUT=Path(__file__).resolve().parents[1] / 'src/content/court-rulings-snapshot.json'
async def main():
 async with async_playwright() as p:
  proxy={'server':os.environ['HTTPS_PROXY']} if os.environ.get('HTTPS_PROXY') else None
  chromium_path=os.environ.get('CHROMIUM_PATH')
  browser=await p.chromium.launch(executable_path=chromium_path,headless=True,proxy=proxy)
  page=await browser.new_page(viewport={'width':1440,'height':1000})
  records=[]
  next_url='https://www.eujust.online/cases'
  expected=None
  visited=set()
  while next_url:
   if next_url in visited:raise ValueError('Repeated pagination URL')
   visited.add(next_url)
   response=await page.goto(next_url,wait_until='networkidle')
   assert response.status==200,response.status
   result_text=await page.locator('.result-bar').inner_text()
   count=int(re.search(r'of (\d+) rulings?',result_text).group(1))
   if expected is None:expected=count
   if count!=expected:raise ValueError('Source changed during import; retry')
   print(result_text,flush=True)
   records+=await page.locator('.dispatch').evaluate_all('els=>els.map(e=>({title:e.querySelector("h3").textContent.trim(),date:e.querySelector("time")?.dateTime??null,caseNumber:e.querySelector(".dispatch-ref strong").textContent.trim(),court:e.querySelector(".dispatch-ref span").textContent.trim(),eujustUrl:e.querySelector("h3 a").href,topics:Array.from(e.querySelectorAll(".tag")).map(t=>t.textContent.trim())}))')
   next_link=page.locator('.pagination a[rel=next]')
   next_url=await next_link.evaluate('(e)=>e.href') if await next_link.count() else None
  if not records or len(records)!=expected or len(records)!=len({r['eujustUrl'] for r in records}):
   raise ValueError('Incomplete or duplicated catalogue; snapshot kept unchanged')
  semaphore=asyncio.Semaphore(4)
  async def detail(r):
   async with semaphore:
    tab=await browser.new_page()
    response=await tab.goto(r['eujustUrl'],wait_until='domcontentloaded')
    assert response.status==200,(r['eujustUrl'],response.status)
    r.update(await tab.evaluate('''()=>({officialTitle:document.querySelector('details .small').textContent.trim(),formation:document.querySelector('.detail-head .lede').textContent.trim(),subjects:Array.from(document.querySelectorAll('[aria-labelledby="h-source"] .prose li')).map(e=>e.textContent.trim()),officialUrl:document.querySelector('.detail-source-action')?.href??null,celex:Array.from(document.querySelectorAll('.facts div')).find(e=>e.querySelector('dt').textContent==='CELEX').querySelector('dd').textContent.trim()})'''))
    await tab.close()
    print('imported',r['caseNumber'],flush=True)
  await asyncio.gather(*(detail(r) for r in records))
  for record in records:
   if not re.fullmatch(r'6\d{4}(CJ|TJ|CO|TO)\d{4}',record['celex']):raise ValueError('Unexpected court identifier')
   if record['officialUrl']!='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:'+record['celex']:raise ValueError('Unexpected official URL')
   if not record['date'] or not re.fullmatch(r'\d{4}-\d{2}-\d{2}',record['date']):raise ValueError('Missing decision date')
  if len({r['celex'] for r in records})!=len(records):raise ValueError('Duplicate CELEX records')
  payload=json.dumps({'importedAt':datetime.now(timezone.utc).date().isoformat(),'source':'https://www.eujust.online/cases','records':records},ensure_ascii=False,indent=2)+'\n'
  with tempfile.NamedTemporaryFile(mode='w',encoding='utf-8',dir=OUT.parent,delete=False) as temporary:
   temporary.write(payload)
   temporary_path=Path(temporary.name)
  temporary_path.replace(OUT)
  print('TOTAL',len(records),flush=True)
  await browser.close()
asyncio.run(main())
