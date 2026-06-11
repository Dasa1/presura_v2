# Premium Demo Visual Redesign Plan V2

This document details the Premium Demo Visual Redesign Plan v2, aimed at transforming the baseline visual styling into a premium industrial local technical-service representation while maintaining strict demo safety and placeholder integrity.

---

## 1. Current v1 Critique
The current Demo Visual Polish v1 focuses heavily on functional correctness and safety but has several design weaknesses that make the owner-facing demo feel average:
- **Centered Hero:** A generic, centered hero layout that lacks the technical gravity and impact of a high-end service provider.
- **Weak Conversion Hierarchy:** CTAs are visible but lack distinct visual weights, micro-interactions, or structured layout hierarchy to guide the user's attention.
- **Generic Cards:** The service and problem cards look standard and flat, failing to convey premium craft and industrial precision.
- **Weak Section Rhythm:** Spacing is uniform and tight, offering little visual breathing room or clear editorial transitions between content blocks.
- **Proof-like Copy Risk:** Subtle claims, ratings, review counts, or phrasing might imply verified track records or specific external backing which are not yet approved.
- **Visible Placeholder Strings on Locations:** The locations page directly outputs technical placeholder tokens in raw format (e.g., `LOCAL_PROOF_PLACEHOLDER_...`), disrupting the premium demo feel.
- **Works/Radovi Page Copy Risk:** Language like "Naši odrađeni radovi" or "svaki projekt dokazuje" can sound like verified historical facts, which is unsafe for a demo baseline that has no approved public proof.

---

## 2. v2 Design Objective
To deliver a stronger, owner-facing demo that projects the aesthetic of a **premium industrial local technical-service website** while staying 100% placeholder-safe. 

The design must feel **credible, practical, technical, service-oriented, fast-response oriented, and locally relevant** without invoking any unverified local proof, fake ratings, or SaaS-like high-tech gadget aesthetics.

---

## 3. Homepage Redesign Plan
### Asymmetric Hero Section
Replace the centered hero with a dynamic asymmetric split layout.
- **Left Column:**
  - **Eyebrow:** Clean, small caps, high-contrast label pointing to local service availability.
  - **Headline:** Bold, technical, service-oriented heading using high typographic scale and tight line-height.
  - **Subheading:** Short, functional description emphasizing technical diagnostics and response.
  - **Primary CTA:** Dominant button styled with premium industrial accent borders, high contrast, and responsive hover effects.
  - **Secondary CTA:** A secondary ghost button that links to service information.
  - **Neutral Benefit Bullets (3):** Low-key, factual bullets highlighting practical service readiness (e.g., Dijagnostika sustava grijanja, Servis i održavanje, Informativna ponuda prije radova).
- **Right Column:**
  - **Visual Asset:** A large technical ambience image (WebP) depicting high-quality tools, clean technical piping, heating system components, pressure gauge, boiler ambience, or generic technical service ambience.
  - **Overlay Status Cards:** Factual mock status indicators overlaid on the image margin (e.g., "Dijagnostika", "Servis grijanja", "Upit za ponudu"), showing zero fake reviews or statistical proof.
  - **Alt Text:** Descriptive, demo-safe alt tags (classified as `DEMO_PLACEHOLDER_ASSET`).

---

## 4. Header Redesign Plan
Refactor the header to feel like a premium yet practical industrial technical utility:
- **Clear Navigation:** Cleanly aligned link structure with subtle hover underlines and indicators for the active state.
- **Visible CTA:** High-contrast text button exposing the `PHONE_PLACEHOLDER` directly in the header utility zone.
- **No Over-Design:** No excessive glassmorphism, neon glows, or SaaS-like floating menus. Keep it clean, solid, and reliable.
- **Strict Copy Safety:** Zero certification logos, partner badges, Vaillant logos, or claims of "24/7 service" in the header.

---

