"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { CourtRuling } from "@/content/types";
import { courtLabel, courtSlug, topicLabel } from "@/content/court-rulings";
import { formatDate } from "@/lib/format";
import { pathFor, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

const PAGE_SIZE = 20;
const normalise = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function CourtRulingsBrowser({ records, importedAt, locale }: { records: CourtRuling[]; importedAt: string; locale: Locale }) {
  const [query, setQuery] = useState("");
  const [court, setCourt] = useState("");
  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const labels = locale === "fr" ? {
    title: "Jurisprudence européenne", intro: "Arrêts et ordonnances de la Cour de justice et du Tribunal sur le harcèlement, la discrimination et les risques psychosociaux au travail.",
    search: "Rechercher", placeholder: "Nom, numéro d’affaire ou mots du titre officiel", court: "Juridiction", allCourts: "Toutes les juridictions", justice: "Cour de justice", general: "Tribunal",
    topic: "Thème", allTopics: "Tous les thèmes", sort: "Trier par", newest: "Décisions les plus récentes", oldest: "Décisions les plus anciennes", name: "Nom des parties",
    clear: "Effacer les filtres", previous: "Précédent", next: "Suivant", pagination: "Pagination des décisions", empty: "Aucune décision ne correspond à ces filtres.", recovery: "Essayez un autre terme ou effacez les filtres.",
    coverage: "À propos de cette collection", snapshot: "Collection importée d’EU JUST le", live: "Consulter la collection à jour sur EU JUST", articles: "Lire les analyses du cabinet", about: "Cette sélection repose sur des mots-clés dans les titres officiels. Les thèmes facilitent la recherche ; ils ne constituent pas une qualification juridique. Les titres sont conservés dans leur version anglaise. Le document officiel fait foi.",
  } : {
    title: "European court rulings", intro: "Court of Justice and General Court judgments and orders on workplace harassment, discrimination and psychosocial risks.",
    search: "Search rulings", placeholder: "Name, case number or words from the official title", court: "Court", allCourts: "All courts", justice: "Court of Justice", general: "General Court",
    topic: "Topic", allTopics: "All topics", sort: "Sort by", newest: "Newest decision", oldest: "Oldest decision", name: "Party name",
    clear: "Clear filters", previous: "Previous", next: "Next", pagination: "Rulings pagination", empty: "No rulings match these filters.", recovery: "Try another search term or clear the filters.",
    coverage: "About this collection", snapshot: "Collection imported from EU JUST on", live: "View the current collection on EU JUST", articles: "Read the firm’s analysis", about: "This selection uses keyword matches in official titles. Topics help you find records; they are not legal findings. Titles retain their English source wording. The official document remains the authority.",
  };
  const topics = [...new Set(records.flatMap(record => record.topics))].sort();
  const matching = useMemo(() => {
    const needle = normalise(query.trim());
    return records.filter(record => (!court || (court === "general" ? record.court.startsWith("General Court") : record.court.startsWith("Court of Justice")))
      && (!topic || record.topics.includes(topic))
      && (!needle || normalise(`${record.title} ${record.caseNumber} ${record.celex} ${record.officialTitle} ${record.topics.map(t => topicLabel(t, locale)).join(" ")}`).includes(needle)))
      .sort((a, b) => sort === "name" ? a.title.localeCompare(b.title, locale) : sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  }, [records, query, court, topic, sort, locale]);
  const pages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages);
  const first = (currentPage - 1) * PAGE_SIZE;
  const shown = matching.slice(first, first + PAGE_SIZE);
  const filtered = Boolean(query || court || topic);
  const reset = () => { setQuery(""); setCourt(""); setTopic(""); setPage(1); };
  const changePage = (next: number) => {
    setPage(next);
    resultsRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  };

  return <>
    <div className="section-heading"><h2 id="court-rulings-title" className="display text-h2">{labels.title}</h2><a href="#practice-insights" className="inline-flex items-center gap-2 text-sm">{labels.articles}<Icon name="arrow" size={17} /></a></div>
    <p className="max-w-[70ch] leading-relaxed text-[var(--color-ink-soft)]">{labels.intro}</p>
    <details className="court-coverage mt-6 border-y border-[var(--color-line)] py-4 text-sm">
      <summary className="cursor-pointer font-medium">{labels.coverage}</summary>
      <p className="mt-4 max-w-[70ch] leading-relaxed text-[var(--color-ink-soft)]">{labels.about}</p>
      <p className="mt-3 text-[var(--color-ink-soft)]">{labels.snapshot} <time dateTime={importedAt}>{formatDate(importedAt, locale)}</time>.</p>
      <a href="https://www.eujust.online/cases" className="mt-3 inline-flex items-center gap-2 link-underline">{labels.live}<Icon name="external" size={15} /></a>
    </details>
    <div role="search" aria-label={labels.title} className="search-panel grid gap-5 md:grid-cols-3">
      <div className="md:col-span-3"><label htmlFor="court-search" className="mb-2 block text-sm font-medium">{labels.search}</label><input id="court-search" className="field" type="search" placeholder={labels.placeholder} value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} /></div>
      <div><label htmlFor="court-filter" className="mb-2 block text-sm font-medium">{labels.court}</label><select id="court-filter" className="field" value={court} onChange={e => { setCourt(e.target.value); setPage(1); }}><option value="">{labels.allCourts}</option><option value="justice">{labels.justice}</option><option value="general">{labels.general}</option></select></div>
      <div><label htmlFor="court-topic" className="mb-2 block text-sm font-medium">{labels.topic}</label><select id="court-topic" className="field" value={topic} onChange={e => { setTopic(e.target.value); setPage(1); }}><option value="">{labels.allTopics}</option>{topics.map(t => <option key={t} value={t}>{topicLabel(t, locale)}</option>)}</select></div>
      <div><label htmlFor="court-sort" className="mb-2 block text-sm font-medium">{labels.sort}</label><select id="court-sort" className="field" value={sort} onChange={e => { setSort(e.target.value); setPage(1); }}><option value="newest">{labels.newest}</option><option value="oldest">{labels.oldest}</option><option value="name">{labels.name}</option></select></div>
    </div>
    <div ref={resultsRef} className="court-results mt-10">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]">
        <p role="status" aria-live="polite">{locale === "fr" ? `${matching.length ? first + 1 : 0}–${first + shown.length} sur ${matching.length} décisions` : `Showing ${matching.length ? first + 1 : 0}–${first + shown.length} of ${matching.length} rulings`}</p>
        {filtered ? <button type="button" className="min-h-11 underline" onClick={reset}>{labels.clear}</button> : null}
      </div>
      {shown.length ? <ul className="court-ruling-list">{shown.map(record => <li key={record.celex}>
        <Link href={pathFor(locale, { key: "insight", slug: courtSlug(record) })} className="court-ruling-row group">
          <time dateTime={record.date} className="meta text-[var(--color-ink-soft)]"><span>{new Intl.DateTimeFormat(locale === "fr" ? "fr-BE" : "en-GB", { day: "numeric", month: "short", timeZone: "UTC" }).format(new Date(record.date))}</span><span>{record.date.slice(0, 4)}</span></time>
          <div className="court-ruling-body"><h3 lang="en" className="display">{record.title}</h3><p lang="en" className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{record.formation}</p><div className="mt-3 flex flex-wrap gap-2">{record.topics.map(t => <span key={t} className="chip">{topicLabel(t, locale)}</span>)}</div></div>
          <div className="court-ruling-reference"><strong className="text-sm font-medium">{record.caseNumber}</strong><span className="meta text-[var(--color-ink-soft)]">{courtLabel(record.court, locale)}</span><Icon name="arrow" size={20} className="arrow text-[var(--color-bronze)]" /></div>
        </Link>
      </li>)}</ul> : <div className="border-y border-[var(--color-line)] py-12"><h3 className="display text-h3">{labels.empty}</h3><p className="mt-3 text-[var(--color-ink-soft)]">{labels.recovery}</p><button className="btn btn-secondary mt-5" type="button" onClick={reset}>{labels.clear}</button></div>}
      {matching.length > PAGE_SIZE ? <nav aria-label={labels.pagination} className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm"><p>Page {currentPage} {locale === "fr" ? "sur" : "of"} {pages}</p><div className="flex gap-3"><button className="btn btn-secondary" type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>{labels.previous}</button><button className="btn btn-secondary" type="button" disabled={currentPage === pages} onClick={() => changePage(currentPage + 1)}>{labels.next}<Icon name="arrow" size={16} /></button></div></nav> : null}
    </div>
  </>;
}
