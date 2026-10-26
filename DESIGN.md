---
name: The Church Recording Studio
description: V2 — console to cathedral; one continuous dark photographic workspace.
colors:
  bg: "#171310"
  surface: "#28211c"
  ink: "#f2eee5"
  muted: "#c9bfb2"
  accent: "#bea083"
  light: "#e1dfd9"
  dark-ink: "#29201a"
  console-ground: "#10100f"
  api-field: "#0b1823"
  video-field: "#101e18"
  people-field: "#211711"
  archive-field: "#1e1b13"
  field-rule: "#7b746b"
  placeholder: "#5e554c"
  action-hover: "#755a40"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(84px, 24vw, 390px)"
    fontWeight: 400
    lineHeight: 0.72
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(64px, 10vw, 160px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(28px, 3.1vw, 48px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Chivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.015em"
  label:
    fontFamily: "Chivo, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
rounded:
  square: "0"
spacing:
  gutter: "clamp(20px, 3.4vw, 64px)"
  section: "120px"
  chapter-gap: "50px"
  form-column: "26px"
components:
  action-link:
    backgroundColor: "transparent"
    rounded: "{rounded.square}"
    padding: "14px 0"
  action-link-hover:
    textColor: "{colors.action-hover}"
  console-load:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.square}"
    padding: "16px 24px"
  console-load-hover:
    backgroundColor: "{colors.accent}"
  room-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "6px 0"
  room-option-hover:
    textColor: "{colors.ink}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.square}"
    padding: "10px 0"
  console-section:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: "6px 0"
  console-section-selected:
    textColor: "{colors.ink}"
  playback:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.square}"
    padding: "17px 24px"
  playback-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: The Church Recording Studio — V2

## Overview

**Creative North Star: "Console to cathedral"**

The custom API console and actual timber nave form a continuous arrival: forty faders prepare, the building opens, and full photographic rooms replace the architectural field. A continuous dark working environment gives each chapter its own actual-photo background and subtle ground hue: API, video, Dana’s standalone profile, and the archive. Stone is reserved for the practical contact close and utility reading surfaces. All owned text is uppercase, concise, and factual.

Current direction is **Console to cathedral**, taste seed **212058381** (hero-object draw). The earlier **The name as a monument** direction, taste seed **1026571597**, and workflow reference **e15d7a746b8f6d92** are preserved as superseded history in `docs/DESIGN.md`. `work/revision-34/DIRECTION.md` initiated this code-led redesign; the user’s later sequential-fader correction supersedes its simultaneous-fader sentence. V2 is the user-facing version; package version is 4.0.0. Source is current authority, not an approved image comp. V2 local build/path checks and independent five-width visual review are complete; see docs/QA-REPORT.md for scope and limits.

**Key Characteristics:**
- One console canvas travels from opening to Equipment.
- Full cathedral and room photographs, monumental Caslon, restrained Chivo controls.
- Continuous dark chapters with varied silhouettes and a native sideways gallery.
- Concise established-studio facts, user-confirmed video/green-screen service, and practical inquiry.

## Colors

### Primary
- **Aged brass** (`accent`): local feedback, range accent, and focus.

### Neutral
- **Dark timber** and **console black** retain the page/opening grounds; **surface** supports local controls.
- **API field**, **video field**, **people field**, and **archive field** are the respective deep blue, green, timber-brown, and archive grounds for actual-photo chapters.
- **Warm paper** and **muted stone** carry primary and secondary text.
- **Light stone / dark timber ink** close the site at Contact and support legal/recovery pages. They no longer alternate as beige promotional bands.
- **Field rule**, **placeholder**, and **action hover** retain native-field and local-action legibility.

Actual timber, glass within room photographs, metal, and instrument colors remain photographic evidence rather than UI motifs. The frontmatter is normative; source materials in the 3D scene are not additional interface palette tokens.

## Typography

Self-hosted regular Libre Caslon Display provides the broad Church name, chapter/room titles, portrait names, and footer. Self-hosted Chivo provides regular body/interface text, with bold/black reserved for its existing identity roles. Body remains 16px/1.65; helper/label roles remain 13px. Paragraphs normally stop at 65ch.

**The Uppercase Presentation Rule.** Display owned site text and placeholders in uppercase through CSS; preserve typed values and exported inquiry data.

