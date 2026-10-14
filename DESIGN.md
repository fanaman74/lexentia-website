---
name: Lexentia
description: EU JUST reference styling applied to Lexentia's bilingual law-firm website.
colors:
  ink: "#272734"
  ink-soft: "#5d6170"
  paper: "#fafcfb"
  paper-warm: "#edf3f1"
  news-card: "#e7e9ec"
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
  practice-summary:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  situation-title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.1vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  article-preview-title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.65vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: "-0.025em"
  article-heading:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  article-body:
    fontFamily: 'Geist, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.0625rem"
    lineHeight: 1.8
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
    backgroundColor: "{colors.news-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.carousel}"
    padding: "clamp(1.75rem, 3vw, 2.5rem)"
  carousel-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "50%"
    width: "48px"
    height: "48px"
  practice-panel:
    width: "min(100%, 420px)"
  practice-panel-mobile:
    width: "min(100%, 320px)"
  practice-panel-home:
    width: "100%"
    height: "var(--matched-team-height, auto)"
  practice-disclosure-summary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.practice-summary}"
    padding: "1.5rem 0"
  practice-disclosure-summary-mobile:
    padding: "1.25rem 0"
  situation-link:
    textColor: "{colors.ink}"
    typography: "{typography.situation-title}"
  situation-link-hover:
    textColor: "#06666b"
  situation-action:
    textColor: "#06666b"
  situation-image:
    rounded: "{rounded.lg}"
    width: "100%"
  article-preview:
    textColor: "{colors.ink}"
    typography: "{typography.article-preview-title}"
  article-preview-image:
    backgroundColor: "{colors.paper-warm}"
    rounded: "{rounded.lg}"
    width: "100%"
  article-date:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "9px 12px"
  article-action:
    textColor: "#06666b"
  article-heading:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream}"
    typography: "{typography.article-heading}"
    padding: "145px 24px 3.5rem"
  article-source-note:
    backgroundColor: "{colors.paper-warm}"
    rounded: "{rounded.md}"
    padding: "{spacing.panel}"
  article-filter-summary:
    backgroundColor: "{colors.paper-warm}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
  article-page-selected:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
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
- Architectural practice panels above compact summaries and controlled distant bird flocks; homepage dimensions match team cards.
- Separate source-backed Latest News and firm-authored Insights archives; a forward-looping Latest News carousel.
- Illustrated situation links and native practice-section disclosures with direct fragment navigation.
- Illustrated firm-article previews with compact date badges, dark reader headings and explicit source-note panels.

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
- **News-card:** neutral grey reserved for the homepage Latest News carousel cards; the surrounding section uses the page-paper canvas.
- **Ink / ink-soft:** primary copy and secondary metadata.
- **Forest / forest-deep:** violet-black editorial surfaces.
- **Line / line-strong / line-dark:** dividers and surface boundaries appropriate to their context.

## Typography

Fraunces and Geist are self-hosted through `next/font/google` with swap loading. Use the frontmatter hierarchy for headings; the body token describes the legal reading style, whose measure is capped at 70 characters. Introductions use larger sans-serif text, while metadata uses tabular numerals. Article preview and reader headings use their dedicated frontmatter roles; phone preview titles increase to 1.5rem. Article prose uses the article-body role with a 70-character measure, serif subheadings, semantic lists and warm quote panels.

Hero and page headlines use balanced wrapping and upright, regular-weight Fraunces. Page headlines can break long words at narrow widths with `overflow-wrap: anywhere`. Insight-card titles use a tighter card-specific treatment (1.5rem, 1.25 line height, −0.025em tracking). Eyebrows remain mixed-case sans-serif labels. The footer repeats the name at a fluid, oversized sans-serif scale.

## Layout

Content is centered within a 1144px maximum width, with 24px horizontal section padding. The fixed pale header is 78px tall, with a wider 1600px internal container. Page introductions reserve space below it. Sections use the frontmatter spacing; section padding increases at 768px.

