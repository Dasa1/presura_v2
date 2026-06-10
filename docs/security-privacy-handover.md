# Security and Privacy Handover Spec

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / maintainer / security reviewer  
Project: technical-service-website / Presura

## Security Principles & Secret Isolation

- **Key Isolation Gate**: All server-side secrets (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`) must strictly reside in server-only execution pathways. They are **never** imported into browser components, hydrated client code, or public layout scripts.
- **Client Bundle Exposure Check**: Built files must be periodically checked to verify that no high-privilege keys are exposed in compiled JS bundles.
- **Logging Redaction Policy**: Application endpoints are prohibited from logging full customer names, messages, phone numbers, or email addresses. Only request response codes and system error metadata may be written.

---

## Provider Access Expectations

| Provider | Security Expectation | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Sanity** | Least privilege roles, 2FA, no exposed write tokens. | **NOT VERIFIED** | Offline schema configured locally. |
| **Supabase** | RLS enabled. Direct public INSERT/SELECT blocked. | **VERIFIED** | Migration template created. Live execution is NOT VERIFIED. Missing keys in production trigger safe failures. |
| **Resend** | Domain DNS verification, server-only API keys. | **NOT VERIFIED** | Connected locally via DEV-only Mock fallback. Production fails safely. |
| **Vercel** | Secure environment variables. | **NOT VERIFIED** | Sandbox posture active. |
| **Turnstile** | Server-side siteverify validations. | **VERIFIED** | Validation code implemented. Mock bypass only active in DEV. |
| **Analytics** | Plausible privacy-friendly scripts. | **VERIFIED** | Loaded dynamically only if approved domain exists. |

---

## Personal Data & Retention Policies

- **GDPR Compliance**: Collects customer names, messages, and contact options (Phone OR Email).
- **6-Month Deletion Gate**: Database records must be purged exactly 6 months after submission (`retention_delete_after`). Deletion schedules (crons) are dependent on production host setups and remain **NOT VERIFIED** during local development.

---

## Security Limits (Rate Limiting Boundary)

- **Best-Effort Guard**: In-memory rate limiting (`rateLimiter.ts`) restricts requests based on IP addresses.
- **Limitation**: Due to the stateless nature of serverless computing (periodic global state refreshes), this does **NOT** provide robust, production-grade abuse protection. Shared rate limiters (e.g. database tracking or Redis) remain **NOT VERIFIED** in Phase 4.

---

## Mock Fallback & Environment Guard (F-003 Resolved)

- **Rule**: Mock Supabase database insertions and mock Resend email alerts are strictly restricted to local development environments (`import.meta.env.DEV` is true).
- **Production Guard**: In production environments, if any required backend credentials (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`) are missing, the endpoint will explicitly reject the transaction with a `500 Server Error` and log a redacted, non-sensitive configuration error. This ensures that users do not receive a false success screen if their lead was not successfully stored.
- **Turnstile Guard (F-001 Resolved)**: Turnstile token presence is mandatory in production. Requests without tokens are rejected with a `400 Bad Request`. Mocking/skipping Turnstile is permitted only in local development under explicit conditions.
