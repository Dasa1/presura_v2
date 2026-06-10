# Verification Evidence — TASK-007

**Task ID:** TASK-007  
**Date:** 2026-06-10  
**Status:** PASS (Mock/Code verification corrected and re-run)  

---

## 1. Description & Context

TASK-007 requires implementing the server-side API POST `/api/inquiries` handling Turnstile token verification, honeypots, rate limiting, and transactional notifications while ensuring absolute isolation of backend keys. 

*Correction Note:* Prior evidence was based on a broken mock model where `MockSupabaseClient.from()` returned a Promise asynchronously. This has been corrected so that mock database inserts complete synchronously without throwing `TypeError`. Mock bypass configurations have also been isolated to DEV mode to ensure production instances fail safely.

---

## 2. Server-Only Secret Isolation Check

We scanned the compiled static assets and client scripts to confirm `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` are not imported or exposed client-side:
- **Rule**: Secrets are isolated into `src/lib/supabase/client.ts`, `src/lib/resend/client.ts`, and `src/pages/api/inquiries.ts`.
- **Result**: Checked package output and client bundles. Zero imports of service keys occur in client code.

---

## 3. Mock Endpoint & Code Logic Verifications

### A. Honeypot Rejection (Silent 200)
- **Code Block**:
  ```typescript
  if (website) {
    console.log('[Anti-Spam] Honeypot field filled. Silent rejection triggered.');
    return new Response(JSON.stringify({ success: true, message: 'Upit uspješno zaprimljen.' }), ...);
  }
  ```
- **Validation**: Submitting a value in the hidden `website` input returns success without writing to the database or dispatching notifications.

### B. Flexible Contact Channels Requirement
- **Code Block**:
  ```typescript
  const hasPhone = phone && phone.trim();
  const hasEmail = email && email.trim();
  if (!hasPhone && !hasEmail) {
    return new Response(JSON.stringify({ success: false, error: 'Molimo unesite barem jedan kontakt kanal...' }), ...);
  }
  ```
- **Validation**: Enforces name + message + at least one contact channel (phone OR email).

### C. Turnstile Token Validation Safety (F-001 Resolved)
- **Validation**:
  - In a production-like environment (non-DEV), a missing Turnstile response token or a failed Cloudflare response verification will reject the request with `400 Bad Request` and return a safe error message.
  - The Turnstile bypass is strictly limited to DEV mode (`import.meta.env.DEV` is true) and when placeholder secrets are configured.

### D. Production Environment Safety (F-003 & F-004 Resolved)
- **Validation**:
  - Mock Supabase and Resend client fallbacks only trigger during local development (`import.meta.env.DEV === true`).
  - In production, missing or placeholder variables trigger `BrokenProductionClient` and `BrokenResendClient` respectively, resulting in a logged operational error and a `500 Server Error` response to the client instead of a false success.
  - Structural `TypeError: .insert is not a function` has been resolved by removing the `async` modifier from the mock `from` method.

---

## 4. Verification Check

- [x] **No Secrets Committed:** Verified `.env.example` contains placeholders only.
- [x] **API validations active:** Verified required parameters (name, message, contact options).
- [x] **Mock Posture Corrected:** Local DEV mock endpoint successfully simulates DB insertion and Resend email alerts. Live execution remains **NOT VERIFIED**.
- [x] **Production Safety Verified:** Confirmed that non-DEV environments fail safely rather than executing mocks.
- [x] **Server support verified:** Configured `astro.config.mjs` to output for Vercel SSR, resolving the static route build-time constraint.
