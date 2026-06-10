# Implementation Plan: Demo-Ready & Provisioning-Ready Preparation

This plan outlines the scope, visual design parameters, asset lists, verification rules, and provisioning steps required to transition the **Presura** local technical services website into a **Demo-Ready** and **Provisioning-Ready** state.

> [!IMPORTANT]
> **Production public launch remains NOT APPROVED.** This plan focuses exclusively on local and staging/preview configurations for owner demonstration and preparation, without activating indexing, real schemas, or live integrations.
>
> **Do not proceed with execution until receiving explicit approval.**

---

## 1. Active Workspace & Git Branch Confirmation

- **Only Source of Truth:** `d:\Presura_v2`
- **Active Working Branch:** `demo-visual-polish` (confirmed via `git branch`)
- **Baseline References:** Branch `main` and tag `local-mvp-handover-complete` represent the verified stable MVP baseline. They will not be modified or committed to.
- **State Check:** No source, configuration, or documentation files have been modified prior to the approval of this plan.

---

## 2. Status Definitions & Boundaries

### A. Demo-Ready State
A secure presentation-ready state to demonstrate website aesthetics and functionality to the future owner:
- **Visual Polish:** Fully styled layout with unified typography and professional visual assets.
- **Placeholder-Safe:** All public business values, phone numbers, emails, addresses, hours, and legal identifiers remain abstract placeholders.
- **Preview Form Disabled (No Fake Success):** On Vercel Preview or any owner-facing demo, the inquiry form fields and submit button must be visibly and functionally disabled. No fake success state is simulated, and no false success screens are shown. Mock lead details are not written to console logs during owner-facing preview sessions.
- **No Search Indexing:** Guaranteed via both `robots.txt` (`Disallow: /`) and dynamic `noindex, nofollow` metadata.
- **No Schema.org Activation:** `schemaEnabled` remains `false`.
- **Status:** **NOT APPROVED FOR PUBLIC LAUNCH**.

### B. Provisioning-Ready State
A complete documentation and checklist setup prepared for the transition to production hosting:
- **Provider Checklist:** Step-by-step registration instructions for Supabase, Resend, Vercel, and Cloudflare Turnstile.
- **Environment Variables Mapping:** A complete classification of private server-only secrets vs. public client-safe variables.
- **Owner Access Plan:** Account handover procedures.
- **Live Integration Plan:** Steps for validating real database insertions, email delivery, and captcha validation.
- **Status:** No live SaaS provider accounts are connected during this phase. No real API keys are injected.

---

## 3. Demo Visual Foundation Polish Scope

The later visual pass will improve the aesthetic quality of the pages to create a conservative, credible, and premium technical-service feel. 

### Allowed Files for Modification
- `src/styles/global.css` (Colors, layout tokens, global utilities, transitions)
- `src/layouts/Layout.astro` (Base styling layout, typography loads)
- `src/components/Header.astro` (Navigation layout, visual consistency)
- `src/components/Footer.astro` (Footer visual grid and separator borders)
- `src/components/StickyCTA.astro` (Mobile sticky phone button polish)
- `src/components/TrustBar.astro` (Alignment and spacing of placeholder badges)
- `src/components/ServiceCard.astro` (Aesthetic refinement of service blocks, shadows, hovers)
- `src/components/ProblemCard.astro` (Refinement of problem grids, icons, text contrast)
- `src/components/InquiryForm.astro` (Field spacing, focus borders, validation color states, CTA button, preview banner)
- `src/components/analytics/PrivacyAnalytics.astro` (Verify fallback tracking template loads cleanly)
- `src/components/seo/MetaTags.astro` (Confirm noindex logic is preserved)
- `src/components/seo/SchemaMarkup.astro` (Verify block logic; no schema activation)
- `src/pages/index.astro` (Hero layout grid, spacing, container alignment)
- Selected dynamic templates (`src/pages/usluge/[slug].astro`, `src/pages/lokacije/[slug].astro`, `src/pages/problemi/[slug].astro`) ONLY if required to align responsive vertical spacing.

---

## 4. UI Polish Goals by Area

