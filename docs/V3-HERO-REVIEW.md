ROUND 1 — DESKTOP HERO SPACING FOLLOW-UP
Seen in one second: The Church name spans the actual cathedral interior; the roof and lettering remain the dominant elements.
Idea (one sentence): The studio’s converted church architecture frames its name, with the API console opening leading into the working rooms.
Live thing: Room selection and the interactive API console remain the established experience; this pass changes desktop hero spacing only.
Layout words by section: hero=photographic name / rooms=full-stage selector / console=equipment stage / instruments=photo-index / video=performance / people=portrait / inside=sideways archive / contact=split inquiry.
Scores: design 7 · usability 7 · creativity 8 · content 8.5 → overall 7.4
Caps applied: Conservative full-page rubric caps retained for the existing still-page warning (design 7) and plain text hero actions rather than a filled primary button (usability 7). These are inherited design choices, not regressions from the desktop-spacing change. The 7.4 score is below the general 7.5 target; this narrow review is not an award-level certification or a request to redesign approved sections.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. No unresolved spacing problem in the current desktop hero. The earlier short-wide title collision is resolved by height-bounded type; see hero-review/hero-1920x600.jpg and hero-review/hero-2560x600.jpg. No additional fix needed.
2. Existing motion warning remains in after/report.json. The still captures show the on-demand video poster and console fallback, not their active experiences (after/desktop-1440-page-01.jpg and page-02.jpg). Do not add unrelated motion as part of this spacing fix.
3. Existing hero actions remain quiet text links (hero-review/hero-1280x720.jpg). They are visible, separated from the title, and inside the viewport. Their treatment is an established direction; no spacing correction remains.

## Evidence inspected

Opened every one of the seven full-page sheet JPGs in `after/`: desktop 1440 pages 01–03, tablet 768 pages 01–02, and mobile 390 pages 01–02. Opened all five targeted hero-review JPGs: 1280×720, 1920×1080, 1920×600, 2560×600, plus 2560×600 after a 220px scroll. The main agent separately reviewed the three inspector fold captures.

The sheets show no regression at the hero/Rooms transition. Studio A remains below its photograph, clear of the preceding section. Equipment, video, Dana’s portrait, gallery, contact and footer retain their established layouts. Phone compositions remain intact. Sheet seams and gray empty contact-sheet cells are capture layout boundaries, not website clipping or page backgrounds.

## Targeted measurements

| Viewport | Location to title | Title to bottom links | Bottom link clearance | Page overflow |
| --- | ---: | ---: | ---: | ---: |
| 1280×720 | 149.94px | 71.20px | 28.80px | 0px |
| 1920×1080 | 375.52px | 104px | 42px | 0px |
| 1920×600 | 83.50px | 52px | 24px | 0px |
| 2560×600 | 83.50px | 52px | 24px | 0px |

No runtime exceptions were recorded during these four targeted captures. At the short-wide scrolled state, the title intentionally travels above the viewport (top −3px, bottom 249px); Rooms begins at 380px, so the two do not collide. The initial hero has no clipped title or links below the fold in these tested sizes.

## Inspector warnings in context

Current inspector result: **0 FAIL, 7 WARN**.

- `palette-cream`: the existing warm ink derives from the studio’s timber and lighting. This pass does not change the owned palette.
- `size-count`: fluid display roles produce multiple computed sizes; the new hero still follows the surrounding display family.
- `no-footage`: the existing performance is click-loaded YouTube footage. The still inspection sees its poster before playback.
- `side-scroll`: Inside is an intentional native sideways photographic archive, with a partial next image showing continuation. No page-wide overflow was measured.
- `name-only-title`: the header visibly says Recording Studio, and the hero labels Pittsburgh; the user requested concise copy without repeated positioning language.
- `pinned-over-picture`: the name intentionally occupies the actual cathedral photograph and exits upward. The targeted scroll capture shows no collision with Rooms.
- `still-page`: the inspector excludes the opening and does not exercise the on-demand console/video. It remains an existing rubric warning, not a new spacing failure.

## Disposition and limits

**The desktop hero spacing change is ready within the reviewed scope.** No further product edit is requested by this review. This is a visual regression check, not a metadata, deployment, complete accessibility, or cross-browser certification. The screenshots were captured in local headless Chrome with the loader skipped for page inspection; the targeted scroll check exercised the normal hero motion.
