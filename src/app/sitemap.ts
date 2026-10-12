import type { MetadataRoute } from "next";
import { insights, lawyers } from "@/content";
import { pathFor, staticRoutes, type RouteRef, type StaticRouteKey } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const refs: RouteRef[] = [
    ...(Object.keys(staticRoutes) as StaticRouteKey[]).map((key) => ({ key })),
    ...lawyers.map((l) => ({ key: "lawyer" as const, slug: l.slug })),
    ...insights.map((i) => ({ key: "insight" as const, slug: i.slug })),
  ];
  return refs.map((ref) => ({
    url: `${site.url}${pathFor("fr", ref)}`,
    alternates: {
      languages: { fr: `${site.url}${pathFor("fr", ref)}`, en: `${site.url}${pathFor("en", ref)}` },
    },
  }));
}
