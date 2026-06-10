# TASK-008: Implement contact and inquiry form UI states

Execution tool:
Antigravity IDE

Recommended model:
Gemini 3.1 Pro low

Type:
frontend/forms

Priority:
P0

Depends on:
- TASK-004
- TASK-007

Related requirements:
- REQ-PROD-001
- REQ-SEC-001
- REQ-FORM-001
- REQ-FORM-002
- REQ-A11Y-001
- REQ-PRIV-001
- REQ-TEST-001

## Goal

Build the user-facing contact/inquiry form experience that connects to the secure inquiry API.

## Context

The form must be accessible, mobile-friendly and transparent while avoiding excessive personal data collection.

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

- /build-notes/phase-08-contact-inquiry-form-ui.md

Also reference where relevant:
- /project-docs/04A-page-ux-blueprints.md
- /project-docs/05A-ui-component-spec.md
- /project-docs/08B-form-lead-handling-spec.md
- /docs/lead-management-guide.md
- /build-notes/phase-build-note-template.md

Do not add passwords, API keys, tokens or secret values to build notes or docs. Mark unknowns as NOT VERIFIED or NEEDS HUMAN APPROVAL.

## Allowed files

- src/pages/kontakt.astro
- src/pages/cjenik.astro
- src/components/forms/**
- src/components/**
- src/lib/forms/**
- src/styles/**
- tests/**
- README.md
- build-notes/**
## Forbidden files

- /project-docs/01-research.md
- /project-docs/HUMAN-DECISION-REVIEW.md
- /tasks/**
- Files outside the repository root
- supabase/** except shared public types if already created
- src/pages/api/** except endpoint contract imports only
- sanity/**

## Instructions

0. Record implementation evidence, deviations and NOT VERIFIED items in `/build-notes/phase-08-contact-inquiry-form-ui.md`.

1. Create contact/inquiry form UI for contact and pricing/inquiry page placements.
2. Collect only minimal approved fields: name, phone/email, preferred contact method, service interest, location, message and consent flags as needed.
3. Include honeypot field and Turnstile/equivalent widget integration using public site key placeholder.
4. Wire form to the API endpoint from TASK-007.
5. Provide accessible labels, inline validation messages, success/error states and loading state.
6. Add microcopy that data is used for inquiry follow-up and retention follows policy.
7. Ensure form does not block the emergency phone CTA path.

## Acceptance criteria

- Form submits successfully to the API in local/test mode.
- Validation errors are clear, accessible and not technical stack traces.
- Honeypot and Turnstile fields are present.
- Form collects no unnecessary sensitive fields.
- Phone CTA remains available separately for emergency visitors.

## Tests to add/update

- Component/form validation tests if framework supports them.
- Manual keyboard and screen-reader-oriented label check.
- Manual success/error state screenshots.

## Commands to run

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Expected evidence

- Screenshots of form, validation error, loading and success states.
- Manual accessibility notes.
- Command output and API submission result.

## Security notes

- Do not bypass server-side validation.
- Do not expose Turnstile secret, Supabase keys or Resend keys.

## Privacy notes

- Minimize form fields.
- Include clear privacy microcopy.
- Do not store analytics identifiers in hidden form fields unless explicitly approved.

## Accessibility notes

- Labels must be programmatically associated.
- Error and success states must be announced or reachable.
- Touch targets must meet baseline requirements.

## Performance notes

- Do not add heavy form libraries unless already present and justified.

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
