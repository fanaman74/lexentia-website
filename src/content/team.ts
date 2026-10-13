import type { Lawyer } from "./types";

// Source: lexentia.eu attorney profiles, EN and FR (Oct 2026), condensed.
// Titles, dates and distinctions must be confirmed by each lawyer before launch.
export const lawyers: Lawyer[] = [
  {
    slug: "nathalie-de-montigny",
    name: "Nathalie de Montigny",
    order: 1,
    portrait: {
      src: "https://www.lexentia.eu/wp-content/uploads/2015/10/ndm-2024.jpeg",
      alt: { en: "Portrait of Nathalie de Montigny", fr: "Portrait de Nathalie de Montigny" },
    },
    role: { en: "Founding Partner", fr: "Associée fondatrice" },
    descriptor: {
      en: "EU & international civil service law · Economic and business law",
      fr: "Fonction publique européenne et internationale · Droit économique",
    },
    shortBio: {
      en: "Nathalie founded Lexentia in 2018 after practising business law and then EU civil service law. She advises EU staff and trade unions, and companies and entrepreneurs in economic law.",
      fr: "Nathalie a fondé Lexentia en 2018 après avoir exercé en droit des affaires puis en droit de la fonction publique européenne. Elle conseille le personnel européen et les syndicats, ainsi que les entreprises et indépendants en droit économique.",
    },
    biography: {
      en: [
        "Nathalie de Montigny graduated in private law from the Université libre de Bruxelles in 2010 and then studied English at Kaplan International Languages School in Philadelphia.",
        "She began her career in January 2011 at Everest Law, where for almost four years she practised commercial law, company law and litigation, mainly advising SMEs and young entrepreneurs. During her first years at the Brussels Bar she completed a continuing-education certificate in litigation at UCLouvain.",
        "In November 2014 she joined Louis European Law, advising clients in EU civil service law and in national and international litigation. Building on that experience, she founded Lexentia in 2018 to offer rigorous legal work in a professional but personal setting.",
        "She organises lecture series on national and European law for staff of the European institutions and trade unions, and has taught as a guest lecturer at ESI-HE2B since 2019.",
      ],
      fr: [
        "Nathalie de Montigny est diplômée en droit privé de l'Université libre de Bruxelles en 2010. Elle part ensuite à Philadelphie perfectionner son anglais à la Kaplan International Languages School.",
        "Elle débute en janvier 2011 chez Everest Law, où elle exerce pendant près de quatre ans en droit commercial, droit des sociétés et contentieux, principalement auprès de PME et de jeunes indépendants. Durant ses premières années au barreau, elle obtient un certificat d'études continues en contentieux à l'UCLouvain.",
        "En novembre 2014, elle rejoint Louis European Law pour conseiller ses clients en droit de la fonction publique européenne et en contentieux national et international. Forte de cette expérience, elle fonde Lexentia en 2018 afin d'offrir un travail juridique rigoureux dans un cadre professionnel et humain.",
        "Elle anime des cycles de conférences en droit national et européen à destination du personnel des institutions et des syndicats européens, et enseigne comme professeure invitée à l'ESI-HE2B depuis 2019.",
      ],
    },
    email: "nathalie.demontigny@lexentia.eu",
    languages: ["fr", "en", "nl"],
    practiceAreas: ["eu-civil-service", "private-business"],
    practiceTags: {
      en: [
        "EU & international civil service law",
        "(Pre-)disciplinary procedures",
        "OLAF procedures",
        "Pensions, insurance, invalidity and incapacity",
        "Requests, complaints and actions before the EU Courts",
        "Commercial and company law",
        "Contract and real estate law",
      ],
      fr: [
        "Fonction publique européenne et internationale",
        "Procédures (pré)disciplinaires",
        "Procédures OLAF",
        "Pensions, assurance, invalidité et incapacité",
        "Demandes, réclamations et recours devant les juridictions de l'UE",
        "Droit commercial et des sociétés",
        "Droit des contrats et immobilier",
      ],
    },
    education: [
      {
        period: { en: "2010", fr: "2010" },
        title: { en: "Master in private law", fr: "Master en droit privé" },
        detail: { en: "Université libre de Bruxelles", fr: "Université libre de Bruxelles" },
      },
      {
        period: { en: "After 2010", fr: "Après 2010" },
        title: { en: "English language programme", fr: "Perfectionnement en anglais" },
        detail: { en: "Kaplan International Languages School, Philadelphia", fr: "Kaplan International Languages School, Philadelphie" },
      },
      {
        period: { en: "Early years at the Bar", fr: "Premières années au barreau" },
        title: { en: "Continuing-education certificate in litigation", fr: "Certificat d'études continues en contentieux" },
        detail: { en: "UCLouvain", fr: "UCLouvain" },
      },
    ],
    career: [
      {
        period: { en: "2011 – 2014", fr: "2011 – 2014" },
        title: { en: "Everest Law", fr: "Everest Law" },
        detail: { en: "Commercial law, company law and litigation", fr: "Droit commercial, droit des sociétés et contentieux" },
      },
      {
        period: { en: "2014 – 2018", fr: "2014 – 2018" },
        title: { en: "Louis European Law", fr: "Louis European Law" },
        detail: { en: "EU civil service law, national and international litigation", fr: "Fonction publique européenne, contentieux national et international" },
      },
      {
        period: { en: "Since 2018", fr: "Depuis 2018" },
        title: { en: "Lexentia, founding partner", fr: "Lexentia, associée fondatrice" },
      },
    ],
    teaching: [
      {
        period: { en: "Since 2019", fr: "Depuis 2019" },
        title: { en: "Guest lecturer, ESI-HE2B", fr: "Professeure invitée, ESI-HE2B" },
      },
      {
        period: { en: "Ongoing", fr: "En cours" },
        title: { en: "Lecture series for EU staff and trade unions", fr: "Cycles de conférences pour le personnel et les syndicats européens" },
      },
    ],
  },
  {
    slug: "magali-mattar",
    name: "Magali Mattar",
    order: 2,
    role: { en: "Attorney", fr: "Avocate collaboratrice" },
    descriptor: {
      en: "European law · EU civil service matters",
      fr: "Droit européen · Fonction publique européenne",
    },
    shortBio: {
      en: "Magali joined Lexentia in October 2023 and assists Nathalie de Montigny on EU civil service matters. She trained in European, international and Belgian law in Maastricht, Geneva and Leuven.",
      fr: "Magali a rejoint Lexentia en octobre 2023 et assiste Nathalie de Montigny dans les dossiers de fonction publique européenne. Elle s'est formée en droit européen, international et belge à Maastricht, Genève et Louvain.",
    },
    biography: {
      en: [
        "Magali Mattar obtained a degree in European law from Maastricht University in 2016, including an academic exchange in Singapore and an internship at the Belgian Embassy in Uganda. In 2018 she completed a Master in international law at the Graduate Institute of International and Development Studies in Geneva, with an internship at an international organisation in Geneva and an exchange in Mexico.",
        "She practised as a lawyer in Mexico in strategic litigation in corruption cases, then worked for two years as a paralegal for a firm obtaining damages for infringements of European law. In 2021 she completed a Master in Belgian law at KU Leuven.",
        "Admitted to the French-speaking Bar of Brussels in June 2022, she first practised at a firm specialising in Belgian public law. Drawn by European law, she joined Lexentia in October 2023.",
      ],
      fr: [
        "Magali Mattar est diplômée en droit européen de l'Université de Maastricht en 2016, après un échange universitaire à Singapour et un stage à l'ambassade de Belgique en Ouganda. En 2018, elle obtient un master en droit international à l'Institut de hautes études internationales et du développement de Genève, avec un stage dans une organisation internationale et un échange au Mexique.",
        "Elle exerce comme avocate au Mexique en contentieux stratégique dans des affaires de corruption, puis travaille deux ans comme juriste pour une société obtenant réparation pour des violations du droit européen. En 2021, elle complète sa formation par un master en droit belge à la KU Leuven.",
        "Inscrite au barreau francophone de Bruxelles depuis juin 2022, elle exerce d'abord dans un cabinet spécialisé en droit public belge. Par goût pour le droit européen, elle rejoint Lexentia en octobre 2023.",
      ],
    },
    languages: ["fr", "en", "es", "nl"],
    practiceAreas: ["eu-civil-service"],
    practiceTags: {
      en: ["EU civil service law", "European law", "International law"],
      fr: ["Fonction publique européenne", "Droit européen", "Droit international"],
    },
    education: [
      {
        period: { en: "2016", fr: "2016" },
        title: { en: "Degree in European law", fr: "Diplôme en droit européen" },
        detail: { en: "Maastricht University", fr: "Université de Maastricht" },
      },
      {
        period: { en: "2018", fr: "2018" },
        title: { en: "Master in international law", fr: "Master en droit international" },
        detail: { en: "Graduate Institute of International and Development Studies, Geneva", fr: "Institut de hautes études internationales et du développement, Genève" },
      },
      {
        period: { en: "2021", fr: "2021" },
        title: { en: "Master in Belgian law", fr: "Master en droit belge" },
        detail: { en: "KU Leuven", fr: "KU Leuven" },
      },
    ],
    career: [
      {
        period: { en: "Earlier", fr: "Auparavant" },
        title: { en: "Lawyer, strategic litigation (Mexico)", fr: "Avocate, contentieux stratégique (Mexique)" },
        detail: { en: "Corruption cases", fr: "Affaires de corruption" },
      },
      {
        period: { en: "Two years", fr: "Deux ans" },
        title: { en: "Paralegal, damages for infringements of EU law", fr: "Juriste, réparation des violations du droit européen" },
      },
      {
        period: { en: "2022 – 2023", fr: "2022 – 2023" },
        title: { en: "Attorney, Belgian public law firm", fr: "Avocate, cabinet de droit public belge" },
      },
      {
        period: { en: "Since October 2023", fr: "Depuis octobre 2023" },
        title: { en: "Lexentia, attorney", fr: "Lexentia, avocate collaboratrice" },
      },
    ],
    barAdmission: {
      en: "French-speaking Bar of Brussels, June 2022",
      fr: "Barreau francophone de Bruxelles, juin 2022",
    },
  },
];

export const getLawyer = (slug: string) => lawyers.find((l) => l.slug === slug);
