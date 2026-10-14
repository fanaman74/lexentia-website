import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { insightCategories, type Dictionary, type Insight } from "@/content";
import { articleImage } from "@/lib/article-images";
import { formatDate } from "@/lib/format";
import { pathFor, type Locale } from "@/lib/i18n";

export function ArticleDate({ date, locale }: { date: string; locale: Locale }) {
  const month = new Intl.DateTimeFormat(locale === "fr" ? "fr-BE" : "en-GB", { month: "short", timeZone: "UTC" }).format(new Date(date));
  return <time dateTime={date} aria-label={formatDate(date, locale)} className="article-date">
    <span aria-hidden="true">{month}</span><strong aria-hidden="true">{date.slice(8, 10)}</strong><span aria-hidden="true">{date.slice(0, 4)}</span>
  </time>;
}

export function ArticlePreview({ insight, locale, dict, heading = 2 }: { insight: Insight; locale: Locale; dict: Dictionary; heading?: 2 | 3 }) {
  const Heading = heading === 2 ? "h2" : "h3";
  return <article className="article-preview">
    <Link href={pathFor(locale, { key: "insight", slug: insight.slug })} className="article-preview-link">
      <div className="article-preview-image">
        <Image src={articleImage(insight)} alt="" fill sizes="(min-width: 1200px) 270px, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
        <ArticleDate date={insight.publishedAt} locale={locale} />
      </div>
      <p className="article-preview-category">{insight.categories.map(id => insightCategories[id][locale]).join(" · ")}</p>
      <Heading lang={insight.language} className="display article-preview-title">{insight.title}</Heading>
      {insight.excerpt ? <p className="article-preview-excerpt">{insight.excerpt[locale]}</p> : null}
      {insight.language !== locale ? <p className="meta article-preview-language">{dict.common.writtenIn[insight.language]}</p> : null}
      <span className="article-preview-action">{dict.common.readMore}<Icon name="arrow" size={18} /></span>
    </Link>
  </article>;
}
