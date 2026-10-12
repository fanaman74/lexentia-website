import type { Localised } from "@/lib/i18n";

export type LegalPageKey = "legalNotices" | "terms" | "fees" | "privacy";

export type LegalPage = {
  title: Localised;
  intro: Localised;
  /** Address of the text currently published, which stays binding until replaced. */
  legacyUrl: Localised;
  sections: { title: Localised; body: Localised<string[]> }[];
};

/**
 * Structured summaries of the legal pages currently on lexentia.eu.
 * NOT final wording: the brief requires lawyer approval of every legal text,
 * and several statements are known to be outdated (see docs/review.md).
 */
export const legalPages: Record<LegalPageKey, LegalPage> = {
  legalNotices: {
    title: { en: "Legal notices", fr: "Mentions légales" },
    intro: {
      en: "Identification of the firm and the professional rules that apply to its lawyers.",
      fr: "Identification du cabinet et règles professionnelles applicables à ses avocats.",
    },
    legacyUrl: { en: "https://www.lexentia.eu/en/legal-notices/", fr: "https://www.lexentia.eu/mentions-legales/" },
    sections: [
      {
        title: { en: "The firm", fr: "Le cabinet" },
        body: {
          en: [
            "LEXENTIA SRL, Square Eugène Plasky 92-94/001, 1030 Schaerbeek (Brussels), Belgium. Telephone +32 2 319 70 53. VAT BE0688.629.031.",
            "The firm's lawyers are members of the French-speaking Bar of Brussels.",
          ],
          fr: [
            "LEXENTIA SRL, Square Eugène Plasky 92-94/001, 1030 Schaerbeek (Bruxelles), Belgique. Téléphone +32 2 319 70 53. TVA BE0688.629.031.",
            "Les avocats du cabinet sont inscrits au barreau francophone de Bruxelles.",
          ],
        },
      },
      {
        title: { en: "Professional rules", fr: "Déontologie" },
        body: {
          en: [
            "The firm's lawyers are bound by the Code of Conduct of the Brussels Bar, including the duties of independence, confidentiality, loyalty and avoidance of conflicts of interest.",
            "Complaints about a lawyer's conduct may be addressed to the Bar administration or to the President of the Bar (Bâtonnier).",
          ],
          fr: [
            "Les avocats du cabinet sont soumis au code de déontologie du barreau de Bruxelles, notamment aux devoirs d'indépendance, de confidentialité, de loyauté et de prévention des conflits d'intérêts.",
            "Toute plainte relative au comportement d'un avocat peut être adressée à l'administration du barreau ou au bâtonnier.",
          ],
        },
      },
      {
        title: { en: "Website", fr: "Site internet" },
        body: {
          en: ["Information on this website is general and does not constitute legal advice."],
          fr: ["Les informations de ce site sont générales et ne constituent pas un avis juridique."],
        },
      },
    ],
  },
  privacy: {
    title: { en: "Privacy", fr: "Vie privée" },
    intro: {
      en: "How Lexentia processes personal data received through this website and in the course of its work.",
      fr: "Comment Lexentia traite les données personnelles reçues via ce site et dans le cadre de ses missions.",
    },
    legacyUrl: { en: "https://www.lexentia.eu/en/legal-notices/", fr: "https://www.lexentia.eu/mentions-legales/" },
    sections: [
      {
        title: { en: "Legal basis", fr: "Base légale" },
        body: {
          en: [
            "Personal data are processed in accordance with Regulation (EU) 2016/679 (GDPR), solely to carry out the firm's engagements and meet its legal obligations.",
          ],
          fr: [
            "Les données personnelles sont traitées conformément au règlement (UE) 2016/679 (RGPD), uniquement pour exécuter les missions du cabinet et respecter ses obligations légales.",
          ],
        },
      },
      {
        title: { en: "Contact form", fr: "Formulaire de contact" },
        body: {
          en: [
            "Data sent through the contact form are used only to answer the enquiry.",
          ],
          fr: [
            "Les données transmises via le formulaire de contact servent uniquement à répondre à la demande.",
          ],
        },
      },
      {
        title: { en: "Retention", fr: "Conservation" },
        body: {
          en: ["Data are kept only as long as the matter requires, subject to legal archiving obligations."],
          fr: ["Les données sont conservées le temps nécessaire au dossier, sous réserve des obligations légales d'archivage."],
        },
      },
      {
        title: { en: "Your rights", fr: "Vos droits" },
        body: {
          en: [
            "You may ask to access, correct or erase your data by writing to the lawyer in charge of your matter. You may also lodge a complaint with the Belgian Data Protection Authority.",
          ],
          fr: [
            "Vous pouvez demander l'accès à vos données, leur rectification ou leur effacement en écrivant à l'avocat en charge de votre dossier. Vous pouvez également introduire une plainte auprès de l'Autorité de protection des données.",
          ],
        },
      },
      {
        title: { en: "Cookies", fr: "Cookies" },
        body: {
          en: ["This website does not use advertising or tracking cookies."],
          fr: ["Ce site n'utilise pas de cookies publicitaires ou de suivi."],
        },
      },
    ],
  },
  fees: {
    title: { en: "Fees and invoicing", fr: "Honoraires et facturation" },
    intro: {
      en: "How fees are agreed, calculated and invoiced.",
      fr: "Comment les honoraires sont convenus, calculés et facturés.",
    },
    legacyUrl: { en: "https://www.lexentia.eu/en/fees-and-billings/", fr: "https://www.lexentia.eu/honoraires-et-facturation/" },
    sections: [
      {
        title: { en: "Agreeing fees", fr: "Convention d'honoraires" },
        body: {
          en: [
            "Fees are agreed when a file is opened, as a flat fee or an hourly rate, and recorded in an engagement letter.",
            "A success fee is only possible as a partial arrangement combined with a reduced base fee, if both parties choose that structure.",
          ],
          fr: [
            "Les honoraires sont convenus à l'ouverture du dossier, au forfait ou au taux horaire, et consignés dans une lettre de mission.",
            "Un honoraire de résultat n'est possible qu'à titre partiel, combiné à un honoraire de base réduit, si les deux parties choisissent cette formule.",
          ],
        },
      },
      {
        title: { en: "What determines the fee", fr: "Ce qui détermine l'honoraire" },
        body: {
          en: [
            "Fees reflect the subject matter, urgency and deadlines, complexity and the experience of the responsible lawyer. Hourly rates are reviewed periodically; a new rate applies only once the client has approved it. Estimates are indicative, not caps.",
          ],
          fr: [
            "Les honoraires tiennent compte de l'objet du dossier, de l'urgence et des délais, de la complexité et de l'expérience de l'avocat responsable. Les taux horaires sont revus périodiquement ; un nouveau taux ne s'applique qu'après accord du client. Les estimations sont indicatives et ne constituent pas un plafond.",
          ],
        },
      },
      {
        title: { en: "Costs and VAT", fr: "Frais et TVA" },
        body: {
          en: [
            "Fees are subject to 21% VAT unless an exemption applies. External costs paid on the client's behalf are invoiced as disbursements.",
          ],
          fr: [
            "Les honoraires sont soumis à la TVA de 21 %, sauf exonération. Les frais externes avancés pour le client sont facturés comme débours.",
          ],
        },
      },
      {
        title: { en: "Payment", fr: "Paiement" },
        body: {
          en: [
            "Unpaid amounts bear interest at 8% per year. The firm may suspend its services after prior notice if invoices or retainers remain unpaid.",
          ],
          fr: [
            "Les montants impayés portent intérêt au taux de 8 % l'an. Le cabinet peut suspendre ses prestations, après avertissement, en cas de factures ou de provisions impayées.",
          ],
        },
      },
    ],
  },
  terms: {
    title: { en: "Terms and conditions", fr: "Conditions générales" },
    intro: {
      en: "The general terms that govern the firm's engagements. The engagement letter for each matter prevails.",
      fr: "Les conditions générales applicables aux missions du cabinet. La lettre de mission de chaque dossier prévaut.",
    },
    legacyUrl: { en: "https://www.lexentia.eu/en/terms-and-conditions/", fr: "https://www.lexentia.eu/conditions-generales/" },
    sections: [
      {
        title: { en: "Services and responsible lawyer", fr: "Prestations et avocat responsable" },
        body: {
          en: [
            "Each engagement is defined in an engagement letter and is handled under the personal responsibility of the lawyer named in it. Matters outside the firm's expertise may be referred, after discussion, to a trusted colleague.",
          ],
          fr: [
            "Chaque mission est définie dans une lettre de mission et confiée à la responsabilité personnelle de l'avocat qui y est désigné. Les questions hors du champ d'expertise du cabinet peuvent, après concertation, être confiées à un confrère.",
          ],
        },
      },
      {
        title: { en: "Liability", fr: "Responsabilité" },
        body: {
          en: [
            "The firm's liability is contractual, covered by professional indemnity insurance, and limited as set out in the full terms.",
          ],
          fr: [
            "La responsabilité du cabinet est contractuelle, couverte par une assurance responsabilité professionnelle, et limitée selon les conditions complètes.",
          ],
        },
      },
      {
        title: { en: "Communication and documents", fr: "Communication et documents" },
        body: {
          en: [
            "The firm communicates electronically by preference. Clients are asked to provide complete, organised documents and to disclose any use of automated or AI tools in preparing them.",
          ],
          fr: [
            "Le cabinet communique de préférence par voie électronique. Le client est invité à fournir des documents complets et ordonnés et à signaler tout recours à des outils automatisés ou d'IA pour les préparer.",
          ],
        },
      },
      {
        title: { en: "Archiving, data and disputes", fr: "Archivage, données et litiges" },
        body: {
          en: [
            "Files are kept for up to five years after a matter closes. Personal data are processed under the GDPR. Belgian law applies and the courts of Brussels have jurisdiction; conciliation before the Bar may be proposed.",
          ],
          fr: [
            "Les dossiers sont conservés jusqu'à cinq ans après leur clôture. Les données personnelles sont traitées conformément au RGPD. Le droit belge s'applique et les juridictions de Bruxelles sont compétentes ; une conciliation devant le barreau peut être proposée.",
          ],
        },
      },
    ],
  },
};
