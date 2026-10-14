"use client";

import { useEffect, useMemo, useState } from "react";
import { ArticlePreview } from "@/components/cards/ArticlePreview";
import { insightCategories } from "@/content/insights";
import type { Dictionary } from "@/content/dictionary";
import type { Insight, InsightCategoryId } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

const PAGE_SIZE = 12;
export function InsightsBrowser({ insights, locale, dict }: { insights: Insight[]; locale: Locale; dict: Dictionary }) {
  const [category, setCategory] = useState<InsightCategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [enhanced, setEnhanced] = useState(false);
  const used = useMemo(() => (Object.keys(insightCategories) as InsightCategoryId[]).filter(c => insights.some(i => i.categories.includes(c))), [insights]);
  useEffect(() => {
    const restore = () => {
      const params = new URLSearchParams(window.location.search);
      const selected = params.get("category") as InsightCategoryId;
      setCategory(used.includes(selected) ? selected : "all");
      setQuery(params.get("q") ?? "");
      setSort(params.get("sort") === "oldest" ? "oldest" : "newest");
      const requested = Number(params.get("page"));
      setPage(Number.isFinite(requested) ? Math.max(1, Math.floor(requested)) : 1);
      setEnhanced(true);
    };
    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, [used]);
  const shown = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(locale);
    return insights.filter(i => (category === "all" || i.categories.includes(category)) && (!needle || `${i.title} ${i.excerpt?.[locale] ?? ""}`.toLocaleLowerCase(locale).includes(needle))).sort((a, b) => sort === "oldest" ? a.publishedAt.localeCompare(b.publishedAt) : b.publishedAt.localeCompare(a.publishedAt));
  }, [insights, category, query, sort, locale]);
  const pages = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const cards = enhanced ? shown.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE) : shown;
  const update = (selected: typeof category, needle: string, order: string, nextPage = 1) => {
    setCategory(selected); setQuery(needle); setSort(order); setPage(nextPage);
    const params = new URLSearchParams();
    if (selected !== "all") params.set("category", selected);
    if (needle) params.set("q", needle);
    if (order === "oldest") params.set("sort", order);
    if (nextPage > 1) params.set("page", String(nextPage));
    window.history.replaceState(window.history.state, "", window.location.pathname + (params.size ? `?${params}` : ""));
  };
  const go = (nextPage: number) => {
    update(category, query, sort, nextPage);
    requestAnimationFrame(() => document.getElementById("article-results")?.scrollIntoView({ block: "start", behavior: "instant" }));
  };
  const fr = locale === "fr";
  const labels = fr ? { search: "Rechercher", placeholder: "Titre, thème ou mots de l’analyse", sort: "Trier par", newest: "Les plus récentes", oldest: "Les plus anciennes", clear: "Effacer les filtres", previous: "Page précédente", next: "Page suivante" } : { search: "Search", placeholder: "Title, topic or words from the article", sort: "Sort by", newest: "Newest first", oldest: "Oldest first", clear: "Clear filters", previous: "Previous page", next: "Next page" };
  const filters = (suffix: string) => <>    <div role="group" aria-label={dict.insights.eyebrow} className="article-filter-controls flex flex-wrap gap-2">
      <button type="button" className="pill" aria-pressed={category === "all"} onClick={() => update("all", query, sort)}>{dict.insights.all}</button>
      {used.map(id => <button key={id} type="button" className="pill" aria-pressed={category === id} onClick={() => update(id, query, sort)}>{insightCategories[id][locale]}</button>)}
    </div>
    <div role="search" className="article-filter-controls search-panel grid items-end gap-5 md:grid-cols-[1fr_230px]">
      <div><label htmlFor={`insight-search${suffix}`} className="mb-2 block text-sm font-medium">{labels.search}</label><input id={`insight-search${suffix}`} type="search" className="field" value={query} onChange={event => update(category, event.target.value, sort)} placeholder={labels.placeholder} /></div>
      <div><label htmlFor={`insight-sort${suffix}`} className="mb-2 block text-sm font-medium">{labels.sort}</label><select id={`insight-sort${suffix}`} className="field" value={sort} onChange={event => update(category, query, event.target.value)}><option value="newest">{labels.newest}</option><option value="oldest">{labels.oldest}</option></select></div>
    </div>
</>;
  return <>
    <div className="article-filters-desktop">{filters("")}</div>
    <details className="article-filters-mobile">
      <summary>{fr ? "Filtrer les articles" : "Filter articles"}<Icon name="chevron" size={18} /></summary>
      <div className="pt-5">{filters("-mobile")}</div>
    </details>
    <div id="article-results" className="article-results">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]">
        <p role="status" aria-live="polite">{fr ? "Affichage" : "Showing"} {shown.length ? enhanced ? (current - 1) * PAGE_SIZE + 1 : 1 : 0}–{enhanced ? Math.min(current * PAGE_SIZE, shown.length) : shown.length} {fr ? "sur" : "of"} {shown.length} articles</p>
        {query || category !== "all" ? <button type="button" className="min-h-11 underline" onClick={() => update("all", "", "newest")}>{labels.clear}</button> : null}
      </div>
      {cards.length ? <div className="article-preview-grid">{cards.map(insight => <ArticlePreview key={insight.slug} insight={insight} locale={locale} dict={dict} />)}</div> : <div className="border-y border-[var(--color-line)] py-12"><p>{dict.insights.empty}</p><button type="button" className="btn btn-secondary mt-5" onClick={() => update("all", "", "newest")}>{labels.clear}</button></div>}
      {enhanced && pages > 1 ? <nav className="article-pagination" aria-label={fr ? "Pages des articles" : "Article pages"}>
        <button type="button" className="btn btn-secondary" disabled={current === 1} onClick={() => go(current - 1)}><Icon name="arrow" size={17} className="rotate-180" />{labels.previous}</button>
        <div className="flex gap-2">{Array.from({ length: pages }, (_, i) => <button key={i} type="button" className="pill" aria-current={current === i + 1 ? "page" : undefined} aria-label={`Page ${i + 1}`} onClick={() => go(i + 1)}>{i + 1}</button>)}</div>
        <button type="button" className="btn btn-secondary" disabled={current === pages} onClick={() => go(current + 1)}>{labels.next}<Icon name="arrow" size={17} /></button>
      </nav> : null}
    </div>
  </>;
}