Desktop hero copy sits beside the Brussels landmark. Below 768px it centers above the illustration; section headings stack, and article rows move the date above the title. At 1024px the header replaces its disclosure menu with full navigation. Footer columns expand at 640px and 1024px. Filters wrap, and search/sort fields become a two-column group at 768px.

The homepage section sequence is hero, Welcome, Team, the “Specialist advice. Human-scale practice.” firm section, Practice, Latest News, Situations, EU and Contact. The complete firm section follows Team, including its introduction and principles. Welcome uses a stacked layout at every width: its title, body paragraphs and About link share the same left edge. A fine top rule has 36px of inset before the title; the body begins 20px beneath it, keeps 20px spacing between its children and a 70-character maximum measure.

The homepage carousel uses a two-column layout: heading and navigation at left, one grey card at right. Columns are proportioned 0.85fr/1fr with a fluid 3–7rem gap; below 768px they stack with a 2rem gap. Slides are separated by 24px. On desktop the viewport extends across the entire left copy column using `margin-left: calc(-85% - clamp(3rem, 6vw, 7rem))` and equal positive left padding. Its mask becomes fully opaque at 45% of the expanded window, allowing the entire departing grey card to travel beneath the fixed copy at z-index 2. The outer carousel contains the moving track. On phones the viewport has no extension and retains a 24px fade edge. Court catalogue rows use a 100px date column, a flexible title/body column and a 180px case-reference column. Below 768px the date and case number share the top line above the title; secondary court metadata and the row arrow are hidden. Court search spans the filter panel above three fields at desktop widths.

On the expertise page, practice cards sit within a centered group capped at 864px, with a 20px gap. Individual cards are centered and capped at 420px, reduced to 320px below 768px; the group becomes two columns at 1024px. These compact panels retain a 1:1 aspect ratio. The homepage team and practice grids both span the full 1144px content width, use a 32px gap and form two columns from 768px, with one column below. Each homepage practice card fills its column and matches the height of the corresponding team card through the home-only variant; without JavaScript it remains a full-width square. Both variants keep dedicated artwork above the text: 44%/56% rows on desktop and 38%/62% below 768px. The original summaries use three clamped lines, reduced to two below 360px; titles and the reading footer remain visible. Full service descriptions and tags stay on the practice pages.

The homepage situation heading sits above a full-width grid of six illustrated links. The grid has three equal columns from 1024px, two from 768px and one below 768px. It starts 2.5rem below the heading, with 3rem row gaps and 1.5rem column gaps; phone row gaps reduce to 2.5rem. The heading spans up to 38 characters, and image panels retain a 4:3 aspect ratio.

The firm-article archive uses four equal columns from 1024px, two from 768px and one below 768px, with 3.5rem row gaps and 1.5rem column gaps. Reading pages pair a flexible article column with a 280px sidebar and a fluid 2.5–5rem gap. Below 1024px the sidebar stacks beneath the article as two groups; below 768px those groups form one column. Lead artwork retains a 4:3 ratio and is capped at 600px wide. Related previews use three columns from 768px and one below, with 2rem gaps. The dark heading band reduces its top padding to 125px on phones.

Practice detail pages group all content sections into fine-rule disclosures. Summary rows have an 88px minimum height, reduced to 76px below 768px, so wrapped labels expand naturally. Fragment targets reserve 144px above them for the fixed header and sticky section navigation.

Allow French labels and long article titles to wrap. Locale switching preserves the equivalent route, and articles retain their original-language annotation.

## Elevation & Depth

Most surfaces are flat and distinguished by tone or hairline borders. Primary buttons use a hard ink offset shadow, shifting subtly on hover and compressing on activation. These are structural edges rather than diffuse ambient glows.

