# 10 Human Approval Checklist

## Executive summary

Approve whether the **technical-service-website** project pack should move to Antigravity task generation. The Croatian scheduling SaaS project is excluded from this workflow. No Antigravity tasks should be generated until the remaining website-only decisions are approved.

## Approved workflow decisions

- DEC-001: Approved — generated packs remain separate.
- UNCLEAR-001: Approved — proceed with technical-service-website only.
- SaaS decisions, tasks, requirements, architecture, risks and roadmap items are excluded.

## Approved stack decision

The website MVP stack is approved as:

- Astro frontend
- Tailwind CSS v4 styling
- Sanity CMS for structured public content
- Supabase database for inquiry/lead storage only
- Resend for inquiry/contact email notifications
- Vercel deployment
- Cloudflare Turnstile or equivalent for form anti-spam
- Privacy-friendly analytics first

Payload CMS is no longer the implementation recommendation for this MVP.

## Human approval table — remaining decisions only

| Decision ID | Decision | Current recommendation | Alternatives | Risk if wrong | Approval |
|---|---|---|---|---|---|
| WEB-DEC-006 | Inquiry data retention | 6 months then delete/anonymize unless converted into an active business record | 12 months; email-only/no Supabase storage; longer with explicit reason | Privacy risk or operational data loss | Pending |
| WEB-DEC-008 | Analytics/privacy provider | Privacy-friendly analytics first; Consent Mode/CMP only if ads require it | GA4 + Consent Mode; no analytics in MVP; server-side later | GDPR or attribution risk | Pending |
| WEB-DEC-010 | Public NAP/contact/schema | Use placeholders until approved public business data is provided | Hardcode research values; provide corrected NAP before tasks | Wrong public data or privacy exposure | Pending |
| WEB-DEC-011 | Media/proof assets | Real work photos/proof required before launch where possible; build placeholders allowed if replaced before launch | Stock assets; placeholders through launch | Generic low-trust website | Pending |
| WEB-DEC-012 | Local page content rule | 2-3 local pages only with unique local proof | Local hub only; more local pages now | Thin/duplicated local SEO pages | Pending |
| WEB-DEC-013 | Pricing transparency | Use ranges/from-prices with caveats | No prices; fixed prices only | Lower trust or operational disputes | Pending |
| WEB-DEC-014 | Sanity admin access control posture | Least privilege, strong passwords and 2FA where available; decide if 2FA is launch-blocking | 2FA as hard blocker; 2FA as post-launch hardening if unavailable | Content compromise or exposed editor access | Pending |
| WEB-DEC-015 | Performance target policy | Numeric CWV values remain targets unless explicitly promoted to blockers | Mark specific values as hard blockers | Over-blocking launch or weak performance evidence | Pending |
| UNCLEAR-WEB-001 | Approve revised docs | Approve revised Sanity/Supabase/Resend/Vercel docs before task generation | Request another revision | Tasks inherit unapproved assumptions | Pending |

## Approved MVP scope

- Homepage with trust bar, service navigation and sticky mobile call CTA
- Up to 6 service landing pages
- Pricing/inquiry page with transparent ranges and contact form
- 2-3 problem pages
- 2-3 local landing pages with unique local proof content
- FAQ/schema, core LocalBusiness/HVACBusiness structured data
- Minimal Sanity CMS schemas for services, problems, locations, works, prices, FAQs and media
- Supabase inquiry/lead storage and Resend notification for contact forms
- Basic security, anti-spam, privacy analytics, accessibility and performance baseline

## Requirement changes applied

- REQ-PROD-003A Minimal Sanity CMS schemas for MVP = P0
- REQ-PROD-003B Editor-friendly Sanity Studio workflow = P1
- Supabase is used only for inquiry/lead storage, not public content unless explicitly approved later.
- Resend is used for form email notifications.
- Vercel is the approved deployment target.
- Numeric performance values remain targets unless explicitly approved as hard launch blockers.
- Website access control wording refers to Sanity CMS admin/editor access control, not SaaS tenant access control.

## Out-of-scope approval

- CRM integration
- mass programmatic local page generation
- A/B testing platform
- advanced configurators
- multi-client template packaging
- large blog program before real expert review
- all Croatian scheduling SaaS functionality

## P0 requirements approval

- Mobile emergency contact path works.
- Contact/inquiry form is secure, deliverable and protected by Turnstile/equivalent.
- Inquiry/contact submissions store minimal leads in Supabase.
- Resend notification path works for form submissions.
- Service/problem/location IA and minimal Sanity schemas support approved MVP pages.
- Core pages are indexable and fast enough for the emergency/mobile lead path.
- Sanity admin/editor access and tokens are not publicly exposed.
- Cookie/analytics behavior is privacy-safe by default.
- No PASS without evidence.

## Open questions that block task generation

- NEEDS HUMAN APPROVAL: Confirm inquiry data retention.
- NEEDS HUMAN APPROVAL: Confirm final analytics/privacy approach/provider.
- NEEDS HUMAN APPROVAL: Provide or approve placeholders for public business contact/NAP/schema data.
- NEEDS HUMAN APPROVAL: Confirm media/proof asset approach before launch.
- NEEDS HUMAN APPROVAL: Confirm local page content rule and pricing transparency.
- NEEDS HUMAN APPROVAL: Confirm whether Sanity 2FA is launch-blocking or hardening.
- NEEDS HUMAN APPROVAL: Confirm whether numeric performance targets remain targets only or any become hard blockers.
- NEEDS HUMAN APPROVAL: Approve revised docs before task generation.

## Suggested next step

Reply with approved website-only decisions. After approval, generate Antigravity tasks for the technical-service-website project only.
