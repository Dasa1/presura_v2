# 07 Security & Privacy Spec

## Risk level

Medium: public website with admin CMS, contact forms, cookies/analytics and media uploads.

## Data classification

| Data type | Sensitivity | Stored? | Logged? | Retention | Notes |
|---|---|---|---|---|---|
| Inquiry name/contact/problem | Personal / confidential | Yes | Minimal metadata only | NEEDS HUMAN APPROVAL, suggested 6-12 months or anonymize | Avoid logging message bodies. |
| CMS admin account | Confidential auth data | Yes | Security events only | account lifecycle | Require 2FA if available. |
| Analytics identifiers | Privacy-sensitive | Maybe | Aggregated | per CMP/privacy policy | Default denied until consent where required. |
| Media uploads | Business content | Yes | No | until removed | Validate file types and sizes. |

## Controls

- Server-side validation for all writes.
- Rate limiting for public/API endpoints.
- Least-privilege Sanity CMS admin/editor roles.
- No secrets in repo.
- Security headers and safe error messages.
- Audit sensitive Sanity CMS admin/editor actions.
- No PASS without evidence in security verification.

LAUNCH BLOCKER: unresolved Critical/High security finding or unverified CMS admin access control.


## Website-only boundary

No employee scheduling, SaaS tenant isolation or workforce data processing is in scope for this project. Access control refers to Sanity CMS admin/editor access only.
