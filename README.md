# The Church Recording Studio — V3

Current package version: **4.1.0**. V3 is a static GitHub Pages redesign built around the studio’s actual cathedral and custom 40-channel API 2448. The console opening transfers the same WebGL canvas into Equipment; native-scroll room photography, video services, green-screen availability, Dana’s standalone profile, a sideways gallery, Instagram, and a reviewable email inquiry complete the site.

Delivery location: **Desktop/THECHURCHPGH/v3**. Preserve the existing website beside this version. V2 passed its local build/path checks and independent visual review at five widths. The loading-console share image is included. See docs/QA-REPORT.md for scope and limits.

## Publish to GitHub Pages

1. Create a GitHub repository. Upload **the contents of this folder**, including `.github/` and `.nojekyll`, to its root. The homepage `index.html` must be at the root, not inside another folder.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Push to the `main` branch (or run **Actions → Deploy to GitHub Pages → Run workflow**). The included workflow validates, configures public SEO URLs, builds and deploys the site.

No dependencies, API keys, external build service or contact backend is required. Public repositories can use GitHub Pages on GitHub Free. The workflow uses Node 22. Site assets are all local; the YouTube player loads only after a visitor asks for it. The official Instagram profile widget loads lazily near its section.

For a simple branch deployment instead, select `main` and `/ (root)` in Pages. First run `npm run configure -- https://OWNER.github.io/REPOSITORY/` and commit the resulting HTML, robots and sitemap changes. With a custom domain, configure its full URL instead.

## Preview locally

Install Node.js 22 or later, open a terminal in this folder, and run:

```sh
npm run dev
```

Open the address printed by the server (normally `http://127.0.0.1:4173`). Use `PORT=4174 npm run dev` if that port is busy.

You can double-click `index.html` for a basic offline preview. Browsers restrict local JavaScript modules, so the interactive console requires HTTP (the local preview above or GitHub Pages). The site gives a photo and explanatory fallback when 3D is unavailable.

## Check and build

```sh
npm run check
npm run build
```

`_site/` is the publication directory. Root source files also work directly with GitHub Pages. All internal CSS, JavaScript, images, fonts and navigation use relative paths, including on a repository subpath. The legacy site routes redirect to their new locations. The 404 page uses the configured public URL to return home even from deeply nested missing paths.

## Opening and console

`assets/opening.js` prepares five resource outcomes: the hero image, three local font loads, and the console model or its photographic fallback. All 40 faders start at zero. They rise **sequentially**, with each fader representing 2.5% of overall progress; they do not rise together. The accessible percentage and rail report prepared resource outcomes, not total website download bytes.

A normal run allows at least 2.4 seconds after the first model/fallback frame. The opening begins exit by 5.2 seconds and closes after its 0.58-second exit. Enter Site and Escape skip; reduced/global-paused motion removes the minimum and has a shorter hard deadline. Refresh returns to the hero and replays opening. Initial deep links and `?opening=skip` remain useful; `?opening=play` and footer Replay Opening request it explicitly.

When opening closes, the same console canvas moves into Equipment and gains interactive controls. No second scene is created for that handoff. Overview/channel/EQ/routing views, native channel selection 1–40, a fader range, rotation buttons, pointer orbit, and keyboard controls remain available. The study is interpretive and has no audio engine. If WebGL or a module fails, the installation photograph and useful text remain. Outside the bounded opening, the model draws for input, resize, visibility, and short camera transitions rather than an idle loop.

## Content and contact

The header identifies Recording Studio once; the hero identifies Pittsburgh once. Avoid repeated promotional taglines. Studio A, Studio B, and Mastering are the only room choices; there is no room-geometry model. Video services and green-screen availability are user-supplied facts, with corresponding inquiry options.

The form validates input, prepares reviewable text, and offers Open email app, Copy message, and Download message. It does not send to a server or report a successful send. Direct phone, email, staff, and map links remain available. Uppercase is presentation only; typed values remain intact.

The official Instagram profile iframe loads lazily and retains retry/status recovery and an Open Profile link. Instagram controls its feed and may require sign-in. YouTube loads only after Play Session and retains a direct link.

## Motion and accessibility

Semantic landmarks, visible focus, native fields/dialogs, keyboard room/model controls, reduced-motion support, persisted global motion pause, and photographic/no-script fallbacks are retained. Native scroll drives the sticky cathedral/title scene; it does not replace the visitor’s scrolling. User-requested ambient reading motion starts after idle time and yields immediately to activity, forms, media, dialogs, selection, hidden state, and reduced/global motion preferences. No dedicated auto-scroll controls or speed labels are shown.

## Editing

- Main content: `index.html`; inventory: `gear.html` (174 entries).
- Shared primitives: `assets/style.css`; V2 composition: `assets/experience.css`.
- Opening/canvas handoff: `assets/opening.js`; console geometry/control: `assets/console-3d.js`.
- Room/inquiry behavior: `assets/app.js`; scene/Instagram/console integration: `assets/experience.js`.
- Current design authority: `DESIGN.md` and `.impeccable/design.json`.
- Facts, provenance, and validation status: `docs/CONTENT-AUDIT.md`, `docs/ASSET-SOURCES.json`, and `docs/QA-REPORT.md`.

The V2 social preview is a **1200 × 630 capture of the console loading screen**, replacing the older hero card. The generated JPEG shows the actual loading scene at 73% and has verified 1200 × 630 dimensions; the fresh five-width visual review is complete. The Pages configuration rewrites absolute sharing URLs for the deployment base.

The older referenced V2 archive was unavailable to this chat; it was never inspected or merged. “V3” names this follow-up to the current redesign package. No public deployment was performed in this delivery. Existing studio/manufacturer/video photography retains its copyright; no open license is asserted. Preserve source credits and bundled Chivo, Libre Caslon Display, and Three.js licenses.

## Current presentation

Each chapter uses a restrained actual-photo field: API installation, video live room, Dana’s roof backdrop, gallery tape, and piano behind Contact. Room titles sit below their photograph with no overlap. Personnel features Dana only; Mastering inquiries route through the studio contact form and studio email. The prior website and `v2` remain alongside the new `v3` delivery.

The sharing image is the actual API console loading screen, served as `assets/images/api-console-loading-v2.jpg`. Open Graph, Twitter and structured data use that dedicated image path. The deployment configuration rewrites it to the final public base URL.

## V3 hero spacing and local paths

Desktop hero typography now responds to viewport height as well as width, with a reserved gap above the bottom links. The mobile composition is unchanged.

This package defaults to local, relative paths. No publishing hostname is embedded in the website’s page URLs, sharing-image URLs or structured data. `npm run configure -- --local` restores this portable configuration. The bundled sharing image is the actual API console loading screen. Outbound studio contact, Instagram, video and source-credit links remain intentional external destinations.

A public sharing service cannot fetch a file from your desktop. When publishing, the optional `npm run configure -- https://YOUR-DOMAIN/OPTIONAL-PATH/` command supplies the absolute image URL, canonical URL and sitemap required by services that need public metadata. The included deployment workflow performs that step on its build copy; the delivered source remains local. Do not edit page and image URLs individually.
