import type { PracticeArea } from "./types";

// Source: lexentia.eu/en/practice/eu-civil-service-law and
// lexentia.eu/practice/matieres-et-droit-europeen (Oct 2026), regrouped per the
// rebuild brief. LEGAL REVIEW REQUIRED before launch.
export const euCivilService: PracticeArea = {
  id: "eu-civil-service",
  routeKey: "euCivilService",
  eyebrow: {
    en: "EU & international civil service law",
    fr: "Fonction publique européenne et internationale",
  },
  title: {
    en: "EU & International Civil Service Law",
    fr: "Droit de la fonction publique européenne et internationale",
  },
  shortTitle: { en: "EU civil service law", fr: "Fonction publique européenne" },
  headline: {
    en: "Advice and representation throughout the EU staff-law lifecycle.",
    fr: "Conseil et défense à chaque étape de la carrière statutaire.",
  },
  intro: {
    en: "Lexentia advises and assists officials, temporary agents, contract agents and auxiliary staff of the EU institutions, in the pre-litigation phase as well as before the courts.",
    fr: "Lexentia conseille et assiste les fonctionnaires, agents temporaires, agents contractuels et auxiliaires des institutions européennes, tant dans la phase précontentieuse que contentieuse.",
  },
  summary: {
    en: "Advising EU and international staff through career, disciplinary, medical, administrative and judicial procedures.",
    fr: "Accompagner le personnel européen et international dans ses procédures de carrière, disciplinaires, médicales, administratives et juridictionnelles.",
  },
  tags: {
    en: ["Article 90", "Article 24", "IDOC", "OLAF", "Invalidity", "EPSO", "Pension rights", "EU Courts"],
    fr: ["Article 90", "Article 24", "IDOC", "OLAF", "Invalidité", "EPSO", "Droits à pension", "Juridictions de l'UE"],
  },
  sideFacts: {
    en: ["Based in Brussels", "Pre-litigation and litigation", "Institutional procedures", "French, English, Dutch, Spanish"],
    fr: ["Basé à Bruxelles", "Précontentieux et contentieux", "Procédures institutionnelles", "Français, anglais, néerlandais, espagnol"],
  },
  body: {
    en: [
      "Staff-law matters are shaped long before they reach a court. Requests, complaints, deadlines and the evidence gathered at the administrative stage often determine what remains possible later.",
      "Lexentia assists EU staff and European trade unions from the first request to the administration through to proceedings before the EU Courts and the ILO Administrative Tribunal.",
    ],
    fr: [
      "Un dossier statutaire se construit bien avant le prétoire. Les demandes, réclamations, délais et éléments de preuve réunis au stade administratif déterminent souvent ce qui restera possible ensuite.",
      "Lexentia accompagne le personnel des institutions et les syndicats européens, de la première demande à l'administration jusqu'aux recours devant les juridictions de l'Union et le Tribunal administratif de l'OIT.",
    ],
  },
  serviceGroups: [
    {
      id: "career",
      title: { en: "Career & Article 90", fr: "Carrière et article 90" },
      intro: {
        en: "Requests and complaints, and the career decisions they most often concern.",
        fr: "Demandes et réclamations, et les décisions de carrière qu'elles visent le plus souvent.",
      },
      items: {
        en: [
          "Requests and complaints under Article 90(1) and 90(2) of the Staff Regulations",
          "Staff and assessment reports",
          "Promotion eligibility",
          "Renewal of contracts",
          "EPSO selection procedures",
          "Determination of individual rights",
          "Pension rights",
        ],
        fr: [
          "Demandes et réclamations (article 90 §1 et §2 du Statut)",
          "Rapports de notation",
          "Droits à la promotion",
          "Renouvellement des contrats",
          "Concours EPSO",
          "Détermination des droits individuels",
          "Droits à pension",
        ],
      },
    },
    {
      id: "article-24",
      title: { en: "Article 24 & assistance", fr: "Article 24 et assistance" },
      intro: {
        en: "Workplace situations where the institution's duty of assistance is engaged.",
        fr: "Situations où le devoir d'assistance de l'institution est en jeu.",
      },
      items: {
        en: [
          "Requests for assistance under Article 24 of the Staff Regulations",
          "Meetings with the mediators and the Ombudsman of the European institutions",
          "Assistance to European trade unions",
        ],
        fr: [
          "Demandes d'assistance (article 24 du Statut)",
          "Réunions avec les différents médiateurs des institutions européennes",
          "Assistance des syndicats européens",
        ],
      },
    },
    {
      id: "investigations",
      title: { en: "Investigations & discipline", fr: "Enquêtes et discipline" },
      intro: {
        en: "Administrative inquiries and disciplinary proceedings, from the first hearing.",
        fr: "Enquêtes administratives et procédures disciplinaires, dès la première audition.",
      },
      items: {
        en: [
          "IDOC hearings",
          "OLAF procedures",
          "Inter-service meetings",
          "(Pre-)disciplinary procedures",
          "Defence and representation before the Disciplinary Board",
        ],
        fr: [
          "Auditions IDOC",
          "Procédures OLAF",
          "Réunions interservices",
          "Procédures (pré)disciplinaires",
          "Défense devant le Conseil de discipline",
        ],
      },
    },
    {
      id: "medical",
      title: { en: "Medical & invalidity", fr: "Médical et invalidité" },
      intro: {
        en: "Procedures where health affects employment status or entitlements.",
        fr: "Procédures où la santé affecte la situation statutaire ou les droits.",
      },
      items: {
        en: [
          "Medical committees",
          "Invalidity committees",
          "Insurance, incapacity and invalidity matters",
        ],
        fr: [
          "Commissions médicales",
          "Commissions d'invalidité",
          "Dossiers d'assurance, d'incapacité et d'invalidité",
        ],
      },
    },
    {
      id: "litigation",
      title: { en: "Litigation", fr: "Contentieux" },
      intro: {
        en: "Representation before the competent European and international bodies.",
        fr: "Représentation devant les instances européennes et internationales compétentes.",
      },
      items: {
        en: [
          "Actions for annulment (Article 91 of the Staff Regulations) before the General Court, and appeals before the Court of Justice",
          "Claims for non-contractual liability of the European institutions",
          "Complaints to the European Ombudsman",
          "Appeals before the Administrative Tribunal of the International Labour Organization (ILOAT)",
        ],
        fr: [
          "Recours en annulation (article 91 du Statut) devant le Tribunal de l'Union en première instance ou la Cour de justice en pourvoi",
          "Recours en responsabilité extracontractuelle des institutions européennes",
          "Recours à l'Ombudsman européen",
          "Recours devant le Tribunal administratif de l'Organisation internationale du travail (TAOIT)",
        ],
      },
    },
  ],
  relatedLawyers: ["nathalie-de-montigny", "magali-mattar"],
  insightCategories: ["eu-civil-service"],
  cta: { en: "Discuss your situation", fr: "Exposer votre situation" },
  seo: {
    title: {
      en: "EU Civil Service Law – Staff Regulations lawyer in Brussels",
      fr: "Droit de la fonction publique européenne – avocat à Bruxelles",
    },
    description: {
      en: "Advice and representation for EU officials and agents: Article 90 complaints, Article 24 requests, IDOC and OLAF procedures, invalidity, EPSO, pensions and litigation before the EU Courts.",
      fr: "Conseil et défense des fonctionnaires et agents de l'UE : réclamations article 90, demandes d'assistance article 24, IDOC, OLAF, invalidité, EPSO, pensions et recours devant les juridictions de l'Union.",
    },
  },
};

