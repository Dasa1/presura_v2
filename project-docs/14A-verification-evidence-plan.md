# 14A Verification Evidence Plan

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/03-requirements.md`, `/project-docs/09-implementation-roadmap.md`

## Purpose

This document defines what evidence is required to claim PASS for requirements, tasks and launch readiness.

Use this before implementation, task execution and final audit.

## Core rule

No PASS without evidence.

If something cannot be verified, mark it as NOT VERIFIED.

## Evidence storage

Recommended location:

```text
/verification/
  TASK-001.md
  TASK-002.md
  ...
  launch-readiness.md
  screenshots/
  logs-redacted/
```

## Requirement evidence matrix

| Requirement ID | Requirement | Evidence required | Verification method | PASS rule | Current status |
|---|---|---|---|---|---|
| REQ-PROD-001 | Emergency lead path | Mobile screenshots/video of commercial pages with tap-to-call; DOM evidence of `tel:` link | Manual browser/mobile viewport check | Call CTA visible and usable without blocking modal | NOT VERIFIED |
| REQ-PROD-002 | Service/problem/location IA | Route list, screenshots and Sanity-driven page evidence | Build output + browser smoke | Approved routes exist and render correctly | NOT VERIFIED |
| REQ-PROD-003A | Minimal Sanity CMS schemas for MVP | Schema files, Studio screenshot, seed content rendering | Code review + local Studio/build | Required schemas exist and render approved MVP pages | NOT VERIFIED |
| REQ-PROD-003B | Editor-friendly Sanity Studio workflow | Studio screenshots, validation labels/descriptions | Manual editor walkthrough | Editor can update content safely; P1 polish documented | NOT VERIFIED |
| REQ-SEO-001 | Structured local SEO schema | View-source/schema validator/sitemap/robots evidence | SEO validation tools and browser | Schema valid, placeholders used until NAP approval | NOT VERIFIED |
| REQ-PERF-001 | Performance targets and verification | Build output, Lighthouse/mobile report, image/bundle checks | Lighthouse + build inspection | Evidence captured; severe mobile/indexing regressions absent | NOT VERIFIED |
| REQ-A11Y-001 | WCAG 2.2 AA baseline | Keyboard/focus screenshots, automated a11y output | Manual + automated checks | No P0 accessibility blockers | NOT VERIFIED |
| REQ-SEC-001 | Form anti-abuse controls | Validation, honeypot, Turnstile, rate-limit test evidence | API/form tests | Invalid/spam submissions blocked safely | NOT VERIFIED |
| REQ-PRIV-001 | Privacy-safe analytics and consent | Analytics behavior screenshot/network evidence, privacy copy | Browser/network checks | Plausible-style analytics only; no unapproved marketing cookies | NOT VERIFIED |
| REQ-FORM-001 | Inquiry lead storage in Supabase | Redacted Supabase row/schema evidence | Test form/API submission | Valid submission creates minimal lead with retention metadata | NOT VERIFIED |
| REQ-FORM-002 | Resend email notifications | Redacted Resend delivery/log evidence | Test submission | Notification accepted/delivered after Supabase insert | NOT VERIFIED |
| REQ-UI-001 | Trustworthy technical visual language | Screenshots of core pages/components | Design review | Components match approved UI direction; placeholders identified | NOT VERIFIED |
| REQ-DEVOPS-001 | Vercel deployment with Sanity webhooks | Vercel deploy log, env checklist, webhook/manual rebuild evidence | Deploy/build verification | Preview/prod deploy path and content update flow verified | NOT VERIFIED |
| REQ-TEST-001 | No PASS without evidence | Completed verification docs | Review evidence pack | Each PASS has evidence or NOT VERIFIED is stated | NOT VERIFIED |

## Task evidence template

For every task, capture:

```text
Task ID:
Date:
Branch:
Commit:
Files changed:
Commands run:
Command output summary:
Manual checks:
Screenshots/browser recordings:
Security/privacy notes:
PASS/PARTIAL/FAIL/NOT VERIFIED table:
Known limitations:
Next recommended step:
```

## P0 launch blocker evidence

| P0 item | Evidence required | Block launch if |
|---|---|---|
| Emergency call path | Mobile screenshots and `tel:` link check | CTA absent, blocked, wrong/unapproved phone, or unusable. |
| Secure/deliverable inquiry form | Validation, anti-spam, Supabase and Resend evidence | Form lacks validation, storage, notification, anti-spam or safe errors. |
| Approved IA/minimal CMS models | Route list, Sanity schemas, rendered seed content | Required MVP pages cannot render from Sanity. |
| Indexable/usable pages | Build, metadata, sitemap, robots, smoke tests | Key pages noindex accidentally, missing metadata or broken. |
| CMS admin/data protection | Sanity token review, access posture evidence | Write/admin tokens exposed or access model unverified. |
| Privacy-safe analytics | Network/cookie evidence | GA4/ads/remarketing added without approval or unexpected cookies. |
| Evidence gate | Verification pack | PASS claimed without evidence. |

## Security evidence

| Check | Evidence required | PASS rule |
|---|---|---|
| No secrets client-side | grep/build output for service keys/API keys | No private Sanity/Supabase/Resend/Turnstile secrets in client bundle. |
| Form validation | Test output/screenshots | Invalid fields blocked with safe messages. |
| Anti-spam | Honeypot/Turnstile test evidence | Bad submissions rejected or ignored. |
| Rate limiting | Repeated request test | Abuse throttled or limitation documented as NOT VERIFIED. |
| Safe logs | Code/log review | No full message bodies or secrets logged. |
| Sanity access control | Access posture checklist | Least privilege, strong passwords, 2FA where available. |
| Security headers | Header output | Baseline headers present where configured. |

## Privacy evidence

| Check | Evidence required | PASS rule |
|---|---|---|
| Data minimization | Supabase schema + form field review | Only approved fields collected. |
| Retention metadata/process | Supabase row/migration evidence | `retention_delete_after` set to 6 months unless converted. |
| Analytics behavior | Network/cookie screenshot | Plausible-style analytics only; no unapproved marketing tags. |
| Privacy copy | Page/form screenshot | Users see clear data-use/retention notice. |
| No unnecessary logs | Code review/log sample | Sensitive inquiry message not logged. |

## Accessibility evidence

| Check | Evidence required | PASS rule |
|---|---|---|
| Keyboard navigation | Manual walkthrough notes | Header, forms, accordions and CTAs usable by keyboard. |
| Focus visible | Screenshots | Focus is visible and not obscured. |
| Touch target sizes | Screenshot/inspection | Key mobile controls meet 44x44 target. |
| Semantic HTML | DOM/axe evidence | Main landmarks and heading structure valid. |
| Reduced motion | CSS/code evidence | Motion respects `prefers-reduced-motion`. |
| Form labels/errors | DOM/screenshot | Labels visible and errors announced/described. |

## Performance evidence

| Check | Evidence required | PASS rule |
|---|---|---|
| Build output | command output | Build succeeds. |
| Lighthouse/mobile | report screenshot/json | Numeric values documented as targets; severe regressions flagged. |
| Image optimization | DOM/build evidence | Dimensions set; below-fold lazy loading; hero priority only where appropriate. |
| JS bundle sanity | build output | No unnecessary heavy client JS for static pages. |
| Layout stability | Lighthouse/visual check | No obvious layout jumps on key pages. |

## SEO evidence

| Check | Evidence required | PASS rule |
|---|---|---|
| Metadata | browser/view-source | Key pages have title, description and canonical. |
| Schema | validator evidence | No critical schema errors; NAP placeholder rule followed. |
| Sitemap | generated file/URL | Contains only intended indexable pages. |
| Robots | file/URL | Sitemap referenced; non-public routes excluded. |
| Canonicals | page source | Self-canonical, no query canonical drift. |
| Indexability | crawl/smoke | Key pages are not accidentally blocked. |
| Local uniqueness | content review | Each local page has unique proof/value. |

## Launch readiness evidence

Launch cannot be approved if:

- [ ] Any unresolved P0 requirement lacks evidence.
- [ ] Any Critical/High security issue is unresolved.
- [ ] Any privacy launch blocker is unresolved.
- [ ] Any major accessibility blocker is unresolved.
- [ ] Required public NAP/contact/schema data is missing or unapproved.
- [ ] Real proof assets required for launched local/proof pages are missing or unapproved.
- [ ] Build/deploy evidence is missing.
- [ ] SaaS scope appears in website implementation or verification.

## Final evidence review format

Use this table in `launch-readiness.md`:

| Area | Status | Evidence link/path | Open risk | Launch decision |
|---|---|---|---|---|
| Product/MVP | NOT VERIFIED |  |  |  |
| UX/UI | NOT VERIFIED |  |  |  |
| CMS/content | NOT VERIFIED |  |  |  |
| Forms/leads | NOT VERIFIED |  |  |  |
| Security | NOT VERIFIED |  |  |  |
| Privacy | NOT VERIFIED |  |  |  |
| SEO | NOT VERIFIED |  |  |  |
| Accessibility | NOT VERIFIED |  |  |  |
| Performance | NOT VERIFIED |  |  |  |
| Deployment | NOT VERIFIED |  |  |  |

## Approval checklist

- [ ] Evidence plan approved.
- [ ] P0 evidence requirements approved.
- [ ] Task verification format approved.
- [ ] Launch blocker rules approved.
- [ ] NOT VERIFIED handling approved.
