# Vercel Preview Demo Notes

These notes outline the execution guidelines and configurations for deploying a temporary preview version of the website to Vercel for owner review.

## 1. Safety Boundaries & Anti-Indexing
- **No Production Deploy:** Deployments must be run strictly as preview builds. **Do not** bind the deployment to the canonical `presura.hr` domain.
- **Auto-Noindex:** Astro's `MetaTags.astro` logic will automatically detect the `*.vercel.app` preview URL and inject `<meta name="robots" content="noindex, nofollow" />`.
- **Crawler Disallow:** The `robots.txt` disallow rule is kept in place during preview testing.

## 2. Inquiry Form & API Endpoint Posture (Disabled Preview)
- **Form Visibly Disabled:** On Vercel Preview or any owner-facing demo, the inquiry form fields and submit buttons must be visually and functionally disabled.
- **No Fake Success State:** The system must **not** simulate successful real lead submission, and must **not** display a success message implying data was saved if it was not. 
- **No Log Leaks:** The preview API route must **not** write mock lead names, emails, phones, or details to console logs during owner-facing preview sessions.
- **Demo Notice Banner:** A clear, accessible notice banner must be rendered directly above the disabled form fields:
  > **PROBNI RAD:** Sustav radi u testnom načinu. Slanje upita je onemogućeno i podaci se ne spremaju u bazu.
- **Local Dev vs. Preview Distinction:** Development-only local mock behavior (which allows testing form validation locally inside `import.meta.env.DEV` conditions) is kept separate and is never activated or simulated in the owner-facing Vercel Preview environment.

## 3. Deployment Command Guidelines
- **Allowed Command (Local dry run):**
  ```bash
  pnpm run build
  ```
- **Prohibited Commands:**
  - `vercel --prod` (Prevents accidental production deployment override)
  - `vercel env add` (No uploading of real credentials during demo step)

## 4. Owner Review Checkpoint Gates
- The preview URL is shared with the owner **exclusively** to collect styling, typography, and layout feedback.
- **NEEDS HUMAN APPROVAL:** Any decision to keep or modify specific placeholder branding before live deployment.
