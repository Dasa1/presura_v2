# Demo Readiness Checklist

This checklist tracks the requirements and safety criteria for presenting the website to the owner in a demo-ready environment.

| # | Check / Requirement | Status | Verification File / Location | Notes |
|---|---|:---:|---|---|
| 1 | **Abstract Placeholders Only** | PENDING | [seed.json](file:///d:/Presura_v2/src/sanity/seed.json) | Check that no real address, phone, email, or hours are exposed in the UI or schemas. |
| 2 | **Privacy & Security Logs** | PENDING | [inquiries.ts](file:///d:/Presura_v2/src/pages/api/inquiries.ts) | Ensure raw client IP logging on rate limit events remains removed (F-001 resolved). |
| 3 | **Staging Schema Gating** | PENDING | [SchemaMarkup.astro](file:///d:/Presura_v2/src/components/seo/SchemaMarkup.astro) | Verify that no JSON-LD is emitted when `schemaEnabled` is false (F-002 resolved). |
| 4 | **No Indexing Meta Tags** | PENDING | [MetaTags.astro](file:///d:/Presura_v2/src/components/seo/MetaTags.astro) | Confirm `noindex, nofollow` meta is active on staging preview builds. |
| 5 | **Search Crawler Exclusion** | PENDING | [robots.txt](file:///d:/Presura_v2/public/robots.txt) | Verify that robots.txt disallows all user agents (`Disallow: /`). |
| 6 | **Turnstile Mock Gating** | PENDING | [inquiries.ts](file:///d:/Presura_v2/src/pages/api/inquiries.ts#L71) | Confirm that real Turnstile verification is bypassed only in DEV mode (`import.meta.env.DEV`). |
| 7 | **Safe Staging Logs** | PENDING | Console Outputs | Check that no PII (emails, names, phone numbers) or mock lead data is written to console logs in the owner-facing preview. |
| 8 | **No Real Secrets Committed** | PENDING | `.env*` files | Ensure `.env` is omitted and no real API tokens are tracked in git history. |
| 9 | **A11y Helper Linkages** | PENDING | [InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) | Verify dedicated `form-email-helper` is linked to email inputs (F-004 resolved). |
| 10 | **UI Polish Level & Glassmorphism** | PENDING | Custom CSS | Verify subtle glass-like surfaces only; check that typography contrast and mobile accessibility are preserved. |
| 11 | **Demo Banner on Preview** | PENDING | [InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) | Confirm owner-facing preview displays the demo banner: `"PROBNI RAD: Sustav radi u testnom načinu. Slanje upita je onemogućeno i podaci se ne spremaju u bazu."` |
| 12 | **Preview Form Disabled (No Fake Success)** | PENDING | [InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) | Ensure the inquiry form is visually and functionally disabled in preview mode. Do not simulate successful submissions or display false success screens. |
| 13 | **No Proof-Like Image Naming** | PENDING | `public/demo-assets/` | Verify no images are named with proof-like terms (e.g. `demo-proof`, `completed-work`). Use generic name structure: `demo-technical-installation-ambience.webp`. |
| 14 | **Generic Demo Assets Only** | PENDING | `public/demo-assets/` | Confirm all visual assets are documented as `DEMO_PLACEHOLDER_ASSET` and carry alt text starting with `"Demo placeholder: ..."`. |
| 15 | **Public Launch Remains Blocked** | PENDING | UI & Docs | Confirm public launch remains explicitly NOT APPROVED. |

---

## Safety Validation Rules
- **NEEDS HUMAN APPROVAL:** Any replacement of placeholder contact information (NAP).
- **LAUNCH BLOCKER:** Changing `schemaEnabled` to `true` or removing the robots.txt disallow block.
- **LAUNCH BLOCKER:** Connecting live Supabase, Resend, or Turnstile production keys.
