# Lexentia website

The rebuild of lexentia.eu: Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and GSAP 3 with ScrollTrigger. French and English from day one.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr or /en
npm run build && npm start
```

## Structure

- `src/app/[locale]/[[...slug]]/page.tsx` is a single route that resolves every localised URL (`/en/team` ↔ `/fr/equipe`) through the table in `src/lib/i18n.ts`. This lets slugs differ by language, and the language switcher always lands on the equivalent page. Every page is statically generated.
- `src/content/` is the typed content layer. It is shaped like the brief's CMS model (Lawyer, PracticeArea, Insight), so a Sanity or Payload adapter only needs to replace `src/content/index.ts`.
- `src/components/motion/` holds the GSAP primitives (`Reveal`, `RevealLines`, `StaggerGroup`, `PageIntro`, `ProcessRail`, `Timeline`). All of them respect `prefers-reduced-motion`, and content stays visible without JavaScript.
- `src/proxy.ts` handles locale detection (cookie, then Accept-Language, then French). `next.config.ts` holds the 301s from the old site and the security headers.
- `src/lib/contact-action.ts` is the contact server action: Zod validation, a honeypot, and rate limiting. **Mail delivery is not configured yet.**

## Before launch

See `docs/review.md` (open questions for the firm) and `docs/migration-inventory.md`. Every legal page is a draft that needs lawyer approval.

## Court rulings in Latest News

Latest News includes a snapshot of EU JUST’s public Court of Justice and General Court collection: 84 records imported on 13 October 2026, with the firm's 28 original analyses kept on the separate Insights page. Court records keep the source's English official title, decision date, court, case number, CELEX identifier and EUR-Lex link. Matched topics are research aids; court records are not attributed to the firm's lawyers. Localised case pages are statically generated in both languages under `/en/latest-news` and `/fr/actualites`. Previous court-record URLs under Insights redirect to their new locations. The homepage promotes the five latest records in a carousel that advances every 6.5 seconds, pausing offscreen, in hidden tabs, on hover/focus and for reduced motion; visitors can also pause it manually.

The EU JUST repository stores its records in PostgreSQL; they are not checked into that repository. This site imports the published collection with Chromium rather than requiring access to that database. To refresh the snapshot:

```bash
python -m pip install playwright
python -m playwright install chromium
python scripts/import-court-rulings.py
npm run build
```

`CHROMIUM_PATH` can select an installed Chromium executable. The importer respects `HTTPS_PROXY`, follows all result pages and imports each record’s source metadata. It validates counts, unique CELEX identifiers, dates and official URLs before atomically replacing `src/content/court-rulings-snapshot.json`. Failed or incomplete imports leave the previous collection intact. Review and commit the updated snapshot, then rebuild to publish it. This is a dated collection, not an automatic monitoring service; its coverage disclosure links to the current EU JUST feed. Source: https://github.com/fanaman74/eujust and https://www.eujust.online/cases.

## Firm article archive and reading pages

The firm's 28 articles have an illustrated archive at `/en/insights` and `/fr/analyses`, with category/search/date filters and 12 articles per page. Filters and page position are retained in the URL; category links from article sidebars open the corresponding filtered archive. Without JavaScript, all 28 article links are rendered. External court records remain on Latest News.

Each article has a bilingual reading-page interface, while the original title and full article language are retained. Author, original publication date, category counts, recent and related articles are sourced from the existing inventory. Decorative editorial illustrations replace the old photographs; see `public/images/SOURCES.md`. The original article bodies are still pending migration, so pages explicitly show the available summary and link to the original site.

To add verified original-language text, set `originalBody` on an entry in `src/content/insights.ts`. Blocks support paragraphs (`type: "paragraph", text`), headings (`type: "heading", level: 2 | 3, text`), lists (`type: "list", items, ordered`) and quotations (`type: "quote", text`). Plain strings are escaped by React. Once nonempty full text exists, the reading page renders it in the article's original language and removes the summary/source fallback. The existing localized `body` field is also supported. Do not expand the current summaries into invented full articles.