The frontmatter display is the large CHURCH line. THE uses `clamp(36px,5vw,80px)` with line-height 0.9 above it. Hero type becomes 23.3vw at 1000px and 23vw at 700px, with phone line-height 0.85 and THE at 12vw. The reusable V2 chapter display is `--display`; broad API title uses `clamp(90px,16vw,240px)`/0.85 and phone 22vw. Room name uses `clamp(70px,11.5vw,184px)`/0.9; mastering is deliberately smaller. Detail titles use `--detail`. Footer expands to `clamp(70px,16vw,245px)`/0.85, then 15.5vw on phones. These are actual role variants, not a uniform heading ladder.

## Layout

One fluid gutter (`--gutter`) aligns identity, native controls, copy, and contact. V2 major composition breakpoints are 1000px, 700px, and the 360px narrow adjustment; shared utilities retain their own 1100/800/600px changes.

Hero is a sticky 100svh photographic stage (minimum 650px, maximum 1200px). The near-full-width name is centered near the lower roof, with THE above CHURCH; the location sits near the upper left. Native scrolling scales the photograph and carries the title until Rooms replaces that field. At 700px and below the hero becomes relative, minimum 640px, and scroll-driven travel is removed. Short desktop viewports use a 560px minimum. No custom scrolling replaces native input.

Rooms is a full stage, not a sidebar/tab-card layout: three wide horizontal Caslon choices above a 70svh photograph (550–900px). The large room name sits entirely below the photograph with zero overlap/margin transform; the information area has 42px top padding, 32px on phones. Description/facts/action sit to its right in a 1.25fr/1fr grid. At 700px choices become Chivo 14px, media becomes 66svh (380–620px), and details stack with three-column facts; at 360px facts become two columns. Choices remain Studio A, Studio B, and Mastering only.

Equipment uses a broad console canvas at `clamp(500px,49vw,800px)`, 540px at 1000px and 420px at 700px. Controls/details sit below in three columns, then stack. Instrument photo and factual index use 50% image with a 9vw gap, stacking on phones. Video uses the actual full-width session photo (16/8.3 desktop; 1.2 phone) beside concise service inquiry. Personnel now contains Dana alone. His image/name profile uses a `minmax(250px,36%)` image column and 9vw gap, 42%/remainder with a 24px gap on phones. The 4/5 portrait keeps its focal point at 50% 0; the title uses `clamp(64px,8.8vw,140px)`, adapting to phone and narrow sizes. Personnel features Dana only. Mastering inquiries use the studio contact form and studio email.

The gallery is a native horizontal overflow strip with proximity scroll snapping, varied widths/heights, and ordinary browser scrolling. It is keyboard-focusable. Instagram remains a separate responsive profile widget with `calc(225px + 66.667cqw)` height. Contact closes on light stone with the full inquiry form; footer returns to a broad name. Utility headers, footers, fields, privacy, and recovery retain shared materials.

## Elevation & Depth

Flat surfaces, real low-opacity chapter photographs, and native-scroll staging supply depth. There are no floating-card shadows or glass masks. API uses the actual installation photograph at 16% opacity in grayscale; its canvas stage is transparent. Video uses the live-room photograph at 22% grayscale; Dana uses the cathedral roof at 28% with grayscale 0.8; gallery uses tape at 13% grayscale. Contact uses the piano at 12% grayscale in its left column, becoming a 390px top field on phones. Phone API and gallery background opacities reduce to 12%. These noninteractive photographic fields sit behind content and must retain legibility. Console lighting/scene shadow belongs to the physical visual study, not interface elevation.

**The One Console Rule.** Move the existing console canvas from opening into Equipment; do not duplicate the WebGL scene for the handoff.

**The Sequential Fader Rule.** Start all forty faders at zero. Each fader covers 2.5% of overall progress in channel order; never raise every cap simultaneously.

The opening is a full-screen native dialog on console black, with a local console model, real installation-photo fallback, small identity/API headings, DOM percentage, 4px readiness rail, and Enter Site action. Five settled preparation outcomes—hero, three fonts, model/fallback—set progress targets. A normal run reveals progress after the first successful model/fallback frame over at least 2400ms; exit starts by 5200ms and releases after 580ms. Skip/Escape is immediate into exit; reduced/global-paused motion removes minimum/travel and uses a 1400ms deadline. It does not claim total download bytes. Refresh and replay return to hero; initial deep links/explicit skip remain useful. Replay remounts the same console rather than rebuilding a duplicate.

## Shapes

