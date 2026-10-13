import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import type { CourtRuling, Dictionary } from "@/content";
import { courtImportDate, courtLabel, topicLabel } from "@/content/court-rulings";
import { formatDate } from "@/lib/format";
import { href, type Locale } from "@/lib/i18n";

export function CourtRulingPage({ record, locale, dict }: { record: CourtRuling; locale: Locale; dict: Dictionary }) {
  const fr = locale === "fr";
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: record.title, inLanguage: "en", identifier: record.celex, citation: record.officialUrl, isBasedOn: record.eujustUrl }} />
    <PageHero contentLanguage="en" eyebrow={dict.nav.latestNews} lines={[record.title]} intro={record.formation} top={<Breadcrumbs label={dict.a11y.breadcrumb} items={[{ name: dict.nav.latestNews, href: href(locale, "latestNews") }, { name: record.caseNumber }]} />}>
      <a href={record.officialUrl} className="btn btn-primary">{fr ? "Lire le document officiel" : "Read the official document"}<Icon name="external" size={17} /></a>
      <a href={record.eujustUrl} className="btn btn-secondary">{fr ? "Consulter sur EU JUST" : "View on EU JUST"}<Icon name="external" size={17} /></a>
    </PageHero>
    <Section className="!pt-0">
      <dl className="grid gap-6 border-y border-[var(--color-line)] py-6 sm:grid-cols-2 lg:grid-cols-4">
        {[[fr ? "Numéro d’affaire" : "Case number", record.caseNumber], ["CELEX", record.celex], [fr ? "Juridiction" : "Court", courtLabel(record.court, locale)], [fr ? "Date de la décision" : "Decision date", formatDate(record.date, locale)]].map(([label, value]) => <div key={label}><dt className="meta text-[var(--color-ink-soft)]">{label}</dt><dd className="mt-2">{value}</dd></div>)}
      </dl>
      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div><h2 className="display text-h3">{fr ? "Titre officiel" : "Official title"}</h2><div lang="en" className="prose-legal mt-6">{record.officialTitle.split("#").filter(Boolean).map((part, index) => <p key={index}>{part.trim()}</p>)}</div></div>
        <aside><h2 className="display text-h3">{fr ? "Thèmes de recherche" : "Research topics"}</h2><div className="mt-6 flex flex-wrap gap-2">{record.topics.map(t => <span key={t} className="chip">{topicLabel(t, locale)}</span>)}</div><p className="mt-5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{fr ? "Thèmes attribués par correspondance de mots-clés. Le document officiel précise les faits, le raisonnement et le dispositif." : "Topics are assigned by keyword match. Read the official document for the facts, reasoning and outcome."}</p><p className="mt-5 text-sm text-[var(--color-ink-soft)]">{fr ? "Version source anglaise. Importé d’EU JUST le" : "English source version. Imported from EU JUST on"} {formatDate(courtImportDate, locale)}.</p></aside>
      </div>
      <Link href={`${href(locale, "latestNews")}#court-rulings`} className="mt-12 inline-flex min-h-11 items-center gap-2 link-underline">{fr ? "Toutes les décisions" : "All court rulings"}<Icon name="arrow" size={17} /></Link>
    </Section>
  </>;
}
