# Phase 6 Pre-Implementation Plan — Webhooks & Handover

This document outlines the pre-implementation plan for Phase 6 of the Presura website project, encompassing:
- **TASK-010**: Vercel deployment and Sanity webhook setup.
- **TASK-013**: Verification evidence and launch checklist pack.

All planning and verification are resolved strictly from the active project workspace root at `d:\Presura_v2`.

---

## 1. Active Workspace Confirmation

The active workspace root is confirmed as:
- `d:\Presura_v2`

This directory is the sole source of truth for planning, inspection, and verification files. Stale Download package folders are entirely ignored.

---

## 2. Files to Inspect

Existing files in `d:\Presura_v2` to inspect for structural and deployment alignment:
- [package.json](file:///d:/Presura_v2/package.json) — Verify build configurations and engine parameters.
- [astro.config.mjs](file:///d:/Presura_v2/astro.config.mjs) — Verify SSR entrypoint and Vercel adapter settings.
- [src/pages/api/inquiries.ts](file:///d:/Presura_v2/src/pages/api/inquiries.ts) — Review environment variable imports and mock guards.
- [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) — Review Turnstile sitekey variables.
- [src/components/analytics/PrivacyAnalytics.astro](file:///d:/Presura_v2/src/components/analytics/PrivacyAnalytics.astro) — Check domain constraints.
- [src/sanity/seed.json](file:///d:/Presura_v2/src/sanity/seed.json) — Audit mock seed values.
- [verification/evidence-register.md](file:///d:/Presura_v2/verification/evidence-register.md) — Review existing verified task statuses.
- [build-notes/phase-05-seed-hardening.md](file:///d:/Presura_v2/build-notes/phase-05-seed-hardening.md) — Review Phase 5 execution logs.

---

## 3. Files to Create or Modify

### Files to Create:
- `/build-notes/phase-06-deployment-verification-handover.md` — Detailed log of Phase 6 processes, deployment checklists, and manual fallback guides.
- `/verification/TASK-010.md` — Webhook schema documentation, deployment variables register, and fallback verification logs.
- `/verification/TASK-013.md` — Requirement verification pack log, redacted form checks, and final launch checklist.

### Files to Modify:
- `verification/evidence-register.md` — Register verification results for TASK-010 and TASK-013.
- `docs/README.md` — Update directory listings and documentation statuses.
- `docs/local-development.md` — Document dependencies, mock postures, and start guides.
- `docs/deployment-and-env.md` — Detail production environment parameters and secrets registers.
- `docs/maintenance-guide.md` — Document routine checks, security audits, and backups.
- `docs/troubleshooting.md` — Detail webhook failures, credential rotations, and service failures.
- `docs/security-privacy-handover.md` — Summarize key isolation boundaries, GDPR constraints, and rate limiting profiles.
- `docs/change-log.md` — Catalog development history.
- `docs/known-limitations-and-roadmap.md` — Verify final limitations status.
- `docs/owner-manual.md` — High-level editor instruction pack.
- `docs/account-access-handover.md` — Log provider invitation templates.
- `docs/cms-editor-guide.md` — Document editorial workflow.
- `docs/content-update-guide.md` — Detail checklist for pre-launch placeholder replacement.
- `docs/lead-management-guide.md` — Explanations of inquiry tables and retention rules.
- `docs/seo-maintenance-guide.md` — Dynamic SEO checking guide.

---

## 4. Deployment Planning Boundary

> [!IMPORTANT]
> **Phase 6 Local Workflow Execution Boundary**
> Phase 6 execution in this local workflow is strictly limited to creating/updating documentation, verification evidence, launch checklists, handover documents, and deployment instructions.
> It MUST NOT:
> - Deploy to Vercel or run `vercel deploy` commands.
> - Create Vercel projects.
> - Create Sanity webhooks.
> - Run Supabase migrations or execute production database modifications.
> - Create production databases.
> - Connect live Supabase/Resend/Turnstile/analytics accounts.
> - Use or configure real secrets or credentials.
> - Enable search engine indexing (robots/noindex safety remains active).
> - Enable `schemaEnabled` (must remain `false` until final NAP/schema approval is granted).
> - Replace placeholder NAP, contact, or proof values (abstract tokens must be preserved).

To maintain project boundaries during Phase 6, all actual production infrastructure setup remains **NEEDS HUMAN APPROVAL / NOT VERIFIED** and will not be executed. We will outline and document the setup steps locally:

- **Vercel Project Creation:** Document local Astro integration settings and deployment hooks. Real hosting instantiation remains `NEEDS HUMAN APPROVAL`.
- **Vercel Env Vars:** Document setup variables for production/preview builds. Setting actual high-privilege credentials remains `NEEDS HUMAN APPROVAL`.
- **Sanity project/dataset IDs:** Extract static local settings. Generating production datasets and read/write tokens remains `NEEDS HUMAN APPROVAL`.
- **Sanity Webhook:** Document payload target URL (using Vercel Deploy Hook; note that `/api/revalidate` is NOT SPECIFIED and is out of scope as it has not been implemented or verified). Active webhook creation in Sanity console remains `NEEDS HUMAN APPROVAL`. No webhook is created during Phase 6. Real webhook setup remains `NEEDS HUMAN APPROVAL / NOT VERIFIED`.
- **Supabase Migration:** Database schema and policy scripts are prepared. Migration execution on production database remains `NEEDS HUMAN APPROVAL`.
- **Resend Domain Verification:** Document DNS verification procedures. Verifying domains remains `NEEDS HUMAN APPROVAL`.
- **Turnstile Keys:** Document client sitekeys and server secret keys. Keys generation remains `NEEDS HUMAN APPROVAL`.
- **Analytics Domain:** Document Plausible wrapper settings. Tracker integration remains `NEEDS HUMAN APPROVAL`.
- **Final Production Domain:** Document canonical setup. Domain DNS mapping remains `NEEDS HUMAN APPROVAL`.
- **Final NAP/Contact/Schema values:** Document placeholder replacement steps. Approved business data integration remains `NEEDS HUMAN APPROVAL`.

---

## 5. Environment Variable Plan

Environment variables are classified by public client-safe and private server-only postures. Real values will not be exposed or hardcoded:

### Public / Client-Safe (Prefix: `PUBLIC_`)
- `PUBLIC_SITE_URL` — Production canonical domain. Used for canonical tags and sitemaps.
- `PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile public token. Renders anti-spam widgets.
- `PUBLIC_ANALYTICS_DOMAIN` — Privacy analytics domain parameter. Loader script matches this.

### Private / Server-Only
- `SUPABASE_URL` — Database API URL. Serves inquiry insertion.
- `SUPABASE_SERVICE_ROLE_KEY` — High-privilege API bypass key. Server-only insert authority.
- `RESEND_API_KEY` — Email notification client secret.
- `RESEND_FROM_EMAIL` — Approved sending domain sender email address.
- `INQUIRY_RECIPIENT_EMAIL` — Approved company inbox receiving inquiry leads.
- `TURNSTILE_SECRET_KEY` — Cloudflare verification secret. Used to verify tokens.

---

## 6. Webhook Plan

Dynamic content updates rely on Vercel deployment rebuilds. We will document the setup under these guidelines:
- **Primary Webhook Path:** Sanity publish event triggers a Vercel Deploy Hook.
- **`/api/revalidate` Out of Scope:** The `/api/revalidate` endpoint is NOT SPECIFIED and is out of scope as it has not been implemented or verified.
- **Manual Fallback:** If automated webhooks are not configured, editors can manually trigger a build and redeploy the production build via the Vercel console redeploy button.
- **Execution Boundary & Posture:** No webhook is created during Phase 6. Real webhook setup remains **NEEDS HUMAN APPROVAL / NOT VERIFIED** and requires separate human approval.

---

## 7. Launch Checklist Plan

Launch blocks are classified below. Production indexing is blocked while NAP, local proof, and contact variables remain placeholders:

| Blocker Item | Posture / Status | Launch Rule |
| :--- | :--- | :--- |
| **Final NAP / Contact approval** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | Replace abstract tokens with verified details. |
| **Real Proof & testimonials** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | Replace mock case studies with approved media. |
| **Local Proof & context** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | Replace `LOCAL_CONTEXT_...` verification tokens. |
| **schemaEnabled Activation** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | `schemaEnabled` remains `false` until final NAP/schema approval is granted. |
| **Real Supabase DB insert** | **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify serverless API endpoint writes to live DB. |
| **Real Resend email send** | **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify notification is received in company inbox. |
| **Real Turnstile verify** | **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify token verifies against Cloudflare servers. |
| **Production deploy** | **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify static Vercel build serves live domain. |
| **Production Robots indexing** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | Indexing enabled only after launch approval: final `PUBLIC_SITE_URL` must be approved, robots/noindex safety reviewed, and noindex/nofollow removed. |
| **Accessibility keyboard check**| **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify manual tab order on live browser. |
| **Lighthouse / CWV check** | **NOT VERIFIED** / **LAUNCH BLOCKER** | Verify performance targets on live production build. |
| **Handover manuals** | **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER** | Confirm owner guide validations. |

---

## 8. Verification Evidence Plan

Evidence logs will be stored in `/verification`:
- **`verification/TASK-010.md`**: Logs deployment environment variable mapping checklist, webhook trigger schemas, and manual deployment fallback instructions.
- **`verification/TASK-013.md`**: Logs requirement checks, redacted synthetic submission outputs (honeypot logs, rate limits), and the final launch readiness grid.
- **`verification/evidence-register.md`**: Updates the registers to track TASK-010 and TASK-013 outcomes.

*All items requiring live provider access remain **NOT VERIFIED** in the logs.*

---

## 9. Proposed Commands (No execution yet)

Only scripts configured in the local `package.json` are proposed:
- Validate static entrypoints:
  ```bash
  pnpm run build
  ```
- Start preview server:
  ```bash
  pnpm run preview
  ```

*Note: Frontend deployments (`vercel deploy`), database migration CLI calls, or dependency updates do not exist in package.json and are not proposed. Live deployment execution is marked **NEEDS HUMAN APPROVAL**.*

---

## 10. Codex-Equivalent & Final Review Plan

As Codex is currently unavailable:
- **Pre-Launch Review:** Run an independent review session utilizing Gemini 3.1 Pro or equivalent to audit the codebase and documentation pack.
- **Codex Hardening:** Codex final hardening remains documented as a later recommended gate before public production launch if available.
- **Strict Launch Gate:** The site will not be approved for public launch while P0 blockers remain **NOT VERIFIED**.

---

## 11. Risks and Approval Gates

- **Production Deployment:** **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER**.
- **Supabase Production Migrations:** **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER**.
- **DNS Domain Mappings:** **NEEDS HUMAN APPROVAL** / **LAUNCH BLOCKER**.
- **Analytics Script Integration:** **SCOPE RISK** / **NEEDS HUMAN APPROVAL** (Must block trackers until Plausible approved).
- **Credentials & API keys:** **LAUNCH BLOCKER** (Exposing high-privilege keys in code repositories is strictly blocked).
- **SaaS Wording:** **SCOPE RISK** (Ensure no scheduling or tenant references are included in verification checks).
