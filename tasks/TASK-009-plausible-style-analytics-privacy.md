# TASK-009: Add Plausible-style privacy-friendly analytics

Execution tool:
Antigravity IDE

Recommended model:
Gemini Flash medium

Type:
frontend/privacy

Priority:
P0

Depends on:
- TASK-001
- TASK-003

Related requirements:
- REQ-PRIV-001
- REQ-TEST-001

## Goal

Integrate Plausible-style privacy-friendly analytics without GA4, Consent Mode or remarketing tags.

## Context

The approved decision is privacy-friendly analytics first. GA4/Consent Mode must not be added unless ads or remarketing are explicitly required later.

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

- /build-notes/phase-09-analytics-privacy.md

Also reference where relevant:
- /docs/deployment-and-env.md
- /docs/seo-maintenance-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/layouts/**
- src/components/analytics/**
- src/lib/analytics/**
- astro.config.*
- .env.example
- README.md
- docs/privacy/**
- tests/**
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- src/pages/api/**
- supabase/**
- sanity/**
- Any GA4/GTM/remarketing implementation files

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-09-analytics-privacy.md`.

1. Add a lightweight analytics integration compatible with Plausible-style analytics using environment-based enablement.
2. Ensure analytics is disabled or no-op in local/test environments unless explicitly configured.
3. Do not add GA4, Google Tag Manager, remarketing pixels or Consent Mode.
4. Document analytics provider setup and privacy assumptions.
5. Verify no marketing cookies are introduced by this task.

## Acceptance criteria

- Analytics script/config is present only when enabled by env/config.
- No GA4/GTM/remarketing/ads tags are added.
- Privacy docs state Plausible-style analytics first.
- Build succeeds.

## Tests to add/update

- Add a small test or snapshot if analytics helper exists.
- Manual inspection of rendered HTML for analytics script in enabled/disabled modes if feasible.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Rendered HTML or screenshot showing analytics enabled/disabled behavior.
- Statement confirming no GA4/GTM/remarketing added.
- Build output.

## Security notes

- Do not expose secrets. Plausible-style analytics should not require server secrets in client code.

## Privacy notes

- Do not set marketing cookies.
- Do not add cross-site remarketing tags.
- Keep analytics minimal and privacy-friendly.

## Accessibility notes

- Maintain keyboard and semantic HTML basics where UI is touched.

## Performance notes

- Load analytics asynchronously/deferred according to provider guidance.

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
