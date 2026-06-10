# Phase 1 Pre-Implementation Plan — Presura Website

This document outlines the detailed pre-implementation plan for Phase 1 (Project Setup & Quality Baseline) of the Presura lead-generation website project. All files, docs, and configurations are designed to reside inside the single repository root at `d:\Presura_v2`.

---

## 1. Repo Inspection Results

- **Files/Folders Inspected:** Root directory `d:\Presura_v2`.
- **Existing `package.json`?** No, does not exist.
- **Existing lockfiles?** No, does not exist.
- **Package manager implied?** None.
- **Repo state:** The repository contains planning/docs/workflow folders, but no application scaffold yet. No package.json or lockfile exists. No package manager is implied.

---

## 2. Package Manager Decision

- Since `d:\Presura_v2` does not contain an application scaffold and no package manager is currently implied:
  - **Proposed Option A (Recommended):** Use **`pnpm`** as the default package manager for the project to ensure disk efficiency, fast installs, and clean lockfiles (in alignment with `/project-docs/13-env-deployment-spec.md`).
  - **Proposed Option B:** Use **`npm`** as the fallback package manager.
  - **Status:** Awaiting owner selection. **Do not** run installation or dependency-changing commands until the package manager choice is explicitly approved.

---

## 3. Files to Create or Modify

All paths listed below are relative to the repository root `d:\Presura_v2`:

### Files to Create (Astro & Tailwind Setup):
- `package.json` — Declares scripts, engines, and project dependencies (Astro, Tailwind CSS v4 integrations).
- `astro.config.mjs` — Base configuration for the Astro compiler.
- `tsconfig.json` — TypeScript configuration enforcing build-time quality rules.
- `src/styles/global.css` — Configures Tailwind CSS imports and custom design tokens.
- `src/layouts/Layout.astro` — Global HTML layout template (includes viewport, charset, semantic landmarks, and no-cookies-by-default metadata).
- `src/pages/index.astro` — Simple static homepage placeholder utilizing the **"Presura"** site placeholder.
- `.gitignore` — Standard Git exclusions for local builds, node modules, and environments.
- `.env.example` — Templates placeholder names for Sanity project ID, dataset, Supabase URL, Resend key, Turnstile keys, and Plausible domain.
- `README.md` — Basic project documentation linking to local setup guides.

### Documentation Files to Create/Verify in Root:
- `/project-docs/*` — Mapped from the intake download workspace (Intake, Requirements, Specs).
- `/tasks/*` — Execution boundaries (TASK-001 through TASK-013).
- `/verification/README.md` & `/verification/evidence-register.md` — Verification tracking index.
- `/build-notes/phase-01-scaffold-astro-tailwind.md` — Phase 1 timeline and command evidence log.
- `/docs/*` — Handbook documentation (Local Dev, Deployment Guide, Lead Management, security/privacy handover).

---

## 4. Proposed Commands (No execution yet)

- **Option A (pnpm):**
  ```bash
  pnpm init
  pnpm i astro tailwindcss @astrojs/tailwind
  pnpm run build
  ```
- **Option B (npm):**
  ```bash
  npm init -y
  npm i astro tailwindcss @astrojs/tailwind
  npm run build
  ```

---

## 5. Phase 1 Acceptance Criteria

- A clean, buildable Astro project is configured in `d:\Presura_v2`.
- Tailwind CSS v4 styling compiles without errors.
- **Do not** hardcode `"Presura d.o.o."`, phone numbers, address details, or real emails. Use the placeholder name **"Presura"** and generic phone/address placeholders in public UI, schema, and metadata.
- All files build without compilation or TypeScript errors.
- `/build-notes/phase-01-scaffold-astro-tailwind.md` is initialized.

---

## 6. Phase 1 Verification Plan

- **`/verification/TASK-001.md`**: Text summary of the successful local build logs and directory structure.
- **`/build-notes/phase-01-scaffold-astro-tailwind.md`**: Tracks the completed phase, timeline, dependency list, and verification checklist.

---

## 7. Safety Constraints

1. **No Real Secrets:** All environmental variables must use placeholders in `.env.example`. No keys should be committed.
2. **No Real NAP:** All public business details remain placeholders until explicitly approved by the owner.
3. **No Database Writes:** No Supabase migration commands will be run in this phase.
4. **Safety boundary:** No product feature implementation. Phase 1 may create only the baseline Astro/Tailwind scaffold, minimal static placeholder page, layout, styling setup, config files, .env.example, docs/build notes and verification evidence. No dynamic product features, CMS integration, form API, database code, deployment, migrations or real secrets.
