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

The system pairs spacious page introductions with compact navigation, filters, and article metadata. Lexentia’s supplied logo guides the teal and purple palette. Motion supports reading and navigation; reduced-motion users receive visible content without waiting for the introductory animation. The homepage Latest News carousel follows the user’s WhatsApp screenshot layout; its easing is an implemented interpretation because the live reference could not be loaded under the cloud network allowlist.

**Key Characteristics:**

- Pale surfaces with ink text and teal actions.
- Upright Fraunces headings paired with Geist interface text.
- Fine borders, gently rounded panels, and offset control shadows.
- Dark editorial sections with soft-green navigation cues.
- Equivalent French/English layouts and explicit article-language labels.
- Square practice panels with architectural images above compact summaries and controlled distant bird flocks.
- Separate source-backed Latest News and firm-authored Insights archives; a forward-looping Latest News carousel.

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

The homepage carousel uses a two-column layout: heading and navigation at left, one white card at right. Columns are proportioned 0.85fr/1fr with a fluid 3–7rem gap; below 768px they stack with a 2rem gap. Slides are separated by 24px. On desktop the viewport extends 160px into the left copy region with a matching fade mask; the copy stays above it. On phones the viewport has a 24px fade edge. Court catalogue rows use a 100px date column, a flexible title/body column and a 180px case-reference column. Below 768px the date and case number share the top line above the title; secondary court metadata and the row arrow are hidden. Court search spans the filter panel above three fields at desktop widths.

Practice cards retain a 1:1 aspect ratio with dedicated artwork above the text: 44%/56% rows on desktop and 38%/62% below 768px. The original summaries use three clamped lines, reduced to two below 360px; titles and the reading footer remain visible. Full service descriptions and tags stay on the practice pages.

Allow French labels and long article titles to wrap. Locale switching preserves the equivalent route, and articles retain their original-language annotation.

## Elevation & Depth

Most surfaces are flat and distinguished by tone or hairline borders. Primary buttons use a hard ink offset shadow, shifting subtly on hover and compressing on activation. These are structural edges rather than diffuse ambient glows.

Exact shadows, focus treatments, easing, and responsive boundaries are recorded in the sidecar. Arrow movement uses a short horizontal shift; reduced motion collapses animation and transition durations.

## Shapes

Controls use the small radius; panels and archive cards use the medium radius. Homepage carousel cards use 28px corners; navigation controls are 48px circles. Square practice panels use 12px corners and separate artwork/text regions; their image-region pause controls are 34px circles. Filters and light tags use fully rounded ends. Dark editorial tags instead have compact, lightly rounded rectangular silhouettes. The wordmark uses serif teal-to-purple lettering and an eight-square pattern. Dark sections have straight boundaries.

## Components

- **Buttons:** dark-teal primary actions with an ink border and offset shadow; transparent secondary actions with a stronger neutral border. Both include visible keyboard focus. Primary hover deepens the teal; active state compresses its shadow. Dark-section secondary buttons use violet-gray borders and hover surfaces.
- **Fields:** white search, select, and contact fields with a small radius, a 48px minimum height, and a strong neutral border. Focus changes the border to teal; invalid contact fields use a red border. Keep visible labels.
- **Tags and filters:** light tags identify categories or languages. Category filter buttons expose selection through `aria-pressed`, switching from white to ink with white text. Filtering, search, and sorting update immediately with a visible live result count and clear-filters actions.
- **Cards:** insight cards have serif titles, muted metadata, category tags, and a ruled reading footer. The linked title covers the card. Dark variants preserve the structure with violet-black surfaces, pale text, and soft-green arrows. Lawyer cards use bordered white panels and truthful portrait placeholders while commissioned images are pending.
- **Navigation:** the fixed header includes separate Insights and Latest News destinations with an underlined active destination, equivalent-route language switching, and a compact contact action. The mobile disclosure exposes `aria-expanded`; Escape closes it and returns focus to its toggle. Route changes close it. The footer also links to both archives; its links underline on hover and keyboard focus.
- **Wordmark and icons:** preserve the supplied serif Lexentia mark and coloured-square pattern. Use the shared stroked SVG icons, including external-link arrows, rather than relying on font glyph coverage.
- **Disclosures:** client situations use native disclosure rows. Their text remains available without an animation dependency.


