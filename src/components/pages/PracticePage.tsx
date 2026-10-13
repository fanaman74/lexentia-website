import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { SubNav } from "@/components/sections/SubNav";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getLawyer, insightsInCategories, type Dictionary, type PracticeArea } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { pad } from "@/lib/format";
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

      <Section labelledBy="overview-title" className="!pb-12" id="overview">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 id="overview-title" className="eyebrow lg:col-span-4">{t.overview}</h2>
          <Reveal className="prose-legal text-xl lg:col-span-8">
            {area.body[locale].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="sr-only">{t.services}</h2>
        <div className="border-t border-[var(--color-line-strong)]">
          {area.serviceGroups.map((group, i) => (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-title`}
              className="grid gap-6 border-b border-[var(--color-line-strong)] py-12 md:py-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <h3 id={`${group.id}-title`} className="display text-h3 mt-3">
                  <a href={`#${group.id}`} className="hover:underline decoration-1 underline-offset-8">
                    {group.title[locale]}
                  </a>
                </h3>
                {group.intro ? <p className="mt-4 max-w-[40ch] text-[var(--color-ink-soft)]">{group.intro[locale]}</p> : null}
              </div>
              <StaggerGroup as="ul" className="space-y-0 lg:col-span-7 lg:pt-8" stagger={0.05}>
                {group.items[locale].map((item) => (
                  <li key={item} data-stagger className="flex gap-4 border-t border-[var(--color-line)] py-4 text-lg first:border-t-0 lg:first:border-t">
                    <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-[var(--color-ink-soft)]" />
                    {item}
                  </li>
                ))}
              </StaggerGroup>
            </section>
          ))}
        </div>
      </Section>

      <Section tone="warm" id="approach" labelledBy="approach-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="approach-title" className="display text-h3">{t.howTitle}</h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">{t.howIntro}</p>
          </div>
          <StaggerGroup as="ol" className="grid gap-px bg-[var(--color-line-strong)] sm:grid-cols-2 lg:col-span-8">
            {t.how.map((step, i) => (
              <li key={step.title} data-stagger className="bg-[var(--color-paper-warm)] p-7 md:p-9">
                <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-[var(--color-ink-soft)]">{step.body}</p>
              </li>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {related.length ? (
        <Section id="insights" labelledBy="related-title">
          <h2 id="related-title" className="display text-h3">{t.insightsTitle}</h2>
          <StaggerGroup className="mt-10 grid gap-10 md:grid-cols-3">
            {related.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} locale={locale} dict={dict} />
            ))}
          </StaggerGroup>
        </Section>
      ) : null}

      <Section tone="cream" id="lawyers" labelledBy="lawyers-title">
        <h2 id="lawyers-title" className="display text-h3">{t.lawyersTitle}</h2>
        <StaggerGroup className="mt-10 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {team.map((lawyer) => (
            <LawyerCard key={lawyer.slug} lawyer={lawyer} locale={locale} dict={dict} />
          ))}
        </StaggerGroup>
      </Section>

      <ContactCta locale={locale} dict={dict} title={area.cta[locale]} />
    </>
  );
}