Exact shadows, focus treatments, easing, and responsive boundaries are recorded in the sidecar. Arrow movement uses a short horizontal shift; reduced motion collapses animation and transition durations.

## Shapes

Controls use the small radius; panels and archive cards use the medium radius. Homepage carousel cards use 28px corners; navigation controls are 48px circles. Situation-image panels use the large radius with 4:3 artwork. Practice panels use 12px corners and separate artwork/text regions; expertise panels keep a square silhouette, while homepage panels match the team-card height; their image-region pause controls are 34px circles. Filters and light tags use fully rounded ends. Dark editorial tags instead have compact, lightly rounded rectangular silhouettes. The wordmark uses serif teal-to-purple lettering and an eight-square pattern. Dark sections have straight boundaries.

## Components

- **Buttons:** dark-teal primary actions with an ink border and offset shadow; transparent secondary actions with a stronger neutral border. Both include visible keyboard focus. Primary hover deepens the teal; active state compresses its shadow. Dark-section secondary buttons use violet-gray borders and hover surfaces.
- **Fields:** white search, select, and contact fields with a small radius, a 48px minimum height, and a strong neutral border. Focus changes the border to teal; invalid contact fields use a red border. Keep visible labels.
- **Tags and filters:** light tags identify categories or languages. Category filter buttons expose selection through `aria-pressed`, switching from white to ink with white text. Filtering, search, and sorting update immediately with a visible live result count and clear-filters actions.
- **Cards:** shared compact insight cards have serif titles, muted metadata, category tags, and a ruled reading footer. The firm archive and reader-related sections use the illustrated ArticlePreview pattern described below. The linked title covers the card. Dark variants preserve the structure with violet-black surfaces, pale text, and soft-green arrows. Lawyer cards use bordered white panels with the supplied portrait where available and truthful monogram placeholders where no portrait is supplied.
- **Navigation:** the fixed header includes separate Insights and Latest News destinations with an underlined active destination, equivalent-route language switching, and a compact contact action. The mobile disclosure exposes `aria-expanded`; Escape closes it and returns focus to its toggle. Route changes close it. The footer also links to both archives; its links underline on hover and keyboard focus.
- **Wordmark and icons:** preserve the supplied serif Lexentia mark and coloured-square pattern. Use the shared stroked SVG icons, including external-link arrows, rather than relying on font glyph coverage.
- **Disclosures:** both practice detail pages use native `details`/`summary` rows for their overview, service groups, approach, related analyses where present, and lawyers. Their content remains available through native interaction without JavaScript.
- **Situation links:** the six homepage situations are whole-card links with architectural artwork, the existing title and description, and an underlined Explore action. They lead directly to the matching practice disclosure.


### Portraits

The shared Portrait component fills Nathalie de Montigny’s existing image frame with centered `object-fit: cover` and `object-position: center`. Proportional scaling preserves the photograph’s aspect ratio; overflow is cropped around the center when the photograph and frame have different proportions, so the image fills the box without distortion or letterboxing. The photograph has no hover zoom. Frame proportions and card sizes stay unchanged: homepage large cards use 4:3 frames, compact lawyer cards use 16:9 and the profile’s default frame uses 4:5. The same fitting treatment applies wherever the portrait appears, including home, team, profile and expertise pages. Preserve the source URL and localized alt text. Magali’s monogram placeholder and its existing behavior remain unchanged; do not substitute stock or generated people.

### Practice-section disclosures

Every practice content section starts closed. Clicking the summary, or activating it with Enter or Space, opens or closes that section; several sections may stay open together. The summary pairs the upright serif practice-summary title with a teal 22px chevron. Hover and open states turn the summary teal; the chevron rotates 180 degrees over 220ms with the shared editorial easing. Fine strong-neutral borders separate rows, and open bodies retain 2.5rem bottom spacing. Reduced motion removes the chevron transition. Keep the native disclosure semantics and visible keyboard focus rather than adding a competing button or exclusive accordion behavior.

