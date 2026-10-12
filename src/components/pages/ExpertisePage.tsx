import Link from "next/link";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { PracticePanel } from "@/components/cards/PracticePanel";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { Section } from "@/components/ui/Section";
import { practiceAreas, type Dictionary } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { pad } from "@/lib/format";

export function ExpertisePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.expertise;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} lines={[t.title]} intro={t.intro} />
      <Section className="!pt-0">
        <StaggerGroup className="grid gap-5 lg:grid-cols-2">
          {practiceAreas.map((area, i) => (
            <PracticePanel key={area.id} area={area} locale={locale} index={pad(i + 1)} cta={t.explore} />
          ))}
        </StaggerGroup>
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {practiceAreas.map((area) => {
            const url = pathFor(locale, { key: area.routeKey });
            return (
              <div key={area.id}>
                <h2 className="eyebrow border-t border-[var(--color-line-strong)] pt-4">{area.shortTitle[locale]}</h2>
                <ul className="mt-6 divide-y divide-[var(--color-line)]">
                  {area.serviceGroups.map((group) => (
                    <li key={group.id}>
                      <Link href={`${url}#${group.id}`} className="group flex min-h-14 items-center justify-between gap-4 py-4 text-lg">
                        <span className="link-underline">{group.title[locale]}</span>
                        <span aria-hidden className="arrow">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
