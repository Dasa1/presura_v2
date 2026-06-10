# Phase 3 Pre-Implementation Plan — UI Design System & SEO Metadata

This document outlines the detailed pre-implementation plan for Phase 3 (UI Design System & SEO Metadata) of the Presura technical-service website project.

---

## 1. Docs and Tasks to Read

### Task Files:
- [TASK-004-design-system-layout-cta.md](file:///d:/Presura_v2/tasks/TASK-004-design-system-layout-cta.md)
- [TASK-005-seo-schema-sitemap.md](file:///d:/Presura_v2/tasks/TASK-005-seo-schema-sitemap.md)

### Blueprints & Reference Specs:
- [04A-page-ux-blueprints.md](file:///d:/Presura_v2/project-docs/04A-page-ux-blueprints.md)
- [05-ui-system.md](file:///d:/Presura_v2/project-docs/05-ui-system.md)
- [05A-ui-component-spec.md](file:///d:/Presura_v2/project-docs/05A-ui-component-spec.md)
- [12-seo-implementation-spec.md](file:///d:/Presura_v2/project-docs/12-seo-implementation-spec.md)
- [13-env-deployment-spec.md](file:///d:/Presura_v2/project-docs/13-env-deployment-spec.md)

---

## 2. Files to Inspect

Existing files from Phase 1 and 2 to inspect for alignment:
- `package.json` — Confirm dependencies.
- `astro.config.mjs` — Review Vite/Tailwind v4 settings.
- `src/layouts/Layout.astro` — Review layout wrapper tags, robots blocks, and canonical structure.
- `src/styles/global.css` — Inspect Tailwind imports and custom color tokens.
- `src/sanity/client.ts` & `seed.json` — Inspect query outputs for siteSettings and FAQ models to map schemas dynamically.

---

## 3. Files to Create or Modify

All paths listed below are relative to `d:\Presura_v2`:

### Files to Create (Design System Components):
- `src/components/Header.astro` — Responsive desktop/mobile site header with placeholder phone indicators.
- `src/components/Footer.astro` — Global footer containing sitemap listings, copyright, and placeholder NAP parameters.
- `src/components/StickyCTA.astro` — Mobile-only float layout acting as a visual placeholder (strictly disabled click/touch actions).
- `src/components/TrustBar.astro` — Micro-proof elements representing experience and safety certifications.
- `src/components/ServiceCard.astro` — Card template rendering services list.
- `src/components/ProblemCard.astro` — Card template highlighting troubleshooting symptoms.
- `src/components/FAQAccordion.astro` — Accessibly styled collapsible FAQ items with ARIA states.

### Files to Create (SEO & Meta Helpers):
- `src/components/seo/MetaTags.astro` — Standardizes meta titles, descriptions, openGraph, Twitter cards, and self-canonical URLs.
- `src/components/seo/SchemaMarkup.astro` — Dynamic schema rendering helper (emits nothing if `schemaEnabled` flag is false).
- `public/robots.txt` — Configures search crawler permissions (restricting all crawling on preview/default domains).
- `src/pages/sitemap.xml.ts` — Generates dynamic XML sitemap for verification.

### Files to Modify (Integration):
- `src/layouts/Layout.astro` — Integrate the new Header, Footer, StickyCTA, and MetaTags/SchemaMarkup helpers.
- `src/styles/global.css` — Standardize layout tokens, focus colors, animations, and touch-target classes.
- `src/pages/index.astro` — Integrate components like Hero, TrustBar, and card loops.
- `src/pages/usluge/index.astro` & `[slug].astro` — Integrate style systems and details.
- `src/pages/problemi/index.astro` & `[slug].astro` — Integrate design components and symptom blocks.
- `src/pages/lokacije/index.astro` & `[slug].astro` — Integrate local proof grids.
- `src/pages/cjenik.astro` — Add styling to pricing grids.
- `src/pages/radovi/index.astro` — Apply styling to case study listings.

### Handover Documentation to Create/Update:
- `build-notes/phase-03-ui-seo.md` — Logs execution details of Phase 3.
- `docs/seo-maintenance-guide.md` — Guide explaining SEO audits, sitemap controls, and NAP updates.
- `verification/TASK-004.md` & `verification/TASK-005.md` — Verification logs.
- `verification/evidence-register.md` — Update register rows once evidence is gathered (no pre-mapping to PASS).

---

## 4. Design System Plan

- **Layout Components:**
  - Build clean semantic structures: `<header>`, `<main>`, `<footer>`.
  - Maintain a maximum grid width of `7xl` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Navigation:**
  - Responsive layout (flex/grid) showing Services, Problems, Locations, Pricing, and a disabled/placeholder CTA button.
  - Mobile: Collapsible menu using minimal vanilla JS or CSS toggle.
- **Sticky Emergency Mobile CTA:**
  - Float layout (`fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 p-4`) shown only on mobile viewports.
  - Implemented strictly as a visual placeholder layout only.
  - **Do not** bind any functional call, mail, or external links. The button element will be rendered as a non-link `button` or `span` state (or `href="#"` paired with `aria-disabled="true"` and a no-op handler) to ensure no dialing is triggered on fake values.
- **Trust Bar:**
  - Renders micro-proof badges (e.g. "Ovlašteni instalater", "Brzi odaziv na hitne intervencije").
- **Service/Problem/Location Cards:**
  - Grid cards using consistent layouts (neutral border, hover shadow offsets, bold titles, orange CTA text).
  - No nested interactive elements to avoid conflict (only the explicit CTA link is focusable).
- **Responsive Behavior:**
  - Use mobile-first breakpoints (`sm:`, `md:`, `lg:`).
  - Minimum touch targets of **44x44 CSS pixels** for all interactive links and buttons.
- **Accessibility Baseline:**
  - Visible focus indicators (`focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2`).
  - Screen reader accessibility tags (e.g., `aria-expanded` toggles, `aria-describedby` error pairings).
  - Restrained animations respecting `prefers-reduced-motion` media queries.

---

## 5. UI Safety Plan

- **No Real NAP / Contact Details:**
  - All phone numbers resolve to `"PHONE_PLACEHOLDER"`.
  - All email addresses resolve to `"EMAIL_PLACEHOLDER"`.
  - All addresses resolve to `"ADDRESS_PLACEHOLDER"`.
- **No Active Fake Links:**
  - Clickable phone anchors must not use fake telephone numbers.
  - Hrefs must NOT use `href="javascript:void(0)"`. 
  - To prevent device dialers from triggering on fake values, CTA/contact action elements must be rendered either as disabled button states or as non-link elements (`span`/`button` with `aria-disabled="true"`). If `href="#"` is used, it must be paired with `aria-disabled="true"` and custom CSS/JS to prevent navigation or execution.
- **No Hardcoded "Presura d.o.o.":**
  - Brand name will remain solely `"Presura"`. No legal suffix is added.

---

## 6. SEO Metadata Plan

- **Title & Description Strategy:**
  - Standard templates used across pages:
    - Homepage: `[Brand] | Servis grijanja i tehničke usluge u [Area]`
    - Service details: `[Service] [Area] | [Brand]`
  - Content fallback: Automatically uses `seoTitle` / `seoDescription` if defined in siteSettings or individual dynamic documents.
- **Canonical Strategy:**
  - Layout reads `Astro.url.pathname` and joins it with the site configuration URL (`import.meta.env.PUBLIC_SITE_URL` or `https://example.com`) to generate absolute, self-referential `<link rel="canonical" href="..." />` elements.
- **Robots Strategy:**
  - If `PUBLIC_SITE_URL` is missing, default, example.com, localhost, or staging, both the `robots.txt` output and the HTML meta header output must remain strictly **noindex, nofollow**.
  - Production robots.txt crawling configuration is locked until an approved production domain and final NAP details exist.
- **Sitemap & Robots.txt:**
  - `public/robots.txt` points directly to sitemap XML path.
  - Dynamically builds `sitemap.xml` by fetching published service, problem, and proof-verified location documents from the client at build-time.
  - **Sitemap Verification Boundary**: Sitemap generation will be verified programmatically during the Phase 3 build, but production sitemap readiness remains **NOT VERIFIED** until a final domain, final content, final NAP/schema data, and launch approval exist. Placeholder routes are not treated as production-ready SEO evidence.

---

## 7. JSON-LD / Schema Safety Plan

- **Schema Enabled hard boundary**:
  - `schemaEnabled` in `siteSettings` defaults to `false` and acts as a strict compile-time check.
  - If `schemaEnabled` is false, no LocalBusiness, HVACBusiness, or final organization schema graphs will be emitted.
- **Local Testing Posture**:
  - If schema markup code is rendered locally for technical verification, it will be strictly restricted to local preview/noindex environments and documented as **NOT VERIFIED** in the evidence logs to prevent invalid crawl inputs from reaching search engines.

---

## 8. Proposed Commands (No execution yet)

- Validate static build outputs:
  ```bash
  pnpm run build
  ```

---

## 9. Verification Plan

- **TASK-004 (`/verification/TASK-004.md`):**
  - Verify layout markup via manual keyboard tab-through notes.
  - Check touch target dimensions and responsive layouts.
  - Confirm the sticky mobile CTA and contact links are non-functional placeholders.
- **TASK-005 (`/verification/TASK-005.md`):**
  - Verify sitemap outputs include only valid published placeholder pages.
  - Print rendered JSON-LD schemas showing placeholder safety boundaries (schemaEnabled = false).
  - Confirm robots.txt blocks crawling on localhost/example.com domains.

---

## 10. Build Notes and Docs Plan

- **`/build-notes/phase-03-ui-seo.md`:** Standard build logs documenting component structure, sitemap compilation metrics, and visual hierarchy tests.
- **`/docs/seo-maintenance-guide.md`:** Manual outlining metadata checks, JSON-LD, sitemap controls, and NAP consistency rules.
- **`/verification/evidence-register.md`:** Registers TASK-004 and TASK-005. **DO NOT pre-map status to PASS**. Evidence status will be updated to PASS only after the build is executed and verification logs are completed.

---

## 11. Risks and Approval Gates

- **`PUBLIC_SITE_URL` Setup:** **ASSUMPTION** (Assumes default `https://example.com` preview mode, which automatically locks crawling to `noindex`).
- **Real NAP Data:** **NEEDS HUMAN APPROVAL** (Must keep placeholders).
- **HVAC Schema Publication:** **LAUNCH BLOCKER** (Must keep `schemaEnabled: false` until production NAP is verified).
- **GDPR test metrics:** **NOT VERIFIED** (Visual testing does not constitute absolute compliance verification).
- **Design System Palette:** **NOT SPECIFIED** (Using neutral navy/technical blue and orange accents unless final brand identity guidelines are supplied).
