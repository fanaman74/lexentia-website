import { courtImportDate } from "@/content/court-rulings";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

export function CourtUpdateChip({ locale }: { locale: Locale }) {
  return <span className="chip news-update-chip">
    {locale === "fr" ? "Mis à jour le" : "Last updated:"} <time dateTime={courtImportDate}>{formatDate(courtImportDate, locale)}</time>
  </span>;
}
