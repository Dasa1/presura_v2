# Presura v2 Demo Retrospective

- **Date**: 2026-06-12
- **Project**: Presura v2 Technical-Service Website
- **Phase**: Demo Visual Polish / Handover Ready
- **Status**: **COMPLETED & READY FOR REVIEW**
- **Public Launch Status**: **NOT APPROVED**

---

## 1. Executive Summary
This retrospective document captures the lessons learned, achievements, and friction points experienced during the Presura v2 demo deployment phase on the `demo-visual-polish` branch. The main objective was to make the baseline MVP codebase ready for an owner-facing visual review on a Vercel preview environment. The build issues have been resolved, manual QA checks have passed, and documentation has been updated to prepare for the owner-feedback ingestion phase.

## 2. Project Context
The Presura v2 project is a technical-service website built with Astro, Tailwind CSS, and Sanity. The workspace is structured to run server-side rendering with dynamic routes while preserving zero-JS client delivery. The project is currently transitioning from a completed developer handover stage (`main` branch baseline) to owner-facing visual evaluation (`demo-visual-polish` branch).

## 3. Demo Phase Scope
The demo phase scope was strictly defined to:
- Establish a working Vercel Preview deployment of the visual layout.
- Maintain form submission disabling (`DEMO-DISABLED` state).
- Disable live credentials, integrations, and indexing features (`noindex, nofollow`).
- Conduct basic manual testing of route navigation, responsive layout rendering, and sticky header functionality.
- Block public indexing, custom domain mappings, and live service configurations.

## 4. What Was Completed
- Resolved package manager version mismatches (downgraded lockfile and workspace format compatibility from pnpm v11 to v9).
- Succeeded in building the application (`pnpm run build`) and deploying it to Vercel Preview.
- Restored code changes to the baseline, ensuring no unauthorized source code, UI, or content modifications were committed.
- Updated QA status tables, mobile loading diagnostics logs, and limitation records.

## 5. What Went Well
- **Deployment Infrastructure Resolution:** Restructuring the lockfile to align with Vercel's native pnpm v9 environment resolved build issues.
- **Zero JS Delivery Preservation:** The bundle compilation confirmed that no client-side JavaScript overhead was introduced.
- **QA Logging Consistency:** Clean separation between verification logs and implementation plans allowed the project state to remain trackable.

## 6. What Did Not Go Smoothly
- **Lockfile Format Mismatches:** Initial build failures on Vercel occurred due to multi-document YAML parser errors, highlighting mismatch sensitivities between developer runtimes and deployment platforms.
- **Throttling Latency Latent Issues:** Simulating 3G network conditions revealed slower LCP speeds for the background hero image, prompting brief code adjustments that were later deferred.

## 7. Key Technical Lessons
- **Build PASS is not Visual PASS:** Just because a static build succeeds or compiles with exit code `0` does not mean the layout renders correctly on all device viewports. Manual visual inspection remains mandatory.
- **Artificial 3G Throttling Dynamics:** Throttling is a highly useful stress test for performance diagnostics, but it is not automatically a demo blocker if standard network loading times are acceptable.
- **Noindex is Not Access Control:** Using `<meta name="robots" content="noindex, nofollow" />` reduces search engine index risks but does not protect the page from unauthorized visitors. Vercel deployment auth must be used for true access control.

## 8. Key Visual/UX Lessons
- **Visual Direction Before Polish:** The baseline visual style must be firmly established and agreed upon before implementing minor UI enhancements.
- **Targeted Layout Refinement:** Adding layout parameters (like `aspect-ratio` protection on lazy-loaded cards) is critical to prevent Cumulative Layout Shift (CLS) but must be planned systematically.

## 9. Vercel/pnpm Deployment Lessons
- **Toolchain Incompatibilities:** Platform and toolchain version variances can crash builds. We must inspect official documentation before writing code workarounds.
- **Two-Fail Rule:** If a deployment fails twice, stop immediately, inspect the environment log files, and compile a forensic analysis report rather than making blind changes.

## 10. AI Workflow Lessons
- **Explicit Agent Boundary Constraints:** Agents must never attempt OAuth authentication, device links, production custom domain configurations, DNS updates, or credential injection without explicit, documented user approvals.
- **Code Sanctity Preservation:** Code bases must remain in baseline compliance when performance patches are deferred.

## 11. Human Review Lessons
- **Screenshot Evidence Mandate:** For visual-heavy phases, review changes using screenshots or viewport videos rather than text-only confirmations.
- **Owner-Facing Demo != Public Launch:** Visual validation for a client review has lower performance/data verification requirements than a public live launch.

## 12. Security/Safety Lessons
- **Strict Environment Separation:** Live services (Supabase, Resend) must remain fully disconnected during staging.
- **Mock State Compliance:** The contact form must remain in `DEMO-DISABLED` state to prevent leakage of client test data.

## 13. Known Limitations
- Elevated LCP delays on mobile under artificial 3G throttling.
- Search indexing is disabled (`noindex`).
- Form submission endpoints are bypassed or disabled.
- Static fallback strings are active for phone numbers, emails, and physical addresses.

## 14. Public Launch Blockers
- Lacks real NAP (Name, Address, Phone) data approval.
- SEO schemas are completely disabled.
- Live APIs and form routing databases are disconnected.
- Automated Lighthouse performance metrics have not been run.

## 15. Recommendations for Next Phase
- Distribute the protected Vercel Preview URL to the owner for intake.
- Classify feedback using the `owner-feedback-intake-checklist.md`.
- Formulate a prioritized implementation plan post-review.

## 16. Process Improvements to Carry Forward
- Check package manager engines configuration on target staging environments before initializing deployment pipelines.
- Stage and verify documentation commits separate from code adjustments.

## 17. Final Demo Phase Status
- **Staging Code Base:** Stable and synchronized.
- **Visual Staging URL:** Live and functional.
- **Review Preparedness:** **READY**
