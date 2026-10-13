---
name: Lexentia
description: EU JUST reference styling applied to Lexentia's bilingual law-firm website.
colors:
  ink: "#272734"
  ink-soft: "#5d6170"
  paper: "#fafcfb"
  paper-warm: "#edf3f1"
  cream: "#ffffff"
  forest: "#111019"
  forest-deep: "#1b1828"
  sage: "#b5d7a7"
  bronze: "#087b80"
  lime: "#087b80"
  lime-soft: "#e7f4f1"
  pink: "#f5eff9"
  purple: "#77549c"
  teal: "#008c90"
  amber: "#efa93a"
  line: "#dce4e1"
  line-strong: "#baccca"
  line-dark: "#3c354b"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.3vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.65rem, 4.25vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  section-heading:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.2vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: 'Geist, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.0625rem"
    lineHeight: 1.7
  label:
    fontFamily: 'Geist, "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0"
  meta:
    fontFamily: 'Geist, "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.8rem"
    lineHeight: 1.55
rounded:
  sm: "6px"
  md: "12px"
  lg: "14px"
  carousel: "28px"
  pill: "999px"
spacing:
  panel: "1.5rem"
  card: "1.65rem"
  info-panel: "1.75rem"
  section: "5rem"
  section-desktop: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem"
  button-secondary:
    backgroundColor: "transparent"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem"
  field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
    width: "100%"
  chip:
    backgroundColor: "{colors.paper-warm}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.65rem"
  filter-pill:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.95rem"
  filter-pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 0.95rem"
  insight-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  search-panel:
    backgroundColor: "{colors.paper-warm}"
    rounded: "{rounded.md}"
    padding: "{spacing.panel}"
  carousel-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.carousel}"
    padding: "clamp(1.75rem, 3vw, 2.5rem)"
  carousel-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "50%"
    width: "48px"
    height: "48px"
---

# Design System: Lexentia

## Overview

