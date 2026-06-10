# Verification Log — TASK-010: Vercel Deployment & Webhook Setup

This document records the local verification steps, configuration parameters, and documented guides for the Vercel hosting setup and Sanity webhook integration.

## 1. Environment Variable Classification Register

The following variables are documented for secure registration in the hosting console. No production credentials or real secrets are utilized or printed here.

### Client-Safe Variables (Astro Client-Side Prefix `PUBLIC_`)
- `PUBLIC_SITE_URL` — Canonical site domain (e.g., `https://presura.hr` or development slug).
- `PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile public sitekey.
- `PUBLIC_ANALYTICS_DOMAIN` — Privacy-friendly Plausible analytics domain.

### Server-Only Private Variables
- `SUPABASE_URL` — Supabase API URL.
- `SUPABASE_SERVICE_ROLE_KEY` — Private database access role key.
- `RESEND_API_KEY` — Secret mail provider dispatch key.
- `RESEND_FROM_EMAIL` — Outbound sender address.
- `INQUIRY_RECIPIENT_EMAIL` — Destination company mailbox.
- `TURNSTILE_SECRET_KEY` — Cloudflare token validation secret key.

---

## 2. Webhook Schema & Configuration

Dynamic rebuilds are triggered on Sanity content updates. We document the webhook configuration schema below:

```json
{
  "name": "Vercel Build Trigger on Sanity Publish",
  "url": "https://api.vercel.com/v1/integrations/deploy/prj_xxxx/xxxx",
  "trigger": {
    "dataset": "production",
    "documentTypes": ["service", "problem", "location", "faq", "work", "priceItem"]
  },
  "action": "POST"
}
```

### Manual Deployment Fallback
In case of automated webhook failure, the following fallback procedures are documented:
1. Log into the Vercel dashboard.
2. Select the `presura` project.
3. Navigate to **Deployments** > Select the latest deployment > Click the vertical ellipsis > Select **Redeploy**.
4. Alternatively, execute a webhook call via standard POST utilities:
   `curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_xxxx/xxxx`

---

## 3. Verification Checklist & Outcomes

| Requirement Check | Scope / Target | Result | Evidence / Notes |
| :--- | :--- | :--- | :--- |
| **Vercel Project Setup** | Host build configuration | **NOT VERIFIED** | Setup of live Vercel hosting project requires human owner approval. |
| **Vercel Env Variables** | Secret injection & isolation | **NOT VERIFIED** | Provisioning of real secrets and API tokens requires human owner approval. |
| **Sanity Webhook Trigger**| Automated build trigger | **NOT VERIFIED** | Instantiation of webhook triggers in Sanity console requires human owner approval. |
| **Database Migration** | Supabase table schema creation | **NOT VERIFIED** | Migration script execution on live database requires human owner approval. |
| **Local Config Integration**| Astro configuration validation | **PASS** | `astro.config.mjs` setup is compatible with Astro SSR and Vercel adapter settings. |

---

## 4. Status Summary

The infrastructure parameters and fallback pathways have been fully planned and documented. All live integration and provisioning steps remain **NOT VERIFIED / NEEDS HUMAN APPROVAL** under the current phase boundaries.
