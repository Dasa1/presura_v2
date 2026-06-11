# Vercel Preview Readiness Plan

## 1. Preview Purpose
The Vercel Preview deployment is an **owner-facing demo only**. It is intended strictly for internal testing, validation of the visual systems, and user experience approval. It does not represent a public launch of the website.

## 2. Source Branch
* **Target Branch**: `origin/demo-visual-polish` (Commit `3a79e51`)
* **Rule**: Do not merge to or deploy from the `main` branch for this visual demo.

## 3. Safety Requirements
The Vercel Preview environment must preserve all demo safety boundaries:
* **Search Engine Visibility**: Set to `noindex, nofollow` to prevent crawling.
* **Schema Markup**: `schemaEnabled` must be set to `false`.
* **Lead Form**: Must remain completely disabled. No database records can be created, and no email notifications can be sent.
* **Integrations**: Zero live integrations (Supabase, Resend, Turnstile) can be connected.
* **Data Integrity**: No real NAP (Name, Address, Phone), real customer reviews, partner/manufacturer badges (Vaillant, Bosch, etc.), or claims of certified/authorized status can be exposed.

## 4. Environment Strategy
To ensure the build succeeds in the cloud while retaining sandbox isolation, we classify environment variables as follows:

| Environment Variable | Classification | Purpose in Preview | Value Handling / Strategy |
| :--- | :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | Conditional (Build/Runtime) | Identifies the environment as staging/preview. Used by `InquiryForm.astro` to verify staging status. | The final Vercel preview URL is not known beforehand. Before deployment, inspect code/env requirements to determine whether `PUBLIC_SITE_URL` is required for the build. If required, use a safe preview/staging value only (e.g., `https://*.vercel.app` or a wildcard placeholder). Do not use the production domain under any circumstances, do not hardcode the final preview URL in source files, and confirm the preview remains `noindex/nofollow` and form-disabled after deployment. |
| `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET` | Required (Public Identifiers) | Public identifiers used to reference seed schemas and fetch mock configuration. | Provide public project IDs and dataset names if required by the existing build. Do not configure or expose any Sanity tokens through `PUBLIC_*` env vars. If a Sanity read token is ever required later, it must be server-side only and separately approved. For this preview, prefer local/static/mock/seed content. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Optional / Conditional | Optional unless the build fails to compile without it. Captcha rendering utility. | Turnstile is optional for the preview unless the build explicitly requires a public site key to compile. Since the preview form remains disabled, Turnstile should not be treated as live anti-abuse verification. If a key is required to render layout safely, use a documented Cloudflare test key (e.g., `1x00000000000000000000AA`), but do not enable live verification. |
| `SUPABASE_URL` / `SUPABASE_ANON_KEY` | Staging / Disabled | Not used in preview. Form remains disabled. | Do not configure live Supabase variables. Do not use dummy values that could mask incorrect live behavior unless the build fails without them. Missing server-side integration envs should fail safe and keep the form disabled. |
| `RESEND_API_KEY` | Production-only | Not used in preview. | Do not configure. Missing integration envs should fail safe. |

> [!WARNING]
> No production secrets, live write access tokens, or private keys may be configured or exposed in the Vercel project settings.

## 5. Lead Form Behavior
The form in [InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) will run under staging rules based on the `PUBLIC_SITE_URL` check.
* **Visible Notice**: The following warning banner must be shown on the preview site:
  > **PROBNI RAD:** Sustav radi u testnom načinu. Slanje upita je onemogućeno i podaci se ne spremaju u bazu.
* **Execution Block**: Input fields, buttons, and form submission scripts are hard-disabled. No mock success state or database write simulation should occur.

## 6. Robots and Schema Controls
* **Robots Meta Tag**: `<meta name="robots" content="noindex, nofollow" />` must be injected into all HTML headers.
* **Structured Data**: The schema generation flags must disable rendering of `LocalBusiness`, `HVACBusiness`, or service-specific structured markups, ensuring search bots do not index dummy contact values.

## 7. Deployment Boundaries
The following restrictions are strictly enforced:
* **No Custom Domains**: Do not assign `presura.hr` or any live domain to the Vercel project.
* **No Production Promotions**: The deployment must not be promoted to the production alias.
* **No DNS/Robots Alterations**: Do not change DNS records or remove search index blocks.
* **No Live Connections**: Do not enable live databases, live email APIs, or live payment channels.

