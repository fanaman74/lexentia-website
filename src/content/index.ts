/**
 * Content access layer. Pages import only from here, so swapping the local
 * files for Sanity or Payload queries means changing this module alone.
 */
export { practiceAreas, euCivilService, privateBusiness } from "./practice";
export { lawyers, getLawyer } from "./team";
export { insights, practiceInsights, getInsight, insightCategories } from "./insights";
export { legalPages } from "./legal";
export type { LegalPageKey } from "./legal";
export { getDictionary } from "./dictionary";
export type { Dictionary } from "./dictionary";
export * from "./types";

import { insights } from "./insights";
import type { InsightCategoryId } from "./types";

export const insightsByDate = () =>
  [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const insightsInCategories = (categories: InsightCategoryId[], limit = 3) =>
  insightsByDate()
    .filter((i) => i.categories.some((c) => categories.includes(c)))
    .slice(0, limit);

export const featuredInsights = (limit = 3) =>
  insightsByDate().filter((i) => i.featured).slice(0, limit);
