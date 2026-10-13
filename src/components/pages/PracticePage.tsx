import Link from "next/link";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { SubNav } from "@/components/sections/SubNav";
import { PracticeDisclosure } from "@/components/sections/PracticeDisclosure";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getLawyer, insightsInCategories, type Dictionary, type PracticeArea } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function PracticePage({ locale, dict, area }: { locale: Locale; dict: Dictionary; area: PracticeArea }) {
  const t = dict.practice;
  const team = area.relatedLawyers.map(getLawyer).filter((l) => l !== undefined);
  const related = insightsInCategories(area.insightCategories, 3);
  const url = pathFor(locale, { key: area.routeKey });

  const navItems = [
    { id: "overview", label: t.overview },
    ...area.serviceGroups.map((g) => ({ id: g.id, label: g.title[locale] })),
    { id: "approach", label: t.howTitle },
    ...(related.length ? [{ id: "insights", label: t.insightsTitle }] : []),
    { id: "lawyers", label: t.lawyersTitle },
  ];

  const crumbs = [
    { name: dict.nav.expertise, href: href(locale, "expertise") },
    { name: area.shortTitle[locale] },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Lexentia", item: `${site.url}${href(locale, "home")}` },
            { "@type": "ListItem", position: 2, name: dict.nav.expertise, item: `${site.url}${href(locale, "expertise")}` },
            { "@type": "ListItem", position: 3, name: area.title[locale], item: `${site.url}${url}` },
          ],
        }}
      />
      <PageHero
        top={<div className="mb-10"><Breadcrumbs items={crumbs} label={dict.a11y.breadcrumb} /></div>}
        eyebrow={area.eyebrow[locale]}
        lines={[area.headline[locale]]}
        intro={area.intro[locale]}
        aside={
          <ul className="info-panel divide-y divide-[var(--color-line)]">
            {area.sideFacts[locale].map((fact) => (
              <li key={fact} className="flex items-center gap-3 py-3.5">
                <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-bronze)]" />
                {fact}
              </li>
            ))}
          </ul>
        }
      >
        <Link href={href(locale, "contact")} className="btn btn-primary">
          {area.cta[locale]} <span aria-hidden>→</span>
        </Link>
      </PageHero>

      <SubNav items={navItems} label={dict.a11y.onThisPage} />

      <Section className="!py-8">
        <div className="practice-disclosures">
          <PracticeDisclosure id="overview" title={t.overview}>
            <div className="prose-legal text-lg">
              {area.body[locale].map(p => <p key={p}>{p}</p>)}
            </div>
          </PracticeDisclosure>

          {area.serviceGroups.map(group => (
            <PracticeDisclosure key={group.id} id={group.id} title={group.title[locale]}>
              <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                {group.intro ? <p className="max-w-[45ch] text-lg text-[var(--color-ink-soft)]">{group.intro[locale]}</p> : null}
                <ul className={group.intro ? "" : "lg:col-span-2 max-w-[75ch]"}>
                  {group.items[locale].map(item => (
                    <li key={item} className="flex gap-4 border-t border-[var(--color-line)] py-4 text-lg first:border-t-0 first:pt-0">
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-[var(--color-bronze)]" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </PracticeDisclosure>
          ))}

          <PracticeDisclosure id="approach" title={t.howTitle}>
            <p className="max-w-[65ch] text-lg text-[var(--color-ink-soft)]">{t.howIntro}</p>
            <ol className="mt-8 grid gap-px bg-[var(--color-line)] sm:grid-cols-2">
              {t.how.map(step => (
                <li key={step.title} className="bg-[var(--color-paper-warm)] p-7">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-[var(--color-ink-soft)]">{step.body}</p>
                </li>
              ))}
            </ol>
          </PracticeDisclosure>

          {related.length ? <PracticeDisclosure id="insights" title={t.insightsTitle}>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map(insight => <InsightCard key={insight.slug} insight={insight} locale={locale} dict={dict} />)}
            </div>
          </PracticeDisclosure> : null}

          <PracticeDisclosure id="lawyers" title={t.lawyersTitle}>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {team.map(lawyer => <LawyerCard key={lawyer.slug} lawyer={lawyer} locale={locale} dict={dict} />)}
            </div>
          </PracticeDisclosure>
        </div>
      </Section>

      <ContactCta locale={locale} dict={dict} title={area.cta[locale]} />
    </>
  );
}
