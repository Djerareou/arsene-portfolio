# Arsène DJERAREOU — Creative Futurism portfolio V2

React + TypeScript + Vite + Tailwind portfolio, extended from the existing V1. No new dependencies. All existing routes, contact details, proposed FCFA tariffs, seven services and five project maturity levels are retained.

## Design and interaction

Deep midnight canvas, cyan connection details, electric-violet editorial accents, large typography, asymmetric project layouts and geometric SVG connection studies. The official photograph of Agri-Scan Elite remains at `public/images/projects/agri-scan-elite.jpg`; no replacement image or fabricated results are used.

Framer Motion handles a staggered Hero entry, a single finite orbital movement, once-only viewport reveals, short route fades and the mobile menu. No continuous rendering loop, 3D engine or pointer-tracking effect is added. Reduced-motion preferences disable entrance movements and reduce CSS transitions.

The mobile menu fills the viewport, traps keyboard focus, supports Escape, locks background scrolling and makes main/footer inert while open. It closes on navigation, history changes and a resize to desktop. Anchor navigation scrolls to and focuses the target after routing. Query-string service selection on Contact remounts the message draft for the selected service.

## Run

Use Node.js 22.12+ or a compatible newer release supported by Vite 8.

```sh
npm ci
npm run lint
npm run build
npm run dev
```

Run `npm run preview` after building to inspect the production bundle.

## Routes

`/`, `/about`, `/projects`, `/projects/agri-scan-elite`, `/services`, `/pricing`, `/contact`, and a fallback 404 view.

React Router uses BrowserRouter. Vercel rewrites are in `vercel.json`; Netlify fallback is in `public/_redirects`. Other hosts need an equivalent SPA fallback. The 404 is a client view; a host may return HTTP 200. Metadata is managed by React 19 on navigation and is not pre-rendered for crawlers that do not execute JavaScript.

## Content

`src/data/portfolio.ts` remains unchanged from V1: two international +235 numbers, Gmail, LinkedIn, GitHub, FCFA ranges, Communication & Content and all other services/projects. Only verified public data belongs in that file. Never add tokens or private credentials.

Contact uses mailto/tel links and a locally prepared message. Opening an email app does not send the message automatically. No message-delivery backend is present.

Prices remain indicative proposals rather than verified market prices. Currency zone (XOF/XAF), taxes, scope and additional costs are agreed separately.

Agri-Scan Elite is a working prototype: two units built, PCBs in fabrication. Further testing/integration remains proposed work; measurement accuracy, certification, field deployment and production readiness are not claimed.

## Git base and icon compatibility

V2 starts from main `1becdc6`. PR #2 was still open at the start of V2; its `Github` → `ExternalLink` and `CheckCircle2` → `CircleCheck` corrections are included without merging that PR. Icon names are checked against upstream lucide-react 1.37.0 sources, matching package-lock.json. The npm distribution cannot be inspected locally until dependency installation succeeds.

## Validation and mobile review

Cloud `npm ci` is blocked by the configured proxy (`connect EPERM 172.31.1.125:8080`). Lint and build were attempted but cannot complete without ESLint and TypeScript. No successful local build, browser accessibility audit, screenshot review or measured performance score is claimed.

Static checks cover preserved data/dependency files, relative imports, all routes, absence of placeholder links, icon names, and the original image reference. Confirm the PR's Vercel deployment before visual review.

On the Vercel preview, review:

- Home, About, Projects, case study, Services, Pricing, Contact and unknown routes.
- 320/375/390 px phones, tablet and desktop widths; confirm no horizontal scrolling.
- Menu open/close, Escape, Tab/Shift+Tab, background scroll lock and browser Back.
- Home service links to `/services#…`, refreshing a nested route, and quote links selecting the correct Contact service.
- Both telephone links, Gmail, LinkedIn/GitHub, and the official photograph.
- Keyboard focus/skip link, contrast, OS reduced motion and readable content after reveals.
- Existing prices and project maturity copy, plus Communication & Content.

The GitHub-connected Vercel projects should create branch previews on the PR. Preview URLs and deployment state must be obtained from Vercel's actual status/comment rather than guessed. Do not merge before approval.
