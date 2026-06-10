# 03 Requirements

## Requirement rules

Every important requirement has an ID. Evidence is empty until implementation verification.

## Approved MVP stack

- Frontend: Astro
- Styling: Tailwind CSS v4
- CMS for structured public content: Sanity
- Database for inquiry/lead storage only: Supabase
- Email notifications from forms: Resend
- Deployment: Vercel
- Form anti-spam: Cloudflare Turnstile or equivalent
- Analytics: privacy-friendly analytics first

Supabase is not the public content source of truth for MVP unless explicitly needed later. Public website content comes from Sanity.

| ID | Title | Priority | Description | Source from research / decision | Status | Evidence | Acceptance criteria |
|---|---|---|---|---|---|---|---|
| REQ-PROD-001 | Emergency lead path | P0 | Mobile users must be able to call from any commercial page via clear sticky CTA. | Research: UX Strategy / Conversion Strategy | PLANNED | | Tap-to-call link visible on mobile hero and sticky state; no blocking modal. |
| REQ-PROD-002 | Service/problem/location IA | P0 | Site must expose services, problems and locations as distinct SEO/content silos. | Research: Information Architecture | PLANNED | | Routes exist for homepage, services, problems, locations, pricing, works and contact. |
| REQ-PROD-003A | Minimal Sanity CMS schemas for MVP | P0 | MVP must include the minimal Sanity schemas needed to render the approved website scope: services, problems, locations, works/case studies, price items, FAQs and media references. | Human stack decision + Research: CMS and Content Model | PLANNED | | Required Sanity schemas exist; seed content can render approved MVP pages; standard public content updates do not require code changes. |
| REQ-PROD-003B | Editor-friendly Sanity Studio workflow | P1 | Sanity Studio editing should be structured, understandable and safe for non-technical editors, with clear labels, validation, preview/status where feasible and reusable content blocks where useful. | Human stack decision + Research: CMS and Content Model | PLANNED | | Editor can update service/problem/location content without touching code; advanced editing polish is not a hard launch blocker unless it blocks required MVP content publishing. |
| REQ-SEO-001 | Structured local SEO schema | P0 | Implement JSON-LD for organization/local service pages using placeholders until NAP is approved. | Research: SEO Strategy | PLANNED | | Schema validates; no unapproved personal/contact data is hardcoded. |
| REQ-PERF-001 | Performance targets and verification | P0 | MVP must target LCP <= 1.5s, CLS 0 and INP < 100ms on key pages. These numeric values are optimization targets, not automatic hard launch blockers unless explicitly approved as blockers. Launch-blocking performance issues are: missing evidence, unusably slow key pages, non-indexable rendering or severe regressions that undermine the emergency/mobile lead path. | Research: Performance Requirements | PLANNED | | Lighthouse/mobile and build evidence attached before launch; unmet numeric targets are documented as NOT VERIFIED or NEEDS FOLLOW-UP unless separately marked launch-blocking. |
| REQ-A11Y-001 | WCAG 2.2 AA baseline | P0 | UI must meet keyboard, focus, touch target, semantic and reduced-motion requirements. | Research: Accessibility Requirements | PLANNED | | Manual and automated checks show no P0 accessibility blockers. |
| REQ-SEC-001 | Form anti-abuse controls | P0 | Contact forms require server-side validation, honeypot, Cloudflare Turnstile or equivalent, rate limiting and safe errors. | Research: Security Architecture + stack decision | PLANNED | | Spam tests and rate-limit tests verified; form remains accessible. |
| REQ-PRIV-001 | Privacy-safe analytics and consent | P0 | Use privacy-friendly analytics first. Marketing/ads tags must default to denied until consent where required. Inquiry data retention must be defined. | Research: Analytics & Tracking / Security Architecture | PLANNED | | Analytics and cookie behavior verified; no marketing cookies before consent where applicable. |
| REQ-FORM-001 | Inquiry lead storage in Supabase | P0 | Inquiry/contact submissions must be stored in Supabase with minimal fields, retention controls and scoped service credentials. Supabase is for inquiry/lead storage, not public CMS content. | Human stack decision | PLANNED | | Successful form submission creates a Supabase lead record with validated fields; logs do not expose sensitive message content. |
| REQ-FORM-002 | Resend email notifications | P0 | Inquiry/contact submissions must trigger Resend email notification to approved business recipient(s), with safe templates and no secret exposure. | Human stack decision | PLANNED | | Test submission produces a Resend-delivered email; failure path is logged safely and does not lose Supabase-stored lead. |
| REQ-UI-001 | Trustworthy technical visual language | P1 | UI uses professional service aesthetic, real work imagery, trust bar and restrained motion. | Research: UI Direction / Design System | PLANNED | | Design system tokens and core components applied across pages. |
| REQ-DEVOPS-001 | Vercel deployment with Sanity webhooks | P1 | Astro front-end deploys to Vercel and rebuilds/revalidates from Sanity webhook where required. | Human stack decision + Research: Architecture Decision Record | PLANNED | | Vercel deployment is documented; Sanity content update triggers rebuild/revalidation or documented deploy process. |
| REQ-TEST-001 | No PASS without evidence | P0 | Launch checks require evidence for build, forms, SEO, a11y, performance and privacy. | AI Process Pack | PLANNED | | Verification docs contain command output/screenshots or status NOT VERIFIED. |

## P0 requirements needing approval

- Mobile emergency contact path works.
- Contact/inquiry form is secure, deliverable, Turnstile/equivalent protected and stores leads in Supabase.
- Resend email notification path works for inquiry/contact forms.
- Core pages render fast enough for the emergency/mobile lead path and remain indexable; numeric CWV values are targets unless explicitly promoted to launch blockers.
- Sanity Studio and Sanity tokens cannot expose admin/content management capabilities publicly.
- Cookie/analytics behavior is privacy-safe by default.

APPROVED: Website stack is Astro + Tailwind CSS v4 + Sanity + Supabase for leads + Resend + Vercel + Turnstile/equivalent + privacy-friendly analytics first.

APPROVED: SaaS requirements are excluded from this workflow.
