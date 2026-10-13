---
name: Lexentia
description: EU JUST reference styling applied to Lexentia's bilingual law-firm website.
colors:
  ink: "#262626"
  ink-soft: "#5d6358"
  paper: "#fcfff7"
  paper-warm: "#f0f3e9"
  cream: "#ffffff"
  forest: "#0d0d13"
  forest-deep: "#14131f"
  sage: "#d6f0a6"
  bronze: "#4e7028"
  lime: "#a4e82a"
  lime-soft: "#eaffc5"
  pink: "#fff0f6"
  purple: "#7960b3"
  line: "#dce2d3"
  line-strong: "#bac5ac"
  line-dark: "#353340"
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
    textColor: "{colors.ink}"
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
---

# Design System: Lexentia

## Overview

The user-selected visual reference is [EU JUST](https://eujust.online). Its pale canvas, upright serif headlines, lime controls, fine borders, and dark editorial passages define the implemented atmosphere. Lexentia keeps its own wordmark, firm content, and French/English routes.

The system pairs spacious page introductions with compact navigation, filters, and article metadata. Motion supports reading and navigation; reduced-motion users receive visible content without waiting for the introductory animation.

**Key Characteristics:**

- Pale surfaces with ink text and lime actions.
- Upright Fraunces headings paired with Geist interface text.
- Fine borders, gently rounded panels, and offset control shadows.
- Dark editorial sections with lime navigation cues.
- Equivalent French/English layouts and explicit article-language labels.

## Colors

The frontmatter preserves the CSS token names; several names predate the reference redesign.

### Primary

- **Lime:** primary actions, wordmark tile, selection, and dark-section arrows.
- **Bronze:** green focus outlines, current navigation underline, and light-card hover borders.

### Secondary

- **Sage / lime-soft / pink:** soft practice and supporting surfaces.
- **Purple:** line icons on quick links.

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

Desktop hero copy sits beside the Europe map. Below 768px it centers above the map; section headings stack, and article rows move the date above the title. At 1024px the header replaces its disclosure menu with full navigation. Footer columns expand at 640px and 1024px. Filters wrap, and search/sort fields become a two-column group at 768px.

Allow French labels and long article titles to wrap. Locale switching preserves the equivalent route, and articles retain their original-language annotation.

## Elevation & Depth

Most surfaces are flat and distinguished by tone or hairline borders. Primary buttons use a hard ink offset shadow, shifting subtly on hover and compressing on activation. The homepage feed has a shallow offset base; quick-link cards acquire an offset shadow on hover or keyboard focus. These are structural edges rather than diffuse ambient glows.

Exact shadows, focus treatments, easing, and responsive boundaries are recorded in the sidecar. Arrow movement uses a short horizontal shift; reduced motion collapses animation and transition durations.

## Shapes

Controls use the small radius; panels and cards use the medium radius. Filters and light tags use fully rounded ends. Dark editorial tags instead have compact, lightly rounded rectangular silhouettes. The wordmark pairs a bordered lime tile with the uppercase firm name. A shallow wave marks the transition into selected dark sections.

## Components

- **Buttons:** lime primary actions with an ink border and offset shadow; transparent secondary actions with a stronger neutral border. Both include visible keyboard focus. Primary hover brightens the lime; active state compresses its shadow. Dark-section secondary buttons use violet-gray borders and hover surfaces.
- **Fields:** white search, select, and contact fields with a small radius, a 48px minimum height, and a strong neutral border. Focus changes the border to bronze; invalid contact fields use a red border. Keep visible labels.
- **Tags and filters:** light tags identify categories or languages. Category filter buttons expose selection through `aria-pressed`, switching from white to ink with white text. Filtering, search, and sorting update immediately with a visible live result count and clear-filters actions.
- **Cards:** insight cards have serif titles, muted metadata, category tags, and a ruled reading footer. The linked title covers the card. Dark variants preserve the structure with violet-black surfaces, pale text, and lime arrows. Lawyer cards use bordered white panels and truthful portrait placeholders while commissioned images are pending.
- **Navigation:** the fixed header has an underlined active destination, equivalent-route language switching, and a compact contact action. The mobile disclosure exposes `aria-expanded`; Escape closes it and returns focus to its toggle. Route changes close it. Footer links underline on hover and keyboard focus.
- **Wordmark and icons:** preserve the lime initial tile and Lexentia name. Use the shared stroked SVG icons, including external-link arrows, rather than relying on font glyph coverage.
- **Disclosures:** client situations use native disclosure rows. Their text remains available without an animation dependency.


### Landmark and editorial motion

The homepage uses a pale-green Brussels Palace of Justice illustration. Slow architectural drift and sparse drifting leaves stay in the artwork region, with a pause control. The analysis section uses a flowing wave and a once-on-entry scan with staggered card highlights, plus pause/replay controls. All decorative motion pauses offscreen and in hidden tabs; reduced-motion preferences keep the artwork static and cards visible.

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
