# TASK-013: Create verification evidence pack and launch readiness checklist

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro low

Type:
testing/docs

Priority:
P0

Depends on:
- TASK-001
- TASK-002
- TASK-003
- TASK-004
- TASK-005
- TASK-006
- TASK-007
- TASK-008
- TASK-009
- TASK-010
- TASK-011
- TASK-012

Related requirements:
- REQ-TEST-001
- REQ-PERF-001
- REQ-A11Y-001
- REQ-SEO-001
- REQ-SEC-001
- REQ-PRIV-001
- REQ-FORM-001
- REQ-FORM-002
- REQ-DEVOPS-001

## Goal

Produce the final implementation evidence pack required before Codex review and launch decisions.

## Context

The project rule is No PASS without evidence. This task does not implement new features; it verifies and documents what is done, partial or not verified.

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

- /build-notes/phase-13-verification-handover.md

Also reference where relevant:
- /project-docs/14A-verification-evidence-plan.md
- /docs/owner-manual.md
- /docs/account-access-handover.md
- /docs/security-privacy-handover.md
- /docs/maintenance-guide.md
- /docs/troubleshooting.md
- /verification/evidence-register.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- docs/verification/**
- project-docs/**
- README.md
- CHANGELOG.md
- tests/**
- build-notes/**
- docs/**
- verification/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- src/** except tiny doc-link fixes
- sanity/**
- supabase/**
- .env
- .env.local
- .env.production

## Instructions

0. Review or create the v1.4 handover docs under `/docs`, including `/docs/owner-manual.md`, `/docs/account-access-handover.md`, `/docs/cms-editor-guide.md`, `/docs/lead-management-guide.md`, `/docs/seo-maintenance-guide.md`, `/docs/deployment-and-env.md` and `/docs/security-privacy-handover.md`.
0. Update `/verification/evidence-register.md` with final evidence locations and unresolved NOT VERIFIED items.

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-13-verification-handover.md`.

1. Create docs/verification/README.md summarizing verification status by requirement ID.
2. Capture command outputs for build, lint, typecheck and tests.
3. Capture form flow evidence: validation, spam rejection, Supabase insert and Resend notification using redacted non-production data.
4. Capture SEO/schema/sitemap/robots evidence.
5. Capture privacy analytics evidence: Plausible-style only, no GA4/GTM unless explicitly required later.
6. Capture accessibility and performance evidence from TASK-012.
7. Mark anything missing as NOT VERIFIED, PARTIAL or NEEDS HUMAN APPROVAL; do not invent evidence.
8. Prepare a short Codex review handoff section listing security/privacy-sensitive files.

## Acceptance criteria

- Every P0 requirement has PASS/PARTIAL/FAIL/NOT VERIFIED status with evidence or explicit missing evidence.
- Security/privacy-sensitive work is identified for Codex review.
- No PASS appears without command output, screenshot, report or specific verification note.
- SaaS items are absent.

## Tests to add/update

- No new product tests required unless a missing verification test is trivial and local.
- Review generated evidence docs for accurate status labels.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- docs/verification/README.md with requirement matrix.
- Redacted command outputs/reports/screenshots list.
- Codex review handoff section.

## Security notes

- Redact secrets, tokens, email addresses, phone numbers and message content from evidence.
- Do not commit production credentials or raw private leads.

## Privacy notes

- Use synthetic test submissions only.
- Redact personal data in screenshots/logs.

## Accessibility notes

- Include manual accessibility evidence and any NOT VERIFIED areas.

## Performance notes

- Include performance target results without overstating pass/fail beyond approved policy.

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
