# Technical Service Website — Presura

This repository hosts the **Presura** local technical-service lead-generation website built with Astro and Tailwind CSS v4.

## Technology Stack

- **Frontend:** Astro (SSG/edge-first)
- **Styling:** Tailwind CSS v4
- **CMS (Structured Public Content):** Sanity (Schema implemented in Phase 2)
- **Database (Inquiries Storage):** Supabase (Schema and RLS in Phase 4)
- **Notifications:** Resend
- **Deployment Target:** Vercel
- **Anti-Spam:** Cloudflare Turnstile + Honeypots
- **Analytics:** Privacy-friendly (Plausible-style) cookie-less analytics first

---

## Directory Mappings

This project utilizes the approved AI Process Pack v1.4 structure directly inside this repository root:

- `/project-docs` — Product intakes, requirements, architecture decisions.
- `/tasks` — Task specifications (`TASK-001` through `TASK-013`).
- `/verification` — Verification results, screenshots, and compliance evidence.
- `/build-notes` — Phase-by-phase timeline logging and build changes.
- `/docs` — Owner manuals, editor guides, local development settings.
- `/implementation-plans` — Pre-implementation phase plans.

---

## Local Development

### 1. Requirements
- Node.js (v18.x or higher)
- **pnpm** (Package manager, globally installed via `npm i -g pnpm`)

### 2. Startup
```bash
# Install dependencies
pnpm install

# Run dev server
pnpm run dev
```

### 3. Build & Production Check
```bash
# Verify static build compiles successfully
pnpm run build
```

---

## Safety Constraints & Privacy Boundaries

1. **No Real Secrets:** All server credentials, API tokens, and private database role keys must live in your local `.env` and are strictly excluded from git tracking. `.env.example` templates placeholders only.
2. **"Presura" Name Rules:** Standardized as `"Presura"` throughout codebase. Do not hardcode "Presura d.o.o." or final phone numbers / address NAP details until owner approval.
3. **Lead Retention:** Inquiries are stored in Supabase for **6 months** and then flagged for automated deletion/anonymization unless converted to active customer records.
