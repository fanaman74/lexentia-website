import { PageHero } from "@/components/sections/PageHero";
import { CourtRulingsBrowser } from "@/components/sections/CourtRulingsBrowser";
import { Section } from "@/components/ui/Section";
import { CourtUpdateChip } from "@/components/ui/CourtUpdateChip";
import { courtRulings, courtImportDate } from "@/content/court-rulings";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/i18n";

export function LatestNewsPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return <>
    <PageHero eyebrow={dict.nav.latestNews} lines={[dict.nav.latestNews]} intro={locale === "fr" ? "La jurisprudence récente de la Cour de justice et du Tribunal de l’Union européenne, reliée à ses sources officielles." : "Recent rulings from the Court of Justice and General Court of the European Union, linked to their official sources."} />
    <Section className="!pt-0" id="court-rulings" labelledBy="court-rulings-title">
      <div className="mb-6"><CourtUpdateChip locale={locale} /></div>
      <CourtRulingsBrowser records={courtRulings} importedAt={courtImportDate} locale={locale} firmArchiveHref={href(locale, "insights")} />
    </Section>
  </>;
}
