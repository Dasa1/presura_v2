# Phase 4 Pre-Implementation Plan — API & Integrations

This document outlines the detailed pre-implementation plan for Phase 4 (Integrations & API) of the Presura technical-service website project.

---

## 1. Files to Inspect

Existing files from previous phases to inspect for alignment:
- `package.json` — Confirm dependencies (add only approved database/email helpers if approved).
- `astro.config.mjs` — Review configuration structures.
- `src/layouts/Layout.astro` — Review layout structure and meta variables.
- `src/pages/index.astro` — Inspect CTA buttons and link safety anchors.
- `.env.example` — Review required environment key naming conventions.

---

## 2. Files to Create or Modify

All paths listed below are relative to the repository root `d:\Presura_v2`:

### Files to Create (Database & Integrations):
- `supabase/migrations/20260610000000_create_inquiries.sql` — Migration script template initializing the leads table with RLS. (Drafted only; **not executed**).
- `src/lib/supabase/client.ts` — Server-only Supabase client utilizing service-role credentials.
- `src/lib/resend/client.ts` — Server-only email helper using Resend client configs.
- `src/lib/security/rateLimiter.ts` — In-memory pragmatic rate-limiter helper for endpoint protection (best-effort MVP guard).
- `src/pages/api/inquiries.ts` — Serverless POST endpoint handling token validation, honeypot filters, database inserts, and email notifications.

### Files to Create/Modify (UI & Analytics):
- `src/components/InquiryForm.astro` — Lead capture form with Turnstile validations, honeypot inputs, and accessible error/success panels.
- `src/components/analytics/PrivacyAnalytics.astro` — Plausible-style cookie-less tracking snippet.
- `src/pages/kontakt.astro` — Contact page integrating the new `InquiryForm` and map placeholder structures.

### Handover Documentation to Create/Update:
- `build-notes/phase-04-integrations.md` — Logs execution details of Phase 4.
- `docs/lead-management-guide.md` — Explains lead flows, schema constraints, notification triggers, and retention policies.
- `docs/security-privacy-handover.md` — Audits data lifecycle policies, webhook authentication, and credential rotations.
- `docs/deployment-and-env.md` — Details environment variable requirements.
- `verification/TASK-006.md`, `TASK-007.md`, `TASK-008.md`, `TASK-009.md` — Verification logs.
- `verification/evidence-register.md` — Update registers once evidence exists (no pre-mapping).

---

## 3. Supabase Storage Plan

> [!CAUTION]
> **No Database Migrations or CLI Execution**: Creating a migration file is allowed only after execution approval. Running SQL against Supabase (including CLI migration commands, SQL editor scripts, or table modifications) is completely blocked in Phase 4 unless separately approved.

### Table Schema (`inquiries`)
```sql
CREATE TABLE public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  phone TEXT, -- Revised: Optional to avoid conversion friction
  email TEXT, -- Revised: Optional to avoid conversion friction
  contact_method TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT NOT NULL,
  retention_delete_after TIMESTAMP WITH TIME ZONE DEFAULT (timezone('utc'::text, now()) + INTERVAL '6 months') NOT NULL,
  status TEXT DEFAULT 'active' NOT NULL
);
```

### RLS Posture (Row-Level Security):
- RLS must be enabled on the `inquiries` table:
  ```sql
  ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
  ```
- **Block Public Anonymous INSERT**:
  - We will **NOT** allow direct anonymous INSERT policies on the `inquiries` table from client browsers.
  - Submissions must route exclusively through the server-side `/api/inquiries` endpoint which authenticates with the server-only `SUPABASE_SERVICE_ROLE_KEY`.
  - The public database insert policy will remain strictly blocked.
- **Block Public Anonymous SELECT**:
  - No public read access is allowed. Database select operations are blocked:
    ```sql
    CREATE POLICY "Block anonymous reads" ON public.inquiries FOR SELECT USING (false);
    ```

---

## 4. Inquiry API Security Plan

The endpoint `/api/inquiries` will enforce the following security layers:

1. **Server-Only Secret Handling & Service Role Safety**:
   - `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` are strictly server-only secrets. They must only be accessed within `src/pages/api/inquiries.ts` and `src/lib/` wrappers.
   - They must **never** be imported by client-side components, Astro hydrated client code, browser scripts, or client-accessible environment configs.
   - Verification will include a client bundle check confirming no leakage of keys occurs.
2. **Turnstile Validation Flow**:
   - Parse `cf-turnstile-response` and verify it server-side using Cloudflare's siteverify endpoint.
3. **Honeypot Behavior**:
   - Renders a hidden `website` input. Submissions with values are silently ignored (returns a dummy successful status `200` to prevent script execution).
4. **Rate Limiting Strategy (Best-Effort Boundary)**:
   - In-memory rate limiting via token bucket algorithms in `rateLimiter.ts` represents a best-effort MVP safeguard.
   - **Abuse Limitation Notice**: In-memory storage is serverless-dependent and does **NOT** constitute robust production-grade abuse prevention. Production abuse resistance will be marked as **NOT VERIFIED** or **PARTIAL** in evidence logs due to these runtime boundaries.
