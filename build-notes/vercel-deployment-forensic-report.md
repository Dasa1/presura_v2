# Vercel Deployment Forensic Report

## 1. Executive Summary
* **Attempted Deployment**: `Presura v2` (premium technical service website built on Astro).
* **Branch Significance (`demo-visual-polish`)**: This branch contains the approved premium visual system, responsive layout structures, dynamic animations, sticky header UX bugfix, fallback locations page routing, and contact form network sandboxing. It is the designated branch for visual validation.
* **Owner-Facing Preview Only**: The target deployment on Vercel is intended solely as a private, owner-facing staging environment for design, interaction, and routing validation.
* **Public Launch Status**: **NOT APPROVED**. Public production release is blocked because search engine indexing, production domains (`presura.hr`), live APIs/databases (Supabase, Resend, Turnstile), and verified NAP/contact details are not yet approved, audited, or configured.
* **Deployment Status**: **BLOCKED**
* **Primary Blocker**: Vercel cloud builds fail during the package installation step (`pnpm install` exits with code 1).
* **Blocker Analysis**: The blocker is a package manager and environment mismatch. Vercel's default global pnpm (v8 or v9) cannot parse the multi-document YAML syntax of the local `pnpm-lock.yaml` (lockfileVersion `9.0` created by `pnpm@11.5.2` under `Node v24.11.1`). Standard fallbacks, such as ignoring the lockfile, trigger a Node 24 registry fetch utility regression (`Value of "this" must be of type URLSearchParams`). Subsequent manual override attempts encountered build engine restrictions (Node 22 build container running older `22.12.0` vs required `>=22.13.0`), permission errors under Node 20, or sqlite library dependency crashes (`node:sqlite` missing under Node 20.20.2).

---

## 2. Source and Git State
* **Local Repository Path**: `d:\Presura_v2`
* **GitHub Repository URL**: `https://github.com/Dasa1/presura_v2.git`
* **Current Branch**: `demo-visual-polish`
* **Current HEAD Commit**: `d6117d4` ("Allow Node >=20.17.0 for Vercel deployment compatibility")
* **Remote Tracking Branch**: `origin/demo-visual-polish` (HEAD is fully pushed and up to date)
* **Working Tree State**:
  * Uncommitted files:
    * Modified: `.gitignore` (unstaged addition of `.vercel`)
    * Modified: `verification/VERCEL-PREVIEW-READY.md` (uncommitted status tracking)
    * Untracked: `build-notes/vercel-deployment-forensic-report.md` (this report)
    * Untracked: `demo/vercel-preview-readiness-plan.md` (readiness proposal)
  * All source files are completely clean and unmodified.
* **Last 10 Commits**:
  * `d6117d4` Allow Node >=20.17.0 for Vercel deployment compatibility
  * `d5e6ed8` Restrict Node engine to >=22.12.0 for Astro build compatibility
  * `74551ec` Restrict Vercel Node engines to >=22.13.0 for pnpm v11 compatibility
  * `d41ecfd` Restrict Vercel build to Node.js 20.x to resolve pnpm URLSearchParams fetch bug
  * `6c5df98` Remove conflicting devEngines configuration from package.json
  * `9c043a6` Fix Vercel pnpm install compatibility
  * `3a79e51` Apply premium demo visual system and safe UX polish (Known good visual commit)
  * `17cdaf4` Apply demo visual foundation polish and safe preview mode
  * `3631737` Complete local MVP build and handover pack
* **Package File Changes**:
  * `package.json` was updated after the first failed attempt to specify `"packageManager": "pnpm@11.5.2"`, remove `devEngines`, and widen Node engines to `>=20.17.0` in an attempt to align with Vercel's build environment.
  * `pnpm-lock.yaml` has **not** been changed or regenerated since the first failed attempt.
* **Fixes Committed/Pushed**: Commits up to `d6117d4` are pushed to GitHub.
* **Uncommitted Files**: Only documentation, tracking, and `.gitignore` files remain uncommitted.