Sticky in-page links open their target before the browser follows the native anchor. Selecting the same fragment again reopens a section the reader has closed. On arrival with a URL fragment, or during hash/history navigation, the matching disclosure opens before an immediate scroll; fragments inside a disclosure also open their containing section. Without JavaScript, ordinary fragment links and native summary activation remain usable.

### Homepage situation grid

The static grid presents all six translated situation titles and descriptions beneath the section heading. Each entire card is one semantic link, including its decorative image, upright serif situation-title, muted description and darker-teal underlined Explore action; do not nest a separate button inside it. Card hover and keyboard focus turn the title the same darker teal used for the action, preserving readable contrast on the warm section surface, and hover shifts the action arrow 4px over 180ms with the editorial easing. Phone titles use 1.5rem. Image panels use pale green or pale lavender within the existing architectural illustration style.

The six images, in order, show the Brussels Palace of Justice, Cinquantenaire, Atomium, European institutions, Brussels townhouses and the Bruges belfry. The Atomium, Cinquantenaire and Bruges assets extend the existing generated landmark family; exact prompts and provenance accompany the assets in [SOURCES.md](public/images/SOURCES.md). Images have empty alt text because the link title supplies the meaning. Their matching section fragments are `career`, `investigations`, `medical`, `career`, `business` and `private-international`; the first four open civil-service sections, and the last two open private-law sections in the selected locale.

All six cards appear in normal document flow and remain directly reachable by keyboard and touch. The situation grid has no horizontal scrolling, next-card preview, snap track, navigation controls, visible-range status or autoplay. Its links and layout work without JavaScript; reduced motion disables the action-arrow transition. The separate Latest News carousel retains its existing behavior.

### Landmark and editorial motion

The homepage uses a pale-green Brussels Palace of Justice illustration. Slow architectural drift and sparse drifting leaves stay in the artwork region. A flock of three distant geometric wing marks crosses the hero sky, controlled by the existing animation pause button alongside the camera and leaves. On phones, the birds sit outside the clipped landmark artwork in a clear 94–122px strip between the 78px fixed header and the hero’s 135px copy inset; horizontal crossings keep the text clear. Decorative loops pause offscreen and in hidden tabs; reduced-motion preferences keep the artwork and birds static and content visible.

### Homepage Latest News carousel

The five latest external court records are ordered by decision date. Each card contains a date and case number, an upright serif official title, a source excerpt, purple court metadata and a bordered reading action. Cards use the neutral-grey news-card surface on the page-paper section, with a 400px minimum height (430px below 768px). The parent track moves the entire card horizontally over 900ms with `cubic-bezier(0.22, 1, 0.36, 1)`. Departing articles fade over 900ms linearly as the full grey surface passes under the left copy; incoming articles fade over 650ms with the track easing. A separate content wrapper clears outgoing glyphs over 180ms with `ease-out`, keeping the fixed heading and controls readable, and restores incoming content over 350ms. Mouse/touch drag tracks the pointer directly and proportionally crossfades adjacent articles while keeping their content opaque and disabling transitions. A horizontal swipe beyond 45px advances one card; vertical scroll and pinch zoom remain available.

Automatic advance runs every 6.5 seconds. A copy of the leading card follows the fifth card, allowing each cycle to continue left; after 950ms the track resets to the identical first card without a backward animation. Track, article and content transitions are disabled during that reset. Previous/next controls reflect the current bounds; a dedicated pause control exposes the manual pause state. Autoplay also pauses on hover, focus, dragging, offscreen visibility and hidden tabs. The slide count uses `aria-live="off"` during autoplay and `polite` otherwise. Inactive cards are inert and hidden from assistive technology. Reduced motion disables autoplay and changes slides immediately. The archive link opens Latest News. The earlier homepage Insights preview and four quick-link cards have been removed.

### Court catalogue and source pages

