# 13 Environment & Deployment Spec

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/06-architecture.md`, `/project-docs/07-security-privacy.md`, `/project-docs/08-data-api-contract.md`

## Purpose

This document defines implementation-ready environment, secrets, deployment and integration rules for the approved Astro/Sanity/Supabase/Resend/Vercel stack.

Use this before setup, deployment, integration, webhook, secret, migration or production launch tasks.

## Rules

- Never expose private secrets in client-side code.
- Never print secret values in logs or final responses.
- Public env vars must be explicitly marked public.
- Private env vars must be used only server-side.
- Ask for approval before destructive commands, migrations that affect real data or production deploy commands.
- No PASS without evidence.

## Approved deployment target

| Area | Approved provider |
|---|---|
| Frontend | Vercel |
| CMS | Sanity |
| Public content | Sanity Content Lake/API |
| Inquiry/lead database | Supabase |
| Email notifications | Resend |
| Anti-spam | Cloudflare Turnstile or equivalent |
| Analytics | Plausible-style privacy-friendly analytics first |

## Package manager

Use existing repo package manager if present. If new repo, pnpm is recommended unless the user/project standard says otherwise.

## Environment variables

| Env var | Public/private | Used by | Required local? | Required preview? | Required production? | Notes |
|---|---|---|---:|---:|---:|---|
| `PUBLIC_SITE_URL` | public | client/server | yes | yes | yes | Canonicals/sitemap. |
| `PUBLIC_SANITY_PROJECT_ID` | public | client/server | yes | yes | yes | Public project id. |
| `PUBLIC_SANITY_DATASET` | public | client/server | yes | yes | yes | Dataset name. |
| `PUBLIC_SANITY_API_VERSION` | public | client/server | yes | yes | yes | Pin API version. |
| `SANITY_READ_TOKEN` | private | server/build only | maybe | maybe | maybe | Only if dataset is private or preview requires it. |
| `SANITY_WEBHOOK_SECRET` | private | server | no | yes | yes | Verify content webhook if used. |
| `SUPABASE_URL` | private/public depends usage | server | yes | yes | yes | Prefer server-only usage for forms. |
| `SUPABASE_SERVICE_ROLE_KEY` | private | server only | yes | yes | yes | Never client-side. |
| `RESEND_API_KEY` | private | server only | yes | yes | yes | Never client-side. |
| `RESEND_FROM_EMAIL` | private/config | server only | yes | yes | yes | Approved sending domain. |
| `INQUIRY_RECIPIENT_EMAIL` | private/config | server only | yes | yes | yes | Approved recipient(s). |
| `TURNSTILE_SECRET_KEY` | private | server only | yes | yes | yes | Never client-side. |
| `PUBLIC_TURNSTILE_SITE_KEY` | public | client | yes | yes | yes | Public site key. |
| `PUBLIC_ANALYTICS_DOMAIN` | public | client | no | yes | yes | Plausible-style domain if used. |
| `ANALYTICS_API_KEY` | private | server only | no | no | no | Only if later needed; not MVP default. |
| `NODE_ENV` | system | build/runtime | yes | yes | yes | Standard. |

## Secret handling rules

### Sanity

- Public project ID/dataset may be client-visible.
- Write/admin tokens must never be used in frontend code.
- Read token should be server/build-only if needed.
- Studio access should use Sanity auth, least privilege and 2FA where available.

### Supabase

- Use service role key only inside trusted server endpoint/runtime.
- Do not expose service role key to client bundle.
- Do not create public client queries for `inquiries`.
- Apply RLS or server-only access controls appropriate to final implementation.

### Resend

- API key is server-only.
- From domain/sender must be approved/configured.
- Recipient email(s) are server-side config.

### Turnstile

- Site key is public.
- Secret key is server-only.
- Dev bypass/test keys must not be enabled in production.

### Analytics

- Plausible-style analytics should not require invasive identifiers.
- Do not add GA4/Consent Mode unless ads/remarketing are explicitly required later.

## Local development setup

Required steps:

1. Install dependencies using approved package manager.
2. Configure `.env.local` from `.env.example` without real secret values committed.
3. Run local Astro dev server.
4. Run or connect Sanity Studio/content dataset.
5. Configure Supabase test/local project for inquiries.
6. Configure Resend test mode or approved test sender.
7. Configure Turnstile test keys or documented dev behavior.
8. Capture build/test evidence in `/verification/`.

## Vercel setup

### Project settings

- Framework preset: Astro if detected.
- Build command: use repo script, likely `pnpm build` or existing package manager equivalent.
- Output directory: Astro/Vercel default unless adapter specifies otherwise.
- Node version: align with repo engines if set.

### Environment variables

Configure local, preview and production variables explicitly. Do not paste secret values into documentation or chat.

### Preview behavior

- Preview deploys may use staging Sanity/Supabase/Resend config.
- Preview should not send real customer notifications unless approved.
- Preview should not index unless canonical/noindex behavior is intentionally configured.

### Production behavior

- Production deploy uses approved production env vars.
- Production form endpoint writes to production Supabase and sends Resend notification to approved recipient(s).
- Production analytics uses approved Plausible-style provider.

## Sanity webhook / rebuild rules

- Use Sanity webhook to trigger Vercel rebuild/revalidation if static pages require content updates after publish.
- Verify `SANITY_WEBHOOK_SECRET` server-side if implementing a custom hook endpoint.
- If using direct Vercel deploy hook, store hook URL securely and do not expose publicly.
- Document manual fallback: trigger Vercel redeploy after Sanity content updates.

## Database migration rules

- Supabase migration creates `inquiries` table and retention metadata.
- Migrations must be reviewed before production execution.
- Destructive migrations require explicit human approval.
- Seed/test data must not contain real personal inquiry data.

## Deployment approval rules

Commands requiring explicit human approval:

- Production Supabase migration against real project.
- Production Vercel deploy if not already authorized in workflow.
- Destructive database commands.
- Any command that reveals or rotates secrets.

## Rollback strategy

- Use Vercel deployment history for frontend rollback.
- Keep Supabase migrations reversible where feasible.
- For form issues, disable form submission or Resend sending via env/config feature flag if implemented.
- Keep contact phone CTA available even if form endpoint is temporarily degraded.

## Launch environment checklist

- [ ] Required env vars configured for local/preview/production.
- [ ] No private keys exposed client-side.
- [ ] Sanity public/private token usage verified.
- [ ] Supabase inquiries cannot be queried publicly.
- [ ] Resend notification path verified.
- [ ] Turnstile server verification verified.
- [ ] Plausible-style analytics verified.
- [ ] Sanity webhook or manual rebuild process verified.
- [ ] Vercel preview deploy verified.
- [ ] Production deploy verified when approved.
- [ ] Security headers verified.

## Verification requirements

| Check | Evidence | PASS rule |
|---|---|---|
| Local build | command output | Build succeeds with no secret output. |
| Preview deploy | Vercel deployment screenshot/log | Preview loads key pages. |
| Production deploy | Vercel deployment screenshot/log | Production loads after approval. |
| Env vars present without exposing values | redacted env checklist | Required variables configured; no values shown. |
| No secrets in client bundle | grep/build inspection | Service keys/API secrets absent from client output. |
| Sanity webhook/manual rebuild | webhook log or documented manual test | Content update reaches public site. |
| Supabase migration | migration output/schema screenshot redacted | `inquiries` table exists with retention field. |
| Resend | test email/log redacted | Notification accepted/delivered. |
| Rollback path | documented steps | Rollback path exists. |

## Launch blockers

- Missing required production secrets.
- Private secrets exposed in client bundle or repo.
- Supabase inquiry records publicly readable.
- Resend path unverified.
- Turnstile secret or Supabase service key exposed.
- Vercel deploy evidence missing.
