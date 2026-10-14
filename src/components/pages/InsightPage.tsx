import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { PageIntro } from "@/components/motion/PageIntro";
import { ArticleDate, ArticlePreview } from "@/components/cards/ArticlePreview";
import { ArticleSidebar } from "@/components/sections/ArticleSidebar";
import { ArticleBody } from "@/components/sections/ArticleBody";
import { ContactCta } from "@/components/sections/ContactCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { getLawyer, insightCategories, insightsInCategories, type Dictionary, type Insight } from "@/content";
import { articleImage } from "@/lib/article-images";
import { formatDate } from "@/lib/format";
import { href, pathFor, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CourtRulingPage } from "./CourtRulingPage";

export function InsightPage({ locale, dict, insight }: { locale: Locale; dict: Dictionary; insight: Insight }) {
  if (insight.courtRecord) return <CourtRulingPage locale={locale} dict={dict} record={insight.courtRecord} />;
  const author = getLawyer(insight.author);
  const related = insightsInCategories(insight.categories, 4).filter(i => i.slug !== insight.slug).slice(0, 3);
  const url = pathFor(locale, { key: "insight", slug: insight.slug });
  const hasBody = Boolean(insight.originalBody?.length || insight.body?.[locale]?.length);
  const fr = locale === "fr";

  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: insight.title, inLanguage: insight.language, datePublished: insight.publishedAt, dateModified: insight.updatedAt ?? insight.publishedAt, author: author ? { "@type": "Person", name: author.name } : undefined, publisher: { "@type": "Organization", name: site.legalName }, mainEntityOfPage: `${site.url}${url}`, image: `${site.url}${articleImage(insight)}` }} />
    <article>
      <header className="article-heading on-dark">
        <PageIntro className="section-inner">
          <Breadcrumbs items={[{ name: dict.nav.insights, href: href(locale, "insights") }, { name: insightCategories[insight.categories[0]][locale] }]} label={dict.a11y.breadcrumb} />
          <h1 data-intro="body" lang={insight.language} className="display">{insight.title}</h1>
          {insight.language !== locale ? <p className="meta mt-6">{dict.common.writtenIn[insight.language]}</p> : null}
        </PageIntro>
      </header>
      <Section className="article-reading-section">
        <div className="article-reading-layout">
          <div className="article-main">
            <div className="article-lead-image">
              <Image src={articleImage(insight)} alt="" fill sizes="(min-width: 1200px) 760px, (min-width: 1024px) 70vw, 100vw" />
              <ArticleDate date={insight.publishedAt} locale={locale} />
            </div>
            <dl className="article-metadata">
              {author ? <div><dt>{dict.common.by}</dt><dd><Link href={pathFor(locale, { key: "lawyer", slug: author.slug })} className="link-underline">{author.name}</Link></dd></div> : null}
              <div><dt>{dict.common.published}</dt><dd><time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time></dd></div>
              <div><dt>{fr ? "Catégories" : "Categories"}</dt><dd>{insight.categories.map(id => <Link key={id} href={`${href(locale, "insights")}?category=${id}`}>{insightCategories[id][locale]}</Link>)}</dd></div>
            </dl>
            <div className="article-prose" lang={insight.originalBody?.length ? insight.language : locale}>
              {hasBody ? insight.originalBody?.length ? <ArticleBody blocks={insight.originalBody} /> : insight.body?.[locale].map((p, i) => <p key={i}>{p}</p>) : <>
                {insight.excerpt ? <><h2>{fr ? "Résumé" : "Summary"}</h2><p>{insight.excerpt[locale]}</p></> : null}
                <div className="article-source-note">
                  <p>{fr ? "Le texte intégral de cet article est disponible sur le site d’origine de Lexentia." : "The full text of this article is available on Lexentia’s original website."}</p>
                  <a href={insight.legacyUrl} className="btn btn-primary mt-5" rel="noopener">{fr ? "Lire l’article original" : "Read original article"}<Icon name="external" size={17} /></a>
                </div>
              </>}
            </div>
            <Link href={href(locale, "insights")} className="article-back-link"><Icon name="arrow" size={17} className="rotate-180" />{fr ? "Retour aux analyses" : "Back to insights"}</Link>
          </div>
          <ArticleSidebar insight={insight} locale={locale} dict={dict} />
        </div>
      </Section>
    </article>
    {related.length ? <Section tone="warm" labelledBy="related-articles-title">
      <h2 id="related-articles-title" className="display text-h2">{dict.practice.insightsTitle}</h2>
      <div className="article-related-grid">{related.map(item => <ArticlePreview key={item.slug} insight={item} locale={locale} dict={dict} heading={3} />)}</div>
    </Section> : null}
    <ContactCta locale={locale} dict={dict} title={dict.insights.contactCta} />
  </>;
}