Latest News (`/en/latest-news`, `/fr/actualites`) holds 84 imported Court of Justice and General Court records, presented as fine-rule date/title/case-reference rows. Search, court and matched-topic filters, decision-date/name sorting, a live result count, clear-filter recovery and 20-row pagination support scanning. Each row opens a local case page under the same archive with official English text, decision date, case number, CELEX, translated navigation and breadcrumbs, source links and import-date/topic-match disclosures. This is a dated static snapshot, with no automatic monitoring claim or attributed firm author. Legacy court detail URLs under Insights redirect with HTTP 301 to the new canonical routes; equivalent-language links and sitemap entries use those routes.

Insights (`/en/insights`, `/fr/analyses`) contains the 28 firm-authored analyses in an illustrated archive with category/search/sort controls and pagination. It remains separate from the 84 court records in Latest News. Related firm-analysis blocks exclude imported court records. Each archive remains accessible from header and footer navigation.

### Illustrated firm-article archive

The user’s supplied old Lexentia archive and article screenshots guide these supporting-page structures within the existing pale canvas, Fraunces/Geist typography and teal palette. The archive uses the short Insights / Analyses heading and existing introduction. Its enhanced browser shows 12 articles per page; category, search (`q`), newest/oldest sort and page state persist in the URL and restore on arrival or browser history navigation. Filtering and sorting reset pagination. Previous/next controls disable at the boundaries; numbered buttons expose the current page through `aria-current="page"` and use the teal selected-page treatment. Page changes scroll immediately to the results with 105px header clearance. A polite result status reports the current range; clear-filter and empty-result recovery remain available.

On phones, a native initially closed filter disclosure replaces the expanded desktop controls. Its warm 48px-minimum summary includes an 18px chevron that rotates when open. Search and sort keep visible labels; category pills use `aria-pressed`. Without JavaScript, all 28 article links render and inactive filter controls are hidden; pagination begins only after enhancement.

Each ArticlePreview is a whole-card link with a decorative 4:3 image panel, compact date badge, categories, original-language serif title, localized summary and a language note when the title language differs from the interface. Summary excerpts clamp to three lines. The badge sits 14px from the image’s top-left corner, has a 64px minimum width and stacks localized month, serif day and original year; its accessible label gives the full date. It uses the frontmatter dark-teal background and white text. The underlined reading action and title hover/focus use the same darker teal as situation actions; the arrow shifts 4px over 180ms with editorial easing and remains still under reduced motion. Keep one link per card, visible focus and the original publication date.

### Firm-article reader and source note

The reader opens with a dark heading band, pale original-language title and muted breadcrumbs. Below it, decorative lead artwork and the date badge precede author, original publication date and linked categories. The sidebar lists counts for seven normalized categories and four recent firm articles, excluding the current article; category links open the archive with its category parameter. Recent items retain their original-language titles and dates. A back link returns to Insights / Analyses, and up to three related illustrated previews sit on a warm section beneath the reader.

Full original article bodies have **not** been migrated. Current readers show a clearly labeled Summary / Résumé and a warm source-note panel linking to the original Lexentia article URL. The panel distinguishes the local summary from the full text. The original website could not be fetched in this session because the cloud network allowlist blocked browser access; do not describe the summaries as reproduced full articles.

When verified content becomes available, the renderer accepts original-language paragraph, level-two/three heading, ordered/unordered list and quote blocks. Text is escaped rather than injected as HTML; the prose region identifies the original language. Existing localized paragraph bodies remain supported as a separate fallback. Neither capability establishes that full text is already present.

The archive and readers use three generated editorial illustrations: documents, EU court and finance, chosen by topic. They extend the existing sage illustration family; original assets remain preserved. Exact generation prompts are embedded in the PNGs, and [SOURCES.md](public/images/SOURCES.md) records provenance. These decorative assets do not claim to reproduce the old article photographs. Sidecar specimens show labeled plain image slots so they remain self-contained without embedding the raster files.

