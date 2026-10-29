# Content and setup to-do

The site never shows a placeholder. When a fact is unconfirmed, the page
leaves that element out. This file lists what only IRIIC can supply or
decide. Add the value in the file named, push, and the content appears
after the next build.

**Standing rule: no statistic, date, quote, partner, winner or outcome is
invented.** Everything on the site is traceable through the `sources`
field in `src/data/*.ts` and in `research/inventory.md`.

---

## 1. Contact form: create the EmailJS account (required)

Until these three values exist, every form on the site shows a mailto
link to iriic.uiu@gmail.com instead, so visitors can always reach you.

### Create the account and service

1. Sign up at https://www.emailjs.com/ **with iriic.uiu@gmail.com**.
2. **Email Services → Add New Service → Gmail.** Connect iriic.uiu@gmail.com. Note the **Service ID** (looks like `service_xxxxxxx`).

### Create the template

**Email Templates → Create New Template**, then set exactly:

| Setting | Value |
|---|---|
| **To Email** | `iriic.uiu@gmail.com` (type the address literally; do **not** use `{{to_email}}`) |
| **From Name** | `IRIIC Website` (fixed text) |
| **From Email** | leave as the default (use the connected Gmail account) |
| **Reply To** | `{{reply_to}}` |
| **Subject** | `{{subject}}` |
| **Content** (body) | `{{message}}` (plain text is fine) |
| Bcc / Cc | leave empty |

Save, and note the **Template ID** (`template_xxxxxxx`).

The site composes the whole email into `{{message}}`: name, email, phone,
organisation, enquiry type and message, as labelled lines. Nothing else in
the template is needed. The site never sends a `to_email` parameter, and
form fields can never overwrite `subject`, `message` or `reply_to`.

### Lock the account down

**Account → Security:**

| Setting | Value |
|---|---|
| **Allowed origins** (domain allow-list) | `https://meteorboyf.github.io` only. Add your custom domain if you set one up. Do not add `localhost`. |
| **Allow EmailJS API for non-browser applications** | **Off** |
| Use Private Key | Leave off (the site calls EmailJS from the browser, which cannot keep a private key secret) |

Optional but sensible: **Account → Security → Captcha** stays off (the
site uses a honeypot and timing checks instead, and adds no third-party
scripts); set a **monthly quota alert**; check **Email History** retention.

### Give the site the three values

GitHub → `meteorboyF/IRRIC_Website` → **Settings → Secrets and variables →
Actions → New repository secret**, three times:

| Secret name | Value |
|---|---|
| `EMAILJS_SERVICE_ID` | your Service ID |
| `EMAILJS_TEMPLATE_ID` | your Template ID |
| `EMAILJS_PUBLIC_KEY` | **Account → General → Public Key** |