Photographs, native fields, text actions, and playback trigger are square. The former diamond playback and rotated room-selection marker are superseded. Room selection is a thin underline. Directional icons remain real stroked SVG. Native field rules and underlined text remain functional, not decorative panel borders.

## Components

### Identity, actions, and fields

Header has one Recording Studio descriptor; hero has one Pittsburgh label. Repeated promotional taglines are removed. Open inquiry actions retain transparent ground and real SVG direction; visible focus normally uses a 3px brass outline offset 5px, dark ink on stone. Links/buttons/summaries prevent label selection, while inputs/textareas/previews stay selectable. Shared line fields and native validation retain reviewable email/copy/download handoff. Service options include Video services and Green screen, based on the user’s supplied facts.

### Room controls

Horizontal unfilled Caslon options use muted text with ink for the selected state and hover. Selected option is underlined, not a chip or diamond. Desktop padding is 6px 0 with minimum 58px height; phone uses 8px 0, minimum 44px, Chivo 14px (13px at 360px). Arrow/Home/End navigation remains. Photographs/details swap without a fabricated room-volume model.

### Console

Opening is noninteractive progress, then the same mounted canvas becomes interactive in Equipment. Native section buttons expose overview/channels/EQ/bus. Native channel 1–40 selection and range control, pointer picking/orbit, rotation buttons, arrows/Home, descriptions, and fallback remain. Outside bounded progress/camera movement, model rendering is driven by input/resize/visibility. It is an interpreted visual study with no audio or measured-dimension claim.

### Video and services

Play Session is now a rectangular ink-on-dark action over the real session image: warm-paper background, dark text, 17px 24px padding, SVG plus label; hover uses brass. Keyboard focus has a 3px ink outline offset 5px, without shadow. Video is explicit rather than autoplay. Video services and green-screen availability have direct inquiry paths; no extra production capabilities are invented.

### Gallery, social, and opening share image

Native sideways photographs open the existing modal viewer. The former window-focused lead is replaced by the actual Sony reel-to-reel photograph captioned Analog tape. Glass may remain naturally within API/Rhodes photographs; no isolated glass UI motif returns. Instagram is a real lazy profile/recent-post iframe with retry/status and direct link; the visible sign-in-warning paragraph was removed at the user’s request, while privacy remains accurate. V2 sharing must use an actual 1200 × 630 console-opening capture, replacing the older hero preview. The current JPEG is generated from the actual console opening at 73% progress and is 1200 × 630; file dimensions were checked. The fresh V2 visual matrix is complete; see docs/QA-REPORT.md for verification scope.

### Motion

Native-scroll hero title/image travel is bounded to one viewport, absent on phones and reduced/global-paused motion. Room photograph changes use a 750ms shutter/crop settle. Console camera transitions remain brief/input-driven. The user-requested ambient reading motion retains its idle wait and yields to input/forms/media/canvas/dialogs/selection/menu/hidden state and reduced/global motion; no dedicated controls, displayed numeric speed, or separate stored preference are introduced. Content remains visible by default.

## Do's and Don'ts

### Do:
- **Do** use actual building, equipment, performance, and staff photography.
- **Do** retain one Recording Studio identity label and one Pittsburgh hero label.
- **Do** vary full-stage rooms, broad console, Dana’s standalone profile, and sideways gallery silhouettes.
- **Do** preserve native controls, readiness/skip semantics, reduced motion, and photographic fallbacks.
- **Do** distinguish user-supplied capabilities from independently sourced evidence.

### Don't:
- **Don't** reintroduce a stained-glass UI motif, promotional slogans, decorative gauges, or invented room geometry.
- **Don't** duplicate the console canvas or move every opening fader together.
- **Don't** claim the V2 browser, accessibility, performance, or visual checks passed before they run.
- **Don't** claim a sent inquiry, measured console reconstruction, or audio engine.

## V3 desktop hero spacing

This overrides the V2 hero values above only at widths greater than 700px. The hero is 100svh with a 480px minimum and no maximum. Title size is `min(22vw,370px,42svh)`; bottom reserve is `clamp(110px,20svh,190px)`. THE is .2em with a .4em bottom margin and line-height 1. The location starts at 122px; bottom links use 14px text and `clamp(24px,4svh,42px)` bottom clearance. Existing mobile composition and native scroll motion remain. This prevents the uncapped width-based title from colliding in short-wide desktop windows.

Website pages and assets default to local relative URLs. The sharing image is the bundled API console loading capture. No publishing host is hardcoded; optional deployment configuration adds public metadata only when supplied a host.
