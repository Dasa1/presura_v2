# TASK-002: Implement minimal Sanity schemas and Studio workflow

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
cms/admin

Priority:
P0

Depends on:
- TASK-001

Related requirements:
- REQ-PROD-003A
- REQ-PROD-003B
- REQ-SEO-001
- REQ-TEST-001

## Goal

Implement the minimal Sanity CMS schema layer required for MVP public content and a safe editor workflow foundation.

## Context

Sanity is the approved CMS for structured public content. This task replaces the prior Payload direction and must keep Supabase limited to inquiry/lead storage.

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

- /build-notes/phase-02-sanity-schemas-studio.md

Also reference where relevant:
- /project-docs/08A-cms-content-model-spec.md
- /docs/cms-editor-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- sanity/**
- src/sanity/**
- schemas/**
- sanity.config.*
- sanity.cli.*
- package.json
- package-lock.json
- pnpm-lock.yaml
- yarn.lock
- .env.example
- README.md
- docs/sanity/**
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/**
- src/pages/api/**
- src/pages/**/*.astro except Sanity type/demo imports if needed

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-02-sanity-schemas-studio.md`.

1. Add Sanity Studio/config using the repo convention.
2. Create schemas for service, problem, location, work/case study, price item, FAQ and media metadata as defined in /project-docs/08-data-api-contract.md.
3. Add editor-friendly labels, descriptions, validation and status fields where useful.
4. Ensure schemas include SEO fields and content references needed for service/problem/location/price/FAQ rendering.
5. Add safe Sanity environment placeholders to .env.example.
6. Document Sanity Studio usage, token handling and seed-content expectations.

## Acceptance criteria

- Required MVP Sanity schemas exist.
- Schemas support rendering approved pages and JSON-LD without code changes for ordinary content updates.
- Sanity write/admin tokens are not exposed to browser code.
- Editor workflow is structured enough for non-technical content entry; advanced polish remains P1.
- No Payload references remain in newly touched implementation files.

## Tests to add/update

- Schema validation/type tests if available.
- Add lightweight schema export/import or type-generation check if the repo supports it.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Schema file list and summary.
- Command output for typecheck/build.
- Documentation excerpt or README section explaining Sanity token handling.

## Security notes

- Treat Sanity write/admin tokens as server-only secrets.
- Enforce least privilege in documentation and environment naming.
- Require 2FA where available, but do not fail this task solely because provider-side 2FA cannot be verified locally.

## Privacy notes

- Media and work/case-study schemas must include consent/status metadata.
- Location and work schemas must not require private customer addresses.

## Accessibility notes

- Maintain keyboard and semantic HTML basics where UI is touched.

## Performance notes

- Do not add heavy Studio code to the public client bundle.

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