### Homepage practice-card matching

Homepage practice panels share the team grid’s width, column boundaries and 32px gaps. Their heights match the corresponding team card rather than a fixed desktop estimate. The MatchedPracticeCards wrapper reads each visible team card and sets its matching practice card’s `--matched-team-height`; a ResizeObserver tracks subsequent size changes from responsive layout, font loading and content. Locale changes refresh the pairing. Cleanup disconnects the observer and removes the height overrides. This behavior is scoped to the homepage; the expertise page retains its compact square caps, and the no-JavaScript homepage fallback is a full-width square. Existing artwork, bird pause controls, summaries and reading actions keep their styles and behavior.

### Practice artwork and section reveals

Both practice cards carry decorative architectural images above their text in the hero’s fine-line style. European institutions illustrate civil-service law; Brussels townhouses illustrate private law. Artwork is contained at the bottom of its dedicated panel with 0.85 opacity, rather than placed behind copy. Each sky contains three small geometric birds, drawn as two stroked wing paths; staggered 15s, 19s and 17s flights and 0.9–1.25s wingbeats give them quiet movement. Each image panel has its own translated 34px circular pause/resume control. Wing marks remain static under reduced motion, and the controls are then hidden. Original compact summaries and the reading footer sit below, without tag chips; the practice detail pages retain all services and tags. Ordinary sections reveal once as they enter the viewport; reduced motion keeps them visible immediately.

Homepage team cards, firm principles, practice cards and situation links use the opt-in individual reveal mode: each item starts its own once-only animation when its top reaches 85% of the viewport. The two team cards, three principles, two practice cards and six situation links each move from 16px below their resting position and hidden opacity/visibility to their visible position over 650ms with `power3.out`. This mode has no group stagger delays, so lower rows wait for their own viewport entry, including on phones. Other StaggerGroup instances keep their existing group-triggered behavior. The shared Section reveal remains in place; reduced-motion and no-JavaScript states keep the content visible by default. Sidecar specimens show the visible resting state rather than recreating scroll-triggered animation.

### Supplied logo

The header and footer use a crisp SVG reconstruction of the supplied Lexentia wordmark: serif teal-to-purple lettering, its bilingual tagline, and eight coloured squares above the dotless i. The squares repeat a gentle 4.8s ease-in-out loop with 90ms offsets, each rotating around its own center (`transform-box: fill-box`). At 0%, 12%, 65% and 100% they retain their original opacity and position; at 28% they shift 1px right and 3px up, rotate 90 degrees and soften to 0.6 opacity; at 44% they shift 1px down, keep the rotation and return to full opacity. The lettering and tagline stay fixed.

The loop is paused by default and runs only while the visibility hook sets `data-running="true"`. Hover or visible keyboard focus on the enclosing link pauses it; offscreen artwork and hidden tabs also pause. Reduced motion removes the animation and restores the original opaque, untransformed squares. Without JavaScript, the paused original mark remains visible. Unique gradient IDs allow header and footer instances to coexist.

The original raster bytes were unavailable; the reconstruction preserves the supplied mark’s composition without claiming exact type outlines.

## Do's and Don'ts

### Do:

- **Do** retain the EU JUST reference grammar across shared routes and components.
- **Do** use upright Fraunces headings, Geist interface text, and the implemented palette.
- **Do** preserve visible focus, reduced-motion behavior, translated labels, and equivalent language routes.
- **Do** retain source links, draft notices, article-language labels, and truthful portrait placeholders.
- **Do** fill supplied portrait frames with centered cover, preserving proportional scaling and cropping overflow without distortion.

### Don't:

- **Don't** restore the replaced grid backdrop or italic green hero treatment.
- **Don't** replace shared SVG arrows with characters that depend on font glyph coverage.
- **Don't** invent firm claims, credentials, testimonials, or photography to fill a component.