## 8. Vercel Preview Setup Steps
Once visual checks are completed locally and approval is granted, follow these exact manual steps:
1. **GitHub Connection**: Verify that the GitHub repository is connected to the Vercel organization.
2. **Project Setup**: Create a new Vercel project referencing the repository.
3. **Branch Selection**: Configure the build settings to deploy the `demo-visual-polish` branch as the preview source.
4. **Build settings**: Select "Astro" as the framework preset. Build command should default to `npm run build` or `pnpm run build`.
5. **Environment Configuration**: Input only the safe preview env variables outlined in Section 4.
6. **Trigger Build**: Trigger the Vercel preview deployment.
7. **Collect URL**: Save the generated Vercel preview URL (`https://presura-web-*.vercel.app`).
8. **Staging QA**: Run the visual QA checklist on the live preview link.

## 9. Preview QA Checklist
Verify each of the following components on the active Vercel preview URL:
- [ ] **Homepage Layout**: Hero overlay, CTA button state, process card alignments, footer sections.
- [ ] **Services snap-scroll**: Left/right scroll controls, card widths, swipe behavior.
- [ ] **Problems snap-scroll**: Symptoms badge, recommendations visibility, snap-scroll peek indicators.
- [ ] **Locations detail pages**: Verify `/lokacije/osijek/`, `/lokacije/bilje/`, and `/lokacije/cepin/` render without dynamic route crash.
- [ ] **Contact form state**: Confirm form elements are disabled and the banner warning notice is displayed.
- [ ] **Data Check**: Confirm no real telephone numbers, addresses, emails, or completed project stories are displayed.
- [ ] **Header Sticky Behavior**: Scroll up/down to confirm the header is persistently sticky at the top with a smooth shadow toggle.
- [ ] **SEO / Indexing**: Inspect source code to verify `noindex, nofollow` exists.
- [ ] **Console check**: Verify console log is clear of database connection errors and no lead submissions are captured in network tab.

## 10. Evidence Plan
All future validation results and screenshot confirmations must be saved inside:
* **Staging log**: [verification/VERCEL-PREVIEW-READY.md](file:///d:/Presura_v2/verification/VERCEL-PREVIEW-READY.md)
* **Screenshots**: `verification/screenshots/preview/` directory
* **Build details**: [build-notes/vercel-preview-demo.md](file:///d:/Presura_v2/build-notes/vercel-preview-demo.md)

### Specific Future Evidence Requirements:
Before this task can be marked as verified, the following evidence files must be saved under the designated locations:
1. **Noindex/Nofollow Verification**: Screenshot showing the `<meta name="robots" content="noindex, nofollow" />` tag inside the page source or browser DevTools Elements panel.
2. **Form Isolation**: Screenshot showing the disabled form fields, disabled submit button, and the staging warning banner visible on the `/kontakt` page.
3. **Network Request Log**: Screenshot of the browser DevTools Network tab during form interaction, proving that no lead POST requests are sent, database writes are blocked, and no live APIs are called.
4. **Locations Rendering**: Screenshots of `/lokacije/osijek`, `/lokacije/bilje`, and `/lokacije/cepin` dynamic detail pages rendering successfully without crashes.
5. **Layout & UX**: Screenshot of the sticky header resting at the bottom of the landing page to verify it stays sticky and visible.
6. **Build Logs**: Exported build log file or compilation screenshot demonstrating that the production build succeeded in the Vercel dashboard.

> [!NOTE]
> The verification status will remain **NOT VERIFIED** until the preview URL is live and all specified QA evidence has been gathered and saved.

## 11. Human Approval Gates
Explicit human developer/owner approval is required before initiating:
1. Connecting the repository to Vercel.
2. Saving environment variables in the Vercel UI.
3. Launching the preview build.
4. Sharing the preview URL outside the core development team.
5. Activating live databases/integrations.
6. Enabling public indexing or schemas.
7. Attempting production launch.

## 12. Risk Register

| Risk Event | Severity | Mitigation Strategy |
| :--- | :--- | :--- |
| **Placeholder exposure** | Low | Header, footers, and contact cards utilize clearly designated placeholder labels (e.g. `PHONE_PLACEHOLDER`). |
| **Form perceived as live** | Medium | The disclaimer banner is visually styled with high-contrast amber alert blocks, and inputs are locked out. |
| **Build failure due to missing env** | Medium | Classify environment variables clearly. Keep the read-only CMS config active for preview. |
| **Robots index block missed** | High | Hardcode `noindex, nofollow` meta tags directly inside layout headers to ensure they cannot be dynamically disabled. |
| **Vercel auto-deploy on push** | Medium | Disable auto-deployments for non-production branches in Vercel settings if push rates are high, or restrict build concurrency. |

## 13. Final Recommendation
Ready for human review. Do not deploy until explicit approval: APPROVED TO PREPARE VERCEL PREVIEW DEMO.
