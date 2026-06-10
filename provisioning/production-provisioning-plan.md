# Production Provisioning Plan

This document plans the technical steps needed for the eventual transition of the Presura website from local mock mode to production environments.

## 1. Provider Accounts & Access Setup
The owner or administrator must register accounts with the following providers (refer to [account-access-handover.md](file:///d:/Presura_v2/docs/account-access-handover.md) for details):
- **Vercel:** Hosting platform
- **Supabase:** Leads database
- **Resend:** Transactional email alerts
- **Cloudflare:** Turnstile security keys
- **Sanity:** Dynamic content engine

## 2. Environment Variables Checklist
The following environment variables must be securely configured in the Vercel dashboard:

| Variable Name | Sensitivity | Type | Allowed Staging Preview Behavior (No Live Credentials) |
|---|---|---|---|
| `PUBLIC_SITE_URL` | Public | Client-safe | Triggers `noindex, nofollow` on preview domain URLs. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Public | Client-safe | Cloudflare mock key; form is disabled on owner preview. |
| `PUBLIC_ANALYTICS_DOMAIN` | Public | Client-safe | Analytics script disabled or bypassed. |
| `SUPABASE_URL` | Private | Server-only | Database connection disabled; form inputs disabled on preview. |
| `SUPABASE_SERVICE_ROLE_KEY` | Private | Server-only | Database connection disabled; form inputs disabled on preview. |
| `RESEND_API_KEY` | Private | Server-only | Email dispatch disabled. |
| `RESEND_FROM_EMAIL` | Private | Server-only | Email dispatch disabled. |
| `INQUIRY_RECIPIENT_EMAIL` | Private | Server-only | Email dispatch disabled. |
| `TURNSTILE_SECRET_KEY` | Private | Server-only | Verification bypassed in local DEV only; disabled on preview. |

## 3. Database Migration Sequence
When DB access is active:
1. Initialize the live database schemas using the SQL script:
   `supabase/migrations/20260610000000_create_inquiries.sql`.
2. Confirm the trigger logic automatically deletes records older than 6 months (GDPR policy).
3. Verify that Row-Level Security (RLS) is enabled to block public reads.

## 4. Webhook Connectivity Sequence
1. Configure a webhook in the Sanity dashboard pointing to Vercel's build hook URL.
2. Confirm that updates to services, problems, locations, or works trigger automatic rebuilds of Astro.

---

## Safety Verification Gates
- **NOT VERIFIED:** No live database migration or environment variable provisioning should occur during the demo/polish phase.
- **LAUNCH BLOCKER:** Form integration validation (database insertion and email delivery) must pass testing on a staging environment before public domain mapping.
