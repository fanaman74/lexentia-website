import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Section } from "@/components/ui/Section";
import { lawyers, type Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

export function TeamPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.team;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} intro={t.intro} />
      <Section className="!pt-0">
        <StaggerGroup className="grid gap-16 md:grid-cols-2 lg:gap-24">
          {lawyers.map((lawyer, i) => (
            <div key={lawyer.slug} className={i === 1 ? "md:mt-28" : ""}>
              <LawyerCard lawyer={lawyer} locale={locale} dict={dict} />
              <p className="mt-6 max-w-[56ch] text-[var(--color-ink-soft)]">{lawyer.shortBio[locale]}</p>
            </div>
          ))}
        </StaggerGroup>
      </Section>
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
