# IRIIC website

Website for the **Institute of Research, Innovation, Incubation and
Commercialization (IRIIC)**, United International University, Dhaka.

React 19, TypeScript (strict), React Router 7 in framework mode and
Tailwind CSS 4, built with Vite. Every route, including each project and
vacancy page, is prerendered to its own static `index.html`. There is no
server at runtime, no analytics and no third-party script.

- Live: https://meteorboyf.github.io/IRRIC_Website/
- Content rules and what IRIIC still needs to supply: [CONTENT-TODO.md](CONTENT-TODO.md)
- Research behind the content: [research/inventory.md](research/inventory.md), [research/images.md](research/images.md)

## Commands

```bash
npm ci                 # install exactly what the lockfile says
npm run dev            # local development server
npm run typecheck      # route types + tsc --noEmit
npm run lint           # ESLint (react, react-hooks, jsx-a11y), zero warnings allowed
npm run test:security  # URL allow-list, email parameter, JSON-LD and vacancy-status checks
npm run build          # validate data, prerender every route, harden output
npm run check:links    # dead links, missing assets, unsafe links, routes without HTML
npm run preview        # serve build/client like GitHub Pages
```

Set `BASE_PATH=/IRRIC_Website` when building or previewing for the GitHub
Pages sub-path. CI derives it from the repository name.

## How it fits together

| Path | What |
|---|---|
| `src/data/*.ts` | All content: projects, vacancies, partners, people, press. Pages render only from these. Every item carries `sources`. |
| `src/data/image-sizes.json` | Pixel sizes of every optimised image (written by the image pipeline). |
| `public/images/` | WebP images, each with a `-sm` variant for `srcset`. |
| `src/routes/` | One file per page. Dynamic routes read their slug from the data. |
| `src/components/` | Shared UI: page intro, section head, reveal, marquee, lightbox, gallery modal, navbar, footer. |
| `src/lib/` | Config, EmailJS forms, URL allow-list, image helpers, SEO tags, scroll lock. |
| `public/boot.js` | Runs before paint: enables reveal effects, the hydration failsafe and the Trusted Types policy. |
| `react-router.config.ts` | `ssr: false` plus a prerender list built from the data. |
| `scripts/validate-data.ts` | Fails the build on duplicate slugs, unsafe URLs, missing images or alt text, sourceless projects, bad deadlines. |
| `scripts/postbuild.mjs` | Per-page CSP with SHA-256 hashes of every inline script; 404.html; sitemap and robots.txt; nginx CSP map. |
| `scripts/check-links.mjs` | Post-build link and asset audit. |
| `scripts/security-selftest.ts` | Checks the URL allow-list, email parameter builder, JSON-LD escaping and vacancy status; runs in CI. |

## Vacancies

A role is open while the build date (Asia/Dhaka) is on or before its
`deadline`. The deploy workflow also runs daily at 00:15 Dhaka time, so
expired roles move to "Past vacancies" without anyone editing the site.
Open roles carry schema.org `JobPosting` data. The site never collects CVs;
each role links to its original instructions.

## Security

- **CSP.** Each page gets its own `<meta http-equiv="Content-Security-Policy">` that allows only the hashes of that page's inline scripts. No `'unsafe-inline'` in `script-src` or `style-src` (the codebase has no inline `style` attributes; ESLint blocks them). `connect-src` allows only `https://api.emailjs.com`; `form-action 'none'`; `object-src 'none'`.
- **Trusted Types** are enforced (`require-trusted-types-for 'script'; trusted-types default`). The only policy, in `public/boot.js`, allows two exact shapes of string and rejects everything else: see *Decisions*.
- **Untrusted data.** No `dangerouslySetInnerHTML` except JSON-LD built with `JSON.stringify` (with `<` escaped). Every data-driven link goes through `safeUrl`, which allows only `https:`, `mailto:`, `tel:` and same-origin paths. External links get `rel="noopener noreferrer"`.
- **Forms.** Honeypot, minimum three seconds on the form, 60-second cooldown, length caps, control characters stripped from anything header-bound, and reserved EmailJS parameters protected from field-derived keys. No personal data in URLs. Without EmailJS configuration the form is replaced by a mailto link.
- **Self-test.** `npm run test:security` proves the URL allow-list refuses `javascript:`, `data:`, `http:`, protocol-relative and credentialed URLs; that header-bound email values are single-line; that field labels cannot overwrite reserved parameters or the prototype; and that JSON-LD cannot close its script element.
- **Resilience.** If React fails to hydrate within four seconds (a blocked script, or cached HTML after a deploy), `boot.js` drops the scroll-reveal hidden state so the prerendered page stays readable.
- **Supply chain.** Lockfile committed; CI runs `npm ci` and `npm audit --omit=dev --audit-level=high`; Dependabot for npm, Actions and Docker; CodeQL; every action pinned to a commit SHA; least-privilege `permissions`; no `pull_request_target`.
- **Headers.** GitHub Pages cannot send response headers, so `frame-ancestors` and `X-Frame-Options` only apply in the Docker deployment, where nginx sends the same per-page CSP as a real header plus `frame-ancestors 'none'`, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and `Cross-Origin-Resource-Policy`. HSTS is in a marked block to enable behind TLS.

## Docker

```bash
SITE_URL=https://iriic.example.org docker compose up --build -d
```

Serves on `127.0.0.1:8080` from `nginx-unprivileged`, with a read-only
filesystem, all capabilities dropped and `no-new-privileges`. Put a
TLS-terminating proxy in front.

## Decisions

- **Trusted Types, with one narrow policy.** Enforcing Trusted Types broke one thing in testing: on client-side navigation React DOM creates a `<script>` element by assigning the constant `<script></script>` to `innerHTML`, which happens when an open vacancy renders its JSON-LD. The `default` policy in `public/boot.js` allows exactly that constant and schema.org JSON-LD with no `<` in it, and returns `null` for anything else, so every other HTML sink stays blocked. Hydration, navigation, filters, the lightbox and the forms were all checked with it enforced.
- **No CSS-in-JS or inline styles**, so `style-src 'self'` holds. The marquee speed, reveal delays and scroll lock all use classes.
- **React Router 7, not 8**, as specified for this project.
