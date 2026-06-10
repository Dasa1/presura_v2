# TASK-010: Configure Vercel deployment and Sanity webhook workflow

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
devops/security

Priority:
P1

Depends on:
- TASK-001
- TASK-002
- TASK-003
- TASK-007
- TASK-009

Related requirements:
- REQ-DEVOPS-001
- REQ-PROD-003A
- REQ-FORM-001
- REQ-FORM-002
- REQ-PRIV-001
- REQ-TEST-001

## Goal

Prepare the Vercel deployment, environment variable contract and Sanity content update flow.

## Context

Vercel is the approved deployment target. The deployment setup must protect Sanity, Supabase, Resend and Turnstile secrets and provide a content rebuild/revalidation path.

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

- /build-notes/phase-10-vercel-deployment-env.md

Also reference where relevant:
- /project-docs/13-env-deployment-spec.md
- /docs/deployment-and-env.md
- /docs/account-access-handover.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- vercel.json
- astro.config.*
- .env.example
- README.md
- docs/deployment/**
- src/pages/api/revalidate*
- src/pages/api/sanity-webhook*
- src/server/webhooks/**
- tests/**
- package.json
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- Production secret files
- .env
- .env.local
- .env.production
- SaaS or scheduling files

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-10-vercel-deployment-env.md`.

1. Document required Vercel environment variables for Sanity, Supabase, Resend, Turnstile, analytics and public placeholders.
2. Add Vercel config only if required by the Astro project.
3. Implement or document Sanity webhook to Vercel rebuild/revalidation flow, including webhook secret verification if an endpoint is created.
4. Document manual fallback deploy process if webhook automation is not fully implemented.
5. Ensure preview and production deployment instructions are clear.
6. Do not commit real secrets.

## Acceptance criteria

- Deployment docs list all required env vars and mark server-only secrets.
- Vercel build command/output is documented or verified.
- Sanity content update flow is implemented or clearly documented with fallback.
- Webhook endpoint, if implemented, verifies its secret.
- No real secrets are committed.

## Tests to add/update

- Add webhook secret validation test if endpoint is implemented.
- Deployment smoke checklist for Vercel preview/production.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Vercel env var checklist.
- Build/deployment command output or NOT VERIFIED reason.
- Webhook test output or manual fallback documentation.

## Security notes

- Security-sensitive task: later Codex review required.
- Never commit real env values.
- Webhook secret validation is required if webhook endpoint exists.

## Privacy notes

- Env docs must distinguish public placeholders from private lead/email provider secrets.

## Accessibility notes

- Maintain keyboard and semantic HTML basics where UI is touched.

## Performance notes

- Ensure Vercel deployment preserves static/SSG output and caching where appropriate.

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
