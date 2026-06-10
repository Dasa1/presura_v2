# Phase 2 Pre-Implementation Plan — Sanity Content & Routing

This document outlines the detailed pre-implementation plan for Phase 2 (Sanity Content & Routing) of the Presura lead-generation website project.

---

## 1. Docs and Tasks to Read

### Task Files:
- [TASK-002-sanity-schemas-studio.md](file:///d:/Presura_v2/tasks/TASK-002-sanity-schemas-studio.md)
- [TASK-003-sanity-content-routes.md](file:///d:/Presura_v2/tasks/TASK-003-sanity-content-routes.md)

### Blueprints & Reference Specs:
- [04A-page-ux-blueprints.md](file:///d:/Presura_v2/project-docs/04A-page-ux-blueprints.md)
- [08-data-api-contract.md](file:///d:/Presura_v2/project-docs/08-data-api-contract.md)
- [08A-cms-content-model-spec.md](file:///d:/Presura_v2/project-docs/08A-cms-content-model-spec.md)
- [06-architecture.md](file:///d:/Presura_v2/project-docs/06-architecture.md)

---

## 2. Files to Inspect

Existing configurations from Phase 1 to inspect for alignment:
- `package.json` — Review dependencies, scripts, and package manager.
- `astro.config.mjs` — Verify Vite config integration structure.
- `tsconfig.json` — Inspect TypeScript alias configurations (`@/*`).
- `src/layouts/Layout.astro` — Inspect navigation link routes and canonical anchors.
- `.env.example` — Inspect environment keys.

---

## 3. Files to Create or Modify

All paths listed below are relative to `d:\Presura_v2`:

### Files to Create (Sanity Local Schemas):
- `sanity.config.ts` — Local Sanity project and plugins config.
- `src/sanity/client.ts` — Configures local Sanity client fetching queries.
- `src/sanity/seed.json` — Contains local JSON seed content to verify route generation and fallback logic offline.
- `src/sanity/schemas/index.ts` — Schemas entrypoint.
- `src/sanity/schemas/siteSettings.ts` — Global variables schema.
- `src/sanity/schemas/service.ts` — Services schema.
- `src/sanity/schemas/problem.ts` — Symptoms/Problems schema.
- `src/sanity/schemas/location.ts` — Local landing pages schema.
- `src/sanity/schemas/work.ts` — Works/Case studies schema.
- `src/sanity/schemas/priceItem.ts` — Pricing items schema.
- `src/sanity/schemas/faq.ts` — Frequently asked questions schema.

### Files to Create (Astro Content Routes):
- `src/pages/usluge/index.astro` — Service index routing.
- `src/pages/usluge/[slug].astro` — Service dynamic detail page routing.
- `src/pages/problemi/index.astro` — Problem index routing.
- `src/pages/problemi/[slug].astro` — Problem dynamic detail page routing.
- `src/pages/lokacije/index.astro` — Location index routing.
- `src/pages/lokacije/[slug].astro` — Location dynamic detail page routing.
- `src/pages/cjenik.astro` — Pricing index layout routing.
- `src/pages/radovi/index.astro` — Portfolio index layout routing.

### Handover Documentation to Create/Update:
- `build-notes/phase-02-sanity-schemas-routes.md` — Logs execution details.
- `docs/cms-editor-guide.md` — Non-technical manual explaining schema validation and publishing.
- `docs/content-update-guide.md` — Guide explaining Vercel rebuild workflows.
- `verification/TASK-002.md` & `verification/TASK-003.md` — Verification logs.

---

## 4. Sanity Local Setup Plan

- **Local Execution Posture:** We will run Sanity Studio locally using clearly fake local config values only (e.g., `projectId: "local-placeholder"`). 
- **No Production Integration:** We will not connect to a real Sanity project, nor use real Sanity tokens. We will **never** run `sanity deploy` or create, import, export, or modify real Sanity datasets in this phase.
- **Local Mock Data:** A `seed.json` file will act as local mock data for queries. When `PUBLIC_SANITY_PROJECT_ID` is set to placeholder values, the client will fetch content from `seed.json`. This seed data is for local mock testing only; it is not approved production content, and we will not hardcode final public content into routes.

---

## 5. Planned Schemas

### A. Site Settings (`siteSettings`)
- **Purpose:** Manages global site variables, placeholder NAP parameters, and structured data switches.
- **Key Fields:**
  - `title` (string, required): Brand/site display title (e.g. `"Presura"`).
  - `phoneDisplay` (string, optional): Non-functional placeholder (`"PHONE_PLACEHOLDER"`).
  - `phoneTelHref` (string, optional): Disabled/noop href (`"#"` or `"PHONE_PLACEHOLDER"`).
  - `emailDisplay` (string, optional): Non-functional placeholder (`"EMAIL_PLACEHOLDER"`).
  - `addressDisplay` (text, optional): Non-functional placeholder (`"ADDRESS_PLACEHOLDER"`).
  - `schemaEnabled` (boolean, required, default `false`): Disables public HVAC schema generation until approved.
- **Validation:** String format validation.
- **References:** None.
- **Placeholder Strategy:** Uses "Presura" and non-functional placeholder NAP values.

### B. Service (`service`)
- **Purpose:** Commercial landing pages mapping heating/technical offerings.
- **Key Fields:**
  - `title` (string, required): H1 title.
  - `slug` (slug, required, unique): URL slug matching `/usluge/[slug]`.
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `shortDescription` (text, required): Short card summary.
  - `contentBlocks` (array, required): Rich text / portable text block editor.
  - `relatedProblems` (array of references, optional): Links to `problem` documents.
  - `relatedLocations` (array of references, optional): Links to `location` documents.
  - `priceItems` (array of references, optional): Links to `priceItem` documents.
  - `relatedFAQs` (array of references, optional): Links to `faq` documents.
- **Validation:** Slug must be populated and formatted.
- **References:** `problem`, `location`, `priceItem`, `faq`.
- **Placeholder Strategy:** Uses placeholder descriptions and mock pricing variables.

### C. Problem (`problem`)
- **Purpose:** Symptom-focused pages that explain technical errors and route to a recommended service.
- **Key Fields:**
  - `title` (string, required): Symptom description (e.g., `"Radijatori slabo griju"`).
  - `slug` (slug, required, unique): Dynamic route mapping under `/problemi/[slug]`.
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `problemStatement` (text, required): Clear explanation of symptom.
  - `symptoms` (array of strings, optional): Visual bullet signs.
  - `recommendedService` (reference, required): Target `service` link resolving the problem.
- **Validation:** Recommended service must be set to create a conversion path.
- **References:** `service`.
- **Placeholder Strategy:** Factual troubleshooting steps using mock data.

### D. Location (`location`)
- **Purpose:** Local landing pages designed to rank locally based on geographic proof.
- **Key Fields:**
  - `cityName` (string, required): Target city (e.g., `"Osijek"`, `"Bilje"`).
  - `slug` (slug, required, unique): Dynamic route under `/lokacije/[slug]`.
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `localIntro` (text, required): Custom introduction segment specific to this area.
  - `localProofBlocks` (array of custom proof blocks, optional): Geo-targeted case study notes.
  - `relatedServices` (array of references, required): Services offered in this location.
- **Validation:** Published status is blocked unless `localProofBlocks` contains at least **one** unique proof element to avoid duplicate content penalties.
- **References:** `service`.

### E. Work / Case Study (`work`)
- **Purpose:** Proves technical capability using real-world projects.
- **Key Fields:**
  - `title` (string, required): Project overview description.
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `service` (reference, required): Related `service` document.
  - `location` (reference, optional): Mapped `location` document (general region only, no private addresses).
  - `summary` (text, required): Technical execution description.
  - `publishConsentStatus` (string enum, required): `approved` / `placeholder` / `not-approved`.
- **Validation:** Published status is **blocked** if `publishConsentStatus` is not explicitly set to `approved`.
- **References:** `service`, `location`.

### F. Price Item (`priceItem`)
- **Purpose:** Pricing display nodes to capture commercial intent.
- **Key Fields:**
  - `title` (string, required): Name of action.
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `priceType` (string enum, required): `from` / `range` / `quote-only`.
  - `fromPrice` (number, optional): Minimum value.
  - `rangeMin` & `rangeMax` (number, optional): Range boundaries.
  - `currency` (string, required, default `"EUR"`): default currency.
  - `caveatText` (text, required): Strict pricing variation caveat.
- **Validation:** Caveat text must be provided if the status is published.

### G. FAQ (`faq`)
- **Purpose:** Common Q&A snippets.
- **Key Fields:**
  - `question` (string, required)
  - `answer` (text, required)
  - `status` (string enum, required): `draft` / `review` / `published`.
  - `schemaEligible` (boolean, required, default `true`)

---

## 6. Astro Routing Plan

All static routes will fallback gracefully when database/seed content is missing, avoiding build breaks.

### `/` (Homepage)
- **Data Source:** siteSettings, published services, and trust markers.
- **Fallback:** Renders standard default placeholder text if siteSettings is missing.
- **Placeholder Strategy:** Uses "Presura" branding; no hardcoded NAP.

### `/usluge` & `/usluge/[slug]`
- **Data Source:** Services query from Sanity client (or `seed.json`).
- **Fallback:** Index shows "Nema dostupnih usluga" if empty. Dynamic route returns 404 (or `astro:content` fallback) if slug does not match.
- **Placeholder Strategy:** Mock service copy.

### `/problemi` & `/problemi/[slug]`
- **Data Source:** Problems query mapping recommended services.
- **Fallback:** Dynamic slug falls back to 404 if symptom is not found.
- **Placeholder Strategy:** Troubleshooting symptom lists.

### `/lokacije` & `/lokacije/[slug]`
- **Data Source:** Locations query.
- **Fallback:** If a location does not pass the unique proof check, **do not build the static page** (exclude from `getStaticPaths`) to prevent indexation of thin content.
- **Placeholder Strategy:** Staging geo proof placeholders.

### `/cjenik`
- **Data Source:** Price items query.
- **Fallback:** Displays "Cijena na upit" with caveat notice.
- **Placeholder Strategy:** Pricing ranges with generic numbers.

### `/radovi`
- **Data Source:** Works query filtered by `publishConsentStatus === 'approved'`.
- **Fallback:** Carousel/list renders generic trust bar if empty.
- **Placeholder Strategy:** Mock portfolio items.

---

## 7. Placeholder and Content Safety Strategy

- **Name Lock:** Code strictly uses `"Presura"` as a site placeholder. No hardcoded `"Presura d.o.o."` is permitted.
- **Non-Functional Contact Placeholders:** We will not create clickable `tel:` or `mailto:` links with fake placeholders. We will use non-functional placeholders like `"PHONE_PLACEHOLDER"`, `"EMAIL_PLACEHOLDER"`, `"ADDRESS_PLACEHOLDER"`, or disabled `href="#"` attributes. No final phone, email, address, opening hours, legal name, NAP, or schema properties are hardcoded.
- **SEO & Search Index Safeguards:** `PUBLIC_SITE_URL` defaulted to `https://example.com` automatically outputs `<meta name="robots" content="noindex, nofollow" />` to prevent sandbox indexation. Production indexability requires a final approved production domain and final NAP/schema approval.
- **Thin Content Block:** Location page compilation checks validation rules; pages with zero local proof blocks are excluded from generation.

---

## 8. Proposed Commands (No execution yet)

- Add Sanity integration and dependencies (Vite plugin / Client):
  ```bash
  pnpm add @sanity/client @sanity/image-url
  pnpm add -D sanity
  ```
- Run static build validation:
  ```bash
  pnpm run build
  ```

---

## 9. Verification Plan

- **TASK-002 (`/verification/TASK-002.md`):** Shows code configuration snippets of local Sanity schemas and a local CLI test output confirming schema validation passes.
- **TASK-003 (`/verification/TASK-003.md`):** Records static route list generated during build check (`pnpm run build` console output logs) proving all endpoints map correctly without breaking.

---

## 10. Build Notes and Docs Plan

- **`/build-notes/phase-02-sanity-schemas-routes.md`:** Standard build logs containing schema relation graphs, files changed, and commands.
- **`/docs/cms-editor-guide.md`:** Manual explaining content validation (e.g. why a location page won't publish without local proof).
- **`/docs/content-update-guide.md`:** Documents Vercel trigger hooks (placeholder manual redeployment workflow).

---

## 11. Risks and Approval Gates

- **`SUPABASE_URL` / `SUPABASE_ANON_KEY`:** **NOT SPECIFIED** (No database connections initialized in this phase).
- **Sanity Production Project & Tokens:** **SCOPE RISK** / **LAUNCH BLOCKER** (Local seed mocks only; do not configure production accounts).
- **Real NAP Data:** **NEEDS HUMAN APPROVAL** (Must keep placeholders).
- **Local Route Indexability:** **NOT VERIFIED** (Indexation disabled by default).

### Phase 2 Verification Boundaries
At the end of Phase 2, we will claim **PASS** only for the local schema files, local mock route generation, and successful static build evidence. 

The following items **must remain NOT VERIFIED** after Phase 2:
- Sanity production project connection
- Sanity dataset creation
- Sanity real editor workflow
- Final NAP/contact/schema values
- Real production content
- Local page proof assets
