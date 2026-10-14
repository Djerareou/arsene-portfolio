# Arsène DJERAREOU — Engineering portfolio

A V1 extension of the existing React + TypeScript + Vite + Tailwind portfolio. The dark foundation and official Agri-Scan Elite photograph are preserved. Site copy is in English, matching the original portfolio.

## Run and verify

Use Node.js **22.12+** (or a compatible newer version supported by Vite 8).

```sh
npm ci
npm run lint
npm run build
npm run dev
```

For the production bundle, run `npm run preview` after building.

## Content and contacts

`src/data/portfolio.ts` holds identity, navigation, project maturity, service descriptions, proposed FCFA ranges and page metadata. Two supplied contact phone numbers and the public LinkedIn profile are configured. Set `contact.email` only when a verified public email is available. The GitHub profile is the existing known public account.

The Contact page prepares a message locally. When email is configured, it opens the user's email application; it does not submit to a server. With no email, it copies a draft and offers a visible draft if clipboard access fails. No message is sent automatically and no delivery backend exists.

Pricing ranges are proposals for discussion, **not verified market prices**. Confirm the FCFA zone (XOF/XAF), taxes, scope, payment terms and additional expenses in a quote.

## Routes and hosting

- `/`: Home
- `/about`: About
- `/projects`: all five projects and their declared maturity
- `/projects/agri-scan-elite`: case study
- `/services`: seven services
- `/pricing`: indicative proposed budgets
- `/contact`: configured channels and message drafting
- Any other route: 404 view

React Router uses `BrowserRouter`. The host must serve `index.html` for application routes while serving static files normally. `public/_redirects` provides a Netlify fallback; `vercel.json` provides a Vercel fallback. Configure an equivalent fallback on other hosts. Plain GitHub Pages does not support these rewrites: use an appropriate routing deployment configuration before hosting there. Direct nested-route navigation must be tested on the chosen host.

This is a client-rendered SPA. React 19 updates titles and descriptions on navigation. Per-page metadata is not pre-rendered for crawlers that do not execute JavaScript. The 404 view is client-side; the host fallback may return HTTP 200.

## Official image

Keep `public/images/projects/agri-scan-elite.jpg` from the original repository. It is used on Home and the case study, with responsive sizing and `object-contain`. No replacement image has been generated. The incomplete Cloud source snapshot could not retrieve binary assets; the delivery patch leaves the original photograph untouched.

## Validation checklist

In the Cloud session, dependency installation was blocked by the configured network proxy; the offline npm cache was also incomplete. `npm run lint` and `npm run build` were attempted but could not run because ESLint and TypeScript were not installed. A browser preview and runtime validation were therefore unavailable.

After installing dependencies:

1. Run lint and build, and resolve any reported errors before publication.
2. Check all six pages, the case study and an unknown route.
3. Navigate Home → Projects → Agri-Scan Elite → Projects; refresh nested routes on the actual host.
4. Check mobile widths of 320, 375, 390 and 768 px; open and close the menu, select a link and press Escape. Check for horizontal overflow.
5. Navigate with keyboard only; verify focus indicators, skip link, route focus and reduced-motion behaviour.
6. Verify the official image loads on Home and the case study.
7. Test the default copy-draft contact flow, clipboard failure fallback, and a configured email address opening the email app. Verify phone and LinkedIn only after real details are configured.
8. Check page titles and descriptions after navigation and read the FCFA pricing disclaimer.

## Applying the Cloud delivery

The Cloud branch is based on a **local source snapshot**, not a cloned Git history. Do not push that reconstructed history to the remote. Apply the supplied `portfolio-v1.patch` to a fresh clone instead, on `codex/portfolio-professionnel`. This preserves the real repository history and binary assets.

```sh
git clone https://github.com/Djerareou/arsene-portfolio.git
cd arsene-portfolio
git switch -c codex/portfolio-professionnel
git apply --check /path/to/portfolio-v1.patch
git apply /path/to/portfolio-v1.patch
# Remove the unused original Vite starter illustration, if present:
git rm --ignore-unmatch src/assets/hero.png
npm ci
npm run lint
npm run build
git add .
git commit -m "feat: complete professional engineering portfolio V1"
git push -u origin codex/portfolio-professionnel
```

Then open a Pull Request toward `main` using the supplied `PULL_REQUEST.md`. Do not merge until reviewed. If the branch already exists remotely, check it out and inspect its changes before applying the patch; do not overwrite or force-push it.
