# Build Notes: Phase 2 — Sanity Schemas & Content Routes

- **Phase**: Phase 2 (Sanity Content & Routing)
- **Status**: Completed (Static Build Verified)
- **Author**: Antigravity AI
- **Repository Root**: `d:\Presura_v2`

---

## 1. Dependencies Installed

- `@sanity/client` (production client)
- `@sanity/image-url` (image utility)
- `sanity` (development dependency, Studio engine)

*Note: Build scripts approved in `pnpm-workspace.yaml` were `esbuild` and `sharp`.*

---

## 2. Files Created & Modified

### New Sanity Config & Schemas:
- [sanity.config.ts](file:///d:/Presura_v2/sanity.config.ts) (Local Studio setup with fake projectId)
- [src/sanity/client.ts](file:///d:/Presura_v2/src/sanity/client.ts) (Local query resolver/mock client)
- [src/sanity/seed.json](file:///d:/Presura_v2/src/sanity/seed.json) (Local mock content database)
- [src/sanity/schemas/index.ts](file:///d:/Presura_v2/src/sanity/schemas/index.ts) (Schema index)
- [src/sanity/schemas/siteSettings.ts](file:///d:/Presura_v2/src/sanity/schemas/siteSettings.ts) (Site setup with placeholder fields)
- [src/sanity/schemas/service.ts](file:///d:/Presura_v2/src/sanity/schemas/service.ts) (Services schema)
- [src/sanity/schemas/problem.ts](file:///d:/Presura_v2/src/sanity/schemas/problem.ts) (Problems/symptoms schema)
- [src/sanity/schemas/location.ts](file:///d:/Presura_v2/src/sanity/schemas/location.ts) (Location schema with proof block checks)
- [src/sanity/schemas/work.ts](file:///d:/Presura_v2/src/sanity/schemas/work.ts) (Work schema with consent check)
- [src/sanity/schemas/priceItem.ts](file:///d:/Presura_v2/src/sanity/schemas/priceItem.ts) (Price schema with caveat validation)
- [src/sanity/schemas/faq.ts](file:///d:/Presura_v2/src/sanity/schemas/faq.ts) (FAQ schema)

### Astro Content Routes Created/Modified:
- [src/pages/usluge/index.astro](file:///d:/Presura_v2/src/pages/usluge/index.astro) (Service index)
- [src/pages/usluge/[slug].astro](file:///d:/Presura_v2/src/pages/usluge/[slug].astro) (Service details)
- [src/pages/problemi/index.astro](file:///d:/Presura_v2/src/pages/problemi/index.astro) (Problems list)
- [src/pages/problemi/[slug].astro](file:///d:/Presura_v2/src/pages/problemi/[slug].astro) (Problem details)
- [src/pages/lokacije/index.astro](file:///d:/Presura_v2/src/pages/lokacije/index.astro) (Locations list)
- [src/pages/lokacije/[slug].astro](file:///d:/Presura_v2/src/pages/lokacije/[slug].astro) (Location details)
- [src/pages/cjenik.astro](file:///d:/Presura_v2/src/pages/cjenik.astro) (Pricing list)
- [src/pages/radovi/index.astro](file:///d:/Presura_v2/src/pages/radovi/index.astro) (Works list)

### Documentation Updated:
- [docs/cms-editor-guide.md](file:///d:/Presura_v2/docs/cms-editor-guide.md) (Content requirements)
- [docs/content-update-guide.md](file:///d:/Presura_v2/docs/content-update-guide.md) (Static rebuild guide)

---

## 3. Commands Run

- `pnpm run build` (Executed successfully, generating 12 static HTML pages).

---

## 4. Phase 2 Verification Status

| Requirement / Task | Status | Notes / Evidence |
| :--- | :---: | :--- |
| **TASK-002 (Sanity Schemas)** | **PASS** | Schemas successfully created in code. Validations defined for priceItem, location, and work consent. |
| **TASK-003 (Content Routes & IA)** | **PASS** | `pnpm run build` completed successfully, generating all expected pages. Excludes location pages with 0 proof blocks. |
| **Sanity Production Connection** | **NOT VERIFIED** | Explicitly out of scope (local mock posture only). |
| **Real NAP/Contact Values** | **NOT VERIFIED** | Keeping placeholders only (`PHONE_PLACEHOLDER`, `EMAIL_PLACEHOLDER`, `ADDRESS_PLACEHOLDER`, `#`). |
| **Gdpr / Real Consent Log** | **NOT VERIFIED** | Works filter only on mock seed values (`publishConsentStatus === 'approved'`). |
| **Local Proof Asset Assets** | **NOT VERIFIED** | Using text description blocks for proof; actual imagery setup belongs to Phase 3/5. |

---

## 5. Known Limitations & Offline Posture

1. **Offline posturing**: Astro pages fetch data from `src/sanity/seed.json` via a local client mock. No external network request is made during build.
2. **Branding Lock**: All pages strictly use "Presura" with placeholder NAP information. No real commercial info is used.
3. **No Indexation**: Since `PUBLIC_SITE_URL` points to `example.com` (or preview domains), the layout inserts `<meta name="robots" content="noindex, nofollow" />` preventing premature indexing.

---

## 6. Recommendations for Phase 3

1. **Design System & Polish**: Create concrete HSL components for light/dark responsive theme. Apply tailwind styling to existing route content.
2. **Emergency CTA**: Add the persistent float header/footer emergency card.
3. **SEO Integration**: Connect siteSettings toggle and inject structured data (JSON-LD) for HVAC services dynamically.
