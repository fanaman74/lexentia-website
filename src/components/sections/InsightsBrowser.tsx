"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { insightCategories } from "@/content/insights";
import type { Dictionary } from "@/content/dictionary";
import type { Insight, InsightCategoryId } from "@/content/types";
import { pathFor, type Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";

export function InsightsBrowser({ insights, locale, dict }: { insights: Insight[]; locale: Locale; dict: Dictionary }) {
  const [category, setCategory] = useState<InsightCategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const used = (Object.keys(insightCategories) as InsightCategoryId[]).filter(c => insights.some(i => i.categories.includes(c)));
  const shown = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(locale);
    return insights.filter(i => (category === "all" || i.categories.includes(category)) && (!needle || `${i.title} ${i.excerpt?.[locale] ?? ""}`.toLocaleLowerCase(locale).includes(needle))).sort((a, b) => sort === "oldest" ? a.publishedAt.localeCompare(b.publishedAt) : b.publishedAt.localeCompare(a.publishedAt));
  }, [insights, category, query, sort, locale]);
  const labels = locale === "fr" ? { search: "Rechercher", placeholder: "Titre, thème ou mots de l’analyse", sort: "Trier par", newest: "Les plus récentes", oldest: "Les plus anciennes", results: "analyses", clear: "Effacer les filtres", count: "Résultats" } : { search: "Search", placeholder: "Title, topic or words from the article", sort: "Sort by", newest: "Newest first", oldest: "Oldest first", results: "insights", clear: "Clear filters", count: "Results" };
  return <>
    <div role="group" aria-label={dict.insights.eyebrow} className="flex flex-wrap gap-2">
      <button type="button" className="pill" aria-pressed={category === "all"} onClick={() => setCategory("all")}>{dict.insights.all}</button>
      {used.map(id => <button key={id} type="button" className="pill" aria-pressed={category === id} onClick={() => setCategory(id)}>{insightCategories[id][locale]}</button>)}
    </div>
    <div role="search" className="search-panel grid items-end gap-5 md:grid-cols-[1fr_230px]">
      <div><label htmlFor="insight-search" className="mb-2 block text-sm font-medium">{labels.search}</label><input id="insight-search" type="search" className="field" value={query} onChange={event => setQuery(event.target.value)} placeholder={labels.placeholder} /></div>
      <div><label htmlFor="insight-sort" className="mb-2 block text-sm font-medium">{labels.sort}</label><select id="insight-sort" className="field" value={sort} onChange={event => setSort(event.target.value)}><option value="newest">{labels.newest}</option><option value="oldest">{labels.oldest}</option></select></div>
    </div>
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]"><p role="status" aria-live="polite">{labels.count}: {shown.length} / {insights.length} {labels.results}</p>{query || category !== "all" ? <button type="button" className="min-h-11 underline" onClick={() => { setQuery(""); setCategory("all"); }}>{labels.clear}</button> : null}</div>
    {shown.length ? <div className="mt-5">{shown.map(insight => <article key={insight.slug}><Link href={pathFor(locale, { key: "insight", slug: insight.slug })} className="insight-row group">
      <time className="meta text-[var(--color-ink-soft)]" dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time>
      <div><h2 className="display" lang={insight.language}>{insight.title}</h2>{insight.excerpt ? <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-[var(--color-ink-soft)]">{insight.excerpt[locale]}</p> : null}<div className="mt-3 flex flex-wrap gap-2">{insight.categories.map(id => <span className="chip" key={id}>{insightCategories[id][locale]}</span>)}</div>{insight.language !== locale ? <p className="meta mt-2 text-[var(--color-ink-soft)]">{dict.common.writtenIn[insight.language]}</p> : null}</div><Icon name="arrow" size={20} className="arrow mt-1 text-[var(--color-ink-soft)]" />
    </Link></article>)}</div> : <div className="mt-5 border-y border-[var(--color-line)] py-12"><p className="text-[var(--color-ink-soft)]">{dict.insights.empty}</p><button type="button" className="btn btn-secondary mt-5" onClick={() => { setQuery(""); setCategory("all"); }}>{labels.clear}</button></div>}
  </>;
}
