# Build Notes — Phase 6: Webhooks & Handover

**Status:** Completed (Local Documentation and Checklist Phase)  
**Workspace Root:** `d:\Presura_v2`  
**Date:** 2026-06-10  

---

## 1. Phase Goals

This phase focuses on documenting deployment steps, setting up the Vercel and webhook schemas, compiling the final launch readiness checklist, updating all handover manuals, and registering the final verification evidence logs. 

All infrastructure provisioning tasks are strictly out-of-scope for the local workspace and are marked as **NEEDS HUMAN APPROVAL / NOT VERIFIED**.

---

## 2. Completed Actions

1. **Created Verification Logs:**
   - [/verification/TASK-010.md](file:///d:/Presura_v2/verification/TASK-010.md) — Documented Vercel environment variables classification, Sanity webhook trigger schemas, and manual deployment fallback instructions.
   - [/verification/TASK-013.md](file:///d:/Presura_v2/verification/TASK-013.md) — Documented the launch readiness checklist and recorded redacted local form submission test outcomes.
2. **Updated Verification Evidence Register:**
   - Modified [/verification/evidence-register.md](file:///d:/Presura_v2/verification/evidence-register.md) to record the status of `EV-010` (TASK-013) as PASS for documentation and checklist readiness, while preserving live system checks as `NOT VERIFIED`.
3. **Validated Local Compilation:**
   - Ran `pnpm run build` locally to verify that Astro SSR configuration compiles successfully using the Vercel serverless integration.
4. **Updated Documentation Files:**
   - Reviewed and updated the docs pack (owner manuals, troubleshoot guides, security handovers, local dev, content update guide) to match Phase 6 parameters and security constraints.

---

## 3. Deployment Configuration Checklist

The following settings are registered in local documentation for future production deployment:

* **Vercel Build Command:** `astro build`
* **Output Directory:** `dist`
* **Install Command:** `pnpm install`
* **Node.js Version:** `18.x` or `20.x`
* **Sanity Webhook Payload:**
  - **URL:** Vercel Deploy Hook URL
  - **Dataset:** `production`
  - **HTTP Method:** `POST`

---

## 4. Manual Redeployment Fallback Guide

If the automated webhook triggers fail to rebuild the site when content updates are published in Sanity Studio, editors can perform a manual rebuild:
1. Open the Vercel dashboard.
2. Select the **Presura** project.
3. Click the **Deployments** tab.
4. Locate the most recent deployment, click the vertical ellipsis, and select **Redeploy**.

---

## 5. Verification Summary

* **Local Compilation:** **PASS** (Successful build output generated locally).
* **Documentation Completeness:** **PASS** (14 doc manuals updated).
* **Live Service Verifications:** **NOT VERIFIED** (Vercel deployment, Supabase database setup, Turnstile spam filters, and Resend email validation remain unexecuted and require separate human approval).
