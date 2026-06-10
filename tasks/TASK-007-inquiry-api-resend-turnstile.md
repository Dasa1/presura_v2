# TASK-007: Implement secure inquiry API with Turnstile, Supabase and Resend

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
backend/security

Priority:
P0

Depends on:
- TASK-006

Related requirements:
- REQ-SEC-001
- REQ-FORM-001
- REQ-FORM-002
- REQ-PRIV-001
- REQ-TEST-001

## Goal

Implement the server-side inquiry submission endpoint with validation, anti-spam, Supabase storage and Resend notification.

## Context

The contact form is the core lead channel. It must preserve leads, avoid false success, protect secrets and fail safely.

Relevant docs:
- /project-docs/00-project-intake.md
- /project-docs/02-product-spec.md
- /project-docs/03-requirements.md
- /project-docs/06-architecture.md
- /project-docs/08-data-api-contract.md
- /project-docs/09-implementation-roadmap.md
- /project-docs/10-human-approval-checklist.md

## v1.4 build and handover documentation references

This task must create or update:

- /build-notes/phase-07-inquiry-api-resend-turnstile.md

Also reference where relevant:
- /project-docs/08B-form-lead-handling-spec.md
- /docs/lead-management-guide.md
- /docs/deployment-and-env.md
- /docs/security-privacy-handover.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/pages/api/**
- src/server/**
- src/lib/forms/**
- src/lib/supabase/**
- src/lib/resend/**
- src/lib/security/**
- src/types/**
- .env.example
- tests/**
- README.md
- package.json
- package-lock.json
- pnpm-lock.yaml
- yarn.lock
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- sanity/**
- src/pages/**/*.astro except form action contract notes

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-07-inquiry-api-resend-turnstile.md`.

1. Implement POST /api/inquiries or the Astro-equivalent endpoint.
2. Validate and normalize inputs server-side, including required fields and safe message length limits.
3. Implement honeypot rejection and Cloudflare Turnstile/equivalent verification.
4. Add pragmatic rate limiting suitable for Vercel deployment or clearly document the chosen strategy.
5. Insert minimal lead record into Supabase before sending Resend notification.
6. Send Resend email notification to approved recipient env placeholder after successful Supabase insert.
7. If Resend fails after Supabase insert succeeds, return a safe operational response and log only non-sensitive error metadata.
8. Return safe success/error responses without stack traces or provider details.

## Acceptance criteria

- Valid submission creates a Supabase inquiry record and sends a Resend notification.
- Invalid/spam submissions are rejected safely.
- Resend failure after Supabase success does not lose the stored lead.
- Secrets are server-only and not exposed to browser code.
- Logs do not include full inquiry message content or secrets.

## Tests to add/update

- Unit tests for validation and honeypot behavior.
- Integration-style test/mocked test for Supabase insert then Resend send order.
- Manual test plan for Turnstile success/failure if external verification cannot run locally.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Test output for validation and endpoint behavior.
- Redacted sample successful response/log.
- Evidence of mocked or real Resend delivery in non-production environment.
- Evidence that secrets are env-only.

## Security notes

- Security-sensitive task: later Codex review required.
- Never expose Supabase service role, Resend API key or Turnstile secret to client code.
- Do not rely only on client-side validation.

## Privacy notes

- Store minimal lead fields.
- Avoid logging full messages, phone numbers or email addresses where possible.
- Respect six-month retention metadata from TASK-006.

## Accessibility notes

- API errors must support accessible form messaging in TASK-008.

## Performance notes

- Keep endpoint lightweight and avoid blocking long external work beyond required verification/storage/email.

## Do not

- Do not change unrelated files.
- Do not add new dependencies unless justified in the final response.
- Do not hardcode secrets, tokens, phone numbers, emails or unapproved NAP data.
- Do not include SaaS, tenant, employee, scheduling, payroll or workforce-compliance functionality.
- Do not mark task complete if checks fail or evidence is missing.

## Stop condition

Stop after completing this task and provide the required final response.

## Required final response

```text
Task:
Status: PASS / PARTIAL / FAIL / NOT VERIFIED

Files changed:
-

Requirements covered:
-

Tests added/updated:
-

Commands run:
-

Results:
-

Expected evidence provided:
-

Known issues:
-

Risks:
-

Follow-up recommendations:
-
```
