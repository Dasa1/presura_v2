# Build Notes: Phase 4 — API & Integrations

- **Phase**: Phase 4 (Integrations & API)
- **Status**: Completed (SSR Server Build Verified)
- **Author**: Antigravity AI
- **Repository Root**: `d:\Presura_v2`

---

## 1. Dependencies Installed
- `@supabase/supabase-js` (database client)
- `resend` (email client)
- `@astrojs/vercel` (Astro Vercel SSR Adapter)

---

## 2. Files Created & Modified

### Database Migration:
- [supabase/migrations/20260610000000_create_inquiries.sql](file:///d:/Presura_v2/supabase/migrations/20260610000000_create_inquiries.sql) (Staging schema template with 6-month retention and RLS enabled. Direct INSERT/SELECT blocked for public roles).

### Backend Clients & Utilities (Server-Only):
- [src/lib/supabase/client.ts](file:///d:/Presura_v2/src/lib/supabase/client.ts) (Supabase client. Safe offline Mock fallback restricted to DEV mode; fails safely in production).
- [src/lib/resend/client.ts](file:///d:/Presura_v2/src/lib/resend/client.ts) (Resend client. Safe offline Mock fallback restricted to DEV mode; fails safely in production).
- [src/lib/security/rateLimiter.ts](file:///d:/Presura_v2/src/lib/security/rateLimiter.ts) (In-memory token-window rate limiter per client IP).
- [src/pages/api/inquiries.ts](file:///d:/Presura_v2/src/pages/api/inquiries.ts) (Serverless endpoint validating inputs, matching honeypot spams, verifying Turnstile tokens securely, inserting leads, and dispatching emails).

### Frontend UI & Analytics:
- [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) (Contact form with Turnstile validations, honeypot fields, and ARIA markers).
- [src/components/analytics/PrivacyAnalytics.astro](file:///d:/Presura_v2/src/components/analytics/PrivacyAnalytics.astro) (Plausible tracker block active only if real tracking domain exists).
- [src/layouts/Layout.astro](file:///d:/Presura_v2/src/layouts/Layout.astro) (Wired PrivacyAnalytics to head).
- [src/pages/kontakt.astro](file:///d:/Presura_v2/src/pages/kontakt.astro) (Integrated InquiryForm and contact indicators).

### Configurations & Guides:
- [astro.config.mjs](file:///d:/Presura_v2/astro.config.mjs) (Configured for SSR with Vercel adapter and `output: 'server'`).
- [docs/lead-management-guide.md](file:///d:/Presura_v2/docs/lead-management-guide.md) (Updated verified schema details).
- [docs/security-privacy-handover.md](file:///d:/Presura_v2/docs/security-privacy-handover.md) (Updated client checks and mock environment boundaries).
- [docs/deployment-and-env.md](file:///d:/Presura_v2/docs/deployment-and-env.md) (Updated env key definitions).

---

## 3. Commands Run
- `pnpm add @supabase/supabase-js resend`
- `pnpm add @astrojs/vercel`
- `pnpm run build` (Executed successfully, compiling server-side entrypoints for Vercel deployment with SSR output).

---

## 4. Phase 4 Verification Status

| Requirement / Task | Status | Notes / Staging Posture |
| :--- | :---: | :--- |
| **TASK-006: Supabase Storage Schema** | **PASS** | Migration file created with RLS and retention policies. SQL was not executed against live DB. |
| **TASK-007: Secure Inquiry API** | **PASS** | Turnstile challenges, honeypots, and rate limits verified. Fixed token bypass and restricted mock mode. |
| **TASK-008: Form UI States & GDPR** | **PASS** | Form UI built with aria loading markers, name/message validation, and 6-month notice. |
| **TASK-009: Plausible Analytics** | **PASS** | Plausible wrapper created. Disallows loading on staging/preview domains. |
| **Real Supabase DB Write** | **NOT VERIFIED** | Bypassed locally via Mock client (only in DEV mode). |
| **Real Resend SMTP Mail Send** | **NOT VERIFIED** | Bypassed locally via Mock client email logger. |
| **Real Turnstile Token Verify** | **NOT VERIFIED** | Token verification bypassed on local DEV mode only. |
| **Production Rate Limiter** | **NOT VERIFIED** | In-memory limiter is serverless-limited. Shared Redis setup not built. |
| **Automated Retention Deletion**| **NOT VERIFIED** | DB cleanup crons not executed. |

---

## 5. Known Limitations & Postures
1. **Mock Fallback Restriction**: Backend mock fallbacks only operate when `import.meta.env.DEV` is true. In production, missing credentials trigger safe operational failures rather than silent mock successes.
2. **Rate Limit State Reset**: Memory variables reset periodically on Vercel serverless/edge instances.
3. **No Direct Db Queries**: Direct public INSERT or SELECT is blocked on database. Form requests route exclusively to `/api/inquiries`.
4. **Server capability**: Configured output mode `server` via `@astrojs/vercel` adapter ensures `/api/inquiries` functions as a dynamic backend route.
