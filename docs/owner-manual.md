# Owner Manual

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / buyer / non-technical operator  
Project: technical-service-website / Presura

## 1. What this website does

The website is a lead-generation website for a local technical service business. It helps visitors understand services, trust the business, call quickly on mobile and send inquiry/contact forms.

## 2. Approved MVP capabilities

- Homepage.
- Up to 6 primary service pages.
- Pricing/inquiry page with ranges/from-prices where possible.
- 2-3 problem pages.
- 2-3 local pages only where unique local proof/value exists.
- FAQ/schema where appropriate.
- Sanity CMS for structured public content.
- Supabase inquiry storage for leads.
- Resend email notifications for form submissions.
- Turnstile/equivalent anti-spam.
- Plausible-style privacy-friendly analytics.

## 3. Not included in MVP

- CRM integration.
- Mass local page generation.
- A/B testing.
- Advanced configurators.
- Multi-client template packaging.
- Large blog program.
- SaaS/scheduling/workforce features.

## 4. Important accounts

Do not put passwords or secret values in this document.

| System | Purpose | Owner | Access method | Transfer status |
|---|---|---|---|---|
| Domain/DNS | Public website domain | NOT SPECIFIED | Invite/transfer | NOT VERIFIED |
| Vercel | Hosting and deployment | NOT SPECIFIED | Invite/team access | NOT VERIFIED |
| Sanity | CMS/editor access | NOT SPECIFIED | Invite | NOT VERIFIED |
| Supabase | Inquiry/lead storage | NOT SPECIFIED | Invite/team access | NOT VERIFIED |
| Resend | Email notifications | NOT SPECIFIED | Invite/team access | NOT VERIFIED |
| Turnstile/equivalent | Form anti-spam | NOT SPECIFIED | Invite/team access | NOT VERIFIED |
| Analytics | Privacy-friendly analytics | NOT SPECIFIED | Invite/team access | NOT VERIFIED |
| Git repository | Source code | NOT SPECIFIED | Invite/transfer | NOT VERIFIED |

## 5. Daily usage

### Check the website

- Open the homepage on mobile.
- Confirm the call/contact path is visible.
- Open at least one service page.
- Open the contact/inquiry form.

### Check leads

- Review email notifications sent by Resend.
- Review Supabase lead records only if you have approved access.
- Follow the lead-management process in `/docs/lead-management-guide.md`.

### Update content

- Use Sanity Studio.
- Follow `/docs/cms-editor-guide.md` and `/docs/content-update-guide.md`.
- Do not delete important content without developer review.

## 6. What not to do

- Do not share admin accounts.
- Do not paste passwords, API keys or tokens into Sanity content.
- Do not create duplicate local pages with only city names changed.
- Do not upload huge unoptimized images.
- Do not change DNS or deployment settings without technical support.
- Do not modify privacy/analytics settings without confirming the impact.

## 7. Handover status

- Final NAP/contact/schema values are NEEDS HUMAN APPROVAL.
- Provider accounts and owners are NOT VERIFIED.
- Implementation evidence is NOT VERIFIED until Antigravity build completes.
