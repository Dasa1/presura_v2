# Account Access Handover

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / developer / handover reviewer  
Project: technical-service-website / Presura

## Purpose

This document tracks secure transfer of provider account access. It must never contain passwords, API keys, token values or secret values.

## Transfer rules

- Use provider invite/team/transfer flows.
- Do not share passwords in chat, email or docs.
- Enable 2FA where available.
- Rotate secrets after transfer where appropriate.
- Remove temporary implementation users after handover.
- Record transfer status only, not secret values.

## Account checklist

| Provider/account | Purpose | Required for launch? | Transfer method | Owner | Status |
|---|---|---:|---|---|---|
| Domain/DNS | Public domain and DNS | Yes | Transfer/invite | NOT SPECIFIED | NOT VERIFIED |
| Git repository | Source code | Yes | Invite/transfer | NOT SPECIFIED | NOT VERIFIED |
| Vercel | Hosting/deploy/env vars | Yes | Team invite | NOT SPECIFIED | NOT VERIFIED |
| Sanity | CMS/content | Yes | Invite | NOT SPECIFIED | NOT VERIFIED |
| Supabase | Inquiry lead storage | Yes | Organization/project invite | NOT SPECIFIED | NOT VERIFIED |
| Resend | Email notification sending | Yes | Team invite | NOT SPECIFIED | NOT VERIFIED |
| Turnstile/equivalent | Form anti-spam | Yes | Account/team invite | NOT SPECIFIED | NOT VERIFIED |
| Analytics | Privacy-friendly analytics | Yes for analytics; not a launch blocker unless approved as such | Invite | NOT SPECIFIED | NOT VERIFIED |

## Environment/secrets checklist

Do not document values.

| Secret category | Configured where | Rotation needed after transfer? | Status |
|---|---|---:|---|
| Sanity token(s) | Vercel/env/provider dashboard | NEEDS HUMAN APPROVAL | NOT VERIFIED |
| Supabase keys | Vercel/env/Supabase dashboard | NEEDS HUMAN APPROVAL | NOT VERIFIED |
| Resend API key | Vercel/env/Resend dashboard | NEEDS HUMAN APPROVAL | NOT VERIFIED |
| Turnstile secret | Vercel/env/provider dashboard | NEEDS HUMAN APPROVAL | NOT VERIFIED |
| Analytics config | Vercel/env/provider dashboard | No secret expected unless provider requires it | NOT VERIFIED |

## Handover acceptance

- [ ] Owner has accepted all provider invites.
- [ ] Temporary users removed or downgraded.
- [ ] 2FA enabled where available.
- [ ] Secrets rotated if needed.
- [ ] Access levels documented without secret values.
- [ ] LAUNCH BLOCKER items resolved or explicitly approved as exceptions.

## NOT VERIFIED

All real provider accounts, access owners and transfer statuses are NOT VERIFIED until implementation/handover.
