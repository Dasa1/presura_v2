# TASK-005: Implement SEO metadata, JSON-LD, sitemap and robots

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro low

Type:
frontend/seo

Priority:
P0

Depends on:
- TASK-003

Related requirements:
- REQ-SEO-001
- REQ-PROD-002
- REQ-PROD-003A
- REQ-TEST-001

## Goal

Implement structured local SEO metadata and crawl assets for the approved website scope.

## Context

The site must be discoverable by search and answer engines without exposing unapproved NAP or private data.

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

- /build-notes/phase-05-seo-schema-sitemap.md

Also reference where relevant:
- /project-docs/12-seo-implementation-spec.md
- /docs/seo-maintenance-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/components/seo/**
- src/lib/seo/**
- src/pages/**
- src/layouts/**
- public/robots.txt
- public/**
- astro.config.*
- tests/**
- README.md
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/**
- src/pages/api/**
- sanity/** except read-only schema imports/types

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-05-seo-schema-sitemap.md`.

1. Create SEO metadata helpers for title, description, canonical URL and Open Graph/Twitter fields.
2. Implement JSON-LD for organization/HVACBusiness/service/FAQ/location pages using approved placeholders for unapproved NAP/contact values.
3. Add sitemap and robots support for public MVP routes.
4. Ensure schema uses only public Sanity content and approved placeholders.
5. Add validation instructions for schema and indexability.

## Acceptance criteria

- Key pages output unique title/description/canonical metadata.
- JSON-LD is present for organization/local service and eligible FAQ content.
- Sitemap and robots are generated or documented according to Astro/Vercel setup.
- No private data or unapproved final NAP is hardcoded.

## Tests to add/update

- Add unit tests for schema helper output if test framework exists.
- Run schema validation manually or document NOT VERIFIED with reason if external validator is unavailable.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Example rendered JSON-LD from one page.
- Sitemap/robots output or build artifact confirmation.
- Schema validation status: PASS or NOT VERIFIED with reason.

## Security notes

- Do not expose private env vars in generated metadata.

## Privacy notes

- Do not include private customer addresses, unpublished work details or unapproved contact data in schema.

## Accessibility notes

- Metadata implementation should not alter visible content semantics negatively.

## Performance notes

- SEO helpers should run at build/server time and not add client-side JS.

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
