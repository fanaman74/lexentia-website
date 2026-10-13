import Image from "next/image";
import Link from "next/link";
import type { PracticeArea } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function PracticePanel({ area, locale, cta }: { area: PracticeArea; locale: Locale; cta: string; index: string }) {
  const url = pathFor(locale, { key: area.routeKey });
  const european = area.id === "eu-civil-service";
  return <article data-stagger className={`practice-panel group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-xl border p-7 md:p-8 ${european ? "practice-panel-europe" : "practice-panel-private"}`}>
    <div className="practice-art" aria-hidden="true"><Image src={european ? "/images/practice-european-institutions.png" : "/images/practice-brussels-private-law.png"} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className="object-contain object-right-bottom" /></div>
    <div className="practice-panel-content relative z-[1] flex flex-1 flex-col">
      <Icon name="scales" size={26} className={european ? "text-[var(--color-teal)]" : "text-[var(--color-purple)]"} />
      <h3 className="display text-h3 mt-6"><Link href={url} className="after:absolute after:inset-0">{area.title[locale]}</Link></h3>
      <p className="mt-4 max-w-[56ch] leading-relaxed text-[var(--color-ink-soft)]">{area.summary[locale]}</p>
      <ul className="mt-5 flex flex-wrap gap-2">{area.tags[locale].map(tag => <li key={tag} className="chip">{tag}</li>)}</ul>
      <p className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-5 text-sm font-medium"><span className="pt-3">{cta}</span><Icon name="arrow" size={19} className="arrow mt-3" /></p>
    </div>
  </article>;
}
