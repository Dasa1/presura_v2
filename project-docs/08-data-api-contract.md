# 08 Data Model + API Contract

## Data model overview

Public content source of truth: Sanity.

Operational inquiry/lead storage: Supabase.

Transactional email: Resend.

Deployment/runtime: Astro on Vercel.

Supabase is used only for inquiry/lead storage in MVP, not for public website content unless explicitly approved later.

## Sanity public content schemas

### Service
Fields: `_id`, `title`, `slug`, `shortDescription`, `longContentBlocks`, `heroMedia`, `relatedFAQs`, `seoTitle`, `seoDescription`, `schemaType`, `status`.
Relations/references: problems, locations, works, priceItems.

### Problem
Fields: `_id`, `title`, `slug`, `problemStatement`, `symptoms`, `recommendedService`, `contentBlocks`, `faq`, `seo`.

### Location
Fields: `_id`, `cityName`, `slug`, `postalCode`, `geo`, `localProofBlocks`, `relatedWorks`, `localTestimonials`.
Privacy: do not expose private customer addresses or confidential job details.

### Work / Case Study
Fields: `_id`, `title`, `service`, `location`, `beforeAfterMedia`, `description`, `date`, `publishConsentStatus`.
Privacy: publish only approved media and descriptions.

### Price Item
Fields: `_id`, `title`, `service`, `priceType`, `fromPrice`, `priceRange`, `includedItems`, `caveatText`, `status`.

### FAQ
Fields: `_id`, `question`, `answer`, `relatedService`, `relatedProblem`, `relatedLocation`, `schemaEligible`, `status`.

### Media / Asset metadata
Fields: Sanity asset reference plus `altText`, `caption`, `consentStatus`, `source`, `relatedService`, `relatedLocation` where useful.

## Supabase inquiry/lead table

### `inquiries`
Fields:
- `id`
- `created_at`
- `name`
- `phone`
- `email`
- `preferred_contact_method`
- `service_interest`
- `location`
- `message`
- `source_page`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `consent_flags`
- `turnstile_verified`
- `spam_status`
- `status`
- `retention_delete_after`

Privacy/security notes:
- Minimize collected fields.
- Avoid logging full message contents in application logs.
- Apply retention policy once approved.
- Use server-side Supabase credentials only inside trusted endpoint/runtime.
- Do not expose inquiry records through public client queries.

## API/actions

### `POST /api/inquiries`
Purpose: Accept contact/inquiry submissions.

Flow:
1. Validate and normalize input.
2. Check honeypot.
3. Verify Cloudflare Turnstile or equivalent.
4. Apply rate limiting.
5. Insert minimal inquiry record into Supabase.
6. Send Resend email notification to approved recipient(s).
7. Return safe success/error response.

Failure policy:
- If Supabase insert fails, do not send a false-success response.
- If Resend fails after Supabase insert succeeds, preserve the lead and log a safe operational error for follow-up.
- Never expose provider secrets or sensitive stack traces to the user.

### Sanity webhook to Vercel
Purpose: Trigger rebuild/revalidation after content changes.

Requirements:
- Verify webhook secret.
- Limit webhook scope to approved content events where feasible.
- Document manual fallback deploy process.

### Static/public page generation
Purpose: Generate homepage, service, problem, location, pricing, works and contact pages from Sanity content.

Requirements:
- Missing optional content should degrade gracefully.
- Unapproved NAP/contact/schema values must remain placeholders until approved.
- SEO schema output must not expose private data.

## NOT SPECIFIED

- Exact final public business NAP/contact values.
- Inquiry data retention duration.
- Final privacy-friendly analytics provider.
- Exact production recipient email(s) for Resend notifications.

## Website-only boundary

Data entities are limited to public website content, Sanity administration, media, inquiry submissions and related operational metadata. SaaS tenant, employee, scheduling, payroll and workforce-compliance data models are excluded.
