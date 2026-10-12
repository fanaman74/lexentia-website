import type { Locale } from "./i18n";

export const formatDate = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale === "fr" ? "fr-BE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

export const pad = (n: number) => String(n).padStart(2, "0");