### Landmark and editorial motion

The homepage uses a pale-green Brussels Palace of Justice illustration. Slow architectural drift and sparse drifting leaves stay in the artwork region. A flock of three distant geometric wing marks crosses the hero sky, controlled by the existing animation pause button alongside the camera and leaves. On phones, the birds sit outside the clipped landmark artwork in a clear 94–122px strip between the 78px fixed header and the hero’s 135px copy inset; horizontal crossings keep the text clear. Decorative loops pause offscreen and in hidden tabs; reduced-motion preferences keep the artwork and birds static and content visible.

### Homepage Latest News carousel

The five latest external court records are ordered by decision date. Each card contains a date and case number, an upright serif official title, a source excerpt, purple court metadata and a bordered reading action. Cards are white on the warm section, with a 400px minimum height (430px below 768px). The active card moves horizontally with a 750ms `cubic-bezier(0.22, 1, 0.36, 1)` transition; departing and incoming cards fade over 650ms with the same easing, including the desktop fade into the left copy region. Mouse/touch drag tracks the pointer directly and proportionally crossfades adjacent cards. A horizontal swipe beyond 45px advances one card; vertical scroll and pinch zoom remain available.

Automatic advance runs every 6.5 seconds. A copy of the leading card follows the fifth card, allowing each cycle to continue left; after 800ms the track resets to the identical first card without a backward animation. Previous/next controls reflect the current bounds; a dedicated pause control exposes the manual pause state. Autoplay also pauses on hover, focus, dragging, offscreen visibility and hidden tabs. The slide count uses `aria-live="off"` during autoplay and `polite` otherwise. Inactive cards are inert and hidden from assistive technology. Reduced motion disables autoplay and changes slides immediately. The archive link opens Latest News. The earlier homepage Insights preview and four quick-link cards have been removed.

### Court catalogue and source pages

Latest News (`/en/latest-news`, `/fr/actualites`) holds 84 imported Court of Justice and General Court records, presented as fine-rule date/title/case-reference rows. Search, court and matched-topic filters, decision-date/name sorting, a live result count, clear-filter recovery and 20-row pagination support scanning. Each row opens a local case page under the same archive with official English text, decision date, case number, CELEX, translated navigation and breadcrumbs, source links and import-date/topic-match disclosures. This is a dated static snapshot, with no automatic monitoring claim or attributed firm author. Legacy court detail URLs under Insights redirect with HTTP 301 to the new canonical routes; equivalent-language links and sitemap entries use those routes.

Insights (`/en/insights`, `/fr/analyses`) contains the 28 firm-authored analyses and keeps its existing category/search/sort controls. Related firm-analysis blocks exclude imported court records. Each archive remains accessible from header and footer navigation.

### Practice artwork and section reveals

Both square practice cards carry decorative architectural images above their text in the hero’s fine-line style. European institutions illustrate civil-service law; Brussels townhouses illustrate private law. Artwork is contained at the bottom of its dedicated panel with 0.85 opacity, rather than placed behind copy. Each sky contains three small geometric birds, drawn as two stroked wing paths; staggered 15s, 19s and 17s flights and 0.9–1.25s wingbeats give them quiet movement. Each image panel has its own translated 34px circular pause/resume control. Wing marks remain static under reduced motion, and the controls are then hidden. Original compact summaries and the reading footer sit below, without tag chips; the practice detail pages retain all services and tags. Ordinary sections reveal once as they enter the viewport; reduced motion keeps them visible immediately.

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
