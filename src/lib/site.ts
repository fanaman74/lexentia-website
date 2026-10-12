import type { Localised } from "./i18n";

/**
 * Firm facts taken from the current lexentia.eu legal notices and contact block
 * (October 2026). Every value here must be re-confirmed by the firm before launch.
 */
export const site = {
  name: "Lexentia",
  legalName: "LEXENTIA SRL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lexentia.eu",
  vat: "BE0688.629.031",
  phone: { display: "+32 (0)2 319 70 53", tel: "+3223197053" },
  // The current site shows the general address only as an image; this is the
  // address published in the legal notices. Confirm whether a general inbox exists.
  email: "nathalie.demontigny@lexentia.eu",
  address: {
    street: "Square Eugène Plasky 92-94/001",
    postalCode: "1030",
    locality: { en: "Brussels (Schaerbeek)", fr: "Bruxelles (Schaerbeek)" } as Localised,
    country: "BE",
  },
  mapUrl:
    "https://www.openstreetmap.org/search?query=Square%20Eug%C3%A8ne%20Plasky%2092%2C%201030%20Schaerbeek",
  hours: {
    en: "Monday to Friday, 8:30 to 17:00. Outside these hours by appointment.",
    fr: "Du lundi au vendredi, de 8h30 à 17h00. En dehors de ces heures, sur rendez-vous.",
  } as Localised,
  bar: {
    en: "Members of the French-speaking Bar of Brussels",
    fr: "Avocats au barreau francophone de Bruxelles",
  } as Localised,
  linkedin: "https://www.linkedin.com/company/lexentia/",
  founded: 2018,
};
