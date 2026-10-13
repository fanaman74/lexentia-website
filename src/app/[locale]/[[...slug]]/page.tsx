import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  euCivilService,
  getDictionary,
  getInsight,
  getLawyer,
  insights,
  lawyers,
  legalPages,
  privateBusiness,
} from "@/content";
import { HomePage } from "@/components/pages/HomePage";
import { ExpertisePage } from "@/components/pages/ExpertisePage";
import { PracticePage } from "@/components/pages/PracticePage";
import { TeamPage } from "@/components/pages/TeamPage";
import { LawyerPage } from "@/components/pages/LawyerPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { InsightsPage } from "@/components/pages/InsightsPage";
import { LatestNewsPage } from "@/components/pages/LatestNewsPage";
import { InsightPage } from "@/components/pages/InsightPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { LegalTextPage } from "@/components/pages/LegalTextPage";
import {
  defaultLocale,
  isLocale,
  locales,
  pathFor,
  resolvePath,
  segmentsFor,
  staticRoutes,
  type Locale,
  type RouteRef,
  type StaticRouteKey,
} from "@/lib/i18n";

/**
 * One route resolves every localised URL (e.g. /en/team ↔ /fr/equipe) through
 * the table in lib/i18n, so the language switcher always lands on the
 * equivalent page and slugs can differ per language.
 */
export const dynamicParams = false;

const allRefs = (): RouteRef[] => [
  ...(Object.keys(staticRoutes) as StaticRouteKey[]).map((key) => ({ key })),
  ...lawyers.map((l) => ({ key: "lawyer" as const, slug: l.slug })),
  ...insights.map((i) => ({ key: "insight" as const, slug: i.slug })),
];

export function generateStaticParams() {
  return locales.flatMap((locale) => allRefs().map((ref) => ({ locale, slug: segmentsFor(locale, ref) })));
}

async function resolve(params: PageProps<"/[locale]/[[...slug]]">["params"]) {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) notFound();
  const ref = resolvePath(locale, slug);
  if (!ref) notFound();
  if (ref.key === "lawyer" && !getLawyer(ref.slug)) notFound();
  if (ref.key === "insight" && !getInsight(ref.slug)) notFound();
  return { locale, ref };
}

function pageSeo(locale: Locale, ref: RouteRef): { title: string; description: string } {
  const d = getDictionary(locale);
  switch (ref.key) {
    case "home":
      return { title: d.meta.siteTitle, description: d.meta.siteDescription };
    case "euCivilService":
      return { title: euCivilService.seo.title[locale], description: euCivilService.seo.description[locale] };
    case "privateLaw":
      return { title: privateBusiness.seo.title[locale], description: privateBusiness.seo.description[locale] };
    case "expertise":
      return { title: d.expertise.eyebrow, description: d.expertise.intro };
    case "team":
      return { title: d.team.eyebrow, description: d.team.intro };
    case "about":
      return { title: d.about.eyebrow, description: d.about.title };
    case "insights":
      return { title: d.insights.eyebrow, description: d.insights.intro };
    case "latestNews":
      return { title: d.nav.latestNews, description: locale === "fr" ? "Jurisprudence de la Cour de justice et du Tribunal, avec liens vers les décisions officielles." : "Court of Justice and General Court rulings, linked to official judgments." };
    case "contact":
      return { title: d.contact.eyebrow, description: d.contact.intro };
    case "lawyer": {
      const l = getLawyer(ref.slug)!;
      return { title: `${l.name} – ${l.role[locale]}`, description: l.shortBio[locale] };
    }
    case "insight": {
      const i = getInsight(ref.slug)!;
      return { title: i.title, description: i.excerpt?.[locale] ?? d.insights.intro };
    }
    default: {
      const page = legalPages[ref.key as keyof typeof legalPages];
      return { title: page.title[locale], description: page.intro[locale] };
    }
  }
}

export async function generateMetadata({ params }: PageProps<"/[locale]/[[...slug]]">): Promise<Metadata> {
  const { locale, ref } = await resolve(params);
  const { title, description } = pageSeo(locale, ref);
  const canonical = pathFor(locale, ref);
  return {
    title: ref.key === "home" ? title : `${title} | Lexentia`,
    description,
    alternates: {
      canonical,
      languages: {
        en: pathFor("en", ref),
        fr: pathFor("fr", ref),
        "x-default": pathFor(defaultLocale, ref),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Lexentia",
      locale: locale === "fr" ? "fr_BE" : "en_GB",
      alternateLocale: locale === "fr" ? "en_GB" : "fr_BE",
      type: ref.key === "insight" ? "article" : "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: PageProps<"/[locale]/[[...slug]]">) {
  const { locale, ref } = await resolve(params);
  const dict = getDictionary(locale);
  const props = { locale, dict };

  switch (ref.key) {
    case "home":
      return <HomePage {...props} />;
    case "expertise":
      return <ExpertisePage {...props} />;
    case "euCivilService":
      return <PracticePage {...props} area={euCivilService} />;
    case "privateLaw":
      return <PracticePage {...props} area={privateBusiness} />;
    case "team":
      return <TeamPage {...props} />;
    case "lawyer":
      return <LawyerPage {...props} lawyer={getLawyer(ref.slug)!} />;
    case "about":
      return <AboutPage {...props} />;
    case "insights":
      return <InsightsPage {...props} />;
    case "latestNews":
      return <LatestNewsPage {...props} />;
    case "insight":
      return <InsightPage {...props} insight={getInsight(ref.slug)!} />;
    case "contact":
      return <ContactPage {...props} />;
    case "legalNotices":
    case "terms":
    case "fees":
    case "privacy":
      return <LegalTextPage {...props} page={legalPages[ref.key]} />;
  }
}
