# Build Notes: Vercel Preview Deployment

- **Date:** 2026-06-11
- **Target Branch**: `demo-visual-polish`
- **Source Commit**: `3a79e51`
- **Deployment Status**: **FAIL (IN PROGRESS)** (Vercel CLI connection established, but first deployment failed with pnpm install exit code 1. Adding packageManager compatibility fix in package.json to resolve Vercel pnpm detection issue.)

## Build Strategy & Configuration
To configure Vercel Preview safely in the future:
* Project must be linked to the Git repository.
* Branch `demo-visual-polish` must be selected for preview builds.
* Build settings must use `Astro` project configurations.
* No live database keys or API credentials should be added to prevent live lead leakage.

## Current Log / Issue
Deploying to `dasas-projects-60f4ac4f/presura_v2` failed because `pnpm install` exited with 1 on Vercel. 
Vercel's build container failed to automatically detect the local package manager configuration.
We resolved this by adding `"packageManager": "pnpm@11.5.2"` to the root of [package.json](file:///d:/Presura_v2/package.json), matching the version of pnpm on our local system.
All QA verification checks on the live URL are currently marked as **NOT VERIFIED** pending a redeploy.
