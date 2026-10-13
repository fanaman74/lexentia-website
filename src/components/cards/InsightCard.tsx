import Link from "next/link";
import { insightCategories } from "@/content/insights";
import type { Dictionary } from "@/content/dictionary";
import type { Insight } from "@/content/types";
import { formatDate } from "@/lib/format";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function InsightCard({ insight, locale, dict }: { insight: Insight; locale: Locale; dict: Dictionary }) {
  const url = pathFor(locale, { key: "insight", slug: insight.slug });
  return <article data-stagger className="insight-card group">
    <p className="meta"><time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time></p>
    <h3 className="mt-5" lang={insight.language !== locale ? insight.language : undefined}><Link href={url} className="after:absolute after:inset-0">{insight.title}</Link></h3>
    <div className="mt-5"><span className="chip">{insightCategories[insight.categories[0]][locale]}</span></div>
    {insight.excerpt ? <p className="mt-5 line-clamp-3 text-sm leading-relaxed">{insight.excerpt[locale]}</p> : null}
    <p className="insight-footer mt-auto flex items-center justify-between gap-3 border-t border-[var(--color-line)] pt-5 text-sm"><span className="pt-6">{dict.common.readMore}</span><Icon name="arrow" size={19} className="arrow mt-6" /></p>
    {insight.language !== locale ? <span className="meta mt-2">{dict.common.writtenIn[insight.language]}</span> : null}
  </article>;
}
