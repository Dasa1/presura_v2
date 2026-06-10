# TASK-003: Build Sanity-driven content routes and IA

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
frontend/cms

Priority:
P0

Depends on:
- TASK-001
- TASK-002

Related requirements:
- REQ-PROD-002
- REQ-PROD-003A
- REQ-PROD-001
- REQ-SEO-001
- REQ-TEST-001

## Goal

Implement the approved information architecture and render public pages from Sanity seed/fallback content.

## Context

The MVP requires homepage, service/problem/location/pricing/works/contact routes, with up to 6 services, 2-3 problems and 2-3 local pages. Supabase must not be used as public content storage.

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

- /build-notes/phase-03-sanity-content-routes.md

Also reference where relevant:
- /project-docs/04A-page-ux-blueprints.md
- /project-docs/08A-cms-content-model-spec.md
- /project-docs/11-content-copy-blueprint.md
- /docs/cms-editor-guide.md
- /docs/content-update-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/pages/**
- src/layouts/**
- src/components/**
- src/lib/sanity/**
- src/content/**
- src/data/**
- public/**
- .env.example
- README.md
- tests/**
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/**
- src/pages/api/** except read-only content preview route if already planned

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-03-sanity-content-routes.md`.

1. Create Sanity client/query helpers with safe use of public read configuration only.
2. Implement route structure for /, /usluge/, /usluge/[slug]/, /problemi/, /problemi/[slug]/, /lokacije/, /lokacije/[slug]/, /cjenik/, /radovi/ and /kontakt/.
3. Render pages from Sanity data with graceful fallback placeholders for missing optional content.
4. Ensure approved NAP/contact/schema values remain placeholders until final business approval.
5. Add 2-3 local page support only for content records with unique local proof/value.
6. Keep pages indexable and static/SSG where possible.

## Acceptance criteria

- Approved route structure exists and builds.
- Service/problem/location/pricing/works/contact pages render from Sanity seed/fallback data.
- Commercial pages include visible call CTA placement hooks for TASK-004.
- No public page reads content from Supabase.
- Missing optional CMS fields do not crash the build.

## Tests to add/update

- Route generation tests or smoke tests for key paths.
- Build should fail only on true schema/query errors, not missing optional content.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- List of generated routes or build output showing static routes.
- Screenshots or local URLs for homepage, one service, one problem, one location, pricing and contact.
- Verification that Supabase is not used for public content.

## Security notes

- Use only read-safe Sanity configuration in browser-executed code.
- Do not expose preview/write tokens.

## Privacy notes

- Do not publish private customer addresses, private job notes or unapproved NAP values.
- Keep placeholder contact/schema data clearly marked.

## Accessibility notes

- Use semantic landmarks and heading hierarchy for all new pages.

## Performance notes

- Prefer Astro static generation. Avoid client-side fetching for public content unless justified.

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
