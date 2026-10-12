import Link from "next/link";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/motion/Timeline";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { InsightCard } from "@/components/cards/InsightCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Portrait } from "@/components/ui/Portrait";
import { Section } from "@/components/ui/Section";
import { insightsByDate, type Dictionary, type Lawyer, type TimelineItem } from "@/content";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const toItems = (items: TimelineItem[], locale: Locale) =>
  items.map((i) => ({ period: i.period[locale], title: i.title[locale], detail: i.detail?.[locale] }));

export function LawyerPage({ locale, dict, lawyer }: { locale: Locale; dict: Dictionary; lawyer: Lawyer }) {
  const t = dict.team;
  const authored = insightsByDate().filter((i) => i.author === lawyer.slug).slice(0, 3);
  const firstName = lawyer.name.split(" ")[0];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: lawyer.name,
          jobTitle: lawyer.role[locale],
          email: lawyer.email,
          worksFor: { "@type": "LegalService", name: site.legalName, url: site.url },
          knowsLanguage: lawyer.languages,
          url: `${site.url}${pathFor(locale, { key: "lawyer", slug: lawyer.slug })}`,
        }}
      />
      <section className="px-5 pb-16 pt-32 md:px-8 md:pt-40 lg:px-12">
        <PageIntro className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ name: dict.nav.team, href: href(locale, "team") }, { name: lawyer.name }]} label={dict.a11y.breadcrumb} />
            <p data-intro="label" className="eyebrow mt-10 text-[var(--color-ink-soft)]">
              {lawyer.role[locale]}
            </p>
            <h1 className="display text-h1 mt-6">
              <span data-intro="line" className="line-mask">
                <span className="line-inner">{lawyer.name}</span>
              </span>
            </h1>
            <p data-intro="body" className="mt-6 max-w-[48ch] text-xl text-[var(--color-ink-soft)]">
              {lawyer.descriptor[locale]}
            </p>
            <div data-intro="body" className="mt-8 flex flex-wrap items-center gap-2">
              <span className="meta mr-2 text-[var(--color-ink-soft)]">{dict.common.languages}</span>
              {lawyer.languages.map((code) => (
                <span key={code} className="chip">
                  {dict.common.languageNames[code]}
                </span>
              ))}
            </div>
            <div data-intro="cta" className="mt-10 flex flex-wrap gap-3">
              {lawyer.email ? (
                <a href={`mailto:${lawyer.email}`} className="btn btn-primary">
                  {t.contactLawyer} {firstName}
                </a>
              ) : null}
              <Link href={href(locale, "contact")} className="btn btn-secondary">
                {dict.nav.cta}
              </Link>
            </div>
          </div>
          <div data-intro="image" className="lg:col-span-5">
            <Portrait name={lawyer.name} src={lawyer.portrait?.src} alt={lawyer.portrait?.alt[locale]} pendingLabel={dict.common.portraitPending} priority />
          </div>
        </PageIntro>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="eyebrow border-t border-[var(--color-line-strong)] pt-4">{t.biography}</h2>
            <Reveal className="prose-legal mt-8 text-lg">
              {lawyer.biography[locale].map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="eyebrow border-t border-[var(--color-line-strong)] pt-4">{t.areas}</h2>
            <StaggerGroup as="ul" className="mt-8 flex flex-wrap gap-2" stagger={0.04}>
              {lawyer.practiceTags[locale].map((tag) => (
                <li key={tag} data-stagger className="chip">
                  {tag}
                </li>
              ))}
            </StaggerGroup>
            {lawyer.barAdmission ? (
              <>
                <h2 className="eyebrow mt-14 border-t border-[var(--color-line-strong)] pt-4">{t.bar}</h2>
                <p className="mt-6">{lawyer.barAdmission[locale]}</p>
              </>
            ) : null}
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="display text-h3 mb-10">{t.career}</h2>
            <Timeline items={toItems(lawyer.career, locale)} />
          </div>
          <div>
            <h2 className="display text-h3 mb-10">{t.education}</h2>
            <Timeline items={toItems(lawyer.education, locale)} />
          </div>
          {lawyer.teaching?.length ? (
            <div>
              <h2 className="display text-h3 mb-10">{t.teaching}</h2>
              <Timeline items={toItems(lawyer.teaching, locale)} />
            </div>
          ) : null}
        </div>
      </Section>

      {authored.length ? (
        <Section>
          <h2 className="display text-h3">{dict.practice.insightsTitle}</h2>
          <StaggerGroup className="mt-10 grid gap-10 md:grid-cols-3">
            {authored.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} locale={locale} dict={dict} />
            ))}
          </StaggerGroup>
        </Section>
      ) : null}

      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
