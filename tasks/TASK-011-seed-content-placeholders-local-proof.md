# TASK-011: Add MVP seed content, placeholders and proof asset structure

Execution tool:
Antigravity IDE

Recommended model:
Gemini Flash high

Type:
content/frontend

Priority:
P1

Depends on:
- TASK-002
- TASK-003
- TASK-004
- TASK-005

Related requirements:
- REQ-PROD-002
- REQ-PROD-003A
- REQ-SEO-001
- REQ-UI-001
- REQ-TEST-001

## Goal

Add MVP seed content and placeholder structure for approved pages without hardcoding final NAP or pretending placeholders are launch-ready proof.

## Context

The approved decision allows build placeholders during implementation, but real work photos/proof/trust assets must replace them before launch. Local pages are limited to 2-3 and only when unique proof/value exists.

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

- /build-notes/phase-11-seed-content-assets.md

Also reference where relevant:
- /project-docs/11-content-copy-blueprint.md
- /project-docs/12-seo-implementation-spec.md
- /docs/cms-editor-guide.md
- /docs/content-update-guide.md
- /docs/seo-maintenance-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- sanity/seed/**
- src/data/**
- src/content/**
- public/images/placeholders/**
- docs/content/**
- README.md
- src/pages/**
- src/components/**
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/**
- src/pages/api/**
- Production customer media without consent metadata

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-11-seed-content-assets.md`.

1. Create seed or fixture content for homepage, up to 6 services, pricing/ranges, FAQs, works placeholders, 2-3 problems and 2-3 local pages where unique proof placeholders are represented.
2. Label all placeholder NAP/contact/schema/media values clearly.
3. Add content guidance requiring real work photos/proof/trust assets before launch.
4. Ensure price ranges/from-prices include caveats where possible.
5. Ensure local pages include unique local proof/value fields or are omitted from seed.
6. Do not create a large blog program or mass local pages.

## Acceptance criteria

- Seed/fallback content supports approved MVP pages.
- No more than approved MVP local/problem/service scope is introduced.
- Placeholders are clearly marked and not represented as final launch content.
- Pricing uses ranges/from-prices with caveats where possible.
- Local page seed content includes unique proof/value placeholders.

## Tests to add/update

- Build after seed content integration.
- Manual review checklist for placeholder vs launch-ready assets.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- List of seeded content records/files.
- Screenshot or rendered page links showing placeholders.
- Statement confirming no final NAP/customer private data is included.

## Security notes

- Do not add real customer photos or details without consent/status metadata.

## Privacy notes

- Do not include private customer addresses, phone numbers or messages in seed content.
- Use generic placeholders until public business NAP is approved.

## Accessibility notes

- Placeholder images must have meaningful alt text or alt="" when decorative.

## Performance notes

- Optimize placeholder assets and avoid large uncompressed images.

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
