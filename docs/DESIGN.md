# The Church — design contract

Mode: experience, with a clear route to an inquiry.

On this page, the name of a former neighborhood church becomes a monumental title over the actual room built to carry sound. The spaces and their published dimensions provide the exploration, rather than generic audio particles or decorative spinning objects.

The dealt direction is **The name as a monument**, seed **1026571597**. A hero redraw was requested because the dealt typography-only hero conflicted with the explicit requirement for real studio imagery; the final hero places the real room behind the full-width name. No stock studio imagery is used. The palette proportions remain dark ground / light ink / restrained bronze; light sections use neutral limestone rather than yellow cream. Chivo is self-hosted with its license.

Ground #151613; surface #22231e; text #f0f1ed; secondary text #bcbbb0; bronze action #c4ad8b with #151613 text; neutral light chapter #e6e7e1 with #24251f ink. Square picture edges and buttons. One consistent outer gutter. Photos keep the warm light and real materials of this building.

Hero: the room fills the screen, a direct Pittsburgh descriptor and booking action appear immediately, and the name closes the frame. Phone: the name restacks into two lines and uses the cathedral portrait instead of the wide piano photograph. The layout moves through an architectural introduction, an integrated room selector, plain service rows, instrument photography, verified live performance, people, gallery and an inquiry.

Signature motion is the huge name rising into place while the room settles into frame. Supporting content enters once as its own elements, with no hidden-content dependency. Hover, focus and press states give local feedback. No scroll hijacking, custom cursor, autoplay sound, required intro or blocking preloader. Motion can be paused and respects the system preference.

Live interaction: choose Studio A, Studio B, mastering, or a spatial study. The 3D study has the published 30 × 60 × 30 foot main dimensions, an open cutaway, and accessible rotation controls. It loads only on request and renders only on input/resizing. Geometry is illustrative where measurements are unavailable. A photo and dimensions remain if JavaScript or WebGL is unavailable.

Other interactions: an accessible native photo dialog, equipment search with a result count and no-results recovery, prepared inquiry preview with email/copy/download options, and optional official YouTube playback. Contact is explicitly an email handoff, never a simulated successful submission.

FORM: Monumental architectural typography over real studio imagery, with the room volume as the live interaction; workflow reference seed:e15d7a746b8f6d92. The taste direction above independently records seed 1026571597.

## Durable implementation record

The final extracted design system is recorded in [the root DESIGN.md](../DESIGN.md), with machine-readable tokens and responsive, component, and motion guidance. Its extensions and self-contained component specimens are in [`.impeccable/design.json`](../.impeccable/design.json). This file preserves the approved direction and seed references; the root record describes the completed code.

## User-directed church identity refinement
The user explicitly requested that the website reflect its converted-church setting and that all site text be uppercase. The opening now leads with the actual timber cathedral ceiling, a dark timber field and a self-hosted Libre Caslon Display serif for the monumental name and section titles. Chivo remains the interface/body face. Colors shift to dark timber, aged brass and neutral stone. Uppercase is a visual presentation rule, including controls, form placeholders and utility pages; typed email addresses and names retain their underlying values so inquiries stay accurate. The Desktop destination is THECHURCHPGH. This supersedes the previous mixed-case Chivo-only presentation notes.

## Revision 3.2 — superseding experience contract

The direction remains **The name as a monument** (taste seed **1026571597**, workflow reference **e15d7a746b8f6d92**). Revision 3.2 uses the actual narrow stained-glass bay and cathedral photograph as separate hero planes, a deliberate two-line Caslon name, all-capital presentation, and concise established-studio copy. The earlier sales introduction and filled room tabs are superseded by a vertical editorial room index and direct factual descriptions.

The user explicitly requested a loader/opening, overriding the earlier no-intro rule. The implemented native-dialog opening is skippable with Enter site or Escape, bounded even if resources stall, normally shown once per session, and replayable. Reduced/paused motion shortens and removes its animation. It does not gate on WebGL.

The new optional study depicts the studio's custom 40-channel API 2448 split frame: two channel banks and a central workstation. Native section buttons, channel selector 1–40, fader, rotation buttons, and keyboard views accompany the model; it renders on input and brief camera transitions, not while idle. Geometry is interpretive, controls produce no audio, and the installation photo remains a fallback. The user subsequently removed the room-volume study and its selector option entirely. Rooms now offers only Studio A, Studio B, and Mastering; the API console is the sole 3D experience. Earlier room-model references in this file are superseded. Session playback is explicit; inquiry is still a practical email handoff.

Current tokens and responsive/motion details are authoritative in [the root DESIGN.md](../DESIGN.md) and [the sidecar](../.impeccable/design.json). `assets/experience.css` follows the shared stylesheet and supersedes its legacy homepage rules. Desktop destination remains **THECHURCHPGH**. No approved image comp exists; this is a source-derived record of the current build.

## Revision 3.3 — superseding hero, opening, and reading behavior

**The name as a monument**, taste seed **1026571597**, and workflow reference **e15d7a746b8f6d92** remain historical direction anchors. Current homepage hero uses the complete actual cathedral photograph; the isolated glass strip and split-plane composition are superseded. Opening uses a full studio photograph that keeps stained glass within timber/vault context. A horizontal progress bar and percentage follow five real critical-asset readiness outcomes, with a 1.35-second minimum, 3.2-second hard stop, and 0.58-second exit; Enter site/Escape remain available. Reduced/global-paused motion shortens the sequence. Every homepage refresh returns to the hero and replays opening, with no session flag; initial deep links remain preserved unless refreshing. Footer replay returns to the hero.

