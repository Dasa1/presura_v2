# 08A CMS Content Model Spec

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/03-requirements.md`, `/project-docs/08-data-api-contract.md`, `/project-docs/12-seo-implementation-spec.md`

## Purpose

This document defines implementation-ready Sanity CMS schemas and editorial workflow for structured public content.

Use this before CMS schema, Studio, content route, SEO metadata or seed content tasks.

## Rules

- Approved CMS is Sanity.
- Sanity stores public website content only.
- Supabase stores inquiry/lead records only.
- Do not store private lead/customer inquiry data in Sanity.
- Do not publish unapproved NAP/contact/schema data.
- Do not create thin local pages.
- Mark launch placeholders clearly.
- Keep MVP limited to approved content models.

## CMS platform

Approved CMS: Sanity.

## Sanity schema naming convention

Recommended document types:

- `siteSettings`
- `navigation`
- `service`
- `problem`
- `location`
- `work`
- `faq`
- `priceItem`
- `mediaMetadata` if custom asset metadata is needed beyond Sanity asset fields
- Optional reusable objects: `seoFields`, `cta`, `contentBlock`, `proofBlock`, `priceCaveat`, `localProofBlock`

## Publication status convention

Documents that render public routes must include a status field:

| Value | Meaning | Public route behavior |
|---|---|---|
| `draft` | Not ready | Do not include in production route/static params |
| `review` | Needs human review | Exclude from production unless explicitly allowed |
| `published` | Approved for public page | Include if required fields pass validation |

## Public content models

### Site settings

Purpose: global public settings, placeholders and default metadata.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | min 2 | yes | Site/brand display title; placeholder allowed. |
| `defaultSeoTitle` | string | yes | recommended <= 60 chars | yes | Default metadata fallback. |
| `defaultSeoDescription` | text | yes | recommended <= 160 chars | yes | Default metadata fallback. |
| `phoneDisplay` | string | no | placeholder allowed | yes | NEEDS HUMAN APPROVAL before launch if real. |
| `phoneTelHref` | string | no | `tel:` format when real | yes | Placeholder until approved. |
| `emailDisplay` | string | no | email format when real | yes | Public email only if approved. |
| `addressDisplay` | text | no | placeholder allowed | yes | Public NAP; approval required. |
| `openingHours` | array/object | no | structured | yes | Approval required. |
| `serviceAreaSummary` | text | no | max guidance | yes | Avoid overclaiming. |
| `analyticsProvider` | string | no | Plausible-style | no/yes | Implementation config, not secret. |
| `schemaEnabled` | boolean | yes | default false until NAP approved | yes | Prevent unapproved schema output. |

Preview behavior: singleton preview shows title and whether NAP/schema is approved.  
Related requirements: REQ-SEO-001, REQ-PRIV-001, REQ-PROD-003A.

### Navigation

Purpose: editable navigation labels and destinations if project chooses CMS-driven nav.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | unique for singleton | yes | e.g. Main Navigation. |
| `items` | array | yes | max reasonable count | yes | Label + internal route/reference. |
| `ctaLabel` | string | no | short | yes | e.g. Call service. |
| `ctaTarget` | string/reference | no | internal path or tel placeholder | yes | Do not use unapproved phone. |

Related requirements: REQ-PROD-001, REQ-PROD-002.

### Service

Purpose: commercial service landing pages.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | min 3 | yes | H1/source title. |
| `slug` | slug | yes | unique, no spaces | yes | Route `/usluge/[slug]`. |
| `status` | string enum | yes | draft/review/published | yes | Only published renders. |
| `shortDescription` | text | yes | recommended <= 220 chars | yes | Card/hero summary. |
| `heroMedia` | image | no | alt required if informative | yes | Placeholder allowed during build. |
| `contentBlocks` | array | yes | approved block types | yes | Rich content. |
| `primaryCtaLabel` | string | no | short | yes | Defaults to global call CTA. |
| `secondaryCtaLabel` | string | no | short | yes | Inquiry CTA. |
| `relatedProblems` | references | no | `problem[]` | yes | Symptom navigation. |
| `relatedLocations` | references | no | `location[]` | yes | Only published locations. |
| `relatedWorks` | references | no | `work[]` | yes | Only consent-approved. |
| `relatedFAQs` | references | no | `faq[]` | yes | Schema eligible if approved. |
| `priceItems` | references | no | `priceItem[]` | yes | Must include caveats. |
| `seoTitle` | string | no | recommended <= 60 chars | yes | Fallback generated. |
| `seoDescription` | text | no | recommended <= 160 chars | yes | Fallback generated. |
| `schemaType` | string | no | Service/HVAC-related | yes | Controlled enum if possible. |

Preview behavior: title, slug, status and missing required SEO/proof warnings.  
Related requirements: REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001.

### Problem

Purpose: symptom/problem pages that route users to a recommended service.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | min 3 | yes | Problem/symptom title. |
| `slug` | slug | yes | unique | yes | Route `/problemi/[slug]`. |
| `status` | enum | yes | draft/review/published | yes | Only published renders. |
| `problemStatement` | text | yes | plain-language | yes | User-facing problem. |
| `symptoms` | array string | no | max reasonable count | yes | Scannable bullets. |
| `urgencyNote` | text | no | no unsupported claims | yes | Human-review sensitive. |
| `recommendedService` | reference | yes | `service` | yes | Required for conversion path. |
| `contentBlocks` | array | yes | approved blocks | yes | Explanation. |
| `relatedFAQs` | references | no | `faq[]` | yes | FAQ schema. |
| `seoTitle` | string | no | guideline | yes | Fallback generated. |
| `seoDescription` | text | no | guideline | yes | Fallback generated. |

Related requirements: REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001.

### Location

Purpose: local SEO pages with unique proof.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `cityName` | string | yes | approved public city/area | yes | Route display. |
| `slug` | slug | yes | unique | yes | Route `/lokacije/[slug]`. |
| `status` | enum | yes | draft/review/published | yes | Published only if unique proof. |
| `postalCode` | string | no | public | yes | Optional. |
| `geo` | object | no | lat/lng if approved | yes | Avoid precision if not needed. |
| `localIntro` | text | yes | unique | yes | Must not be boilerplate only. |
| `localProofBlocks` | array | yes | min 1 for publish | yes | Required publication rule. |
| `relatedServices` | references | yes | `service[]` | yes | Services offered there. |
| `relatedWorks` | references | no | consent-approved `work[]` | yes | Strong proof. |
| `localTestimonials` | array/object | no | approved only | yes | Do not fabricate. |
| `seoTitle` | string | no | guideline | yes | Fallback generated. |
| `seoDescription` | text | no | guideline | yes | Fallback generated. |

Unique local proof rule: do not publish unless `localProofBlocks` or related approved work/testimonial provides unique local value.  
Related requirements: REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-PRIV-001.

### Work / case study

Purpose: proof of real service work.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | min 3 | yes | Public proof title. |
| `slug` | slug | yes | unique if detail page used | yes | Route optional/light MVP. |
| `status` | enum | yes | draft/review/published | yes | Only published renders. |
| `service` | reference | yes | `service` | yes | Related service. |
| `location` | reference | no | `location` | yes | Only public area, no private address. |
| `summary` | text | yes | plain-language | yes | Avoid private details. |
| `beforeAfterMedia` | array image | no | consent-approved | yes | Include alt text. |
| `date` | date | no | month/year ok | yes | Avoid exposing private appointment details if sensitive. |
| `publishConsentStatus` | enum | yes | approved/placeholder/not-approved | yes | Launch blocker for real works. |

Privacy/consent rules: no private addresses, license plates, faces or identifying interiors unless approved.  
Related requirements: REQ-UI-001, REQ-PRIV-001, REQ-PROD-003A.

### FAQ

Purpose: reusable FAQ content and FAQPage schema source.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `question` | string | yes | question format | yes | User phrasing preferred. |
| `answer` | text/portable text | yes | concise, factual | yes | Avoid unsupported claims. |
| `status` | enum | yes | draft/review/published | yes | Only published renders. |
| `relatedServices` | references | no | `service[]` | yes | Context. |
| `relatedProblems` | references | no | `problem[]` | yes | Context. |
| `schemaEligible` | boolean | yes | default true if public/factual | yes | False for uncertain/legal claims. |

Schema implications: only published, visible FAQ content may appear in FAQPage JSON-LD.  
Related requirements: REQ-SEO-001, REQ-PROD-003A.

### Price item

Purpose: transparent price/range display.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `title` | string | yes | min 3 | yes | Price label. |
| `status` | enum | yes | draft/review/published | yes | Only published renders. |
| `service` | reference | no | `service` | yes | Optional grouping. |
| `priceType` | enum | yes | from/range/fixed/quote | yes | Fixed needs human approval. |
| `fromPrice` | number | no | non-negative | yes | Required for `from`. |
| `rangeMin` | number | no | non-negative | yes | Required for `range`. |
| `rangeMax` | number | no | >= min | yes | Required for `range`. |
| `currency` | string | yes | EUR default | yes | MVP likely EUR. |
| `includedItems` | array string | no | concise | yes | Explain scope. |
| `caveatText` | text | yes | required | yes | Must explain variability. |

Pricing caveat rules: do not display any price without caveat text.  
Related requirements: REQ-UI-001, REQ-FORM-001.

### Media metadata

Purpose: ensure images are usable, accessible and privacy-safe.

| Field | Type | Required | Validation | Public? | Notes |
|---|---|---:|---|---:|---|
| `asset` | image | yes | Sanity image | yes | Use image pipeline. |
| `altText` | string | yes if informative | meaningful | yes | Empty only for decorative. |
| `caption` | string | no | safe public text | yes | Avoid private details. |
| `source` | enum/string | yes | real/placeholder/stock | yes | Stock discouraged. |
| `consentStatus` | enum | yes | approved/pending/placeholder/not-approved | yes | Launch review. |
| `relatedService` | reference | no | `service` | yes | Useful for content. |
| `relatedLocation` | reference | no | `location` | yes | Optional. |

Related requirements: REQ-A11Y-001, REQ-PRIV-001, REQ-UI-001.

## Editorial workflow

### Roles

- Admin: manages schema/studio settings and critical configuration.
- Editor: edits public content and media.
- Reviewer/approver: approves publication status where the team uses review workflow.

### MVP workflow

1. Editor creates/updates content in Sanity.
2. Required fields and validation guide completion.
3. Content status moves from draft to review/published.
4. Vercel rebuild/revalidation is triggered by Sanity webhook or documented manual deploy.
5. Public route renders only published documents.

### Editor-friendly workflow requirements

REQ-PROD-003B is P1. It should improve labels, descriptions, grouping and validation, but it is not launch-blocking unless editors cannot publish required MVP content safely.

## Validation and launch blockers

LAUNCH BLOCKER:

- Missing minimal Sanity schemas required by REQ-PROD-003A.
- Public route depends on private Supabase lead data.
- Published location page lacks unique local proof.
- Real work/proof asset is published with `consentStatus` not approved.
- Public NAP/schema uses unapproved final data.

NOT VERIFIED until Sanity schema files, seed content and route rendering evidence exist.