| Area | MVP Baseline | Visual Polish Goal |
|---|---|---|
| **Header** | Simple text nav | Subtle glass-like surfaces only (preserving contrast and text readability, avoiding a generic SaaS look), phone placeholder prominence. |
| **Hero** | Plain text grid | Deep navy backdrop, soft orange-amber accent gradient, professional layout alignment, technical ambience image card. |
| **CTA Buttons** | Default solid borders | Harmonic color states (primary orange-amber hover states, active transitions), accessible target sizing, prominent interactive indicator. |
| **Trust Bar** | Centered gray labels | Clean grid border separators, subtle icon fills, balanced mobile wrapping. |
| **Service Cards** | Bordered boxes | Soft box-shadow, subtle border transitions on hover, optimized layout structure for text readability. |
| **Problem Cards** | Bold bullet list | Warning-hued accents, custom list bullet designs, clear action routes. |
| **Inquiry Form** | Standard stacked fields | Visually disabled input state in preview mode, warning notice banner, form container styling (background tint, soft rounded borders), distinct focus rings, readable helper text positions. |
| **Footer** | Centered copyright text | Multi-column structure, clean gray separators, accessibility links, legal placeholder block. |
| **Mobile Sticky CTA**| Plain banner | Floating bottom pill with glassmorphism backdrop (subtle surfaces with high accessibility/contrast), phone icon, staying below modal overlays. |
| **Spacing & Spans** | Standard layout | Fine-tuned margin/padding scale using responsive Tailwind spacing units (`px`, `py`, `gap-` values). |

---

## 5. Demo Visual Asset Plan

To replace the raw image placeholders with realistic demo graphics, we will plan high-quality, professional-grade visual placeholders. These assets are clearly marked as placeholders and do not represent real completed work or real employees.

- **Storage Location:** `public/demo-assets/`
- **Naming Convention:** `demo-[type]-[description].webp`
- **Alt Text Rule:** Must contain "Demo placeholder: ..." and must **never** imply that the image represents real work, real proof, or a real Presura project.
- **Classification:** Every asset is documented as a `DEMO_PLACEHOLDER_ASSET` in the asset plan and requires owner approval for replacement or retention.

### Proposed Visual Asset List

| File Name | Intended Page / Usage | Image Theme Description | Alt Text |
|---|---|---|---|
| `demo-hero-ambience.webp` | Home / Hero background or side-card | Premium view of a clean technical HVAC boiler setup with gauges in HSL slate/navy styling. | Demo placeholder: Modern heating installation. |
| `demo-boiler-service.webp` | Service / Boiler servicing card | Close-up of a pressure gauge and copper pipes on a modern gas boiler. | Demo placeholder: Close-up of boiler servicing equipment. |
| `demo-radiator-flushing.webp` | Service / Radiator flushing card | Flushing valve connection showing clear water maintenance hoses attached to a radiator. | Demo placeholder: Radiator flushing process. |
| `demo-heat-pump.webp` | Service / Heat pump card | Sleek outdoor heat pump unit standing against a clean wall in a garden setting. | Demo placeholder: Outdoor heat pump unit. |
| `demo-water-softener.webp` | Service / Water softener card | Compact cabinet water softener unit showing control display. | Demo placeholder: Cabinet water softener system. |
| `demo-cta-ambience.webp` | Contact / Inquiry Form background | Abstract soft out-of-focus background of copper heating manifolds. | Demo placeholder: Heating manifold pipes. |
| `demo-tech-pattern.svg` | Hero / Site background decoration | Fine grid lines or architectural schematic overlay pattern. | Technical pattern background overlay. |
| `demo-technical-piping-ambience.webp`| UI Card / Spacers | Neatly arranged utility pipes and control valves showing a generic technical piping layout (purely illustrative, non-proof). | Demo placeholder: Neatly installed heating pipes. |

---

## 6. Content Safety & Placeholder Boundaries

### A. Existing Site Context (`presura.hr` Reference)
The current public site at `https://www.presura.hr/` is used **strictly** for technical service context (verifying which services to list).
- **Do not** import real addresses, real phone numbers, real emails, OIB, IBAN, legal names ("Presura d.o.o."), Vaillant partnerships, or client reviews into the polish files.
- All reused facts or brand claims must be explicitly documented and marked as `NEEDS HUMAN APPROVAL` / `NOT VERIFIED`.

### B. Confirmed Abstract Placeholders
The codebase will continue to use the following safe tokens:
- `PHONE_PLACEHOLDER` (UI/Schema)
- `EMAIL_PLACEHOLDER` (UI/Schema)
- `ADDRESS_PLACEHOLDER` (UI/Schema)
- `HOURS_PLACEHOLDER` (UI/Schema)
- `RATING_PLACEHOLDER` (Reviews / Testimonials)
- `REVIEW_COUNT_PLACEHOLDER` (Reviews / Testimonials)
- `LOCAL_CONTEXT_PLACEHOLDER_*_NEEDS_VERIFICATION` (Local landing pages)
- `LOCAL_PROOF_PLACEHOLDER_*_NEEDS_REAL_DATA` (Local landing pages)

---

## 7. Quality Preservation Plans

