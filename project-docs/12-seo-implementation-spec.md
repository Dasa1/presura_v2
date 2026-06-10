# 12 SEO Implementation Spec

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/01-research.md`, `/project-docs/03-requirements.md`, `/project-docs/08A-cms-content-model-spec.md`

## Purpose

This document converts SEO research and requirements into implementation-ready rules for Astro, Sanity and Vercel.

Use this before routes, metadata, schema, sitemap, robots, canonical URLs, internal linking, image SEO or local page tasks.

## Rules

- Do not create thin local or programmatic pages.
- Do not hardcode unapproved public NAP/contact/schema data.
- Use placeholders until approved public business data is provided.
- Sanity is the source of public content; Supabase is not used for public SEO content.
- Numeric performance values are targets only unless explicitly promoted.
- No PASS without evidence.

## URL patterns

| Page type | Route pattern | MVP? | Notes |
|---|---|---:|---|
| Homepage | `/` | yes | Main hub. |
| Service index | `/usluge/` | yes | Lists up to 6 MVP services. |
| Service page | `/usluge/[slug]/` | yes | Sanity `service`. |
| Problem index | `/problemi/` | yes | Lists 2-3 MVP problems. |
| Problem page | `/problemi/[slug]/` | yes | Sanity `problem`. |
| Location index | `/lokacije/` | yes | Lists approved local pages. |
| Location page | `/lokacije/[slug]/` | yes | Only when unique local proof exists. |
| Pricing/inquiry | `/cjenik/` or `/upit/` | yes | Use one canonical route. |
| Works index | `/radovi/` | yes light | Proof hub. |
| Work detail | `/radovi/[slug]/` | optional MVP | Only if enough approved content exists. |
| Contact | `/kontakt/` | yes | Contact and inquiry. |
| Privacy | `/privatnost/` | yes | Form/analytics privacy support. |

ASSUMPTION: Croatian route slugs are preferred because source research and likely audience are Croatian/local. Change only with human approval.

## Metadata templates

| Page type | Title template | Meta description template | Indexing rule |
|---|---|---|---|
| Homepage | `[Brand] | Servis grijanja i tehničke usluge u [Area]` | `Brz i pouzdan servis grijanja i tehničkih usluga. Nazovite ili pošaljite upit za okvirnu procjenu.` | index when NAP placeholders are safe. |
| Service | `[Service] [Area] | [Brand]` | `Stručna usluga: [service]. Saznajte simptome, okvirne cijene i kada nazvati servis.` | index if published. |
| Problem | `[Problem] — uzroci i rješenje | [Brand]` | `Saznajte što može značiti [problem], koje rješenje pomaže i kada kontaktirati servis.` | index if published. |
| Location | `[Service category] [Location] | [Brand]` | `Usluge na području [location] uz lokalne dokaze, radove i mogućnost brzog kontakta.` | index only if unique proof rule passes. |
| Pricing | `Cjenik i upit za servis | [Brand]` | `Pogledajte okvirne cijene, što utječe na konačan trošak i pošaljite upit.` | index. |
| Works | `Radovi i primjeri iz prakse | [Brand]` | `Pogledajte primjere stvarnih radova i usluga.` | index if approved proof exists. |
| Contact | `Kontakt | [Brand]` | `Nazovite servis ili pošaljite upit. Za hitne probleme preporučujemo telefonski kontakt.` | index. |
| Privacy | `Privatnost | [Brand]` | `Informacije o obradi podataka iz kontakt obrazaca i analitike.` | index/noindex per policy; default index acceptable. |

## Canonical rules

- Every indexable page must render a self-referencing canonical URL.
- Query parameters must not create alternate canonical pages.
- UTM parameters must not affect canonical.
- If both `/cjenik/` and `/upit/` exist, choose one canonical and link consistently.

## Sitemap rules

Include:

- Homepage.
- Published service pages.
- Published problem pages.
- Published location pages that pass unique proof rule.
- Pricing/inquiry page.
- Works pages only if approved and indexable.
- Contact/privacy pages.

Exclude:

- Sanity Studio/admin routes.
- API routes.
- Draft/review/unpublished Sanity documents.
- Placeholder-only location pages.
- Search/filter result pages if added later.

## Robots rules

- Allow public pages.
- Disallow API endpoints where appropriate.
- Disallow/admin-protect Sanity Studio if hosted under same project path; preferred approach is separate Sanity Studio deployment or protected route.
- Reference sitemap URL.

## Schema strategy

| Page type | Schema type(s) | Source fields | Approval needed? |
|---|---|---|---|
| Homepage | `HVACBusiness` or suitable `LocalBusiness`, `WebSite` | Site settings, approved NAP, logo, sameAs | Yes for NAP/contact. |
| Service page | `Service`, optional `FAQPage` | Service fields, price items, FAQs | Yes for business provider data. |
| Problem page | `FAQPage` where relevant, breadcrumb | Problem + FAQ fields | No if content approved; avoid medical/legal certainty. |
| Location page | `LocalBusiness`/service area references, breadcrumb, FAQ | Location proof, service references | Yes for local NAP/geo. |
| Pricing | `OfferCatalog`/`Offer` where safe, FAQ | Price items | Yes for fixed prices. |
| Works | `CreativeWork`/case content as appropriate | Work fields | Yes for consent-sensitive media. |
| Contact | `ContactPage`, business contact fields | Site settings | Yes for contact/NAP. |

## FAQ schema rules

- Only render FAQPage schema for FAQs visible on the page.
- Use only published FAQs with `schemaEligible = true`.
- Do not include uncertain claims or private data.
- FAQ answers should be concise and match visible page content.

## Local SEO rules

### Local page publication requirements

Do not publish local pages unless each page has:

- Approved city/area name.
- Unique local intro or service note.
- At least one unique local proof item: approved work, testimonial, real photo, or local-specific service fact.
- No private customer addresses or confidential job details.

### NAP consistency rules

- Use placeholders until final public NAP/contact values are approved.
- Once approved, use the same name, address, phone and website across visible footer, contact page and schema.
- Do not mix research values with unapproved replacements.

### Google Business Profile implications

- GBP optimization is outside implementation unless specifically approved.
- Site should support consistent NAP and local proof for future GBP alignment.

## Internal linking rules

- Homepage links to service index, key services, problem index, location index, pricing and contact.
- Service pages link to related problems, relevant price items, works and locations.
- Problem pages link to recommended service.
- Location pages link to services and local proof.
- Pricing links back to relevant services and contact form.
- Footer links to key indexes, contact and privacy.

## Image SEO rules

- Use descriptive filenames where controlled.
- Use Sanity image pipeline or Astro image optimization where appropriate.
- Provide explicit dimensions to prevent layout shift.
- Hero image may load eagerly only if it is LCP-critical.
- Below-fold images lazy-load.
- Alt text must describe informative images; decorative images use empty alt.
- Do not publish private or consent-unclear proof images.

## AEO / answer engine considerations

- Structure pages with clear questions and direct answers.
- Use problem pages for natural-language symptom queries.
- Use FAQ sections that answer real user questions.
- Keep author/business expertise proof visible and factual.

## Verification requirements

| Check | Tool/evidence | PASS rule |
|---|---|---|
| Metadata rendered | Browser/view-source or test output | Each key page has title/meta/canonical. |
| Schema validates | Rich Results/schema validator evidence | No critical schema errors; unapproved NAP not hardcoded. |
| Sitemap generated | URL/file output | Includes only indexable published pages. |
| Robots accessible | URL/file output | References sitemap and excludes non-public routes. |
| Canonicals correct | Browser/view-source evidence | Self-canonical, no UTM canonical drift. |
| Local pages unique | Content review evidence | Each location page has unique proof/value. |
| Image SEO | DOM/build evidence | Alt/dimensions/lazy/eager rules followed. |

## Launch blockers

- Published local pages are thin/duplicated.
- Public schema uses unapproved real NAP/contact values.
- Service/problem/location pages are non-indexable by mistake.
- Sitemap includes draft/review pages.
- No SEO verification evidence is captured.
