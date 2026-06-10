# Phase 1 Build Note — Scaffold Astro, Tailwind and project quality baseline

Status: APPROVED  
Project: technical-service-website / Presura  
Phase: PHASE-01 — Project Setup  
Date: 2026-06-10  
Branch: phase-01-setup  
Commit(s): [Phase-01] TASK-001: setup astro project and tailwind v4 baseline  
Antigravity agent/model: Antigravity IDE (Gemini Flash)

## Purpose

This document records what happened during the approved Phase 1 implementation (Project Setup & Quality Baseline).

## Phase Summary

### Phase Goal
Verify `pnpm` availability, bootstrap a clean Astro project, configure Tailwind CSS v4, establish strict TS configurations, configure git exclusions, define environmental variable placeholders, and document the baseline setup.

### Tasks Included
- TASK-001: Scaffold Astro, Tailwind and project quality baseline

### Approved Scope
Only scaffolding, layout baselines, configurations, and verification docs.

### Out of Scope for this Phase
- Dynamic product features
- Sanity dataset deployments or production tokens
- Supabase migrations or writes
- Resend email sending
- Turnstile verification logic
- Vercel production deployment
- Real secrets or tokens
- Hardcoding real NAP values or "Presura d.o.o."

---

## Implementation Summary

### Package Manager Setup
- **Corepack Execution:** Failed due to permission restrictions in Windows Program Files (`EPERM` error writing to `C:\Program Files\nodejs\pnpx`).
- **Global Installation:** Explicitly approved by the owner via `npm install -g pnpm`.
- **pnpm Version:** `11.5.2`.
- **Lockfile Status:** `pnpm-lock.yaml` is the authoritative lockfile for this project.
- **Ignored Build Scripts:** Added `.npmrc` to allow `esbuild` and `sharp` to run their postinstall scripts (using `pnpm approve-builds esbuild sharp`).

### What was Implemented
- Scaffolded package metadata (`package.json`, configured name as `presura-website`, marked `private: true`, and removed default entrypoint `main: index.js`) and pnpm workspace permissions (`pnpm-workspace.yaml`).
- Created Astro configuration (`astro.config.mjs`) integrating Tailwind.
- Created strict TypeScript configuration (`tsconfig.json`).
- Added global CSS file (`src/styles/global.css`) importing Tailwind CSS v4 and establishing default focus ring overlays and colors.
- Created core layout wrapper (`src/layouts/Layout.astro`) utilizing semantic HTML landmarks, self-referencing canonical tag helpers, no-index robots blocks for sandbox checks, and skip-to-content accessibility anchors.
- Setup home page placeholder (`src/pages/index.astro`) using `"Presura"` placeholder name (no real NAP data).
- Defined environment key layout (`.env.example`) and gitignore boundaries (`.gitignore`).
- Updated developer guides in `README.md`, `docs/local-development.md`, and `docs/deployment-and-env.md`.

---

## Files Changed

| File/path | Change summary | Related task(s) | Related requirement(s) |
|---|---|---|---|
| `package.json` | Project scripts and dependencies | TASK-001 | REQ-DEVOPS-001 |
| `pnpm-workspace.yaml` | Build script execution approvals | TASK-001 | REQ-DEVOPS-001 |
| `astro.config.mjs` | Astro setup with Tailwind integration | TASK-001 | REQ-DEVOPS-001 |
| `tsconfig.json` | Strict typescript configuration | TASK-001 | REQ-DEVOPS-001 |
| `src/styles/global.css` | Tailwind v4 style setup | TASK-001 | REQ-UI-001 |
| `src/layouts/Layout.astro` | Layout structure and accessibility markers | TASK-001 | REQ-A11Y-001, REQ-SEO-001 |
| `src/pages/index.astro` | Baseline smoke-test homepage | TASK-001 | REQ-UI-001 |
| `.gitignore` | Local caches/secrets exclusions | TASK-001 | REQ-SEC-001 |
| `.env.example` | Environmental variables template | TASK-001 | REQ-SEC-001 |
| `README.md` | Dev setup and directory guides | TASK-001 | REQ-DEVOPS-001 |
| `docs/local-development.md` | Setup and run commands guide | TASK-001 | REQ-DEVOPS-001 |
| `docs/deployment-and-env.md` | Environment configuration guide | TASK-001 | REQ-DEVOPS-001 |

---

## Commands Run

| Command | Purpose | Result | Evidence |
|---|---|---|---|
| `npm install -g pnpm` | Install pnpm globally | PASS | Package added |
| `pnpm -v` | Verify version | PASS | Version `11.5.2` |
| `pnpm init` | Initialize package descriptor | PASS | package.json created |
| `pnpm add astro tailwindcss` | Install package dependencies | PASS | Added packages |
| `pnpm remove @astrojs/tailwind; pnpm add -D @tailwindcss/vite` | Swap legacy integration with Tailwind v4 Vite plugin | PASS | Dependencies adjusted |
| `pnpm approve-builds esbuild sharp` | Authorize postinstall scripts | PASS | Created pnpm-workspace.yaml |
| `pnpm run build` | Validate Astro compilation | PASS | Compiled to `/dist` |

---

## Dependencies Installed or Changed

| Dependency | Version | Reason | Approval | Notes |
|---|---|---|---|---|
| `pnpm` | 11.5.2 | Package manager | Approved | Global |
| `astro` | ^6.4.4 | Frontend framework | Approved | Dependency |
| `tailwindcss` | ^4.3.0 | Styles compiler | Approved | Dependency |
| `@tailwindcss/vite`| ^4.3.0 | Vite integration plugin | Approved | devDependency |

---

## Environment Variables and Secrets

| Env var | Public/private | Required? | Configured where? | Status |
|---|---|---:|---|---|
| `PUBLIC_SITE_URL` | Public | Yes | `.env.local` / Vercel | Placeholders |
| `PUBLIC_SANITY_PROJECT_ID`| Public | Yes | `.env.local` / Vercel | Placeholders |
| `PUBLIC_SANITY_DATASET` | Public | Yes | `.env.local` / Vercel | Placeholders |
| `PUBLIC_SANITY_API_VERSION`| Public | Yes | `.env.local` / Vercel | Placeholders |
| `SUPABASE_URL` | Private | Yes | `.env.local` / Vercel | Placeholders |
| `SUPABASE_SERVICE_ROLE_KEY`| Private | Yes | `.env.local` / Vercel | Placeholders |
| `RESEND_API_KEY` | Private | Yes | `.env.local` / Vercel | Placeholders |
| `RESEND_FROM_EMAIL` | Private | Yes | `.env.local` / Vercel | Placeholders |
| `INQUIRY_RECIPIENT_EMAIL` | Private | Yes | `.env.local` / Vercel | Placeholders |
| `PUBLIC_TURNSTILE_SITE_KEY`| Public | Yes | `.env.local` / Vercel | Placeholders |
| `TURNSTILE_SECRET_KEY` | Private | Yes | `.env.local` / Vercel | Placeholders |
| `PUBLIC_ANALYTICS_DOMAIN` | Public | Yes | `.env.local` / Vercel | Placeholders |

---

## Verification Evidence

| Check | Related requirement/task | Evidence | Status |
|---|---|---|---|
| Build validation | TASK-001 / REQ-DEVOPS-001 | `/verification/TASK-001.md` | PASS |
| Placeholders check | TASK-001 / REQ-SEC-001 | Checked `.env.example` and pages | PASS |

---

## Security/Privacy Notes
- No API keys or tokens were committed.
- No public NAP values or personal data are hardcoded.
- Workspace contains only placeholders.
