import snapshot from "./court-rulings-snapshot.json";
import type { CourtRuling, Insight } from "./types";
import type { Locale } from "@/lib/i18n";

export const courtImportDate = snapshot.importedAt;
export const courtRulings: CourtRuling[] = snapshot.records;
export const courtSlug = (record: CourtRuling) => `court-${record.celex.toLowerCase()}`;
export const courtLabel = (court: string, locale: Locale) => locale === "en" ? court
  : court.startsWith("General Court") ? "Tribunal de l’Union européenne" : "Cour de justice de l’Union européenne";
export const topicLabel = (topic: string, locale: Locale) => locale === "en" ? topic : ({
  "Workplace harassment": "Harcèlement au travail",
  "Employment discrimination": "Discrimination dans l’emploi",
  "Psychosocial risks": "Risques psychosociaux",
}[topic] ?? topic);

/** Dates below are judgment dates; court records have no attributed firm author. */
export const courtInsights: Insight[] = courtRulings.map(record => ({
  slug: courtSlug(record), title: record.title, language: "en", publishedAt: record.date,
  categories: ["eu-civil-service"], author: "", legacyUrl: record.eujustUrl,
  excerpt: { en: record.formation, fr: record.formation }, courtRecord: record,
}));