The shared CSS foundation now matches utility headers, footers, typography, and materials; privacy/error content uses stone chapters. Portraits are consistently 4/5, with face-preserving positions. Real Instagram profile and recent posts use a lazy iframe with container-responsive height, reload/status recovery, and a direct profile link. The social card must be a 1200 × 630 screenshot of the actual hero. Action text is nonselectable while editable fields and inquiry previews remain selectable.

The user requested ambient scrolling at a fixed reading pace after a 12-second idle wait and explicitly requested no auto-scroll pause/resume controls. Input immediately stops/rearms it; forms, media, dialogs, navigation, text selection, reduced motion, hidden state, and global motion pause take priority. There is no stored auto-scroll preference. This supersedes earlier no-idle-travel assumptions while preserving native interaction. The API console remains the sole 3D experience, and rooms remain Studio A, Studio B, and Mastering. [Root DESIGN.md](../DESIGN.md) and [sidecar](../.impeccable/design.json) hold the current implementation contract.

## Latest user correction — typographic opening supersedes all opening imagery

The user explicitly rejected the stained-glass loading screen. The opening now has **no imagery at all**: flat dark-timber ground, monumental Caslon wordmark, small studio/location line, horizontal readiness rail and percentage, and skip action. It has no glass strip, architecture/background photograph, or glass UI motif. The readiness set is now **four** resources: hero image decode and the three font loads. Existing refresh reset, bounded timings, reduced-motion handling, and replay remain. Earlier opening-image descriptions above are historical and superseded. The hero remains the full actual cathedral photograph; real studio window photography remains in the gallery as photography rather than a UI motif.

## V2 / package 4.0.0 — current superseding direction

Current direction: **Console to cathedral**, taste seed **212058381** (hero-object). Prior **The name as a monument**, seed **1026571597**, workflow reference **e15d7a746b8f6d92**, and revision 3.x descriptions above remain historical only. The `work/revision-34/DIRECTION.md` simultaneous-fader sentence is superseded by the later explicit sequential requirement.

One forty-channel API 2448 starts every cap at zero. Caps rise in channel order, each representing 2.5% of overall preparation; they do not all rise together. Hero, three fonts, and model/fallback form the five preparation outcomes. `assets/opening.js` bounds normal readiness to a minimum 2400ms from the first visual frame, a 5200ms exit deadline plus 580ms close; reduced/global-paused motion and Skip/Escape retain a shorter route. The same canvas mounts from opening into Equipment and reuses on replay, rather than duplicating scenes. The new social card is a 1200 × 630 loading-console capture; generation/verification remains pending here.

A near-full-width Church name and actual cathedral lead a continuous native-scroll architectural field. Full-stage room photographs replace the former editorial sidebar; broad console, instruments, full-width session/video, opposing portrait/name rows, a native sideways photo strip, Instagram, stone contact, and broad-name footer vary the silhouettes. No promotional slogans, stained-glass UI, invented room geometry, or repeating beige feature bands. Keep one Recording Studio header descriptor and one Pittsburgh hero label. API console is the sole 3D study; rooms remain Studio A, Studio B, and Mastering.

Video services and green-screen availability are explicit user-supplied facts, with inquiry choices. The gallery’s former window-focused photo is replaced by the actual Sony reel-to-reel tape photograph captioned Analog tape. Glass may remain naturally within the API/Rhodes photographs; unused glass assets are archival only. The visible Instagram warning paragraph is removed; direct profile/retry and accurate privacy information remain. API’s primary installation page establishes forty channels; the earlier Neve’s forty-eight-channel specification must not be attributed to the API.

V2 is delivered under **Desktop/THECHURCHPGH/v2**, preserving the existing website. Current design tokens are in [root DESIGN.md](../DESIGN.md) and [sidecar](../.impeccable/design.json). Browser, interaction, responsive, accessibility, build, deployment-path, and final image verification are pending for this redesign; previous passes do not certify V2.

## Latest V2 refinement — actual photographic chapter fields and standalone Dana

The latest source supersedes the uniform-black/paired-personnel V2 notes: API field **#0b1823** with the actual installation photo at16% grayscale and transparent model stage; video field **#101e18** with actual room at22%; personnel field **#211711** with actual cathedral roof at28% (grayscale0.8); archive field **#1e1b13** with tape at13%; Contact retains stone with piano at12%. Mobile API/archive photo opacity is12%.

Room names no longer overlap the image: margin/transform are zero and the detail area has42px top padding,32px mobile. Dana is the only personnel article, with a36% desktop image column and42% mobile; Mastering remains available, with inquiries directed to the studio contact form and studio email. These are content/layout changes, not a claim that Mastering left the business.

The actual loading-console screenshot at73% is generated and its JPEG dimensions are verified at1200 ×630. It replaces the hero card. The fresh independent visual matrix is running; full V2 QA remains pending until that review is recorded.

## V2 delivery verification
The independent five-width visual review is complete, with the narrow email wrap resolved. Local build and 132 path/metadata checks pass, including a repository-base configuration. Loading-screen share JPEG is verified at 1200 × 630. See QA-REPORT.md and FINISH-REVIEW.md for actual scope and limits; earlier pending statements are superseded.
