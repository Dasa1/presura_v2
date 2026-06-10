# Final Independent Review Cleanup Notes

This document details the cleanup pass performed to resolve the P3 findings identified in [final-independent-review-opus-4-6.md](file:///d:/Presura_v2/reviews/final-independent-review-opus-4-6.md).

## Completed Fixes

### F-001 — IP logging on rate limit events
- **Affected File:** [inquiries.ts](file:///d:/Presura_v2/src/pages/api/inquiries.ts)
- **Fix Details:** Removed the client IP interpolation from the security console log on rate limit events. The log now reads `[Security] Rate limit exceeded.` for privacy and GDPR compliance.

### F-002 — test JSON-LD emitted while schemaEnabled=false
- **Affected File:** [SchemaMarkup.astro](file:///d:/Presura_v2/src/components/seo/SchemaMarkup.astro)
- **Fix Details:** Removed the `else if (isStaging)` fallback branch completely. Now, when `schemaEnabled` is set to `false`, no JSON-LD structured data is output to the page under any environment (staging or otherwise).

### F-003 — evidence register status still DRAFT
- **Affected File:** [evidence-register.md](file:///d:/Presura_v2/verification/evidence-register.md)
- **Fix Details:** Updated the top-level status of the file from `DRAFT` to `VERIFIED (Phase 6 Handover) / NOT APPROVED FOR PUBLIC LAUNCH`. No live integrations were marked as PASS (they remain correctly annotated as NOT VERIFIED).

### F-004 — email aria-describedby uses phone helper
- **Affected File:** [InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro)
- **Fix Details:** Updated the email input field to reference its own helper ID (`form-email-helper`). Added a dedicated helper text span `id="form-email-helper"` below the email input field to ensure semantically correct and accessible relationships.

---

## Launch Status Confirmation

> [!IMPORTANT]
> **Production public launch remains NOT APPROVED.** All live provider integrations (Vercel deployment, live Supabase database writes, real Resend email notifications, and Cloudflare Turnstile token validation) remain NOT VERIFIED.
