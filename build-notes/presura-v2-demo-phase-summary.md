# Project Summary — Presura v2 Demo Phase

This document serves as the canonical summary of the project state at the end of the demo phase. It provides next-chat continuity context for developers/agents resuming work.

---

## 1. Current State Meta
- **Current Date**: 2026-06-12
- **Repository**: `d:\Presura_v2`
- **Branches**:
  - `main`: Stable MVP/handover baseline (tagged `local-mvp-handover-complete`).
  - `demo-visual-polish`: Owner-facing visual demo branch (current active branch).
- **Important Commits**:
  - `3470c47`: Core pnpm compatibility deployment configuration fix.
  - `24cce0c96dd736899c4e8928ca293837a4cda598`: Latest documentation updates before final retrospective files.

---

## 2. Vercel Preview Status
- **Vercel Preview Deployment URL**: [https://presurav2-f74xx7xy7-dasas-projects-60f4ac4f.vercel.app](https://presurav2-f74xx7xy7-dasas-projects-60f4ac4f.vercel.app)
- **Visual Staging State**: **PASS (Needs Redeploy)** (Local build verified; Vercel preview needs deployment update to load route fixes for `/usluge/[slug]` and `/problemi/[slug]`).

---

## 3. What Is Done
- Fixed runtime blockers on `/usluge/[slug]` and `/problemi/[slug]` by adding `export const prerender = true` and robust undefined guards to redirect to `/454` or `/404` safely.
- Solved package manager lockfile compatibility blocker (downgraded dependency parameters to native pnpm v9 support).
- Formulated staging-protected deployment to Vercel Preview.
- Conducted full manual user QA testing on layout structure, location details, headers, scroll effects, and visual overlays.
- Ensured form mock states are active and inputs remain disabled (`DEMO-DISABLED`).
- Retained robots meta tag (`noindex, nofollow`) indexation blocks.
- Kept JSON-LD structured schemas disabled (`schemaEnabled: false`).
- Documented full phase retrospective, checklist framework, and next-phase implementation plans.


---

## 4. What Is Not Done
- Verification of live form submit routing (Turnstile/Resend API tokens).
- Migration to apex production domains.
- Resolution of artificial 3G network throttling mobile performance limits.
- SEO and automated Lighthouse audits.
- Insertion of real customer NAP/legal details.

---

## 5. Public Launch Status
- **Status**: **NOT APPROVED**
- Public launch remains blocked until final post-feedback implementation passes have been completed and verified.

---

## 6. Known Limitations
- Elevated LCP timing under simulated/artificial 3G throttling (deferred to P1).
- Mock form submission behavior (`DEMO-DISABLED` banner).
- Search indexation blocked (`noindex`).
- Structured data disabled.
- Placeholder physical address, email, and phone contact data.

---

## 7. Open Owner Decisions
- Visual layout satisfaction verification.
- Real NAP, OIB, IBAN, and Operating Hours data supply.
- Authorization and evidence collection for brand/certification claims (e.g. Bosch, Vaillant).
- Pricing data updates.
- Lead routing method choice (inbox routing vs database collection).

---

## 8. Next Recommended Workflow
1. Provide the Vercel Preview URL to the owner for intake.
2. Ingest feedback into `docs/owner-feedback-intake-checklist.md`.
3. Classify feedback using categories in `implementation-plans/post-demo-owner-feedback-plan.md`.
4. Create the final approved change list.
5. Obtain human validation before beginning coding tasks.

---

## 9. Do Not Do Without Approval
- Do NOT generate tasks or modify source files before feedback is classified.
- Do NOT configure live database links or secret tokens.
- Do NOT enable indexing or schema tags.

---

## 10. Recommended Prompt for Next Chat
When starting the next phase, provide this exact prompt to the AI coding agent:

```text
Use /build-notes/presura-v2-demo-phase-summary.md as canonical context. Continue after the owner-facing demo phase. Public launch remains NOT APPROVED. First classify owner feedback into an approved change list. Do not generate tasks until the human approves the change list.
```