## 5. Service Urgency Strip
Replace the previous trust-like banner with a neutral technical status strip:
- **Neutral Categories:** Display a clean row of core service labels:
  - `Dijagnostika`
  - `Servis grijanja`
  - `Ispiranje radijatora`
  - `Upit za ponudu`
- **Explicit Exclusions:** Ensure there are no instances of:
  - `100%`
  - `Ovlašteni partner` / `Partner`
  - `dokazana prisutnost`
  - Ratings, stars, or review counts (e.g. `5.0`, `4.9`, `RATING_PLACEHOLDER`, `REVIEW_COUNT_PLACEHOLDER`).
  - Brand association claims (e.g. `Vaillant`, `Buderus`).
  - Availability claims (e.g. `24/7`, `Hitne intervencije 0-24`).

---

## 6. Service Cards Redesign Plan
Rebuild `src/components/ServiceCard.astro` as a premium pathways component:
- **Structure:**
  - **Category Label:** Small uppercase category text.
  - **Title:** Clear, high-contrast service title.
  - **Short Description:** Focuses on the scope of the service.
  - **Typical Requests Mini-List:** 2-3 specific technical examples of common customer needs.
  - **CTA Row:** Direct, clean action link.
- **Styling:** Subtle dark borders, generous padding, hover transitions using border tint changes rather than intense colors.
- **Copy Restrictions:** No fake guarantees or claims of certified speed.

---

## 7. Problem Cards Redesign Plan
Rebuild `src/components/ProblemCard.astro` to act as diagnosis guidance cards:
- **Structure:**
  - **Symptom Label:** Highly visible warning/alert status label.
  - **Issue Title:** Common homeowner complaints (e.g., "Hladni radijatori", "Gubitak pritiska").
  - **Possible Signs:** Factual bulleted list of indicators.
  - **Recommended Next Step:** Factual recommendation (e.g., "Stručna provjera i ispiranje").
  - **CTA:** Factual action link (e.g., "Pošalji upit za dijagnostiku").
- **Copy Restrictions:** No guaranteed diagnosis language. Keep advice strictly informational and pre-diagnostic.

---

## 8. Locations Page Safety Redesign
Ensure the locations page displays clean, safe copy without raw placeholder text or mock claims:
- **Wording updates:**
  - Replace any raw placeholder dumps or mock addresses with: `"Područje rada čeka vlasničku potvrdu."`
  - Include an explicit status disclaimer: `"Lokalni dokazi i reference nisu još verificirani."`
  - Replace reviews or counts (e.g. `"1 referenca"`) with: `"Čeka potvrdu"`.

---

## 9. Works/Radovi Page Safety Redesign
Reframe the entire page copy to prevent misleading demo viewers about historical project volumes:
- **Wording updates:**
  - Header/Intro text: `"Reference se pripremaju"`
  - Description: `"Radovi će biti objavljeni nakon vlasničkog odobrenja i provjere privola."`
- **Explicit Exclusions:** Remove phrases like `"Naši odrađeni radovi"`, `"stvarne reference"`, and `"svaki projekt dokazuje"`.

---

## 10. Pricing Page Safe Copy Polish
Audit `src/pages/cjenik.astro` and ensure any bold pricing claims are softened:
- **Wording updates:**
  - Soften or replace `"Bez skrivenih troškova"` with: `"Informativne cijene prije konačne ponude."`
  - Add footer disclaimer: `"Konačna ponuda ovisi o opsegu radova."`

---

## 11. Contact Form Plan
Polishing the visual appearance of `src/components/InquiryForm.astro` while strictly preserving demo safety behaviors:
- **UI Styling:** Elegant dark inputs, clear focus rings using secondary/neutral tones, polished labels.
- **Safety Banner:** The yellow/amber warning banner explaining that this is a demo environment must remain clearly visible.
- **Input Disabled:** All inputs and submit buttons must remain disabled (`disabled` attribute) in the preview environment.
- **No Mock Success:** The form must not execute a fake submission, show a mock success message, print mock logs in production/preview console, or invoke any live APIs.

