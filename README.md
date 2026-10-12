# Lexentia website

The rebuild of lexentia.eu: Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and GSAP 3 with ScrollTrigger. French and English from day one.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr or /en
npm run build && npm start
```

## Structure

- `src/app/[locale]/[[...slug]]/page.tsx` is a single route that resolves every localised URL (`/en/team` ↔ `/fr/equipe`) through the table in `src/lib/i18n.ts`. This lets slugs differ by language, and the language switcher always lands on the equivalent page. Every page is statically generated.
- `src/content/` is the typed content layer. It is shaped like the brief's CMS model (Lawyer, PracticeArea, Insight), so a Sanity or Payload adapter only needs to replace `src/content/index.ts`.
- `src/components/motion/` holds the GSAP primitives (`Reveal`, `RevealLines`, `StaggerGroup`, `PageIntro`, `ProcessRail`, `Timeline`). All of them respect `prefers-reduced-motion`, and content stays visible without JavaScript.
- `src/proxy.ts` handles locale detection (cookie, then Accept-Language, then French). `next.config.ts` holds the 301s from the old site and the security headers.
- `src/lib/contact-action.ts` is the contact server action: Zod validation, a honeypot, and rate limiting. **Mail delivery is not configured yet.**

## Before launch

See `docs/review.md` (open questions for the firm) and `docs/migration-inventory.md`. Every legal page is a draft that needs lawyer approval.
