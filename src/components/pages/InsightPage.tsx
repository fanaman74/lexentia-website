import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { PageIntro } from "@/components/motion/PageIntro";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { InsightCard } from "@/components/cards/InsightCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getLawyer, insightCategories, insightsInCategories, type Dictionary, type Insight } from "@/content";
import { formatDate } from "@/lib/format";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CourtRulingPage } from "./CourtRulingPage";

export function InsightPage({ locale, dict, insight }: { locale: Locale; dict: Dictionary; insight: Insight }) {
  if (insight.courtRecord) return <CourtRulingPage locale={locale} dict={dict} record={insight.courtRecord} />;
  const author = getLawyer(insight.author);
  const related = insightsInCategories(insight.categories, 4)
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 3);
  const url = pathFor(locale, { key: "insight", slug: insight.slug });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          inLanguage: insight.language,
          datePublished: insight.publishedAt,
          dateModified: insight.updatedAt ?? insight.publishedAt,
          author: author ? { "@type": "Person", name: author.name } : undefined,
          publisher: { "@type": "Organization", name: site.legalName },
          mainEntityOfPage: `${site.url}${url}`,
        }}
      />
      <article>
        <header className="px-5 pb-12 pt-32 md:px-8 md:pt-40 lg:px-12">
          <PageIntro className="mx-auto max-w-[1100px]">
            <Breadcrumbs items={[{ name: dict.nav.insights, href: href(locale, "insights") }, { name: insightCategories[insight.categories[0]][locale] }]} label={dict.a11y.breadcrumb} />
            <h1 data-intro="body" lang={insight.language !== locale ? insight.language : undefined} className="display mt-10 text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.05]">
              {insight.title}
            </h1>
            <dl data-intro="body" className="meta mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-[var(--color-line)] pt-5 text-[var(--color-ink-soft)]">
              {author ? (
                <div className="flex gap-2">
                  <dt>{dict.common.by}</dt>
                  <dd>
                    <Link href={pathFor(locale, { key: "lawyer", slug: author.slug })} className="link-underline text-[var(--color-ink)]">
                      {author.name}
                    </Link>
                  </dd>
                </div>
              ) : null}
              <div className="flex gap-2">
                <dt>{dict.common.published}</dt>
                <dd>
                  <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="sr-only">Categories</dt>
                <dd>{insight.categories.map((c) => insightCategories[c][locale]).join(", ")}</dd>
              </div>
            </dl>
          </PageIntro>
        </header>
        <Section className="!pt-4">
          <div className="mx-auto max-w-[1100px]">
            <div className="prose-legal text-xl">
              {insight.body ? (
                insight.body[locale].map((p) => <p key={p}>{p}</p>)
              ) : insight.excerpt ? (
                <p>{insight.excerpt[locale]}</p>
              ) : null}
            </div>
            {!insight.body ? (
              <div className="mt-12 max-w-[68ch] rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-warm)] p-6">
                <p>{dict.insights.migrationNotice}</p>
                <a href={insight.legacyUrl} className="group mt-4 inline-flex items-center gap-2 font-medium" rel="noopener">
                  <span className="link-underline">{dict.common.readOriginal}</span>
                  <Icon name="external" size={17} className="arrow" />
                </a>
              </div>
            ) : null}
          </div>
        </Section>
      </article>
      {related.length ? (
        <Section tone="warm">
          <h2 className="display text-h3">{dict.practice.insightsTitle}</h2>
          <StaggerGroup className="mt-10 grid gap-10 md:grid-cols-3">
            {related.map((i) => (
              <InsightCard key={i.slug} insight={i} locale={locale} dict={dict} />
            ))}
          </StaggerGroup>
        </Section>
      ) : null}
      <ContactCta locale={locale} dict={dict} title={dict.insights.contactCta} />
    </>
  );
}
