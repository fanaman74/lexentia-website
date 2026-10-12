"use client";

import { useState } from "react";
import { InsightCard } from "@/components/cards/InsightCard";
import { insightCategories } from "@/content/insights";
import type { Dictionary } from "@/content/dictionary";
import type { Insight, InsightCategoryId } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/** Category filter. Without JavaScript every article is listed. */
export function InsightsBrowser({ insights, locale, dict }: { insights: Insight[]; locale: Locale; dict: Dictionary }) {
  const [category, setCategory] = useState<InsightCategoryId | "all">("all");
  const used = (Object.keys(insightCategories) as InsightCategoryId[]).filter((c) =>
    insights.some((i) => i.categories.includes(c)),
  );
  const shown = category === "all" ? insights : insights.filter((i) => i.categories.includes(category));
  const options: { id: InsightCategoryId | "all"; label: string }[] = [
    { id: "all", label: dict.insights.all },
    ...used.map((id) => ({ id, label: insightCategories[id][locale] })),
  ];

  return (
    <>
      <div role="group" aria-label={dict.insights.eyebrow} className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={category === o.id}
            onClick={() => setCategory(o.id)}
            className={`min-h-11 rounded-[var(--radius-sm)] border px-4 text-sm transition-colors ${
              category === o.id
                ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-[var(--color-cream)]"
                : "border-[var(--color-line-strong)] hover:border-[var(--color-ink)]"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length}
      </p>
      {shown.length ? (
        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} locale={locale} dict={dict} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-[var(--color-ink-soft)]">{dict.insights.empty}</p>
      )}
    </>
  );
}
