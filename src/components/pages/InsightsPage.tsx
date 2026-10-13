import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { InsightsBrowser } from "@/components/sections/InsightsBrowser";
import { CourtRulingsBrowser } from "@/components/sections/CourtRulingsBrowser";
import { courtRulings, courtImportDate } from "@/content/court-rulings";
import { Section } from "@/components/ui/Section";
import { insightsByDate, type Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

export function InsightsPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.insights;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} intro={t.intro} />
      <Section className="!pt-0" id="court-rulings" labelledBy="court-rulings-title">
        <CourtRulingsBrowser records={courtRulings} importedAt={courtImportDate} locale={locale} />
      </Section>
      <Section tone="warm" id="practice-insights" labelledBy="practice-insights-title">
        <h2 id="practice-insights-title" className="display text-h2 mb-8">{locale === "fr" ? "Analyses du cabinet" : "Analysis from the firm"}</h2>
        <InsightsBrowser insights={insightsByDate().filter(item => !item.courtRecord)} locale={locale} dict={dict} />
      </Section>
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
