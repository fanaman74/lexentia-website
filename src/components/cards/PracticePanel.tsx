import Link from "next/link";
import type { PracticeArea } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function PracticePanel({ area, locale, cta }: { area: PracticeArea; locale: Locale; cta: string; index: string }) {
  const url = pathFor(locale, { key: area.routeKey });
  return <article data-stagger className={`group relative flex min-h-[340px] flex-col rounded-xl border p-7 md:p-8 ${area.id === "eu-civil-service" ? "border-[#d2e6b7] bg-[#edf9dd]" : "border-[#f0d4e2] bg-[var(--color-pink)]"}`}>
    <Icon name="scales" size={26} className="text-[var(--color-bronze)]" />
    <h3 className="display text-h3 mt-6"><Link href={url} className="after:absolute after:inset-0">{area.title[locale]}</Link></h3>
    <p className="mt-4 max-w-[56ch] leading-relaxed text-[var(--color-ink-soft)]">{area.summary[locale]}</p>
    <ul className="mt-5 flex flex-wrap gap-2">{area.tags[locale].map(tag => <li key={tag} className="chip">{tag}</li>)}</ul>
    <p className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-5 text-sm font-medium"><span className="pt-3">{cta}</span><Icon name="arrow" size={19} className="arrow mt-3" /></p>
  </article>;
}
