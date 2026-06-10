# Deployment and Environment Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: developers / maintainers / owner handover reviewer  
Project: technical-service-website / Presura

---

## Approved Deployment Target

Vercel is the approved MVP deployment target. The project is configured as a server-rendered (SSR) app (`output: 'server'`) using the `@astrojs/vercel` adapter to allow backend API routes (`/api/inquiries`) to execute dynamically at runtime.

---

## Environment Variable Classifications & Safety Rules

All credentials must be managed securely. No secrets will be logged, printed, or committed to version control.

### 1. Public (Client-Safe) Variables
These keys are compiled into the client bundle and are safe to expose to browsers:
* **`PUBLIC_SITE_URL`**: Canonical base URL (default: `https://example.com`).
* **`PUBLIC_TURNSTILE_SITE_KEY`**: Cloudflare Turnstile widget frontend key.
* **`PUBLIC_ANALYTICS_DOMAIN`**: Plausible analytics tracking domain.

### 2. Server-Only (Private) Variables
These keys are highly sensitive. They **must never** be imported by client-side components, Astro hydrated client code, browser scripts, or public env configurations. They are restricted to serverless API routes (`/api/inquiries`) and backend library helpers:
* **`SUPABASE_URL`**: Base URL for the Supabase database.
* **`SUPABASE_SERVICE_ROLE_KEY`**: High-privilege database authentication bypass token.
* **`RESEND_API_KEY`**: Transactional email dispatch key.
* **`RESEND_FROM_EMAIL`**: Approved verified sender mailbox.
* **`INQUIRY_RECIPIENT_EMAIL`**: Admin notification mailbox receiving lead alerts.
* **`TURNSTILE_SECRET_KEY`**: Cloudflare verification secret.

---

## Deployment & Setup Workflow

1. **Supabase Setup**:
   - Create a project inside Supabase.
   - Run the SQL migration script `supabase/migrations/20260610000000_create_inquiries.sql` (**Requires explicit approval**).
   - Verify that Row-Level Security is active and that anonymous direct inserts/selects are disabled.
2. **Resend Setup**:
   - Verify the custom sender domain inside the Resend DNS settings.
   - Map `RESEND_FROM_EMAIL` to a verified address under that domain.
3. **Turnstile Setup**:
   - Add the final domain name to the Cloudflare Turnstile dashboard.
   - Retrieve the Site Key and Secret Key and add them to the environment config.
4. **Vercel Hosting**:
   - Connect the Git repository to Vercel.
   - Configure the environment variables inside the Vercel project settings page.
   - Deploy build (`pnpm run build`). The `@astrojs/vercel` adapter handles compiling server entrypoints.
5. **Analytics**:
   - Define `PUBLIC_ANALYTICS_DOMAIN`. The tracking script will load only if a real domain value is specified.

---

## Webhook Rebuild Configurations & Posture

For content updates to be reflected on the production website, the site relies on Vercel deployment rebuilds triggered by Sanity.

* **Primary Webhook Path:** A Sanity publish event is configured to trigger a POST request to a Vercel Deploy Hook.
* **`/api/revalidate` Out of Scope:** The `/api/revalidate` endpoint is NOT SPECIFIED and is out of scope as it has not been implemented or verified.
* **Manual Rebuild Fallback:** If the automated webhook is not configured or fails, editors can log into the Vercel dashboard, navigate to the project's deployments, click the vertical ellipsis on the latest deployment, and select **Redeploy**.
* **Current Posture:** Webhooks will not be created during this phase. The webhook trigger setup remains **NEEDS HUMAN APPROVAL / NOT VERIFIED**.

---

## Staging vs Production Fallback Guard (F-003 Resolved)
- During local development/staging (`import.meta.env.DEV` is true), missing keys will default to local mock client logs, enabling offline sandbox verification.
- In production (`import.meta.env.DEV` is false), missing or placeholder keys will intentionally cause endpoint requests to fail with a `500 Server Error` rather than returning a false success message, preventing silent database write failures.
