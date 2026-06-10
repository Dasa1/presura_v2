# Troubleshooting Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: developer / maintainer / owner support  
Project: technical-service-website / Presura

## Rules

- Do not expose secrets while troubleshooting.
- Do not log full inquiry content unnecessarily.
- Do not mark PASS without evidence.
- Record unresolved production issues in `/docs/change-log.md` or the active incident/build note.

## Website does not load

Check:

1. Vercel deployment status.
2. Domain/DNS configuration.
3. Recent commits and deployment logs.
4. Environment variables missing from Vercel.
5. Astro build errors.

Status: NOT VERIFIED until real deployment exists.

## Sanity content not showing

Check:

1. Sanity project ID and dataset in environment variables.
2. Published vs draft state.
3. Content references and slugs.
4. API version/query compatibility.
5. Vercel rebuild/revalidation behavior.

Never expose Sanity write tokens client-side.

## Form submissions fail

Check:

1. Turnstile/equivalent verification result.
2. Required form fields and server validation.
3. Supabase connection and table permissions.
4. Resend API status and domain verification.
5. Rate limiting/honeypot behavior.
6. Server logs without exposing personal data.

If leads are not stored or email notifications are not sent, mark as LAUNCH BLOCKER until resolved.

## Leads stored but emails not received

Check:

1. Resend dashboard delivery logs.
2. Sender domain verification.
3. Recipient email configuration.
4. Spam/quarantine folder.
5. API key configured in Vercel environment.

## Spam submissions increase

Check:

1. Turnstile/equivalent configuration.
2. Honeypot field behavior.
3. Rate limiting.
4. Supabase insert patterns.
5. Logs for suspicious IP/user-agent patterns without retaining unnecessary personal data.

## Analytics missing

Check:

1. Analytics provider site/domain configuration.
2. Script loading only after approved privacy behavior.
3. Ad blockers may reduce client-side analytics visibility.
4. Deployment environment uses the correct domain.

## SEO metadata wrong

Check:

1. Sanity SEO fields.
2. Route-level metadata mapping.
3. Structured data source fields.
4. Sitemap/robots output.
5. Final approved NAP values.

## NOT VERIFIED

- Real provider dashboards are not connected in this package.
- Actual log locations are NOT VERIFIED.
- Final incident owner is NEEDS HUMAN APPROVAL.
