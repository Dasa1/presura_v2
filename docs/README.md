# Project Documentation — technical-service-website / Presura

Status: VERIFIED (Phase 6 Handover)  
Audience: developer, maintainer, owner, handover reviewer  
Last updated: 2026-06-10

## Purpose

This folder explains how to run, maintain, operate and safely hand over the Presura technical-service website after implementation.

These docs do not change product scope, approved stack or approved requirements. They sit below `/project-docs` and `/tasks` in the source-of-truth hierarchy.

## Approved stack

- Astro frontend
- Tailwind CSS v4 for styling
- Sanity CMS for structured public content
- Supabase for inquiry/lead storage only
- Resend for inquiry/contact form email notifications
- Vercel deployment
- Cloudflare Turnstile or equivalent for form anti-spam
- Plausible-style privacy-friendly analytics first

## Documentation map

### Developer / maintainer docs

- `/docs/local-development.md` — local setup and development workflow.
- `/docs/deployment-and-env.md` — deployment, environment variable and provider configuration guide.
- `/docs/maintenance-guide.md` — routine maintenance checklist.
- `/docs/troubleshooting.md` — common failure modes and checks.
- `/docs/security-privacy-handover.md` — security/privacy controls and handover expectations.

### Owner / buyer handover docs

- `/docs/owner-manual.md` — non-technical operating manual.
- `/docs/cms-editor-guide.md` — Sanity editing guide.
- `/docs/content-update-guide.md` — safe content update workflow.
- `/docs/lead-management-guide.md` — how inquiries are received, stored and managed.
- `/docs/seo-maintenance-guide.md` — ongoing SEO care.
- `/docs/account-access-handover.md` — secure account transfer checklist.
- `/docs/change-log.md` — implementation and post-launch change log.
- `/docs/known-limitations-and-roadmap.md` — approved limitations and deferred work.

## Safety rules

- Do not store passwords, API keys, tokens or secret values in repository docs.
- Document where configuration belongs, not the values.
- Mark unknown values as NOT VERIFIED.
- Mark unapproved choices as NEEDS HUMAN APPROVAL.
- No PASS without evidence.

## Current verification status

- Local build and documentation: **PASS** (Verified by local static build).
- Provider account access and exact project IDs: **NEEDS HUMAN APPROVAL** (Not specified in local workspace).
- Final public NAP/contact/schema values: **NEEDS HUMAN APPROVAL** (Abstract placeholders used in code).
- Live deployment triggers (webhooks, database migrations, server configurations): **NOT VERIFIED / NEEDS HUMAN APPROVAL**.
