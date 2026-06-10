# 09 Implementation Roadmap

## Roadmap overview

Project: Presura technical service lead-generation website
Primary build tool: Antigravity after approval only.
Primary review tool: Codex for review, tests, refactor, hardening and production readiness.

Approved MVP stack: Astro, Tailwind CSS v4, Sanity, Supabase for inquiry/lead storage, Resend, Vercel, Cloudflare Turnstile or equivalent and privacy-friendly analytics first.

## Phases

### Phase 1: Project setup
Recommended model: Gemini 3.1 Pro low/high depending on repo/deploy complexity.
Covers: REQ-DEVOPS-001, REQ-TEST-001.
Acceptance: Astro/Tailwind project builds locally; Sanity Studio/config is scaffolded; Vercel deployment/environment plan is documented; no secrets are committed.

### Phase 2: Design system and layout
Covers: REQ-UI-001, REQ-A11Y-001.
Acceptance: core components, responsive layout, sticky mobile call CTA, focus/touch states and reduced-motion behavior are verified.

### Phase 3: Sanity schemas and content routes
Covers: REQ-PROD-002, REQ-PROD-003A, REQ-PROD-003B, REQ-SEO-001.
Acceptance: services/problems/locations/prices/FAQs/works render from Sanity seed content; schema output uses approved placeholders where NAP is not approved.

### Phase 4: Forms, Supabase, Resend, privacy and security
Covers: REQ-SEC-001, REQ-PRIV-001, REQ-FORM-001, REQ-FORM-002.
Acceptance: inquiry form validates, blocks obvious spam, verifies Turnstile/equivalent, stores minimal lead record in Supabase and sends Resend notification; failure behavior is safe and evidenced.

### Phase 5: Vercel deployment and content update flow
Covers: REQ-DEVOPS-001, REQ-PROD-003A, REQ-TEST-001.
Acceptance: Vercel preview/production deployment documented; Sanity webhook or documented manual rebuild process updates public pages; environment variables are configured securely.

### Phase 6: SEO/performance/accessibility verification
Covers: REQ-PERF-001, REQ-A11Y-001, REQ-SEO-001, REQ-TEST-001.
Acceptance: build, Lighthouse/mobile, schema, a11y, form, privacy and smoke evidence captured. Numeric CWV values remain targets unless explicitly promoted to hard launch blockers.

## Gate rules

- No implementation before Human Decision approval.
- No Antigravity tasks until website-only decisions are approved.
- No task is PASS without evidence.
- Codex hardening happens after implementation waves.
- Unverified items must be marked NOT VERIFIED.

## Explicit MVP exclusions

Do not generate implementation tasks for CRM integration, mass local page generation, A/B testing, advanced configurators, multi-client template packaging, large blog program or any Croatian scheduling SaaS capability.
