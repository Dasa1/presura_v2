# Local Development Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: developers / maintainers  
Project: technical-service-website / Presura

## Approved local stack

- **Node.js version:** v18.x or higher.
- **Package manager:** **pnpm** (pnpm-lock.yaml is the authoritative lockfile).
- **Frontend:** Astro.
- **Styling:** Tailwind CSS v4.
- **CMS:** Sanity Studio and Sanity content lake.
- **Lead storage:** Supabase, inquiry/lead tables only.
- **Email:** Resend for inquiry notifications.
- **Deployment target:** Vercel.

## Local setup checklist

1. Clone the repository.
2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` to `.env` or `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Fill local environment variables using secure placeholder settings. Do not commit actual keys.
5. Start the local Astro development server:
   ```bash
   pnpm run dev
   ```
6. Start or access Sanity Studio according to Phase 2 schemas.
7. Run lint, typecheck, and build before pushing:
   ```bash
   pnpm run build
   ```

## Expected commands

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Environment variables

Do not place secret values in docs. All configurations must be mapped to `.env.local` using the placeholders defined in `.env.example`.

Expected local categories:
- Sanity project/dataset/API version (public) and server-only token (private).
- Supabase URL and service role key (private, server-only).
- Resend API key and sender configuration.
- Turnstile site key (public) and secret key (private).
- Plausible-style analytics domain/script configuration.
- Public placeholder NAP/contact values until approved final values exist.

## Local verification expectations

No PASS without evidence. Each implementation phase must record results in `/build-notes/phase-XX-[name].md`.

Minimum checks:
- Dependencies install successfully via pnpm.
- Astro dev server runs.
- Astro build succeeds.
- Form endpoint fails safely when required secrets are missing.
- No secrets are committed.

## Handover Verification Status
- **Node version:** Verified local path compatibility (v18+).
- **Package manager:** Verified `pnpm` (11.5.2) global installation enabled via npm.
- **Lockfile status:** `pnpm-lock.yaml` is the authoritative lockfile.
