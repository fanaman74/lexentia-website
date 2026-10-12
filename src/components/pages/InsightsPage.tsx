import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { InsightsBrowser } from "@/components/sections/InsightsBrowser";
import { Section } from "@/components/ui/Section";
import { insightsByDate, type Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

export function InsightsPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.insights;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} intro={t.intro} />
      <Section className="!pt-0">
        <InsightsBrowser insights={insightsByDate()} locale={locale} dict={dict} />
      </Section>
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
