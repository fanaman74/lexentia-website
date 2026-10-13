/**
 * Typed local content layer. Shapes follow the CMS data model in the brief
 * (Lawyer, PracticeArea, Insight) so a Sanity or Payload adapter can later
 * return the same objects from `src/content/index.ts` without touching pages.
 */
import type { Localised } from "@/lib/i18n";

/** Rich text kept deliberately simple: an array of paragraphs. */
export type LocalisedRichText = Localised<string[]>;

export type SeoFields = {
  title: Localised;
  description: Localised;
};

export type TimelineItem = {
  period: Localised;
  title: Localised;
  detail?: Localised;
};

export type Lawyer = {
  slug: string;
  name: string;
  role: Localised;
  descriptor: Localised;
  shortBio: Localised;
  biography: LocalisedRichText;
  portrait?: { src: string; alt: Localised };
  email?: string;
  phone?: string;
  /** ISO 639-1 codes. */
  languages: string[];
  practiceAreas: PracticeAreaId[];
  practiceTags: Localised<string[]>;
  education: TimelineItem[];
  career: TimelineItem[];
  teaching?: TimelineItem[];
  barAdmission?: Localised;
  order: number;
};

export type PracticeAreaId = "eu-civil-service" | "private-business";

export type ServiceGroup = {
  id: string;
  title: Localised;
  intro?: Localised;
  items: Localised<string[]>;
};

export type PracticeArea = {
  id: PracticeAreaId;
  routeKey: "euCivilService" | "privateLaw";
  eyebrow: Localised;
  title: Localised;
  shortTitle: Localised;
  headline: Localised;
  intro: Localised;
  summary: Localised;
  tags: Localised<string[]>;
  sideFacts: Localised<string[]>;
  body: LocalisedRichText;
  serviceGroups: ServiceGroup[];
  relatedLawyers: string[];
  insightCategories: InsightCategoryId[];
  cta: Localised;
  seo: SeoFields;
};

export type InsightCategoryId =
  | "eu-civil-service"
  | "business-law"
  | "contract-law"
  | "judicial-law"
  | "consumer-law"
  | "international-law"
  | "other";

export type Insight = {
  slug: string;
  /** Articles were published in one language; the title stays in that language. */
  title: string;
  language: "en" | "fr";
  excerpt?: Localised;
  /** Full body is migrated from the old site in Phase 6; until then we link to it. */
  body?: LocalisedRichText;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  categories: InsightCategoryId[];
  legacyUrl: string;
  /** Evergreen pieces eligible for the homepage "Selected insights" block. */
  featured?: boolean;
  /** Source record, separate from a lawyer-authored analysis. */
  courtRecord?: CourtRuling;
};

export type CourtRuling = {
  title: string;
  date: string;
  caseNumber: string;
  court: string;
  eujustUrl: string;
  topics: string[];
  officialTitle: string;
  formation: string;
  subjects: string[];
  officialUrl: string;
  celex: string;
};
