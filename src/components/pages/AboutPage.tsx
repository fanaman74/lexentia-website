import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Section } from "@/components/ui/Section";
import { lawyers, type Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { pad } from "@/lib/format";

export function AboutPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.about;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} />
      <Section className="!pt-0">
        <div className="border-t border-[var(--color-line-strong)]">
          {t.sections.map((s, i) => (
            <Reveal key={s.title} as="section" className="grid gap-6 border-b border-[var(--color-line-strong)] py-12 md:py-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="meta tabular-nums text-[var(--color-bronze)]">{pad(i + 1)}</p>
                <h2 className="display text-h3 mt-3">{s.title}</h2>
              </div>
              <p className="prose-legal text-xl lg:col-span-7 lg:col-start-6 lg:pt-8">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="cream">
        <h2 className="display text-h2">{dict.nav.team}</h2>
        <StaggerGroup className="mt-12 grid gap-14 md:grid-cols-2 lg:gap-20">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.slug} lawyer={lawyer} locale={locale} dict={dict} />
          ))}
        </StaggerGroup>
      </Section>
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