---

## 12. Allowed Files for Later Execution
The visual redesign must be constrained only to the following list of files:
- [src/styles/global.css](file:///d:/Presura_v2/src/styles/global.css)
- [src/pages/index.astro](file:///d:/Presura_v2/src/pages/index.astro)
- [src/pages/lokacije/index.astro](file:///d:/Presura_v2/src/pages/lokacije/index.astro)
- [src/pages/radovi/index.astro](file:///d:/Presura_v2/src/pages/radovi/index.astro)
- [src/pages/cjenik.astro](file:///d:/Presura_v2/src/pages/cjenik.astro)
- [src/components/Header.astro](file:///d:/Presura_v2/src/components/Header.astro)
- [src/components/Footer.astro](file:///d:/Presura_v2/src/components/Footer.astro)
- [src/components/ServiceCard.astro](file:///d:/Presura_v2/src/components/ServiceCard.astro)
- [src/components/ProblemCard.astro](file:///d:/Presura_v2/src/components/ProblemCard.astro)
- [src/components/TrustBar.astro](file:///d:/Presura_v2/src/components/TrustBar.astro)
- [src/components/StickyCTA.astro](file:///d:/Presura_v2/src/components/StickyCTA.astro)
- [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro)
- [verification/TASK-DEMO-READY.md](file:///d:/Presura_v2/verification/TASK-DEMO-READY.md)
- [verification/TASK-UI-POLISH.md](file:///d:/Presura_v2/verification/TASK-UI-POLISH.md)
- [build-notes/demo-visual-foundation-polish.md](file:///d:/Presura_v2/build-notes/demo-visual-foundation-polish.md)
- [implementation_plan.md](file:///d:/Presura_v2/implementation_plan.md) (only if needed)

---

## 13. Forbidden Changes
The following items are strictly **FORBIDDEN**:
- **No Route Changes:** Do not add or remove paths.
- **No Schema Changes:** Keep schema markup completely disabled.
- **No API Changes:** No integration with real database, email, or third-party CRM APIs.
- **No Env Changes:** Do not alter, create, or read live environment secrets or configuration.
- **No Dependency Installs:** No `pnpm add`, no external UI package components.
- **No External Fonts:** Do not add Google Fonts links or import external font stylesheets. Use system font stack optimization.
- **No Deploy, Commit, or Push:** All work must remain local to the current working branch (`demo-visual-polish`) during execution.
- **No Real NAP/Contact Data:** Do not fill in verified phone numbers, names, physical addresses, or legal identifiers.
- **No Claims:** No Vaillant-certified logos, partner credentials, 24/7 labels, or 100% quality guarantees.
- **No Fake Reviews:** No dummy testimonials, ratings stars, or review lists.
- **No Fake Local Proof:** No geographic projects or reference case volumes unless actual client verification occurs.

---

## 14. Verification Plan
Upon approval and execution, verification must run:
- `git status` (confirm no forbidden files modified)
- `pnpm run build` (confirm build succeeds locally without error)

> [!WARNING]
> The following validation layers are marked as **NOT VERIFIED** (as they cannot be completed inside local environment boundaries):
> - Vercel Preview deployment status
> - Live customer inquiries or database submission
> - Production Lighthouse/Core Web Vitals scores
> - Comprehensive screen reader / accessibility validation
> - Final public launch approval

---

## 15. Success Criteria
The Premium Demo Visual Redesign v2 is successful if:
1. The landing page hero, header, and card styles feel premium, aligned with a "premium industrial local technical service" instead of a generic template.
2. CTA hierarchy is clear and distinct.
3. The locations, radovi (works), and pricing pages display clean, safe placeholder statuses instead of raw token codes or misleading claims.
4. Raw placeholder strings (`PHONE_PLACEHOLDER`, etc.) do not look broken or visually distorted in the layout.
5. The Astro build compilation succeeds.
6. Public launch remains strictly **NOT APPROVED**.
