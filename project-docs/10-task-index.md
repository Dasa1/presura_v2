# 10 Task Index — technical-service-website

Approved project: technical-service-website only. Croatian scheduling SaaS tasks are excluded.

No Antigravity task may modify unrelated files, introduce SaaS functionality or mark PASS without evidence.

| Task ID | Name | Type | Priority | Recommended model | Depends on | Requirements covered | Codex review needed |
|---|---|---|---|---|---|---|---|
| TASK-001 | Scaffold Astro, Tailwind and project quality baseline | devops/frontend | P0 | Gemini 3.1 Pro high | None | REQ-DEVOPS-001, REQ-TEST-001 | Yes |
| TASK-002 | Implement minimal Sanity schemas and Studio workflow | cms/admin | P0 | Gemini 3.1 Pro high | TASK-001 | REQ-PROD-003A, REQ-PROD-003B, REQ-SEO-001, REQ-TEST-001 | Yes |
| TASK-003 | Build Sanity-driven content routes and IA | frontend/cms | P0 | Gemini 3.1 Pro high | TASK-001, TASK-002 | REQ-PROD-002, REQ-PROD-003A, REQ-PROD-001, REQ-SEO-001, REQ-TEST-001 | Yes |
| TASK-004 | Implement design system, layouts and emergency CTA | frontend/accessibility | P0 | Gemini 3.1 Pro low | TASK-001, TASK-003 | REQ-PROD-001, REQ-UI-001, REQ-A11Y-001, REQ-PERF-001, REQ-TEST-001 | Optional |
| TASK-005 | Implement SEO metadata, JSON-LD, sitemap and robots | frontend/seo | P0 | Gemini 3.1 Pro low | TASK-003 | REQ-SEO-001, REQ-PROD-002, REQ-PROD-003A, REQ-TEST-001 | Optional |
| TASK-006 | Implement Supabase inquiry storage schema and retention metadata | database/security | P0 | Gemini 3.1 Pro high | TASK-001 | REQ-FORM-001, REQ-PRIV-001, REQ-TEST-001 | Yes |
| TASK-007 | Implement secure inquiry API with Turnstile, Supabase and Resend | backend/security | P0 | Gemini 3.1 Pro high | TASK-006 | REQ-SEC-001, REQ-FORM-001, REQ-FORM-002, REQ-PRIV-001, REQ-TEST-001 | Yes |
| TASK-008 | Implement contact and inquiry form UI states | frontend/forms | P0 | Gemini 3.1 Pro low | TASK-004, TASK-007 | REQ-PROD-001, REQ-SEC-001, REQ-FORM-001, REQ-FORM-002, REQ-A11Y-001, REQ-PRIV-001, REQ-TEST-001 | Yes |
| TASK-009 | Add Plausible-style privacy-friendly analytics | frontend/privacy | P0 | Gemini Flash medium | TASK-001, TASK-003 | REQ-PRIV-001, REQ-TEST-001 | Optional |
| TASK-010 | Configure Vercel deployment and Sanity webhook workflow | devops/security | P1 | Gemini 3.1 Pro high | TASK-001, TASK-002, TASK-003, TASK-007, TASK-009 | REQ-DEVOPS-001, REQ-PROD-003A, REQ-FORM-001, REQ-FORM-002, REQ-PRIV-001, REQ-TEST-001 | Yes |
| TASK-011 | Add MVP seed content, placeholders and proof asset structure | content/frontend | P1 | Gemini Flash high | TASK-002, TASK-003, TASK-004, TASK-005 | REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-UI-001, REQ-TEST-001 | Optional |
| TASK-012 | Accessibility and performance hardening pass | testing/frontend | P0 | Gemini Flash high | TASK-004, TASK-005, TASK-008, TASK-009 | REQ-A11Y-001, REQ-PERF-001, REQ-PROD-001, REQ-TEST-001 | Optional |
| TASK-013 | Create verification evidence pack and launch readiness checklist | testing/docs | P0 | Gemini 3.1 Pro low | TASK-001-012 | REQ-TEST-001, REQ-PERF-001, REQ-A11Y-001, REQ-SEO-001, REQ-SEC-001, REQ-PRIV-001, REQ-FORM-001, REQ-FORM-002, REQ-DEVOPS-001 | Yes |

## Execution notes

- Execute tasks in dependency order.
- Security-sensitive tasks use Gemini 3.1 Pro high and require later Codex review.
- Numeric Core Web Vitals values are targets only; missing evidence, severe mobile lead-path regressions and non-indexable rendering remain launch blockers.
- Approved stack: Astro, Tailwind CSS v4, Sanity, Supabase for inquiry/lead storage only, Resend, Vercel, Cloudflare Turnstile or equivalent and Plausible-style privacy-friendly analytics first.
- Approved inquiry retention: 6 months in Supabase, then delete/anonymize unless converted into active business/customer record.
- Public NAP/contact/schema values remain placeholders until final approved business data is supplied.


## v1.4 documentation layer update

The task pack now expects each implementation phase to create or update a matching `/build-notes/phase-XX-[name].md` file using `/build-notes/phase-build-note-template.md`.

Documentation references added without changing task scope:

| Task | Added documentation context |
|---|---|
| TASK-001 | `/docs/local-development.md`, `/docs/deployment-and-env.md` |
| TASK-002 | `/docs/cms-editor-guide.md` |
| TASK-003 | `/docs/cms-editor-guide.md`, `/docs/content-update-guide.md` |
| TASK-005 | `/docs/seo-maintenance-guide.md` |
| TASK-006 | `/docs/lead-management-guide.md`, `/docs/security-privacy-handover.md` |
| TASK-007 | `/docs/lead-management-guide.md`, `/docs/deployment-and-env.md`, `/docs/security-privacy-handover.md` |
| TASK-008 | `/docs/lead-management-guide.md` |
| TASK-009 | `/docs/deployment-and-env.md`, `/docs/seo-maintenance-guide.md` |
| TASK-010 | `/docs/deployment-and-env.md`, `/docs/account-access-handover.md` |
| TASK-011 | `/docs/cms-editor-guide.md`, `/docs/content-update-guide.md`, `/docs/seo-maintenance-guide.md` |
| TASK-012 | `/docs/maintenance-guide.md` |
| TASK-013 | `/docs/owner-manual.md`, `/docs/account-access-handover.md`, `/docs/security-privacy-handover.md`, `/docs/maintenance-guide.md`, `/docs/troubleshooting.md`, `/verification/evidence-register.md` |

No product scope, stack, feature or requirement changes are introduced by this v1.4 documentation layer.