---

## 3. Vercel Project State
* **Vercel Project Name**: `presura_v2`
* **Vercel Account/Team**: Organization `dasas-projects-60f4ac4f` (orgId: `team_78PQiznIlOf1PNYGWoNgbUfz`), user session `dasodasan-1868`
* **Connected GitHub Repo**: `https://github.com/Dasa1/presura_v2.git`
* **Selected/Deployed Branch**: `demo-visual-polish`
* **Production Branch Setting**: `main` (NOT VERIFIED on dashboard, assumed default)
* **Deployment Environment Label**: Preview / Development (NOT VERIFIED on Vercel Dashboard, but targeted by CLI preview runs)
* **Framework Preset**: `Astro`
* **Root Directory**: `.`
* **Install Command**: `npm install pnpm@10.5.2 && npx pnpm install` (Currently overridden on Vercel Dashboard)
* **Build Command**: `pnpm run build`
* **Output Directory**: `dist`
* **Node Version Setting**: `22.x` (Overridden in Vercel Dashboard; Vercel's build container runs Node `v22.12.0`)
* **Package Manager Detection**: Detected as `pnpm`, but defaults to Vercel's global pre-installed pnpm v8/v9 runner unless overridden.
* **Custom Domains Connected**: None connected (e.g., `presura.hr` is NOT configured or pointing to Vercel)
* **Environment Variables (Names Only)**: `ENABLE_COREPACK`
* **Live Secrets Configured**: None. No production secrets (Supabase API keys, Resend credentials, Turnstile secret keys, or Sanity tokens) have been set.
* **Vercel Project Settings Changes**: Install command override and Node version settings override were modified via the Vercel Dashboard.
* **Vercel CLI Login**: Successful. Session is authenticated under user `dasodasan-1868`.

---

## 4. Timeline of Deployment Attempts

### Attempt 1: First Failure
* **Date/Time**: 2026-06-10
* **Trigger Method**: Vercel CLI (`pnpm dlx vercel --yes`)
* **Source Commit**: `3a79e51`
* **Vercel Environment**: Preview
* **Install Command**: Default `pnpm install`
* **Build Command**: Default `pnpm run build`
* **Env Vars**: None
* **Result**: **FAIL**
* **Exact Error**:
  ```
  Error: Command "pnpm install" exited with 1
  ```
* **Post-Attempt Action**: Attempted to define `packageManager` in `package.json`.

### Attempt 2: Registry URLSearchParams Crash
* **Date/Time**: 2026-06-10
* **Trigger Method**: Git Push (Commit `9c043a6`)
* **Source Commit**: `9c043a6`
* **Vercel Environment**: Preview (automatic build)
* **Install Command**: Default `pnpm install`
* **Build Command**: Default `pnpm run build`
* **Env Vars**: None
* **Result**: **FAIL**
* **Exact Error**:
  ```
  ERR_PNPM_META_FETCH_FAIL GET https://registry.npmjs.org/@tailwindcss%2Fvite: Value of "this" must be of type URLSearchParams
  ```
* **Post-Attempt Action**: Removed `devEngines` configuration block.

### Attempt 3: Multi-Document Lockfile Diagnostics
* **Date/Time**: 2026-06-10
* **Trigger Method**: Git Push / Manual Redeploy
* **Source Commit**: `6c5df98`
* **Vercel Environment**: Preview
* **Install Command**: Default `pnpm install`
* **Build Command**: Default `pnpm run build`
* **Env Vars**: None
* **Result**: **FAIL**
* **Exact Error**:
  ```
  Error while parsing config file: "/vercel/path0/pnpm-lock.yaml"
  The lockfile at "/vercel/path0/pnpm-lock.yaml" is broken: expected a single document in the stream, but found more
  WARN Ignoring broken lockfile at /vercel/path0
  ERR_PNPM_META_FETCH_FAIL GET https://registry.npmjs.org/@tailwindcss%2Fvite: Value of "this" must be of type URLSearchParams
  Error: Command "pnpm install" exited with 1
  ```
* **Post-Attempt Action**: Added `ENABLE_COREPACK=1` env variable to preview environment.

### Attempt 4: Corepack Bypass
* **Date/Time**: 2026-06-10
* **Trigger Method**: Re-run CLI Deployment
* **Source Commit**: `6c5df98`
* **Vercel Environment**: Preview
* **Install Command**: Default `pnpm install`
* **Build Command**: Default `pnpm run build`
* **Env Vars**: `ENABLE_COREPACK=1`
* **Result**: **FAIL** (exited on identical lockfile parsing and fetch errors; Vercel's global pre-install lifecycle ignored the corepack directive).

### Attempt 5: Write Access Denial (Global CLI Attempt)
* **Date/Time**: 2026-06-10
* **Trigger Method**: Install override on Vercel Dashboard (`npm install -g pnpm@11.5.2 && pnpm install`), Node.js set to `20.x`.
* **Source Commit**: `6c5df98`
* **Vercel Environment**: Preview
* **Result**: **FAIL**
* **Exact Error**:
  ```
  Error: EACCES: permission denied, access '/usr/local/bin'
  ```
* **Post-Attempt Action**: Changed install command to a local npm install block to avoid write restrictions in `/usr/local/bin`.

### Attempt 6: Missing Node.js Built-in Library (`node:sqlite`)
* **Date/Time**: 2026-06-10
* **Trigger Method**: Local install override (`npm install pnpm@11.5.2 && npx pnpm install`), Node.js set to `20.x`. Pushed commit `d41ecfd` restricting engine Node to `20.x`.
* **Source Commit**: `d41ecfd`
* **Vercel Environment**: Preview
* **Result**: **FAIL**
* **Exact Error**:
  ```
  current: { node: 'v20.20.2', npm: '10.8.2' }
  Error [ERR_UNKNOWN_BUILTIN_MODULE]: No such built-in module: node:sqlite
  ```
* **Post-Attempt Action**: Adjusted Node engine target to `>=22.13.0` to ensure `node:sqlite` was present.

### Attempt 7: Node Engine Version Mismatch
* **Date/Time**: 2026-06-11
* **Trigger Method**: Local install override (`npm install pnpm@11.5.2 && npx pnpm install`), Node.js set to `22.x`. Pushed commit `74551ec` restricting engine to `>=22.13.0`.
* **Source Commit**: `74551ec`
* **Vercel Environment**: Preview
* **Result**: **FAIL**
* **Exact Error**:
  ```
  npm warn EBADENGINE package: 'pnpm@11.5.2', required: { node: '>=22.13' }
  Error: Command "npm install pnpm@11.5.2 && npx pnpm install" exited with 1
  ```
* **Post-Attempt Action**: Adjusted engine version constraints to allow `22.12.0` (set target to `>=22.12.0`). Changed Vercel install override to use `pnpm@10.5.2`.

### Attempt 8: Local pnpm v10 Override Mismatch
* **Date/Time**: 2026-06-11
* **Trigger Method**: Local install override (`npm install pnpm@10.5.2 && npx pnpm install`), Node.js set to `22.x`. Pushed commit `d5e6ed8`.
* **Source Commit**: `d5e6ed8`
* **Vercel Environment**: Preview
* **Result**: **FAIL**
* **Exact Error**:
  ```
  Error: Command "npm install pnpm@10.5.2 && npx pnpm install" exited with 1
  ```
* **Post-Attempt Action**: Updated engines to `node: ">=20.17.0"` (Commit `d6117d4`) to widen compatibility.

### Attempt 9: Widen Compatibility Fallback
* **Date/Time**: 2026-06-11
* **Trigger Method**: Git Push / Manual Redeploy of Commit `d6117d4` with install command `npm install pnpm@10.5.2 && npx pnpm install` under Node `22.x`.
* **Source Commit**: `d6117d4`
* **Vercel Environment**: Preview
* **Result**: **FAIL**
* **Exact Error**:
  ```
  Error: Command "npm install pnpm@10.5.2 && npx pnpm install" exited with 1
  ```

---

## 5. Local Package Manager Diagnostics
* **package.json pin**: `"packageManager": "pnpm@11.5.2"`
* **Local pnpm version**: `11.5.2`
* **Local Node version**: `v24.11.1`
* **pnpm-lock.yaml state**: Valid YAML file, no conflicts or duplicates.
* **YAML Structure**: Multi-document stream (2 YAML documents separated by `---` syntax, where Document 1 holds packageManager settings and Document 2 lists dependency maps).
* **pnpm-lock.yaml regeneration**: Has not been regenerated locally.
* **Local Install Status**: **PASS** (`pnpm install --frozen-lockfile` runs successfully locally in less than 2 seconds).
* **Local Build Status**: **PASS** (`pnpm run build` compiles Astro routes into `dist` successfully).
* **Environment Differences**: Local installs compile flawlessly under Node 24.11.1 and pnpm 11.5.2, whereas Vercel is limited by containerized Node engine levels, user permissions, and default pnpm versions.

---

## 6. Repository File Evidence

### `package.json`
```json
{
  "name": "presura-website",
  "private": true,
  "version": "1.0.0",
  "packageManager": "pnpm@11.5.2",
  "type": "module",
  "engines": {
    "node": ">=20.17.0"
  },
  "dependencies": {
    "@astrojs/vercel": "^10.0.8",
    "@lucide/astro": "^1.17.0",
    "@sanity/client": "^7.22.1",
    "@sanity/image-url": "^2.1.1",
    "@supabase/supabase-js": "^2.108.0",
    "astro": "^6.4.4",
    "resend": "^6.12.4",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "sanity": "^5.30.0"
  }
}
```

### `pnpm-lock.yaml` (First 35 lines)
```yaml
---
lockfileVersion: '9.0'

importers:

  .:
    configDependencies: {}
    packageManagerDependencies:
      '@pnpm/exe':
        specifier: ^11.5.2
        version: 11.5.2
      pnpm:
        specifier: ^11.5.2
        version: 11.5.2

packages:

  '@pnpm/exe@11.5.2':
    resolution: {integrity: sha512-4UFnP2rhNu1xjAQ+I1GdIUUEtCJuTYJlbpiWSFA4POAID3Lpt+2vrjImWO7eOJ7iCY3vpc4TFe2IW3sAolW4Kg==}
    hasBin: true
```

### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
```

* **Other Configuration Files**:
  * `vercel.json`: **NOT PRESENT**
  * `.npmrc`: **NOT PRESENT**
  * `.node-version`: **NOT PRESENT**
  * `.nvmrc`: **NOT PRESENT**

---

## 7. Hypotheses and Evidence

### H1: `pnpm-lock.yaml` is corrupted in GitHub/Vercel source
* **Description**: The lockfile committed to git is malformed or corrupted, preventing parsing on remote builds.
* **Evidence FOR**: Vercel logs state: `The lockfile at "/vercel/path0/pnpm-lock.yaml" is broken: expected a single document in the stream, but found more`.
* **Evidence AGAINST**: The local environment parses and installs from the lockfile cleanly. It is valid multi-document YAML.
* **Verification**: Run `pnpm install` in a completely clean local clone.
* **Likely Fix**: Downgrade lockfile format to v6 (compatible with v8/v9 pnpm).
* **Risk**: Low.

### H2: `pnpm-lock.yaml` was repaired locally but not pushed, or Vercel still builds old commit/cache
* **Description**: Local changes were not pushed, or Vercel is building from cache.
* **Evidence FOR**: Git status shows remote tracking branch is synchronized, but Vercel caching may preserve the old lockfile.
* **Evidence AGAINST**: CLI logs and Dashboard commit references match local git HEAD exactly.
* **Verification**: Deploy with "Redeploy -> Clear Cache" selected on Vercel.
* **Likely Fix**: Clear Vercel build cache.
* **Risk**: Low.

### H3: Vercel uses incompatible Node/pnpm/Corepack version
* **Description**: The Vercel build runner defaults to an older pnpm version (v8/v9) that is incapable of parsing lockfileVersion 9.0.
* **Evidence FOR**: Multi-document YAML is not supported by pnpm v8/v9, resulting in the parsing crash.
* **Evidence AGAINST**: None.
* **Verification**: Check pnpm execution logs on Vercel.
* **Likely Fix**: Force Vercel to install packages using the matching pnpm v11 or v10 version, or downgrade the local lockfile format.
* **Risk**: Medium.

### H4: `packageManager` field is missing or mismatched
* **Description**: The lack of or mismatch in the `"packageManager"` field in `package.json` prevents Vercel from using the correct installer version.
* **Evidence FOR**: Initially the field was missing. Later, pinning it to `"pnpm@11.5.2"` crashed on Node 22 because `pnpm@11` requires Node `>=22.13.0` which Vercel doesn't run (`22.12.0`).
* **Evidence AGAINST**: None.
* **Verification**: Inspect the `packageManager` version alongside Vercel's Node environment.
* **Likely Fix**: Downgrade the pinned `packageManager` to `pnpm@10.5.2` in `package.json` (which runs on Node `>=20.17.0`).
* **Risk**: Low.

### H5: Vercel install command should use `corepack enable` / pnpm version pin
* **Description**: Setting `ENABLE_COREPACK=1` is ignored or bypassed by Vercel's internal scripts.
* **Evidence FOR**: Build logs show lockfile errors despite having the env var enabled, indicating the global pnpm v8/v9 runner was still invoked.
* **Evidence AGAINST**: None.
* **Verification**: Inspect build setup phase outputs.
* **Likely Fix**: Override Vercel's Install Command to explicitly run corepack configuration or install the pinned version.
* **Risk**: Medium.

### H6: Vercel cache or previous broken lockfile state is interfering
* **Description**: Vercel cache retains broken dependency trees, masking the effects of `package.json` engine changes.
* **Evidence FOR**: Successive builds failed with same errors after config updates.
* **Evidence AGAINST**: Some builds failed with explicit engine-check errors.
* **Verification**: Deploy with a cleared build cache.
* **Likely Fix**: Clear cache during deployment trigger.
* **Risk**: Low.

### H7: GitHub default branch / production branch confusion caused wrong commit to deploy
* **Description**: Vercel is pulling commits from `main` instead of the approved `demo-visual-polish` branch.
* **Evidence FOR**: If Vercel project integrations are set to automatically deploy `main` on git push.
* **Evidence AGAINST**: CLI deployments explicitly target the local active branch.
* **Verification**: Audit the Vercel deployment metadata for commit hash `d6117d4`.
* **Likely Fix**: Ensure Vercel project targets `demo-visual-polish`.
* **Risk**: Low.

### H8: Root directory or monorepo setting is wrong
* **Description**: Vercel is treating the repository as a monorepo workspace due to the presence of `pnpm-workspace.yaml`.
* **Evidence FOR**: `pnpm-workspace.yaml` exists in root, which might trigger Vercel monorepo logic.
* **Evidence AGAINST**: The project is structured with a single root `package.json`.
* **Verification**: Check Vercel project settings for "Root Directory".
* **Likely Fix**: Set Root Directory to `.` and ensure monorepo overrides are disabled.
* **Risk**: Low.

### H9: Registry fetch `ERR_INVALID_THIS` is secondary to broken lockfile vs separate Vercel/pnpm bug
* **Description**: The fetch crash occurs only because the lockfile is ignored, forcing a full network fetch under Node 24 which triggers a known Node fetch utility bug.
* **Evidence FOR**: The fetch regression only occurs during resolution of `@tailwindcss/vite` when pnpm falls back to fetch registry metadata after ignoring the "broken" lockfile.
* **Evidence AGAINST**: If the fetch bug is a general Node 24 container issue, it could happen regardless.
* **Verification**: Build with a single-document lockfile on Node 22.
* **Likely Fix**: Fix the lockfile parser blocker first, allowing pnpm to install from the lockfile without triggering fallbacks.
* **Risk**: Medium.

### H10: Astro/Vercel adapter or output settings conflict
* **Description**: Configuration in `astro.config.mjs` prevents successful compilation.
* **Evidence FOR**: Astro is configured with `output: 'server'` and the `@astrojs/vercel` adapter, which requires Node and server environments to be aligned.
* **Evidence AGAINST**: Local `pnpm run build` succeeds completely, producing clean output.
* **Verification**: Resolve the install phase first to check if compile phase passes.
* **Likely Fix**: Verify Astro/Vercel runtime environment matching.
* **Risk**: Low.

---

## 8. Safe Fix Options for Stronger Model

### Option A: Downgrade local pnpm version and lockfile to v9
* **Objective**: Generate a single-document `pnpm-lock.yaml` (format v6) that is compatible with Vercel's default parser.
* **Files/Settings Affected**: `package.json`, `pnpm-lock.yaml`.
* **Commands**:
  ```bash
  npm install -g pnpm@9.15.4
  pnpm install
  ```
* **Risks**: Downgrading might cause dependency version drift.
* **Verification Required**: Verify local build and check if the lockfile starts with `lockfileVersion: '6.0'` without `---` markers.
* **Human Approval Required**: YES.

### Option B: Add/adjust `packageManager` and/or `.npmrc` settings
* **Objective**: Force Vercel to use pnpm v10 or v11 via packageManager declaration in `package.json` and configure `.npmrc` to allow package lifecycles.
* **Files/Settings Affected**: `package.json`, `.npmrc`.
* **Commands**: Create `.npmrc` with `manage-package-manager-lifecycles=true`.
* **Risks**: Low.
* **Verification Required**: Deploy and verify package manager installation phase.
* **Human Approval Required**: YES.

### Option C: Set Vercel Node version explicitly
* **Objective**: Set Node.js Version to `22.x` on Vercel Dashboard and ensure `package.json` engines are compatible.
* **Files/Settings Affected**: Vercel Dashboard project settings.
* **Commands**: None (performed in dashboard).
* **Risks**: Low.
* **Verification Required**: Deploy and verify Node version logs.
* **Human Approval Required**: YES.

### Option D: Clear Vercel build cache and redeploy same commit
* **Objective**: Ensure that a clean lockfile state is built from scratch.
* **Files/Settings Affected**: None.
* **Commands**: Trigger redeploy with "Clear Cache" in Vercel.
* **Risks**: None.
* **Verification Required**: Monitor installation log.
* **Human Approval Required**: YES.

### Option E: Recreate Vercel project
* **Objective**: Clean slate configuration to prevent manual setting conflicts.
* **Files/Settings Affected**: Vercel Project workspace.
* **Commands**: Create new Vercel project link.
* **Risks**: Requires linking a new project target.
* **Verification Required**: Check new project build status.
* **Human Approval Required**: YES.

### Option F: Deploy using Vercel Prebuilt
* **Objective**: Compile the project locally (`pnpm run build` & `vercel build`) and push only the prebuilt assets using the Vercel CLI, bypassing Vercel cloud installation completely.
* **Files/Settings Affected**: Local build outputs (`.vercel/output`).
* **Commands**:
  ```bash
  pnpm run build
  vercel build
  vercel deploy --prebuilt
  ```
* **Risks**: Requires Vercel CLI authentication and manual deploy scripts. Bypasses git-push triggers.
* **Verification Required**: Confirm visual state at deployed URL.
* **Human Approval Required**: YES.

### Option G: Test in clean local clone
* **Objective**: Verify that the repository is deployable in an isolated environment.
* **Files/Settings Affected**: Clean clone location.
* **Commands**:
  ```bash
  git clone https://github.com/Dasa1/presura_v2.git
  git checkout demo-visual-polish
  pnpm install
  ```
* **Risks**: None.
* **Verification Required**: Check if install and build pass.
* **Human Approval Required**: YES.

---

## 9. Recommended Next Step
"Create a clean clone of origin/demo-visual-polish, validate pnpm-lock.yaml parsing and frozen install, repair lockfile/packageManager if needed, commit/push a single deployment-compatibility fix, then redeploy on Vercel with cleared cache."

---

## 10. What the Stronger Model Needs
1. This Forensic Report ([vercel-deployment-forensic-report.md](file:///d:/Presura_v2/build-notes/vercel-deployment-forensic-report.md)).
2. Staging Verification Log ([VERCEL-PREVIEW-READY.md](file:///d:/Presura_v2/verification/VERCEL-PREVIEW-READY.md)).
3. Full Vercel error logs from recent dashboard builds.
4. Active [package.json](file:///d:/Presura_v2/package.json) and [pnpm-lock.yaml](file:///d:/Presura_v2/pnpm-lock.yaml) contents.
5. Active [astro.config.mjs](file:///d:/Presura_v2/astro.config.mjs).
6. Local git status and git log outputs.
7. Workspace scope parameters (`dasodasan-1868` on `presura_v2` project).

---

## 11. Human Decision Points
* Approve creating a clean local clone for diagnostic verification.
* Approve downgrading local pnpm/lockfile to v9 (lockfileVersion `6.0`) if necessary.
* Approve committing/pushing a single lockfile/package compatibility fix to `demo-visual-polish`.
* Approve triggering Vercel CLI or dashboard redeploys with cleared build cache.
* Approve recreating the Vercel project link if settings are corrupted.
* Confirm that no secrets (Supabase, Resend, Turnstile, Sanity write tokens) should be configured during preview deployment.

---

## 12. Verification Requirements Before Marking PASS
To mark `VERCEL-PREVIEW-READY.md` as **PASS**, the following must be verified:
- [ ] Clean clone package installation passes locally.
- [ ] Local `pnpm install --frozen-lockfile` runs successfully.
- [ ] Local `pnpm run build` runs successfully.
- [ ] Vercel install command executes without parsing errors.
- [ ] Vercel build command executes successfully.
- [ ] Deployed staging URL loads correctly.
- [ ] No indexing meta tags are present (`<meta name="robots" content="noindex, nofollow" />` checked).
- [ ] Contact form is disabled and staging warning notice is visible.
- [ ] No live secrets are active (Supabase, Resend, etc. use mock or sandbox routing).
- [ ] Visual design elements (sticky header, carousels, locations routing) verified on the live preview URL.

---

## 13. Security and Privacy Notes
* **Secrets**: No API keys, passwords, database URLs, or secret token values are recorded in this document or in the repository.
* **Environment Variable Names**: Only public variables (e.g. `ENABLE_COREPACK`) are named.
* **Production Boundary**: No production DNS configurations, domain mappings (like `presura.hr`), or indexing parameters are authorized.

---

## 14. Final Status
* **Vercel Preview**: **NOT VERIFIED**
* **Vercel Deployment**: **BLOCKED**
* **Public Launch**: **NOT APPROVED**
* **Recommended Next Action**: Create a clean clone of origin/demo-visual-polish, validate pnpm-lock.yaml parsing and frozen install, repair lockfile/packageManager if needed, commit/push a single deployment-compatibility fix, then redeploy on Vercel with cleared cache.
* **Ready for Stronger-Model Investigation**: **YES**
