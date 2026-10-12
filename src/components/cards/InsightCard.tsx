import Link from "next/link";
import { insightCategories } from "@/content/insights";
import type { Dictionary } from "@/content/dictionary";
import type { Insight } from "@/content/types";
import { formatDate } from "@/lib/format";
import { pathFor, type Locale } from "@/lib/i18n";

export function InsightCard({ insight, locale, dict }: { insight: Insight; locale: Locale; dict: Dictionary }) {
  const url = pathFor(locale, { key: "insight", slug: insight.slug });
  return (
    <article data-stagger className="group relative flex h-full flex-col border-t border-[var(--color-line-strong)] pt-5 transition-colors hover:border-[var(--color-ink)]">
      <p className="meta flex flex-wrap gap-x-3 text-[var(--color-ink-soft)]">
        <span>{insightCategories[insight.categories[0]][locale]}</span>
        <span aria-hidden>·</span>
        <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time>
      </p>
      <h3 className="mt-4 text-xl font-medium leading-snug" lang={insight.language !== locale ? insight.language : undefined}>
        <Link href={url} className="after:absolute after:inset-0">
          <span className="link-underline">{insight.title}</span>
        </Link>
      </h3>
      {insight.excerpt ? (
        <p className="mt-3 line-clamp-2 text-[var(--color-ink-soft)]">{insight.excerpt[locale]}</p>
      ) : null}
      <p className="meta mt-auto flex items-center justify-between pt-6 text-[var(--color-ink-soft)]">
        <span>{insight.language !== locale ? dict.common.writtenIn[insight.language] : ""}</span>
        <span aria-hidden className="arrow text-[var(--color-ink)]">→</span>
      </p>
    </article>
  );
}