The user-selected visual reference is [EU JUST](https://eujust.online). Its pale canvas, upright serif headlines, teal controls, fine borders, and dark editorial passages define the implemented atmosphere. Lexentia keeps its own wordmark, firm content, and French/English routes.

The system pairs spacious page introductions with compact navigation, filters, and article metadata. Lexentia’s supplied logo guides the teal and purple palette. Motion supports reading and navigation; reduced-motion users receive visible content without waiting for the introductory animation. The homepage Insights carousel follows the user’s WhatsApp screenshot layout; its easing is an implemented interpretation because the live reference could not be loaded under the cloud network allowlist.

**Key Characteristics:**

- Pale surfaces with ink text and teal actions.
- Upright Fraunces headings paired with Geist interface text.
- Fine borders, gently rounded panels, and offset control shadows.
- Dark editorial sections with soft-green navigation cues.
- Equivalent French/English layouts and explicit article-language labels.

## Colors

The frontmatter preserves the CSS token names; several names predate the reference redesign.

### Primary

- **Teal:** primary actions, current navigation, links, and focus. The historical `lime` token now maps to a darker teal for readable white button text.
- **Purple:** secondary accents, private-law cards, icons, and the logo’s right-hand lettering. The historical `bronze` token now maps to dark teal.

### Secondary

- **Sage / lime-soft / pink:** soft practice and supporting surfaces.
- **Green / amber:** small logo-pattern accents; pale green illustration and mint surfaces keep the reference’s quiet editorial character.

### Neutral

- **Paper / paper-warm / cream:** page canvas, grouped controls, and white cards respectively.
- **Ink / ink-soft:** primary copy and secondary metadata.
- **Forest / forest-deep:** violet-black editorial surfaces.
- **Line / line-strong / line-dark:** dividers and surface boundaries appropriate to their context.

## Typography

Fraunces and Geist are self-hosted through `next/font/google` with swap loading. Use the frontmatter hierarchy for headings; the body token describes the legal reading style, whose measure is capped at 70 characters. Introductions use larger sans-serif text, while metadata uses tabular numerals.

Hero and page headlines use balanced wrapping and upright, regular-weight Fraunces. Insight-card titles use a tighter card-specific treatment (1.5rem, 1.25 line height, −0.025em tracking). Eyebrows remain mixed-case sans-serif labels. The footer repeats the name at a fluid, oversized sans-serif scale.

## Layout

Content is centered within a 1144px maximum width, with 24px horizontal section padding. The fixed pale header is 78px tall, with a wider 1600px internal container. Page introductions reserve space below it. Sections use the frontmatter spacing; section padding increases at 768px.

Desktop hero copy sits beside the Brussels landmark. Below 768px it centers above the illustration; section headings stack, and article rows move the date above the title. At 1024px the header replaces its disclosure menu with full navigation. Footer columns expand at 640px and 1024px. Filters wrap, and search/sort fields become a two-column group at 768px.

The homepage carousel uses a two-column layout: heading and navigation at left, one white card at right. Columns are proportioned 0.85fr/1fr with a fluid 3–7rem gap; below 768px they stack with a 2rem gap. Slides are separated by 24px. Court catalogue rows use a 100px date column, a flexible title/body column and a 180px case-reference column. Below 768px the date and case number share the top line above the title; secondary court metadata and the row arrow are hidden. Court search spans the filter panel above three fields at desktop widths.

Allow French labels and long article titles to wrap. Locale switching preserves the equivalent route, and articles retain their original-language annotation.

## Elevation & Depth

Most surfaces are flat and distinguished by tone or hairline borders. Primary buttons use a hard ink offset shadow, shifting subtly on hover and compressing on activation. The homepage feed has a shallow offset base; quick-link cards acquire an offset shadow on hover or keyboard focus. These are structural edges rather than diffuse ambient glows.

Exact shadows, focus treatments, easing, and responsive boundaries are recorded in the sidecar. Arrow movement uses a short horizontal shift; reduced motion collapses animation and transition durations.

## Shapes

Controls use the small radius; panels and archive cards use the medium radius. Homepage carousel cards and their clipped viewport use 28px corners; navigation controls are 48px circles. Filters and light tags use fully rounded ends. Dark editorial tags instead have compact, lightly rounded rectangular silhouettes. The wordmark uses serif teal-to-purple lettering and an eight-square pattern. Dark sections have straight boundaries.

## Components

- **Buttons:** dark-teal primary actions with an ink border and offset shadow; transparent secondary actions with a stronger neutral border. Both include visible keyboard focus. Primary hover deepens the teal; active state compresses its shadow. Dark-section secondary buttons use violet-gray borders and hover surfaces.
- **Fields:** white search, select, and contact fields with a small radius, a 48px minimum height, and a strong neutral border. Focus changes the border to teal; invalid contact fields use a red border. Keep visible labels.
- **Tags and filters:** light tags identify categories or languages. Category filter buttons expose selection through `aria-pressed`, switching from white to ink with white text. Filtering, search, and sorting update immediately with a visible live result count and clear-filters actions.
- **Cards:** insight cards have serif titles, muted metadata, category tags, and a ruled reading footer. The linked title covers the card. Dark variants preserve the structure with violet-black surfaces, pale text, and soft-green arrows. Lawyer cards use bordered white panels and truthful portrait placeholders while commissioned images are pending.
- **Navigation:** the fixed header has an underlined active destination, equivalent-route language switching, and a compact contact action. The mobile disclosure exposes `aria-expanded`; Escape closes it and returns focus to its toggle. Route changes close it. Footer links underline on hover and keyboard focus.
- **Wordmark and icons:** preserve the supplied serif Lexentia mark and coloured-square pattern. Use the shared stroked SVG icons, including external-link arrows, rather than relying on font glyph coverage.
- **Disclosures:** client situations use native disclosure rows. Their text remains available without an animation dependency.


### Landmark and editorial motion

The homepage uses a pale-green Brussels Palace of Justice illustration. Slow architectural drift and sparse drifting leaves stay in the artwork region, with a pause control. Decorative loops pause offscreen and in hidden tabs; reduced-motion preferences keep the artwork static and content visible.

### Homepage Insights carousel

The five latest Insights are ordered by decision/publication date. Each card contains a date and optional case number, an upright serif title, an excerpt, purple court/category metadata and a bordered reading action. Cards are white on the warm section, with a 400px minimum height (430px below 768px). The active card moves horizontally with a 750ms `cubic-bezier(0.22, 1, 0.36, 1)` transition; departing and incoming cards fade over 650ms with the same easing. Mouse/touch drag tracks the pointer directly and proportionally crossfades adjacent cards. A horizontal swipe beyond 45px advances one card; vertical scroll and pinch zoom remain available.

Previous/next controls are bounded, disabled at the ends, and accompanied by a polite live slide count. There is no autoplay. Inactive slides are inert and hidden from assistive technology. Reduced motion changes slides immediately. The archive link continues to the complete searchable Insights page.

### Court catalogue and source pages

The Insights archive leads with 84 imported Court of Justice and General Court records, presented as fine-rule date/title/case-reference rows. Search, court and matched-topic filters, decision-date/name sorting, a live result count, clear-filter recovery and 20-row pagination support scanning. Each row opens a local case page with official English text, decision date, case number, CELEX, translated navigation, source links and import-date/topic-match disclosures. This is a dated static snapshot, with no automatic monitoring claim or attributed firm author. The 28 firm-authored analyses retain their separate warm section and existing archive controls.

### Practice artwork and section reveals

Both practice cards carry decorative, transparent architectural illustrations in the hero’s fine-line style. European institutions sit behind civil-service law; Brussels townhouses sit behind private law. Use low opacity and a directional fade so all copy, chips and actions remain readable. Ordinary sections reveal once as they enter the viewport; reduced motion keeps them visible immediately.

### Supplied logo

The header and footer use a crisp SVG reconstruction of the supplied Lexentia wordmark: serif teal-to-purple lettering, its bilingual tagline, and eight coloured squares above the dotless i. The squares make one short, staggered movement on entry; reduced motion leaves the mark static. Unique gradient IDs allow both instances to coexist.

The original raster bytes were unavailable; the reconstruction preserves the supplied mark’s composition without claiming exact type outlines.

## Do's and Don'ts

### Do:

- **Do** retain the EU JUST reference grammar across shared routes and components.
- **Do** use upright Fraunces headings, Geist interface text, and the implemented palette.
- **Do** preserve visible focus, reduced-motion behavior, translated labels, and equivalent language routes.
- **Do** retain source links, draft notices, article-language labels, and truthful portrait placeholders.

### Don't:

- **Don't** restore the replaced grid backdrop or italic green hero treatment.
- **Don't** replace shared SVG arrows with characters that depend on font glyph coverage.
- **Don't** invent firm claims, credentials, testimonials, or photography to fill a component.