Then **Actions → Build, check and deploy to GitHub Pages → Run workflow**.
These values are public by design (they end up in the page's JavaScript);
the allowed-origins setting is what stops anyone else using them.

## 2. Vacancies

| Item | Where | What to do |
|---|---|---|
| Confirm the AIMScribe roles | `src/data/vacancies.ts` | The three open roles (Office Secretary, Accountant, Data Entry Operator, closing 5 November 2026) come from UIU's careers site. They do not name IRIIC, but IRIIC's Facebook advertised the same AIMScribe roles as "Career Opportunities at IRIIC, UIU". Confirm they belong on this site, or delete them. |
| New roles | `src/data/vacancies.ts` | Add an entry with an ISO `deadline`. It shows as open until the end of that day (Dhaka time) and moves to "Past vacancies" automatically: the site rebuilds every day at 00:15 Dhaka time. |
| Posted dates | `postedLabel` | Facebook does not show post dates in its page text, so most roles have none. Add them if you want them shown. |
| Old research engineer cohorts | `research-engineers-*` | Their full requirements were only in the post images; add text if you want it shown. |

## 3. Dates and facts that are unconfirmed (currently omitted)

| Item | Where | Note |
|---|---|---|
| Project start and end dates | `src/data/projects.ts` → `dateLabel`, `sortKey` | No research project has a confirmed date (website post dates are publishing dates). Add `dateLabel` and a `sortKey` (YYYYMMDD) for any you know. |
| Project status | `status` | Only CMED (commercialised), AIMScribe and SmartAMR (ongoing) and past events have a status. The rest show no status. "Four projects are under commercialisation" (About page of the old site): name them and set their status. |
| IRIIC launch date | `src/data/about.ts` | Press reported the launch on 1 March 2023; the exact day is not confirmed, so the timeline says "2023". |
| Innovation Conclave 2025 | `innovation-conclave-2025` | Shown as "January 2025"; exact day unknown. |
| Ministry of Water Resources visit; Dhaka University VC visit | `water-resources-iot-workshop`, `dhaka-university-vc-visit` | No date stated. |
| SuSastho.AI launch | `susastho-ai` | The report says "Monday, May 27" without a year. |
| LaunchPad cycle 2 outcome | `launchpad-cycle-2` | Winners and funding are not published. |
| HSIL 2026 day | `harvard-hsil-hackathon-2026` | IRIIC's page says 10 to 11 April 2026; New Age's report describes a final round on a later date. Confirm. |
| Unlisted projects | — | "Healthy Mom Healthy Baby" (team page), "Covid-19 DSS" (media library) and neonatal-care AI work (one Facebook post) were left out for lack of detail. Send a description to add them. |
| Bangla press | `src/data/press.ts` | Prothom Alo, Bonik Barta, Kaler Kantho, Channel 24 and others are listed on the old site without working links. Send the URLs to add them. |
| Reach of CMED Health | — | The old site says "2 million+ monthly users"; Facebook says "over 4 million people". Neither is shown. Confirm one figure and where it comes from. |

## 4. Photos

| Item | What to do |
|---|---|
| **Consent decision** | Five research photos showing children are downloaded but not published (listed in `research/images.md`). Confirm that consent covers public web use, and they can be added to the galleries. |
| Larger project images | Most research-project images on the old site are small app screenshots (100 to 650 px). Larger screenshots or photos of the work in use would make the project pages much stronger. |
| HSIL 2026, AIMScribe and SmartAMR workshops | Photos are only on Facebook. Send originals to add galleries. |
| Logo versions | Send a monochrome or white IRIIC logo if one exists (the colour badge is used everywhere now). |
| Team | Photos exist for everyone on the team page. Send updates if the team has changed. |

## 5. Policies to confirm

The privacy policy commits to these retention periods. They are sensible
defaults, not IRIIC decisions; change them in `src/routes/privacy.tsx` if
they do not match practice:

- Contact messages deleted within 24 months of the last exchange.
- Careers enquiries through the contact form deleted within 12 months.
- Privacy requests answered within 30 days.

## 6. Issues found on the current iriic.uiu.ac.bd

Not part of this site, but worth fixing at the source:

- **A spam post** ("How Chance and Strategy Shape Rewards Today", 9 April 2025) suggests the WordPress site has a compromised account or plugin. Review users, plugins and recent posts.
- The five centre pages contain theme placeholder text ("Lorem ipsum", "We are Marity").
- All "In Media" posts and four "Research works" posts have the wrong body text.
- The MindWave Analytics page uses CMED's description.
- Theme demo pages (shop, cart, pricing, portfolio, "Dummy") are still public.
- The investor page ends with "[email]" and "[website link]".

## 7. Repository security settings (only the owner can change these)

GitHub → `meteorboyF/IRRIC_Website` → **Settings → Code security**:

| Setting | Why |
|---|---|
| **Dependabot alerts: Enable** | Currently disabled. Version-update PRs are configured, but alerts for known vulnerabilities need this switch. |
| **Secret scanning and push protection: Enable** | Blocks accidental pushes of credentials. The repo holds no secrets today. |
| **Branch protection for `main`** (Settings → Branches) | Require the "Build, check and deploy" and CodeQL checks to pass on pull requests before merging. |

Five Dependabot pull requests (#1 to #5) propose major upgrades the site
deliberately does not take yet: React Router 8 (the site is specified as
v7), ESLint 10 (its React and accessibility plugins do not support it yet),
Node 26 (not an LTS release) and nginx 1.31 (mainline, not stable). They
are now ignored in `.github/dependabot.yml`; close the open ones.

## 8. Domain

`SITE_URL` defaults to the GitHub Pages address. If IRIIC points a custom
domain at this site, set the `SITE_URL` value in the deploy workflow (or a
repository variable), add the domain under **Settings → Pages**, and add it
to the EmailJS allowed origins.
