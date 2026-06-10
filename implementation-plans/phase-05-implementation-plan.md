# Phase 5 Pre-Implementation Plan — Content Seeding & Hardening (Corrected)

This document outlines the detailed pre-implementation plan for Phase 5 of the Presura website project, encompassing:
- **TASK-011**: Add MVP seed content, placeholders, and proof asset structure.
- **TASK-012**: Accessibility and performance hardening pass.

All sources, references, and paths are resolved strictly from the active project workspace root at `d:\Presura_v2`.

---

## 1. Files to Inspect

Existing files from previous phases in `d:\Presura_v2` to inspect for alignment:
- [package.json](file:///d:/Presura_v2/package.json) — Review scripts (`dev`, `start`, `build`, `preview`, `astro`) and dependencies.
- [astro.config.mjs](file:///d:/Presura_v2/astro.config.mjs) — Review SSR and vercel adapter configs.
- [src/layouts/Layout.astro](file:///d:/Presura_v2/src/layouts/Layout.astro) — Frame layout containing metadata helpers, header/footer, and skip link.
- [src/styles/global.css](file:///d:/Presura_v2/src/styles/global.css) — Global stylesheet for styling, focus rings, and transition properties.
- [src/components/Header.astro](file:///d:/Presura_v2/src/components/Header.astro) — Site header with navigation paths.
- [src/components/Footer.astro](file:///d:/Presura_v2/src/components/Footer.astro) — Footer structure containing address placeholders.
- [src/components/StickyCTA.astro](file:///d:/Presura_v2/src/components/StickyCTA.astro) — Sticky mobile call anchor.
- [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) — Submission form markup, error/success blocks, and event listeners.
- [src/sanity/client.ts](file:///d:/Presura_v2/src/sanity/client.ts) — Dynamic query fetch client.
- [src/sanity/seed.json](file:///d:/Presura_v2/src/sanity/seed.json) — Local content seed file.
- [src/sanity/schemas/index.ts](file:///d:/Presura_v2/src/sanity/schemas/index.ts) — Sanity schema listing.
- [src/pages/**/*.astro](file:///d:/Presura_v2/src/pages) — Frontend template pages.
- [src/pages/sitemap.xml.ts](file:///d:/Presura_v2/src/pages/sitemap.xml.ts) — Sitemap generation rules.
- [verification/evidence-register.md](file:///d:/Presura_v2/verification/evidence-register.md) — Baseline register of evidence.
- [build-notes/phase-04-integrations.md](file:///d:/Presura_v2/build-notes/phase-04-integrations.md) — Integrations verification log.

---

## 2. Files to Create or Modify

All paths are relative to `d:\Presura_v2`:

### Files to Create:
- `/build-notes/phase-05-seed-hardening.md` — Logs execution details, benchmarks, and manual checklists for Phase 5.
- `/verification/TASK-011.md` — Content seeding verification log (records check, placeholder audit, safety verification).
- `/verification/TASK-012.md` — Accessibility and performance verification log (focus states, contrast reports, Lighthouse targets).

### Files to Modify:
- `src/sanity/seed.json` — Update template mock values for the development sandbox.
- `src/layouts/Layout.astro` — Refine skip-link layout and semantic landmarks.
- `src/components/InquiryForm.astro` — Inject ARIA attributes, focus states, and link error descriptions to input fields.
- `src/components/Header.astro` — Refine mobile navigation toggle focus and expand controls.
- `src/components/Footer.astro` — Restructure layout to avoid unapproved NAP exposure.
- `src/components/StickyCTA.astro` — Ensure focus sequences do not get trapped.
- `src/styles/global.css` — Extend outline classes and prefers-reduced-motion media hooks.
- `src/pages/**/*.astro` — Validate headings, alt attributes, fallback SEO checking, and local proof validations.
- `src/pages/sitemap.xml.ts` — Exclude draft status and thin local landing pages dynamically.
- `verification/evidence-register.md` — Add references to TASK-011 and TASK-012 verification results.
- `docs/maintenance-guide.md` — Incorporate manual accessibility audits and size checks.
- `docs/cms-editor-guide.md` — Define draft/review states and validation requirements.
- `docs/content-update-guide.md` — Document instructions for final owner review and placeholder removal.
- `docs/seo-maintenance-guide.md` — Detail sitemap audit protocols.
- `docs/known-limitations-and-roadmap.md` — Outline sandbox limitations and performance expectations.

---

## 3. MVP Seed Content Plan

Seeded items in `src/sanity/seed.json` must serve as **development sandbox mock content** providing a **placeholder-safe structure** only. Do not call it launch-ready, published-ready, verified, real proof, or real local content.

### Services (Up to 6 sandbox placeholders)
1. **Servis plinskih bojlera** — Price: `od XX €` (Caveat: *Konačna cijena ovisi o opsegu radova.*)
2. **Strojno ispiranje radijatora** — Price: `XX € - YY €` (Caveat: *Ovisi o broju radijatora.*)
3. **Montaža toplinskih pumpi** — Price: `Upit za procjenu` (Caveat: *Zahtijeva prethodni uviđaj na terenu.*)
4. **Servis i montaža klima uređaja** — Price: `od XX €` (Caveat: *Ovisi o snazi uređaja.*)
5. **Ugradnja omekšivača vode** — Price: `od XXX €` (Caveat: *Ovisi o kapacitetu sustava.*)
6. **Instalacije centralnog grijanja** — Price: `Upit za procjenu` (Caveat: *Formira se prema projektu.*)

### Problems (3 symptom routing mocks)
1. **Bojler javlja grešku i nema tople vode** — routes to Boiler Service.
2. **Radijatori su hladni pri dnu** — routes to Radiator Flushing.
3. **Kamenac na slavinama i u bojleru** — routes to Water Softeners.

### Locations (3 service area mocks - placeholder-safe structure only)
- **Osijek** — Local intro: `LOCAL_CONTEXT_PLACEHOLDER_OSIJEK_NEEDS_VERIFICATION`. Local proof: `[LOCAL_PROOF_PLACEHOLDER_FOR_OSIJEK_NEEDS_REAL_DATA]`.
- **Bilje** — Local intro: `LOCAL_CONTEXT_PLACEHOLDER_BILJE_NEEDS_VERIFICATION`. Local proof: `[LOCAL_PROOF_PLACEHOLDER_FOR_BILJE_NEEDS_REAL_DATA]`.
- **Čepin** — Local intro: `LOCAL_CONTEXT_PLACEHOLDER_CEPIN_NEEDS_VERIFICATION`. Local proof: `[LOCAL_PROOF_PLACEHOLDER_FOR_CEPIN_NEEDS_REAL_DATA]`.

> [!IMPORTANT]
> All local context/proof must remain:
> - **NEEDS HUMAN APPROVAL**
> - **NOT VERIFIED**
> - **Launch-blocked** until real owner-approved evidence exists.

*What remains placeholder vs launch-required:*
- **Mock Placeholder:** Brand titles ("Presura"), rating structures (`RATING_PLACEHOLDER`, `REVIEW_COUNT_PLACEHOLDER`), experience years (`EXPERIENCE_YEARS_PLACEHOLDER`), case studies (`publishConsentStatus: "placeholder"`), and images.
- **Launch-Required (Post-Phase 5):** Legally approved business NAP, genuine Google Business Profile reviews, verified technician experience values, and client-consented case study media.

---

## 4. Content Safety Plan

To prevent publishing unapproved, private, or fabricated information:
- **No "Presura d.o.o." or legal entities:** Brand display uses the text token `"Presura"`.
- **No realistic contact details:** Avoid realistic fake numbers, emails, addresses, or hours. Use only abstract tokens:
  - `PHONE_PLACEHOLDER`
  - `EMAIL_PLACEHOLDER`
  - `ADDRESS_PLACEHOLDER`
  - `HOURS_PLACEHOLDER`
- **No fake customer data/reviews:** Ratings block uses `RATING_PLACEHOLDER` and `REVIEW_COUNT_PLACEHOLDER` instead of numeric fakes (e.g. no "4.9/5" or "40+ reviews").
- **No unverified local claims:** Mock locations will contain explicit placeholder warnings (`[NEEDS_REAL_LOCAL_PROOF_AND_HUMAN_APPROVAL]`) to prevent fake content generation.
- **Location validation:** Any location page missing custom proof entries must throw a build parameter error or fail to render in static params.
- **Schema Lock:** `schemaEnabled` remains strictly `false` in site settings to prevent parsing of empty/placeholder variables in JSON-LD templates.

---

## 5. Accessibility Hardening Plan

- **Keyboard Navigation:** All elements (navigation menus, mobil disclosures, FAQ accordions, and form fields) must support standard `Tab` focus ordering and activation via `Enter` / `Space`.
- **Focus States:** Every focused interactive element will display a clear visual ring via `:focus-visible` utilizing orange/slate accents.
- **Form Labels & Error Handling:**
  - Standard `<label for="[id]">` tags link to all input fields.
  - Dynamically set `aria-invalid="true"` on fields failing validation.
  - Form field errors associate programmatically via `aria-describedby`.
  - Submission panels use `role="alert"` (or `aria-live="polite"`) to announce errors/success statuses.
- **Color Contrast:** Keep color configurations compliant with WCAG AA ratios (minimum 4.5:1 contrast for normal text).
- **Landmark Structure:** Restructure templates to ensure correct heading hierarchy (single H1 per page) and semantic boundaries (`<main id="main-content">`, `<nav>`, etc.).
- **Reduced Motion:** Bind all transition durations to preferences media rules (setting durations to `0.01ms` if motion reduction is requested).
- **Touch Targets:** Verify that all mobile buttons, CTA links, and inputs measure at least `44x44` CSS pixels.

---

## 6. Performance Hardening Plan

- **Image Placeholders:** Enforce explicit width/height dimensions. Lazy loading configured for below-fold contents, eager loading for hero backgrounds.
- **JS Minimization:** Verify that JS code is compressed during compilation. Client hydration is restricted to the Turnstile verification hook and the form handler.
- **Lighthouse/Core Web Vitals:** Set targets of LCP <= 1.5s, CLS = 0, and INP <= 200ms.
- **Verification Locations:** All Lighthouse JSON reports and visual audits must be stored under the `/verification` directory:
  - `/verification/lighthouse-home.json`
  - `/verification/lighthouse-contact.json`
  Do not write output checks to `/docs` or `/docs/verification`.

---

## 7. SEO & Content Hardening Plan

- **Dynamic Metadata:** Limit titles to <= 60 characters and descriptions to <= 160 characters.
- **Canonicals:** Enforce self-referencing canonical attributes on all dynamic routes.
- **Sitemap Restrictions:** Dynamically parse Sanity records to ensure that draft items, unconsented works, and thin location landing pages lacking unique proof blocks are omitted from `sitemap.xml`.
- **Robots configuration:** Confirm `robots.txt` configuration and sitemap reference path are correct.
- **Schema Posture:** Dynamic JSON-LD is blocked while `schemaEnabled` is false.

---

## 8. Proposed Commands (No execution yet)

Only scripts declared in `package.json` are proposed for validation.
- Compile production assets locally to inspect output:
  ```bash
  pnpm run build
  ```
- Start the local preview server to run manual checks:
  ```bash
  pnpm run preview
  ```

*Note: Automated tests (`lint`, `typecheck`, `test`, `npx lighthouse`) do not exist in package.json and are not proposed. Automated Lighthouse reports are marked NOT VERIFIED / NEEDS HUMAN APPROVAL until package installations or dev tools are approved.*

---

## 9. Verification Plan

Stored files:
- **`verification/TASK-011.md`**: Logs the list of sandbox documents, sitemap checks, and safety/placeholder validation audit.
- **`verification/TASK-012.md`**: Logs focus outline inspections, manual keyboard navigation walks, color contrast values, and local manual Lighthouse targets.
- **`verification/evidence-register.md`**: Registers verified evidence for Phase 5.

---

## 10. Build Notes & Docs Plan

Expected changes:
- **`/build-notes/phase-05-seed-hardening.md`** [NEW]: Comprehensive record of code audits, keyboard focus check steps, and manual benchmarks.
- **`/docs/maintenance-guide.md`** [MODIFY]: Detail manual accessibility check procedures.
- **`/docs/cms-editor-guide.md`** [MODIFY]: Define editor rules for draft/review/published workflow.
- **`/docs/content-update-guide.md`** [MODIFY]: Detail checklist to swap placeholder tokens (`PHONE_PLACEHOLDER`, etc.) for real data.
- **`/docs/seo-maintenance-guide.md`** [MODIFY]: Outline sitemap audit checks.
- **`/docs/known-limitations-and-roadmap.md`** [MODIFY]: Document sandbox limitation boundaries.

---

## 11. Risks and Approval Gates

- **NAP/Contact Data Approval:** **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** (Must replace `PHONE_PLACEHOLDER` etc. before production launch).
- **Real Proof/Testimonials Media:** **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** (Sandbox local proof placeholders must be replaced).
- **Lighthouse/CWV Benchmarks:** **ASSUMPTION** / **NOT VERIFIED** (Numeric benchmarks are targets, not build-blocking gates).
- **Accessibility Coverage:** **NOT VERIFIED** (Manual screen reader checks are not automated).
- **Lighthouse Tooling Approval:** **NEEDS HUMAN APPROVAL** (Installing automated CLI auditors is blocked).
- **Local Pages Scope:** **SCOPE RISK** (Programmatic generation of cities is blocked).
