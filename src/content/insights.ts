import type { Insight, InsightCategoryId } from "./types";
import type { Localised } from "@/lib/i18n";
import { courtInsights } from "./court-rulings";

export const insightCategories: Record<InsightCategoryId, Localised> = {
  "eu-civil-service": { en: "EU civil service law", fr: "Fonction publique européenne" },
  "business-law": { en: "Business law", fr: "Droit des affaires" },
  "contract-law": { en: "Contract law", fr: "Droit des contrats" },
  "judicial-law": { en: "Procedure", fr: "Droit judiciaire" },
  "consumer-law": { en: "Consumer law", fr: "Droit de la consommation" },
  "international-law": { en: "International law", fr: "Droit international" },
  other: { en: "Other", fr: "Autres" },
};

const legacy = (slug: string) => `https://www.lexentia.eu/en/${slug}/`;
const author = "nathalie-de-montigny";

/**
 * Archive inventory from lexentia.eu/en/news (pages 1–2, Oct 2026), all by
 * Nathalie de Montigny. Two recruitment notices from 2018 are left out.
 * Excerpts paraphrase the listing excerpts; full bodies are migrated in Phase 6.
 */
export const practiceInsights: Insight[] = [
  {
    slug: "mieux-vaut-etre-vigilant-lorsquil-sagit-de-publier-des-actes-ou-bien-assure",
    title: "Mieux vaut être vigilant lorsqu'il s'agit de publier des actes (ou bien assuré…)",
    language: "fr",
    publishedAt: "2024-01-13",
    categories: ["business-law", "contract-law", "other"],
    excerpt: {
      en: "On the Court of Justice judgment of 11 January 2024 in case C-231/22 and the risks attached to publishing legal acts.",
      fr: "À propos de l'arrêt de la Cour de justice du 11 janvier 2024 (C-231/22) et des risques liés à la publication des actes.",
    },
    featured: true,
  },
  {
    slug: "la-notion-de-secret-entourant-les-travaux-du-jury-se-precise",
    title: "La notion de « secret entourant les travaux du jury » se précise",
    language: "fr",
    publishedAt: "2021-10-08",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "Unsuccessful competition candidates are bringing more actions against the Commission, and the confidentiality of selection boards is being clarified.",
      fr: "Les candidats malheureux aux concours multiplient les recours contre la Commission, et la confidentialité des travaux du jury se précise.",
    },
    featured: true,
  },
  {
    slug: "du-neuf-en-matiere-dinsolvabilite-des-entreprises",
    title: "Du neuf en matière d'insolvabilité des entreprises",
    language: "fr",
    publishedAt: "2021-08-04",
    categories: ["business-law"],
    excerpt: {
      en: "A bankrupt sole trader can ask the court to discharge remaining debts under the Code of Economic Law.",
      fr: "Le failli personne physique peut demander au tribunal d'être libéré de ses dettes résiduelles en vertu du Code de droit économique.",
    },
  },
  {
    slug: "t-12-21-r-interim-measures-due-to-covid-19-pandemic",
    title: "T-12/21 R – Interim measures due to COVID-19 pandemic",
    language: "en",
    publishedAt: "2021-04-13",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "Interim relief for a staff member with two young children who was dismissed after requesting an exceptional derogation.",
      fr: "Mesures provisoires pour un agent, parent de deux jeunes enfants, licencié après avoir demandé une dérogation exceptionnelle.",
    },
    featured: true,
  },
  {
    slug: "le-nombre-de-transferts-out-vers-un-systeme-de-pension-national-nest-pas-limite",
    title: "Le nombre de transferts out vers un système de pension national n'est pas limité",
    language: "fr",
    publishedAt: "2021-02-08",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "Answering a preliminary question on French legislation, the Court of Justice held that the number of transfers out to a national pension scheme is not limited.",
      fr: "Saisie d'une question préjudicielle portant sur la législation française, la Cour de justice juge que le nombre de transferts out vers un régime national n'est pas limité.",
    },
    featured: true,
  },
  {
    slug: "le-reglement-n805-2004-portant-creation-dun-titre-executoire-europeen-un-outil-precieux-dans-le-cadre-du-recouvrement-de-creances-incontestees-au-sein-de-lunion-europeenne",
    title:
      "Le Règlement n°805/2004 portant création d'un Titre exécutoire européen : un outil précieux dans le cadre du recouvrement de créances incontestées au sein de l'Union européenne",
    language: "fr",
    publishedAt: "2020-03-04",
    categories: ["contract-law", "business-law", "international-law", "judicial-law"],
    excerpt: {
      en: "When an invoice for services rendered goes unpaid in another Member State, the European Enforcement Order can help recover an uncontested claim.",
      fr: "Lorsqu'une facture reste impayée dans un autre État membre, le titre exécutoire européen peut faciliter le recouvrement d'une créance incontestée.",
    },
    featured: true,
  },
  {
    slug: "procedure-sommaire-dinjonction-de-payer-et-reforme-du-ressort-du-juge-de-paix-une-tentative-de-generalisation-manquee",
    title:
      "Procédure sommaire d'injonction de payer et réforme du ressort du juge de paix : une tentative de généralisation manquée ?",
    language: "fr",
    publishedAt: "2019-12-11",
    categories: ["contract-law", "business-law", "judicial-law"],
    excerpt: {
      en: "The summary payment-order procedure has been in the Belgian Judicial Code since 1967; a look at the latest reform.",
      fr: "La procédure sommaire d'injonction de payer figure au Code judiciaire depuis 1967 ; retour sur la dernière réforme.",
    },
  },
  {
    slug: "lassurance-protection-juridique-revisitee",
    title: "L'assurance protection juridique revisitée",
    language: "fr",
    publishedAt: "2019-12-03",
    categories: ["contract-law", "other"],
    excerpt: {
      en: "Legal expenses insurance still has shortcomings, despite better access to legal aid and a new tax exemption.",
      fr: "L'assurance protection juridique garde ses limites, malgré un meilleur accès à l'aide juridique et une exonération fiscale.",
    },
  },
  {
    slug: "partners-de-facto-cohabitees-are-not-equal-under-pension-rights",
    title: "Partners (de facto cohabitees) are not equal under pension rights",
    language: "en",
    publishedAt: "2019-11-05",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "On survivors' pension rights where an official dies within a year of marriage.",
      fr: "Sur les droits à pension de survie lorsqu'un fonctionnaire décède dans l'année de son mariage.",
    },
  },
  {
    slug: "des-le-1er-janvier-2020-place-a-la-societe-a-responsabilite-limitee",
    title: "Dès le 1er janvier 2020, place à la Société à Responsabilité Limitée !",
    language: "fr",
    publishedAt: "2019-11-01",
    categories: ["business-law"],
    excerpt: {
      en: "The new Code of Companies and Associations made wide-ranging changes to Belgian company law.",
      fr: "Le nouveau Code des sociétés et des associations modifie en profondeur le droit belge des sociétés.",
    },
  },
  {
    slug: "brexit-dismissal-of-eu-agents-based-on-an-no-deal-scenario",
    title: "Brexit: Dismissal of EU Agents based on a No deal scenario",
    language: "en",
    publishedAt: "2019-10-04",
    categories: ["eu-civil-service"],
  },
  {
    slug: "la-charte-des-droits-fondamentaux-source-de-renouveau-constitutionnel-europeen",
    title: "La Charte des droits fondamentaux, source de renouveau constitutionnel européen ?",
    language: "fr",
    publishedAt: "2019-09-30",
    categories: ["eu-civil-service"],
  },
  {
    slug: "les-icv-quand-la-pratique-differe-des-principes",
    title: "Les ICV : quand la pratique diffère des principes",
    language: "fr",
    publishedAt: "2019-08-26",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "Allowances for officials posted to delegations under Article 10 of Annex X to the Staff Regulations.",
      fr: "Les indemnités des fonctionnaires affectés en délégation au titre de l'article 10 de l'annexe X du Statut.",
    },
  },
  {
    slug: "le-delai-de-prescription-de-laction-tendant-a-se-voir-octroyer-ses-droits-pecuniers",
    title: "Le délai de prescription de l'action tendant à se voir octroyer ses droits pécuniaires",
    language: "fr",
    publishedAt: "2019-08-26",
    categories: ["eu-civil-service"],
    excerpt: {
      en: "Case T-338/16 P, Zink v Commission, on the limitation period for claims to financial entitlements.",
      fr: "Affaire T-338/16 P, Zink c. Commission, sur la prescription des demandes relatives aux droits pécuniaires.",
    },
  },
  {
    slug: "le-prejudice-resultant-de-lignorance-du-fonctionnaire-peut-etre-indemnise-par-ladministration-meme-en-dehors-de-toute-faute-dans-son-chef",
    title:
      "Le préjudice résultant de l'ignorance du fonctionnaire peut être indemnisé par l'administration, même en dehors de toute faute dans son chef",
    language: "fr",
    publishedAt: "2019-03-26",
    categories: ["eu-civil-service"],
  },
  {
    slug: "le-justiciable-na-plus-a-avancer-les-frais-de-justice",
    title: "Le justiciable n'a plus à avancer les frais de justice",
    language: "fr",
    publishedAt: "2019-02-20",
    categories: ["judicial-law"],
  },
  {
    slug: "vous-naurez-desormais-plus-aucun-secret-pour-votre-avocat",
    title: "Vous n'aurez désormais plus aucun secret pour votre avocat !",
    language: "fr",
    publishedAt: "2019-02-20",
    categories: ["judicial-law"],
  },
  {
    slug: "the-relativity-of-any-decision-of-the-eu-court-of-justice",
    title: "The relativity of any decision of the EU Court of Justice",
    language: "en",
    publishedAt: "2018-12-11",
    categories: ["eu-civil-service"],
  },
  {
    slug: "les-effets-limites-dun-arret-de-la-cour-de-justice",
    title: "Les effets limités d'un arrêt de la Cour de justice",
    language: "fr",
    publishedAt: "2018-12-10",
    categories: ["eu-civil-service"],
  },
  {
    slug: "larticle-6-de-lannexe-x-au-statut-est-illegal",
    title: "L'article 6 de l'annexe X au statut est illégal !",
    language: "fr",
    publishedAt: "2018-12-10",
    categories: ["eu-civil-service"],
  },
  {
    slug: "le-retour-de-manivelle-en-matiere-de-depens",
    title: "Le retour de manivelle en matière de dépens",
    language: "fr",
    publishedAt: "2017-11-28",
    categories: ["eu-civil-service", "judicial-law"],
  },
  {
    slug: "quand-la-linguistique-peut-retarder-lexecution-dune-decision-au-sein-de-lunion-europeenne",
    title: "Quand la linguistique peut retarder l'exécution d'une décision au sein de l'Union européenne…",
    language: "fr",
    publishedAt: "2017-09-01",
    categories: ["international-law", "judicial-law"],
  },
  {
    slug: "la-prise-en-charge-des-frais-et-honoraires-davocat-devant-les-juridictions-nationales",
    title: "La prise en charge des frais et honoraires d'avocat devant les juridictions nationales",
    language: "fr",
    publishedAt: "2016-08-09",
    categories: ["judicial-law"],
  },
  {
    slug: "est-il-interessant-de-declarer-une-donation-mobiliere",
    title: "Est-il intéressant de déclarer une donation mobilière ?",
    language: "fr",
    publishedAt: "2016-08-09",
    categories: ["other"],
  },
  {
    slug: "cher-consommateur-a-bon-entendeur",
    title: "Cher consommateur, à bon entendeur…",
    language: "fr",
    publishedAt: "2016-01-25",
    categories: ["consumer-law"],
  },
  {
    slug: "la-reforme-de-la-cour-de-justice-de-lunion-europeenne-le-retour-aux-sources",
    title: "La réforme de la Cour de justice de l'Union européenne : le retour aux sources",
    language: "fr",
    publishedAt: "2015-11-12",
    categories: ["eu-civil-service"],
  },
  {
    slug: "la-delivrance-a-letranger-dune-kids-id-destinee-aux-enfants-belges",
    title: "La délivrance à l'étranger d'une Kids-ID destinée aux enfants belges",
    language: "fr",
    publishedAt: "2015-10-26",
    categories: ["other"],
  },
  {
    slug: "affaire-f-83-14-le-tfp-rejette-les-griefs-formules-a-lencontre-de-la-procedure-de-promotion-au-sein-de-la-commission-europeenne",
    title:
      "Affaire F-83/14 : le TFP rejette les griefs formulés à l'encontre de la procédure de promotion au sein de la Commission européenne",
    language: "fr",
    publishedAt: "2015-09-14",
    categories: ["eu-civil-service"],
  },
].map((i) => ({ ...i, author, legacyUrl: legacy(i.slug) }) as Insight);

export const insights: Insight[] = [...practiceInsights, ...courtInsights];
export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
