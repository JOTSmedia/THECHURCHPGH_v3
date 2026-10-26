# V2 verification

Website: The Church Recording Studio, user-facing V2, package 4.0.0. Final findings and scope are also recorded in FINISH-REVIEW.md.

## Completed checks

- `npm run check`: 132 local references, fragments, metadata, image attributes, and required-file checks across 13 HTML pages; no broken local paths.
- `npm run build`: static `_site/` generated successfully. All four authored scripts pass syntax checks.
- Repository-path copy configured to `https://example.github.io/THECHURCHPGH/`; the same 132 checks pass. This exercises absolute metadata, canonical URLs, share image URLs and recovery-page base paths without changing relative asset/import paths.
- Source style lint: 7 changed files, 0 FAIL / 0 WARN.
- Independent rendered review: 1440×900, 768×1024, 677×724, 390×844 and 320×568. All 16 inspector images and 8 supplemental lower-page/contact captures reviewed. No page overflow, broken images or uncaught errors recorded in that matrix. The narrow email wrap was corrected and recaptured.
- Studio A title clearance from the image: 42px desktop; 32px at the current 677px view and 320px phone. No negative title offset remains.
- Browser refresh from contact reopens the console sequence, clears the hash, then returns to scroll position zero. After opening, exactly one canvas is mounted in the equipment chapter.
- Actual loading screen captured at 73% as the 1200×630 sharing image. OG/Twitter metadata on all four primary pages references it; dimensions and file bytes verified.
- Forty sequential faders: 0% all down; 50% first twenty raised; 51% next fader at 40% travel; 100% all forty raised. Module lifecycle checks cover canvas transfer, zero reset/reuse, reduced-motion exit, deep-link bypass and disposal of a model resolving after skip. Runtime screenshots show sequential raised/unraised banks.
- Studio B/Mastering selection updates image, details and inquiry action. Native Instagram public account/posts rendered; removed sign-in notice is absent. Personnel contains Dana only. Links are nonselectable; form text remains editable.
- Video inquiry chooses Video services. Green screen prepares a reviewable email message; it does not send. Video/green-screen messages do not assume a Studio A booking. No email was transmitted in testing.

## Inspector findings, correctly scoped

The final inspector records one heuristic FAIL at 677px: it mistakes the previous section's room inquiry and equipment links for eyebrow labels above the next heading. These are functional links in separate semantic sections with generous spacing, visually inspected by the independent reviewer. No decorative eyebrow was added. Seven advisories cover owned warm ink, fluid type roles, on-demand video, deliberate native horizontal gallery, name-only title despite the visible Recording Studio brand, title over its own hero photo, and motion counts that do not count physical WebGL faders. The requested bounded loading screen is an explicit exception to the tool's 1.2-second title deadline.

The static Impeccable scan reports unresolved-CSS contrast/padding estimates and the explicitly requested uppercase presentation. Those static estimates are not a rendered contrast certification. The independent visual review found no material readability issue in the reviewed captures.

## Limits

This is a local browser and source/build review, not physical-device, assistive-technology, all-browser, Lighthouse or production-hosting certification. The full website is deployable; it has not been published by this task. Social platforms may cache their previews after deployment. Instagram/YouTube remain third-party services with direct-link fallbacks. The loader stays bounded if assets fail, and the model is explicitly illustrative. No claim is made that a recording, mix or audio engine runs in the model.

## Follow-up: roster removal and sharing image

Removed the former engineer’s remaining public text, direct email routing, unused portraits and packaged documentation references. Browser check confirms Mastering inquiry selects Mastering and prepares an email addressed to the studio; no message was sent. The source/package scan has no remaining name or portrait references. Sharing metadata uses `api-console-loading-v2.jpg`, an actual 1200 × 630 API opening capture, including on legacy redirect pages.

## V3 desktop hero and local URL follow-up

The desktop title is now bounded by viewport height, with a reserved gap above the bottom links. Inspector captures at 1440×900, 768×1024 and 390×844 returned 0 FAIL and 7 existing design warnings. The three first-screen images were reviewed. Independent additional review at 1280×720, 1920×1080, 1920×600 and 2560×600 found no clipping or overflow and all bottom links in the initial viewport. Title-to-link gaps were at least 52px in that additional matrix. A 2560×600 scrolled capture confirmed the title exits before Rooms.

The prior public share-preview problem was a wrong-host image URL returning 404. At the user’s subsequent direction, V3 is delivered with only local relative page/asset references, including its API loading image, and without a canonical-host claim. `configure --local` restores that form; optional public configuration is tested separately and does not change the delivered local source. No live site was published or repaired by this delivery.

Final local validation: 133 checks across 13 pages passed; static build passed. Optional public-base configuration and return to local mode passed on an isolated copy. All 12 Open Graph/Twitter image paths resolve to the bundled API opening image. Browser verified local 404 navigation returns to the local homepage. Full-page sheet review found no adjacency regression; see V3-HERO-REVIEW.md.
