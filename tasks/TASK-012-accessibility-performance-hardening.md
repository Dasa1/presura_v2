# TASK-012: Accessibility and performance hardening pass

Execution tool:
Antigravity IDE

Recommended model:
Gemini Flash high

Type:
testing/frontend

Priority:
P0

Depends on:
- TASK-004
- TASK-005
- TASK-008
- TASK-009

Related requirements:
- REQ-A11Y-001
- REQ-PERF-001
- REQ-PROD-001
- REQ-TEST-001

## Goal

Run and fix accessibility and performance issues that affect the approved MVP lead path.

## Context

Numeric Core Web Vitals values remain targets, not automatic launch blockers. Missing evidence, non-indexable pages, severe mobile regressions or emergency-path usability failures are launch blockers.

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

- /build-notes/phase-12-a11y-performance-hardening.md

Also reference where relevant:
- /project-docs/14A-verification-evidence-plan.md
- /docs/maintenance-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/**
- public/**
- astro.config.*
- tailwind.config.*
- tests/**
- docs/verification/**
- README.md
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/** except no-touch verification notes
- sanity/** except no-touch verification notes
- src/pages/api/** except no-touch verification notes

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-12-a11y-performance-hardening.md`.

1. Run accessibility checks on homepage, service page, problem page, location page, pricing/inquiry and contact page.
2. Fix P0 accessibility blockers: keyboard traps, invisible focus, bad labels, missing landmarks/headings, inaccessible form errors or CTA overlap.
3. Run Lighthouse/mobile or equivalent on key pages and document results.
4. Fix severe performance regressions that undermine emergency/mobile lead path.
5. Document numeric CWV results as targets: PASS if acceptable evidence exists, NOT VERIFIED or FOLLOW-UP if target missed but not launch-blocking.
6. Ensure pages remain indexable and usable without unnecessary JS.

## Acceptance criteria

- No known P0 accessibility blockers remain.
- Emergency call CTA remains usable and not focus-obscuring.
- Performance evidence exists for key pages.
- CWV misses are documented correctly and not falsely marked PASS.
- Build succeeds after fixes.

## Tests to add/update

- Automated a11y tests if tooling exists.
- Manual keyboard/touch-target checklist.
- Lighthouse/mobile report capture.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npx lighthouse http://localhost:4321 --preset=desktop --output=json --output-path=./docs/verification/lighthouse-home.json
```

## Expected evidence

- A11y checklist/report.
- Lighthouse or equivalent results for key pages.
- Before/after notes for any fixed P0 blocker.

## Security notes

- Do not weaken form security or remove anti-spam controls to improve scores.

## Privacy notes

- Do not add tracking or third-party widgets during hardening.

## Accessibility notes

- Treat focus visibility, form labels/errors and touch targets as critical for launch.
- Mark any unverified accessibility area as NOT VERIFIED.

## Performance notes

- Optimize images, script loading and layout stability; avoid adding client JS.
- Numeric targets are goals, not automatic hard blockers per approved decision.

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
