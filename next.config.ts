import type { NextConfig } from "next";
import { practiceInsights } from "./src/content/insights";

const moved = (source: string, destination: string) => ({ source, destination, statusCode: 301 as const });

/**
 * 301s from every indexed lexentia.eu URL found in the October 2026 crawl
 * (see docs/migration-inventory.md). The French article URLs at the site root
 * are inferred from the WordPress structure and must be checked against the
 * live sitemap before launch.
 */
const legacyRedirects = [
  // English
  moved("/en/practice/eu-civil-service-law", "/en/expertise/eu-civil-service-law"),
  moved("/en/practice/belgian-and-international-private-law", "/en/expertise/private-business-law"),
  moved("/en/attorneys/nathalie-de-montigny", "/en/team/nathalie-de-montigny"),
  moved("/en/attorneys/alissa-everaerts", "/en/team/magali-mattar"),
  moved("/en/author/:author", "/en/team"),
  moved("/en/news", "/en/insights"),
  moved("/en/news/page/:n", "/en/insights"),
  moved("/en/category/:category*", "/en/insights"),
  moved("/en/:year(\\d{4})/:rest*", "/en/insights"),
  moved("/en/terms-and-conditions", "/en/terms"),
  moved("/en/fees-and-billings", "/en/fees"),
  ...practiceInsights.map((i) => moved(`/en/${i.slug}`, `/en/insights/${i.slug}`)),
  // French (served at the root on the old site)
  moved("/practice/matieres-et-droit-europeen", "/fr/expertise/droit-fonction-publique-europeenne"),
  moved("/practice/matiere-et-droit-national", "/fr/expertise/droit-prive-et-des-affaires"),
  moved("/attorneys/nathalie-de-montigny", "/fr/equipe/nathalie-de-montigny"),
  moved("/attorneys/alissa-everaets", "/fr/equipe/magali-mattar"),
  moved("/attorneys/alissa-everaerts", "/fr/equipe/magali-mattar"),
  moved("/author/:author", "/fr/equipe"),
  moved("/actualites", "/fr/analyses"),
  moved("/actualites/page/:n", "/fr/analyses"),
  moved("/category/:category*", "/fr/analyses"),
  moved("/mentions-legales", "/fr/mentions-legales"),
  moved("/conditions-generales", "/fr/conditions-generales"),
  moved("/honoraires-et-facturation", "/fr/honoraires-et-facturation"),
  ...practiceInsights.map((i) => moved(`/${i.slug}`, `/fr/analyses/${i.slug}`)),
];

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    // TODO(launch): move to nonce-based script-src via proxy once hosting is chosen.
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.lexentia.eu",
      "font-src 'self'",
      "connect-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
