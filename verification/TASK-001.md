# Verification Evidence — TASK-001

**Task ID:** TASK-001  
**Date:** 2026-06-10  
**Branch:** `phase-01-setup`  
**Commit:** `[Phase-01] TASK-001: setup astro project and tailwind v4 baseline`  

---

## Files Inspected / Repo State

- Verified `d:\Presura_v2` is the single repository root containing:
  - `/project-docs`
  - `/tasks`
  - `/verification`
  - `/build-notes`
  - `/docs`
  - `/ai-process`
  - `/implementation-plans`
  - `implementation_plan.md`
  - `task.md`
- No pre-existing `package.json` or lockfiles were found.

---

## pnpm Enabling Details

- **Corepack Enable Check:** Failed with `EPERM` error due to Windows Program Files write permissions.
- **Global Installation:** Explicitly approved and run: `npm install -g pnpm`.
- **pnpm Version:** `11.5.2` (Verified via `pnpm -v`).
- **Authoritative Lockfile:** `pnpm-lock.yaml` successfully generated at repository root.
- **Ignored Build Scripts:** Added `.npmrc` configuration allowing `esbuild` and `sharp` dependencies to compile:
  ```yaml
  allowBuilds:
    esbuild: true
    sharp: true
  ```
  Saved in `pnpm-workspace.yaml` after running `pnpm approve-builds esbuild sharp`.

---

## Files Created & Configured

All files generated in the code directory (`d:\Presura_v2`):
1. `package.json` — Configured name to 'presura-website', set 'private': true, removed default main entrypoint, and defined scripts and dependencies (`astro`, `tailwindcss`, `@tailwindcss/vite`).
2. `astro.config.mjs` — Configured Astro with `@tailwindcss/vite` plugin.
3. `tsconfig.json` — Strict typescript parameters.
4. `src/styles/global.css` — Standard Tailwind CSS v4 `@import` directive, custom root color tokens, and accessible focus ring configs.
5. `src/layouts/Layout.astro` — Basic semantic HTML5 framework with viewport, default title/meta description tags, skip-to-main link, no-index rules for sandbox, and dynamic canonical URL resolver.
6. `src/pages/index.astro` — Placeholder homepage containing responsive Hero section, trust points, and sticky click-to-call mobile CTA.
7. `.gitignore` — standard build/secret exclusions.
8. `.env.example` — Templates placeholder names for Sanity, Supabase, Resend, Turnstile, and Plausible variables.
9. `README.md` — Updated dev setup and directory documentation.

---

## Commands Run & Terminal Outputs

### 1. Project Dependencies Installation
```bash
$ pnpm init
$ pnpm add astro tailwindcss
$ pnpm add -D @tailwindcss/vite
$ pnpm approve-builds esbuild sharp
```

Output package dependencies in `package.json`:
```json
  "dependencies": {
    "astro": "^6.4.4",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.0"
  }
```

### 2. Static Site Compilation Output
```bash
$ pnpm run build
```
Terminal stdout logs:
```text
$ astro build
07:40:30 [types] Generated 3.49s
07:40:30 [build] output: "static"
07:40:30 [build] mode: "static"
07:40:30 [build] directory: D:\Presura_v2\dist\
07:40:30 [build] Collecting build info...
07:40:30 [build] ✓ Completed in 3.52s.
07:40:30 [build] Building static entrypoints...
07:40:33 [vite] ✓ built in 2.11s
07:40:33 [vite] ✓ built in 14ms
07:40:33 [build] Rearranging server assets...

 generating static routes 
07:40:33   ├─ /index.html (+19ms) 
07:40:33 ✓ Completed in 46ms.

07:40:33 [build] ✓ Completed in 2.29s.
07:40:33 [build] 1 page(s) built in 5.82s
07:40:33 [build] Complete!
```

---

## Verification Checklist

- [x] **Astro Project Builds:** Verified, static route `/index.html` compiled in `5.82s`.
- **Tailwind CSS v4 Works:** Verified, `@tailwindcss/vite` compiles styles without PostCSS dependency errors.
- **Zero Committed Secrets:** Checked `.env.example`, no actual API keys or credentials committed.
- **No Hardcoded NAP:** Name placeholder `"Presura"` is used. Address, phone (`+38500000000`), hours, and email exist as placeholders only. No `"Presura d.o.o."` exists.
- **No SaaS Elements:** No calendar, HR, shift planning, multi-tenant templates, or payroll logic introduced.

---

## Status: PASS
All acceptance criteria for Phase 1 are fully met and verified.