// Source: lexentia.eu/en/practice/belgian-and-international-private-law and
// lexentia.eu/practice/matiere-et-droit-national (Oct 2026). LEGAL REVIEW REQUIRED.
export const privateBusiness: PracticeArea = {
  id: "private-business",
  routeKey: "privateLaw",
  eyebrow: { en: "Belgian & international private law", fr: "Droit privé belge et international" },
  title: { en: "Belgian & International Private Law", fr: "Droit privé belge et international" },
  shortTitle: { en: "Private & business law", fr: "Droit privé et des affaires" },
  headline: {
    en: "Practical counsel for contracts, companies and cross-border matters.",
    fr: "Un conseil concret pour vos contrats, vos sociétés et vos dossiers transfrontaliers.",
  },
  intro: {
    en: "Lexentia advises and represents individuals, entrepreneurs and companies across Belgian and international private law, from the negotiation of a contract to the recovery of a debt.",
    fr: "Lexentia conseille et représente particuliers, entrepreneurs et sociétés en droit privé belge et international, de la négociation d'un contrat au recouvrement d'une créance.",
  },
  summary: {
    en: "Practical representation and advice in contractual, commercial, corporate, international and property-related matters.",
    fr: "Conseil et représentation en matière contractuelle, commerciale, sociétaire, internationale et immobilière.",
  },
  tags: {
    en: ["Contracts", "Commercial disputes", "Company law", "Private international law", "Real estate", "Debt recovery"],
    fr: ["Contrats", "Litiges commerciaux", "Droit des sociétés", "Droit international privé", "Immobilier", "Recouvrement"],
  },
  sideFacts: {
    en: ["Based in Brussels", "Advice and litigation", "National and cross-border", "Network of specialist colleagues"],
    fr: ["Basé à Bruxelles", "Conseil et contentieux", "National et transfrontalier", "Réseau de confrères spécialisés"],
  },
  body: {
    en: [
      "Lexentia is building a broad network of colleagues who specialise in other areas of law or practise before other jurisdictions, so that clients receive dependable, locally grounded service whatever their matter involves.",
    ],
    fr: [
      "Lexentia développe un large réseau de confrères spécialisés dans d'autres branches du droit ou habilités à plaider devant d'autres instances, afin d'offrir à ses clients un service de proximité et de qualité, quelle que soit la nature de leur dossier.",
    ],
  },
  serviceGroups: [
    {
      id: "private-international",
      title: { en: "Private international law", fr: "Droit international privé" },
      items: {
        en: ["International sales of goods", "Disputes between foreign companies", "International labour law"],
        fr: ["Vente internationale de marchandises", "Contentieux entre sociétés étrangères", "Droit du travail international"],
      },
    },
    {
      id: "contracts",
      title: { en: "Contract law", fr: "Droit des contrats" },
      items: {
        en: ["Civil and commercial contracts", "National and international agreements"],
        fr: ["Contrats civils et commerciaux", "Contrats nationaux et internationaux"],
      },
    },
    {
      id: "company",
      title: { en: "Company law", fr: "Droit des sociétés" },
      items: {
        en: ["Companies and associations", "Incorporation and development", "Insolvency", "Winding-up and dissolution"],
        fr: ["Sociétés et associations", "Constitution et développement", "Insolvabilité", "Liquidation et dissolution"],
      },
    },
    {
      id: "business",
      title: { en: "Business & commercial law", fr: "Droit des affaires et commercial" },
      items: {
        en: [
          "Acquisitions and transfers of activities",
          "Share purchase agreements",
          "Negotiations and confidentiality agreements",
          "Transfers of leases and of goodwill",
          "Conclusion and termination of contracts",
        ],
        fr: [
          "Acquisitions et cessions d'activités",
          "Conventions de cession d'actions",
          "Pourparlers et accords de confidentialité",
          "Cession de baux et transmission de fonds de commerce",
          "Conclusion et rupture de contrats",
        ],
      },
    },
    {
      id: "consumer",
      title: { en: "Consumer law", fr: "Droit de la consommation" },
      items: {
        en: ["Misleading advertising", "Consumer protection", "Sale and distance-selling agreements"],
        fr: ["Publicité trompeuse", "Protection du consommateur", "Vente et achat à distance"],
      },
    },
    {
      id: "real-estate",
      title: { en: "Construction & real estate", fr: "Construction et immobilier" },
      items: {
        en: ["Construction law", "Real estate law"],
        fr: ["Droit de la construction", "Droit immobilier"],
      },
    },
    {
      id: "debt-recovery",
      title: { en: "Debt recovery", fr: "Recouvrement de créances" },
      items: {
        en: ["Recovery of outstanding debts"],
        fr: ["Recouvrement de créances impayées"],
      },
    },
  ],
  relatedLawyers: ["nathalie-de-montigny"],
  insightCategories: ["business-law", "contract-law", "judicial-law", "consumer-law", "international-law"],
  cta: { en: "Discuss a contract or business dispute", fr: "Parler d'un contrat ou d'un litige commercial" },
  seo: {
    title: {
      en: "Belgian & International Private Law – business lawyer in Brussels",
      fr: "Droit privé belge et international – avocat d'affaires à Bruxelles",
    },
    description: {
      en: "Contracts, company law, commercial disputes, consumer law, construction and real estate, debt recovery and private international law, from a Brussels law firm.",
      fr: "Contrats, droit des sociétés, litiges commerciaux, droit de la consommation, construction et immobilier, recouvrement et droit international privé, par un cabinet bruxellois.",
    },
  },
};

export const practiceAreas = [euCivilService, privateBusiness];
