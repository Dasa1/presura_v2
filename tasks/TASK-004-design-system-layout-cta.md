# TASK-004: Implement design system, layouts and emergency CTA

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro low

Type:
frontend/accessibility

Priority:
P0

Depends on:
- TASK-001
- TASK-003

Related requirements:
- REQ-PROD-001
- REQ-UI-001
- REQ-A11Y-001
- REQ-PERF-001
- REQ-TEST-001

## Goal

Implement the core visual system, responsive layouts and emergency mobile call path.

## Context

The website must convert emergency mobile visitors quickly while maintaining a premium technical-service visual language and accessibility baseline.

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

- /build-notes/phase-04-design-system-layout-cta.md

Also reference where relevant:
- /project-docs/04A-page-ux-blueprints.md
- /project-docs/05A-ui-component-spec.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/components/**
- src/layouts/**
- src/pages/**
- src/styles/**
- public/**
- tests/**
- README.md
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- sanity/** except imports/types already exposed by content task
- supabase/**
- src/pages/api/**

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-04-design-system-layout-cta.md`.

1. Create reusable layout components: header, footer, hero, trust bar, service cards, proof blocks, FAQ blocks, CTA bands and sticky mobile call CTA.
2. Implement design tokens/classes with Tailwind CSS v4 and component variants where appropriate.
3. Ensure sticky call CTA uses placeholder phone value until NAP approval.
4. Apply responsive mobile-first layout to homepage and commercial page templates.
5. Add visible focus states, 44x44 minimum touch targets where applicable and reduced-motion handling.
6. Avoid heavy animations and avoid hero sliders.

## Acceptance criteria

- Mobile sticky tap-to-call CTA is visible on commercial pages and does not block content/focus.
- Core components are reused across homepage/service/problem/location pages.
- Focus states and touch targets are visible and accessible.
- Motion is restrained and respects prefers-reduced-motion.
- Design uses placeholders for unapproved public contact data.

## Tests to add/update

- Component smoke tests if available.
- Manual keyboard tab-through check for header, CTA and primary page sections.
- Responsive viewport checks for mobile and desktop.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Screenshots of mobile sticky CTA and desktop layout.
- Manual keyboard/accessibility notes.
- Build/lint/typecheck output.

## Security notes

- Do not add third-party UI scripts.
- Keep external links safe with rel attributes where needed.

## Privacy notes

- Do not embed third-party tracking, maps or widgets in this task.

## Accessibility notes

- Verify focus visibility, skip link/landmarks where feasible, heading hierarchy and touch targets.

## Performance notes

- Do not add heavy client-side animation libraries. Keep visual components static or minimally hydrated.

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