### A. Accessibility Preservation
- **Color Contrast:** Keep color combinations above WCAG 2.2 AA ratios (e.g., text against navy background at >= 4.5:1).
- **Focus Rings:** Ensure all interactive elements retain a high-contrast `:focus-visible` outline.
- **Keyboard Navigation:** Retain existing semantic HTML layout, skip-links, and clean tab-order.
- **Aria Attributes:** Maintain correct semantic linkages between input fields and helper spans (including the newly added `form-email-helper`).
- **Reduced Motion:** Retain `prefers-reduced-motion` media query protections in custom CSS animations.
- **Touch Targets:** Buttons and interactive links will keep minimum touch targets of `48px x 48px`.

### B. Performance Preservation
- **Local Assets Only:** No external CDNs or heavy scripts will be added.
- **Optimization:** All generated visual assets will be converted to webp/svg format with compression, with a maximum file size constraint of `< 150KB` per raster image.
- **Zero New Dependencies:** Maintain the current package tree; do not run `pnpm add` or install new libraries.

---

## 8. Vercel Preview Demo Deployment Plan

This is a planning checklist for a later staging/preview deployment to allow owner review. **No deploy commands will be executed during this step.**

- **Target Build Type:** Staging Preview (automatic Vercel branch deployment triggered by pushing to `demo-visual-polish` remote branch).
- **Production Flag:** **Never** run `vercel --prod` or link the branch to a production domain.
- **Site Indexing Gate:** The Vercel preview domain (`*.vercel.app`) automatically triggers `noindex, nofollow` meta tags via `MetaTags.astro`.
- **Form Submission Warning & Behavior:** The inquiry form on the preview URL will be visibly disabled, and will include a clear, accessible header banner text: `"PROBNI RAD: Sustav radi u testnom načinu. Slanje upita je onemogućeno i podaci se ne spremaju u bazu."` No mock data is submitted or simulated as successful, and no console logging of submissions occurs.
- **Secrets Posture:** Staging variables on Vercel dashboard will use placeholder keys.

---

## 9. Verification & Evidence Plan

To verify the visual polish pass, the following documentation and log files will be created in later steps:
1. **`verification/TASK-DEMO-READY.md`:** Documenting that all placeholder constraints are verified, noindex is active, and no secrets exist in the build.
2. **`verification/TASK-UI-POLISH.md`:** Documenting keyboard navigation checks, contrast ratios, and layout responsiveness.
3. **`build-notes/demo-ready-preparation.md`:** Recording seed validation and initial setup compilation.
4. **`build-notes/demo-visual-foundation-polish.md`:** Storing the final `pnpm run build` compilation log for the polish files.

---

## 10. Proposed Planning Files to Create

We will write the detailed sub-plan files in the repository:
1. [demo/demo-readiness-checklist.md](file:///d:/Presura_v2/demo/demo-readiness-checklist.md)
2. [demo/vercel-preview-demo-notes.md](file:///d:/Presura_v2/demo/vercel-preview-demo-notes.md)
3. [demo/demo-visual-asset-plan.md](file:///d:/Presura_v2/demo/demo-visual-asset-plan.md)
4. [provisioning/production-provisioning-plan.md](file:///d:/Presura_v2/provisioning/production-provisioning-plan.md)
5. [provisioning/owner-input-checklist.md](file:///d:/Presura_v2/provisioning/owner-input-checklist.md)

---

## 11. Proposed Execution Sequence

1. **Step 1 (Current):** User reviews and approves this pre-implementation plan.
2. **Step 2:** Update the 5 sub-plan files in `demo/` and `provisioning/` folders (Completed).
3. **Step 3:** Review and approve the sub-plan documents.
4. **Step 4:** Execute the Demo Visual Foundation Polish (modify CSS, layouts, components, and generate visual assets).
5. **Step 5:** Perform local builds and verification checks.
6. **Step 6:** Push changes to the `demo-visual-polish` branch on GitHub (triggering Vercel Preview).
7. **Step 7:** Owner reviews staging URL and provides feedback.
8. **Step 8:** Owner provides production credentials and approved NAP.
9. **Step 9:** Execute production provisioning and final verification checks.
10. **Step 10:** Public Launch Approval.

---

## 12. Proposed Commands (Allowed)
- `git status`
- `pnpm run build`
- `pnpm run preview`

---

## 13. Risks, Gates & Classifications

- **`NEEDS HUMAN APPROVAL` / `LAUNCH BLOCKER`:** Replacement of all placeholder contact information.
- **`NEEDS HUMAN APPROVAL` / `LAUNCH BLOCKER`:** Toggle `schemaEnabled: true` in production database/CMS settings.
- **`NOT VERIFIED` / `LAUNCH BLOCKER`:** Live credentials verification (Supabase, Resend, Turnstile, Vercel).
- **`SCOPE RISK`:** Introducing too many heavy animations that degrade PageSpeed scores below the performance target.
- **`SCOPE RISK`:** Using unapproved styling patterns that diverge from the dark/navy + orange technical utility aesthetic.
