import type { Insight } from "@/content/types";

/** Editorial illustrations; article metadata remains the original published content. */
export function articleImage(insight: Insight) {
  if (/publier-des-actes|injonction|executoire|assurance/.test(insight.slug)) return "/images/article-documents.png";
  if (insight.categories.includes("eu-civil-service")) return "/images/article-eu-court.png";
  if (insight.categories.includes("business-law")) return "/images/article-finance.png";
  return "/images/article-documents.png";
}
