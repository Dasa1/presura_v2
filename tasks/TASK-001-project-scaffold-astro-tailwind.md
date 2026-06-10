# TASK-001: Scaffold Astro, Tailwind and project quality baseline

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro high

Type:
devops/frontend

Priority:
P0

Depends on:
- None

Related requirements:
- REQ-DEVOPS-001
- REQ-TEST-001

## Goal

Create or normalize the repository foundation for the approved Astro + Tailwind CSS v4 website without implementing feature pages yet.

## Context

This task establishes the buildable baseline required before Sanity, routes, forms and verification work can proceed. It must not introduce Payload, SaaS functionality or unapproved production data.

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

- /build-notes/phase-01-scaffold-astro-tailwind.md

Also reference where relevant:
- /project-docs/13-env-deployment-spec.md
- /project-docs/14A-verification-evidence-plan.md
- /docs/local-development.md
- /docs/deployment-and-env.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- package.json
- package-lock.json
- pnpm-lock.yaml
- yarn.lock
- astro.config.*
- tsconfig*.json
- src/**
- public/**
- tailwind.config.*
- postcss.config.*
- .gitignore
- .env.example
- README.md
- docs/**
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- sanity/**
- supabase/**
- api/** except placeholder documentation

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-01-scaffold-astro-tailwind.md`.

1. Inspect the repo and determine whether an Astro project already exists. If not, scaffold a minimal Astro TypeScript project.
2. Add Tailwind CSS v4 integration/configuration using the current project conventions.
3. Add or normalize scripts for build, dev, lint, typecheck and test where feasible.
4. Create .env.example with placeholder keys only for Sanity, Supabase, Resend, Turnstile, analytics and public NAP values.
5. Document local setup and approved stack in README without adding SaaS references.
6. Run the verification commands and record evidence.

## Acceptance criteria

- Astro project builds locally.
- Tailwind CSS v4 styles are available to the app.
- .env.example contains placeholders only and no secrets.
- README documents approved stack and local setup.
- No Payload or SaaS references are introduced.

## Tests to add/update

- Add a minimal smoke test or build verification script if the repo has a test framework.
- Ensure typecheck/lint scripts exist or document NOT VERIFIED if unavailable.

## Commands to run

```bash
npm install
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Successful install/build output or documented NOT VERIFIED reason.
- Screenshot or text output confirming Tailwind styles compile.
- Diff summary showing env placeholders only.

## Security notes

- Do not commit secrets. Use placeholders in .env.example only.
- Avoid adding unnecessary dependencies or remote scripts.

## Privacy notes

- Do not add analytics or form data collection in this task.
- Do not hardcode public business contact/NAP data; use placeholders.

## Accessibility notes

- Maintain keyboard and semantic HTML basics where UI is touched.

## Performance notes

- Keep the baseline static-first and avoid client-side framework hydration unless needed later.

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
