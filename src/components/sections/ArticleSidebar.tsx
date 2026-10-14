import Link from "next/link";
import { insightCategories, practiceInsights, type Dictionary, type Insight, type InsightCategoryId } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { formatDate } from "@/lib/format";
import { href, pathFor, type Locale } from "@/lib/i18n";

export function ArticleSidebar({ insight, locale, dict }: { insight: Insight; locale: Locale; dict: Dictionary }) {
  const categories = (Object.keys(insightCategories) as InsightCategoryId[]).map(id => ({ id, count: practiceInsights.filter(item => item.categories.includes(id)).length })).filter(item => item.count);
  const recent = [...practiceInsights].filter(item => item.slug !== insight.slug).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 4);
  return <aside className="article-sidebar" aria-label={locale === "fr" ? "Explorer les analyses" : "Explore insights"}>
    <section aria-labelledby="article-categories-title">
      <h2 id="article-categories-title" className="display text-h3">{locale === "fr" ? "Catégories" : "Categories"}</h2>
      <ul className="article-category-list">{categories.map(({ id, count }) => <li key={id}>
        <Link href={`${href(locale, "insights")}?category=${id}`} className={insight.categories.includes(id) ? "is-related" : ""}>
          <span>{insightCategories[id][locale]}</span><span className="meta">{count}</span><Icon name="arrow" size={15} />
        </Link>
      </li>)}</ul>
    </section>
    <section aria-labelledby="article-recent-title" className="mt-10">
      <h2 id="article-recent-title" className="display text-h3">{locale === "fr" ? "Articles récents" : "Recent articles"}</h2>
      <ul className="article-recent-list">{recent.map(item => <li key={item.slug}>
        <Link href={pathFor(locale, { key: "insight", slug: item.slug })}>
          <time dateTime={item.publishedAt} className="meta">{formatDate(item.publishedAt, locale)}</time>
          <span lang={item.language}>{item.title}</span>
        </Link>
      </li>)}</ul>
    </section>
    <Link href={href(locale, "insights")} className="btn btn-secondary mt-8">{locale === "fr" ? "Toutes les analyses" : "All insights"}<Icon name="arrow" size={17} /></Link>
  </aside>;
}
