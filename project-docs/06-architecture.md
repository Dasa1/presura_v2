# 06 Architecture

## Recommended stack

Approved MVP stack:

- Astro for the frontend.
- Tailwind CSS v4 for styling.
- Sanity as the CMS for structured public content.
- Supabase as the database for inquiry/lead storage only.
- Resend for email notifications from inquiry/contact forms.
- Vercel as the deployment target.
- Cloudflare Turnstile or equivalent for form anti-spam.
- Privacy-friendly analytics first; Consent Mode/CMP only if ads or marketing tags require it.

Supabase is not the source of truth for public website content in MVP. Sanity owns public content; Supabase stores operational inquiry/lead records only.

## Architecture decisions

| Decision | Recommendation | Rationale |
|---|---|---|
| Rendering | Astro SSG/edge-first on Vercel | Service pages are mostly static and performance/SEO critical. |
| CMS | Sanity | Matches existing experience; supports structured content, Studio editing workflow and headless content delivery. |
| Public content data source | Sanity Content Lake/API | Keeps marketing/SEO content separate from private inquiry records. |
| Lead storage | Supabase | Fits existing experience and provides a simple PostgreSQL-backed store for validated inquiry/contact submissions. |
| Email | Resend | Fits existing experience and provides a clear transactional email path for form notifications. |
| Styling | Tailwind CSS v4 + component variants | Scalable, tokenized, predictable design system. |
| Forms | Astro/Vercel server endpoint with validation, honeypot, Turnstile/equivalent, rate limit, Supabase insert and Resend notification | Protects lead channel while preserving accessible conversion flow. |
| Deployment | Vercel | Approved deployment target; supports Astro hosting, environment variables and deploy/webhook workflows. |
| Analytics | Privacy-friendly analytics first | Reduces GDPR/cookie risk while preserving basic product/marketing visibility. |

## Runtime flow

1. Public pages are generated/rendered by Astro from Sanity content.
2. Sanity stores services, problems, locations, works/case studies, price items, FAQs and media references.
3. Contact/inquiry forms submit to a server endpoint.
4. The server endpoint validates input, checks honeypot/Turnstile/equivalent, rate-limits abuse and safely writes the lead to Supabase.
5. After successful storage, the endpoint sends a Resend email notification to approved business recipient(s).
6. Vercel hosts the production site and stores required environment variables/secrets.
7. Sanity webhooks trigger rebuild/revalidation where needed.

## Security boundaries

- Sanity is for public CMS content and editor/admin access only.
- Supabase is for inquiry/lead records and must not be used for public content unless explicitly approved later.
- Resend is for transactional form notifications only.
- Server-only tokens for Sanity, Supabase and Resend must never be exposed to browser code.
- CMS admin/editor access control means Sanity Studio permissions, least privilege, strong passwords and 2FA where available.

## Performance target policy

LCP <= 1.5s, CLS 0 and INP < 100ms are target benchmarks for implementation and verification. They are not automatic hard launch blockers unless explicitly approved as such. Missing performance evidence, non-indexable pages or severe mobile/emergency-path regressions remain launch blockers.

## ASSUMPTION

The approved stack reflects existing user experience with Sanity, Supabase, Resend and Vercel and is preferred over the previous Payload recommendation for MVP delivery speed.

## SCOPE RISK

Programmatic local page generation, A/B testing, advanced configurators, multi-client template packaging, CRM integration and a large blog program can overexpand MVP; keep all outside MVP.

## Excluded project boundary

The Croatian scheduling SaaS project is excluded. Do not include SaaS architecture, tenant model, employee data model, scheduling rules, roadmap items or task assumptions in this website project.
