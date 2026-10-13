export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** A value that exists in every supported language. */
export type Localised<T = string> = Record<Locale, T>;

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "fr" : "en");

/**
 * Canonical page keys with their localised path segments.
 * Every internal link goes through `href()` so URLs stay consistent and the
 * language switcher can always find the equivalent page.
 */
export const staticRoutes = {
  home: { en: "", fr: "" },
  expertise: { en: "expertise", fr: "expertise" },
  euCivilService: {
    en: "expertise/eu-civil-service-law",
    fr: "expertise/droit-fonction-publique-europeenne",
  },
  privateLaw: {
    en: "expertise/private-business-law",
    fr: "expertise/droit-prive-et-des-affaires",
  },
  team: { en: "team", fr: "equipe" },
  about: { en: "about", fr: "cabinet" },
  insights: { en: "insights", fr: "analyses" },
  latestNews: { en: "latest-news", fr: "actualites" },
  contact: { en: "contact", fr: "contact" },
  legalNotices: { en: "legal-notices", fr: "mentions-legales" },
  terms: { en: "terms", fr: "conditions-generales" },
  fees: { en: "fees", fr: "honoraires-et-facturation" },
  privacy: { en: "privacy", fr: "vie-privee" },
} satisfies Record<string, Localised>;

export type StaticRouteKey = keyof typeof staticRoutes;

export type RouteRef =
  | { key: StaticRouteKey }
  | { key: "lawyer"; slug: string }
  | { key: "insight"; slug: string };

export function pathFor(locale: Locale, ref: RouteRef): string {
  if (ref.key === "lawyer") return `/${locale}/${staticRoutes.team[locale]}/${ref.slug}`;
  if (ref.key === "insight") return `/${locale}/${ref.slug.startsWith("court-") ? staticRoutes.latestNews[locale] : staticRoutes.insights[locale]}/${ref.slug}`;
  const segment = staticRoutes[ref.key][locale];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

/** Shorthand for static pages: href("fr", "contact") → "/fr/contact". */
export const href = (locale: Locale, key: StaticRouteKey, hash?: string) =>
  pathFor(locale, { key }) + (hash ? `#${hash}` : "");

/** Resolve a URL path (without locale) back to a route reference. */
export function resolvePath(locale: Locale, segments: string[]): RouteRef | null {
  const path = segments.join("/");
  for (const [key, paths] of Object.entries(staticRoutes)) {
    if (paths[locale] === path) return { key: key as StaticRouteKey };
  }
  if (segments.length === 2 && segments[0] === staticRoutes.team[locale]) {
    return { key: "lawyer", slug: segments[1] };
  }
  if (segments.length === 2 && segments[0] === staticRoutes.insights[locale]) {
    return { key: "insight", slug: segments[1] };
  }
  if (segments.length === 2 && segments[0] === staticRoutes.latestNews[locale] && segments[1].startsWith("court-")) {
    return { key: "insight", slug: segments[1] };
  }
  return null;
}

export function segmentsFor(locale: Locale, ref: RouteRef): string[] {
  return pathFor(locale, ref).split("/").filter(Boolean).slice(1);
}
