# Human Decision Review — technical-service-website only

## Executive summary

This review shows only the remaining approvals required before Antigravity task generation for the **technical-service-website** project.

Approved workflow boundary:

- DEC-001: Approved — keep generated packs separate.
- UNCLEAR-001: Approved — proceed with technical-service-website first and only.
- Croatian scheduling SaaS decisions, requirements, architecture, risks, roadmap items and tasks are excluded.
- Antigravity task generation remains blocked until the remaining website-only decisions below are approved.

## Applied stack revision

Approved preferred MVP stack has been applied:

- Astro for the frontend.
- Tailwind CSS v4 for styling.
- Sanity as the CMS for structured public content.
- Supabase as the database for inquiry/lead storage only.
- Resend for email notifications from inquiry/contact forms.
- Vercel as the deployment target.
- Cloudflare Turnstile or equivalent for form anti-spam.
- Privacy-friendly analytics first.

Payload CMS implementation references were replaced with Sanity where appropriate. Supabase is scoped to inquiry/lead storage and is not the public content source of truth for MVP.

## Applied requirement updates

- REQ-PROD-003A: Minimal Sanity CMS schemas for MVP = P0.
- REQ-PROD-003B: Editor-friendly Sanity Studio workflow = P1.
- Added Supabase inquiry/lead storage requirement.
- Added Resend form email notification requirement.
- Updated Vercel deployment and Sanity webhook/rebuild expectations.
- Kept the same MVP scope and out-of-scope boundaries.
- Kept No PASS without evidence.
- Kept security/privacy expectations.
- Kept numeric performance values as targets unless explicitly approved as hard launch blockers.

## Remaining website-only decisions before task generation

### 1. Data, forms and privacy

| Decision ID | What you need to decide | Current recommendation | Why it matters | Risk if wrong | Recommended choice | Options you can approve |
|---|---|---|---|---|---|---|
| WEB-DEC-006 | Approve inquiry data retention | Store minimal inquiry/lead records in Supabase for 6 months, then delete/anonymize unless converted into an active business record | Form submissions may contain personal or sensitive service details | Excessive retention increases privacy and breach impact; too little retention may harm follow-up | 6 months then delete/anonymize | A. 6 months; B. 12 months; C. Email-only/no Supabase storage; D. Longer with explicit business justification |
| WEB-DEC-008 | Approve analytics/privacy provider | Privacy-friendly analytics first; Consent Mode/CMP only if ads or marketing tags require it | Tracking affects GDPR exposure and marketing attribution | Non-compliant cookies or poor visibility into lead-generation performance | Privacy-friendly analytics first | A. Plausible-style analytics; B. Matomo-style analytics; C. GA4 + Consent Mode v2; D. No analytics in MVP |

### 2. Security and launch blockers

| Decision ID | What you need to decide | Current recommendation | Why it matters | Risk if wrong | Recommended choice | Options you can approve |
|---|---|---|---|---|---|---|
| WEB-DEC-014 | Approve Sanity admin access control posture | Sanity Studio/editor access should use least privilege, strong passwords and 2FA where available; server tokens must not be exposed to browser code | Sanity controls public content and media | Content compromise, exposed write tokens or unauthorized public content changes | Require least privilege and 2FA where available | A. Make 2FA launch-blocking; B. Require 2FA where available but do not block if unavailable; C. Treat 2FA as post-launch hardening |
| WEB-DEC-015 | Confirm performance target policy | Numeric CWV values remain implementation targets, not automatic hard launch blockers | Prevents accidental over-blocking while keeping performance evidence required | Launch blocked by non-critical metric misses, or launched without evidence | Keep numeric values as targets only | A. Targets only; B. Make selected CWV values hard blockers; C. Decide after first performance evidence |

### 3. Content/assets/NAP

| Decision ID | What you need to decide | Current recommendation | Why it matters | Risk if wrong | Recommended choice | Options you can approve |
|---|---|---|---|---|---|---|
| WEB-DEC-010 | Approve public NAP/contact/schema handling | Use placeholders until business-approved public name, address, phone, website, hours and schema data are provided | NAP appears in UI, schema and lead routing | Wrong public business data, privacy exposure or broken lead routing | Keep placeholders until approved data is supplied | A. Use placeholders until final approval; B. Use research values as-is; C. Provide corrected public NAP before task generation |
| WEB-DEC-011 | Approve media/proof asset approach | Use real work photos, certifications/trust badges and local proof where available; placeholders may be used during build but should be replaced before launch | Trust and local SEO depend on authentic proof | Generic low-trust website or thin local pages | Real-assets-first with build placeholders allowed | A. Real assets required before launch; B. Build placeholders allowed but replace before launch; C. Use stock assets where needed |
| WEB-DEC-012 | Approve local page content rule | Create only 2-3 local pages in MVP and only when each has unique local proof/value | Avoids thin or duplicated local SEO pages | SEO dilution, low-trust pages or scope creep | 2-3 local pages with unique proof | A. 2-3 unique local pages; B. Local hub only in MVP; C. More local pages now |
| WEB-DEC-013 | Approve pricing transparency level | Show ranges/from-prices with caveats where possible | Pricing transparency supports trust and lead quality | Too vague reduces trust; too specific may create disputes | Ranges/from-prices with caveats | A. Ranges/from-prices; B. No prices, quote request only; C. Fixed prices for selected services only |

### 4. Final approval before tasks

| Decision ID | What you need to decide | Current recommendation | Why it matters | Risk if wrong | Recommended choice | Options you can approve |
|---|---|---|---|---|---|---|
| UNCLEAR-WEB-001 | Approve revised website docs for task generation | Approve this Sanity/Supabase/Resend/Vercel revision before generating Antigravity tasks | Tasks must be generated only from approved project docs | Tasks inherit unapproved assumptions | Approve revised docs after selecting remaining decisions | A. Approve as revised; B. Approve with listed changes; C. Request another revision |

## Approval template

```text
I approve the revised technical-service-website project docs for Antigravity task generation with these decisions:

Data, forms and privacy:
- WEB-DEC-006:
- WEB-DEC-008:

Security and launch blockers:
- WEB-DEC-014:
- WEB-DEC-015:

Content/assets/NAP:
- WEB-DEC-010:
- WEB-DEC-011:
- WEB-DEC-012:
- WEB-DEC-013:

Final approval:
- UNCLEAR-WEB-001:

Approved stack:
- Astro frontend
- Tailwind CSS v4
- Sanity CMS for structured public content
- Supabase for inquiry/lead storage only
- Resend for inquiry/contact email notifications
- Vercel deployment
- Cloudflare Turnstile or equivalent
- Privacy-friendly analytics first

Do not include SaaS tasks, requirements, architecture, risks or roadmap items.
Generate Antigravity tasks for the technical-service-website project only.
```