5. **Contact Fields Input Validation**:
   - **Requirement Validation Rule**: The endpoint validates that at least one contact channel is populated: **phone OR email**.
   - Do not require both. If database schema columns require `NOT NULL` on both fields, it will be marked as **NEEDS HUMAN APPROVAL** due to conversion friction.
6. **Logging Redaction**:
   - Log only request status and error metadata. **Do not log** customer names, phones, email addresses, or messages.

---

## 5. Form UI Plan

The component `src/components/InquiryForm.astro` will feature:
- **Required Inputs**: Name, Message, and at least one of Phone or Email (visually and programmatically enforced: phone OR email).
- **GDPR Notice**: Explicit statement stating data is stored for up to 6 months.
- **Accessibility**: Error fields bind via `aria-describedby` IDs, submit buttons use `aria-disabled="true"` during loading states, and visible focus rings are enforced.
- **Disabled Placeholders**: If API tokens or endpoints are missing (e.g. during dev mode), submit buttons degrade to disabled placeholders.

---

## 6. Analytics Plan

- Plausible-style privacy-friendly tracking snippet (`src/components/analytics/PrivacyAnalytics.astro`).
- **No Marketing Cookies**: No GA4, GTM, Meta Pixel, or marketing cookies.
- **Provider Approval Gate**: If `PUBLIC_ANALYTICS_DOMAIN` is missing, default, or placeholder, the script will not load, and analytics status remains **NOT VERIFIED**.

---

## 7. Environment Variables

Variables are isolated into server-only and client-safe classifications:

| Key Name | Classification | Usage / Purpose |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | Public / Client-Safe | Canonical calculation and robots checks. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Public / Client-Safe | Cloudflare Turnstile widget frontend key. |
| `PUBLIC_ANALYTICS_DOMAIN` | Public / Client-Safe | Analytics tracking domain. |
| `SUPABASE_URL` | Server-Only / Private | Base API URL for Supabase endpoint queries. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-Only / Private | High-privilege database authentication bypass token. |
| `RESEND_API_KEY` | Server-Only / Private | Mail dispatch token. |
| `RESEND_FROM_EMAIL` | Server-Only / Private | Approved sender mailbox. |
| `INQUIRY_RECIPIENT_EMAIL` | Server-Only / Private | Approved recipient mailbox receiving leads. |
| `TURNSTILE_SECRET_KEY` | Server-Only / Private | Cloudflare backend verification secret. |

---

## 8. Proposed Commands (No execution yet)

- Install Resend and Supabase helper packages (if approved):
  ```bash
  pnpm add @supabase/supabase-js resend
  ```
- Validate build output:
  ```bash
  pnpm run build
  ```

---

## 9. Verification Plan

If real environment credentials (Supabase, Resend, Turnstile) are not provided, Phase 4 checks will only PASS on the following items:
- Code structure and syntax validation
- Local static build success
- Env key classifications
- Safe secrets management (no committed keys)
- No client-side secret exposure

The following elements will remain **NOT VERIFIED**:
- Real Supabase database insertions
- Real Resend transactional email deliveries
- Real Turnstile token verification
- Production-grade rate limiting (abuse resistance)
- Automated database retention deletion scripts

Evidence log directories:
- `verification/TASK-006.md` (Table structure and RLS definitions)
- `verification/TASK-007.md` (API endpoint, rate limit boundary checks, honeypot validations, and service role leakage check)
- `verification/TASK-008.md` (Form UI layout, accessibility states, GDPR notices, and validation fields)
- `verification/TASK-009.md` (Plausible mock scripts load validations)
- `verification/evidence-register.md` (Updated only after execution results are compiled)

---

## 10. Build Notes and Docs Plan

- **`/build-notes/phase-04-integrations.md`**: Tracks endpoint structure and mock validations.
- **`/docs/lead-management-guide.md`**: Explains table schemas and lead flows.
- **`/docs/security-privacy-handover.md`**: Details RLS bounds and key isolation.
- **`/docs/deployment-and-env.md`**: Documents keys for Resend, Turnstile, and Supabase.

---

## 11. Security/Privacy Risks and Approval Gates

- **Supabase Migration Execution:** **NEEDS HUMAN APPROVAL** (No SQL migration run on live database).
- **Service Role Key Isolation:** **LAUNCH BLOCKER** (Verification must confirm keys are excluded from browser bundles).
- **Plausible Analytics Script:** **NEEDS HUMAN APPROVAL** (Real external scripts are blocked until the provider is approved).
- **Rate Limiting Abuse Resistance:** **SCOPE RISK** / **NOT VERIFIED** (In-memory rate limit is serverless-limited).
- **Dynamic retention deletion cron:** **NOT VERIFIED** (Execution schedule is deployment-dependent).
- **Single contact field logic:** **NEEDS HUMAN APPROVAL** (Allowing name + phone OR email reduces conversion friction but requires schema validation checks).
