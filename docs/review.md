# Review of the rebuild brief

Reviewed 12 October 2026 against the live lexentia.eu (EN and FR). The brief is solid and buildable. These are the gaps and contradictions found, and the points only the firm can settle.

## Contradictions and gaps in the brief

1. **Three practice areas or two.** The footer spec (§4) lists a third area, "Business & Commercial Law", but every other section, and the current site, has two. The build uses two. Business and commercial law sits inside the private-law page.
2. **Insights are mostly French-only.** §24 asks for every document to have `en` and `fr` fields, but 23 of the 28 archived articles exist only in French, and 5 only in English. The build shows each article in its original language, marks it ("Article in French"), and sets `lang` on the title. Decide whether articles get translated or stay single-language.
3. **The "Selected insights" block can still look stale.** §16 says the homepage must never advertise inactivity, but the newest article is from January 2024 and the next from 2021. The block shows evergreen picks, but the dates are still visible. Only new articles fix this.
4. **Contact form file upload** (§18) is optional and needs a secure intake provider. It is left out.
5. **Hero visual.** Options A and C are both "preferred". With no photography yet, the build uses C (pure editorial). A can follow once portraits exist.
6. **Matter types overlap.** "Private / commercial law" and "Business matter" are hard to tell apart for a visitor. They are kept as specified for now.
7. **Contact email.** The brief asks for a general email, but the current site shows it only as an image. The build uses the address published in the legal notices (nathalie.demontigny@lexentia.eu).
8. **CMS.** The brief says Sanity or Payload. The build uses a typed local content layer (`src/content`) shaped like the §32 data model, so either CMS can be connected without changing the pages.

## Found on the current site (needs the firm)

- **Legal notices are out of date.** They cite the Belgian privacy law of 8 December 1992 (repealed in 2018) and the "Commission for the Protection of Privacy" (now the Data Protection Authority). The draft privacy page uses current names, but a lawyer must approve it.
- **Fees page and terms disagree.** The fees page says fees are "payable in cash" and that the contract may end if the client does not respond "within 15 days of the billing date". The terms say invoices are due within 15 days, with suspension after an unanswered reminder.
- **Nathalie's degree.** The French profile says "deux masters en droit privé, avec grande distinction". The English profile says one master's, magna cum laude. The build says "Master in private law" with no distinction until this is confirmed.
- **Magali's profile URL** is `/attorneys/alissa-everaerts/` (EN) and `/attorneys/alissa-everaets/` (FR), which looks like a leftover from a previous staff member. Both are redirected.
- **Cookie banner.** It says "if you continue to use this site we will assume that you are happy with it", which is not valid consent under the GDPR. The rebuild sets no tracking cookies, so it needs no banner.

## Decisions only the firm can make before launch

- Approval of all legal texts (notices, privacy, terms, fees). These are currently drafts based on summaries and are labelled as such on every legal page.
- The footer disclaimer, and whether to show VAT and Bar details.
- Whether "Brussels Bar" and the language list are the right proof points for the hero.
- Whether the lecturing at ESI-HE2B (since 2019) and the lecture series are still current.
- Commissioned photography: 2–3 portraits per lawyer, office details, and Brussels architecture. Nathalie’s current official portrait is now linked from the live site; Magali retains a monogram placeholder.
- A general firm inbox, and a mail provider for the contact form (the form validates and rate-limits, but it does not deliver yet).
- Whether to publish new Insights regularly, or keep the homepage block evergreen.
- The FR article URLs on the old site are assumed to be `/<slug>/`, and redirects are built on that assumption. Check them against the old sitemap.
