# TASK-006: Implement Supabase inquiry storage schema and retention metadata

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
database/security

Priority:
P0

Depends on:
- TASK-001

Related requirements:
- REQ-FORM-001
- REQ-PRIV-001
- REQ-TEST-001

## Goal

Create the Supabase data structure for minimal inquiry/lead storage with approved six-month retention metadata.

## Context

Supabase is approved only for inquiry/lead storage, not public content. Inquiry records may contain personal or sensitive service details and must be minimized and protected.

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

- /build-notes/phase-06-supabase-inquiries-retention.md

Also reference where relevant:
- /project-docs/08B-form-lead-handling-spec.md
- /docs/lead-management-guide.md
- /docs/security-privacy-handover.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- supabase/**
- src/lib/supabase/**
- src/server/supabase/**
- .env.example
- README.md
- docs/privacy/**
- tests/**
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
- src/pages/**/*.astro except non-functional links to form later
- sanity/**
- public content data files

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-06-supabase-inquiries-retention.md`.

1. Create a Supabase migration or documented SQL for an inquiries table matching /project-docs/08-data-api-contract.md.
2. Include retention_delete_after default logic equivalent to created_at + 6 months where feasible.
3. Add indexes only where justified for operational follow-up.
4. Add server-only Supabase client/helper with env placeholders and no browser exposure of service-role secrets.
5. Document retention: delete/anonymize after 6 months unless converted into active business/customer record.
6. Document manual or automated retention execution strategy without overbuilding a CRM.

## Acceptance criteria

- Inquiries table definition exists with minimal approved fields.
- Retention metadata defaults to six months or is clearly computed server-side.
- Server-only credential handling is documented and not exposed to client code.
- Supabase is not introduced as a public content source.

## Tests to add/update

- Database migration validation if local Supabase is available; otherwise document NOT VERIFIED with exact reason.
- Type or unit tests for Supabase helper if feasible.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Migration/SQL file path and summary.
- Env placeholder review showing no secrets.
- Local migration result or NOT VERIFIED reason.

## Security notes

- Use scoped/server-only Supabase credentials.
- Do not expose service-role keys to browser bundles.
- Do not create public read access to inquiry records.

## Privacy notes

- Minimize inquiry fields.
- Do not log full messages.
- Encode the approved six-month retention decision in schema/config/docs.

## Accessibility notes

- Maintain keyboard and semantic HTML basics where UI is touched.

## Performance notes

- Avoid unnecessary JavaScript and preserve Astro static-first behavior where possible.

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
