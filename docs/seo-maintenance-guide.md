# SEO Verification & Maintenance Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / editor / SEO maintainer  
Project: technical-service-website / Presura

## Purpose

This guide outlines the dynamic SEO components of the website, describing how to verify and update meta tags, sitemaps, and structured JSON-LD schemas safely.

---

## Dynamic SEO Architecture

The website uses a modular SEO approach built directly into layouts and routes:
1. **`MetaTags.astro`**: Injects absolute canonical tags, page meta parameters, OpenGraph properties, and an automated environment-based noindex block.
2. **`SchemaMarkup.astro`**: Emits JSON-LD structured data (`HVACBusiness`, `Service`, `FAQPage`) dynamically based on document context.
3. **`sitemap.xml.ts`**: Generates a dynamic static compile-time XML sitemap mapping only published and indexable pages.
4. **`robots.txt`**: Restricts crawling by default to protect preview/staging environments from indexing.

---

## Indexation Safety Controls (Staging vs. Production)

### 1. The Environment Check
To prevent premature indexation of staging, testing, or localhost builds, `MetaTags.astro` checks `PUBLIC_SITE_URL`:
- **Safe State**: If `PUBLIC_SITE_URL` is default, localhost, `example.com`, or any staging/preview URL, the page automatically renders:
  ```html
  <meta name="robots" content="noindex, nofollow" />
  ```
- **Live State**: Emits `<meta name="robots" content="index, follow" />` ONLY when configured with the final approved production domain.

### 2. Robots.txt Safety
The default `robots.txt` disallows all search engine indexing:
```text
User-agent: *
Disallow: /
```
This must remain active on preview environments. A custom robots.txt allowing indexing should only be deployed once production NAP and content approvals exist.

---

## Schema & Structured Data Guidelines

> [!IMPORTANT]
> **No Fake NAP Data Indexation**: Structured local business schema (e.g. `HVACBusiness`) must not be emitted to live search engines with placeholder values.
> The `schemaEnabled` parameter inside `siteSettings` serves as a master toggle and defaults to `false`.

### Verifying Structured Data:
1. When `schemaEnabled` is `false`, no LocalBusiness or HVACBusiness schemas are injected on the live site.
2. For staging testing, if `schemaEnabled` is set to `true` while the site is hosted on a preview environment, a clearly commented mock schema (`@comment: NOT VERIFIED — preview/noindex-safe local test schema only`) is outputted for validation.
3. Once final NAP data is approved:
   - Update `siteSettings` content in Sanity.
   - Set `schemaEnabled` to `true`.
   - Update the production site URL configuration.

---

## Sitemap Compilation Rules

The XML sitemap (`/sitemap.xml`) is compiled dynamically during Astro's build process:
- **Exclusion Filters**:
  - Excludes unpublished or draft documents.
  - Excludes location landing pages with zero unique local proof blocks (protecting the site against thin content Google penalties).
  - Excludes portfolio details pages until full case studies are approved.
- **Production Sitemap Readiness**: **NOT VERIFIED**. The sitemap generation is programmatically verified during development, but full production readiness requires final domain approval.

---

## Sitemap Verification Procedures

To audit sitemap compilation and structured data validation:
1. **Build and Preview Site**: Execute `pnpm run build` followed by `pnpm run preview` to start the local server.
2. **Access XML URL**: Navigate to `http://localhost:4321/sitemap.xml` in the browser.
3. **Verify Listings**:
   - Ensure all 6 mock services are listed.
   - Confirm only the 3 location pages with custom proof block configurations are listed.
   - Verify that any drafts or documents with `publishConsentStatus: "placeholder"` are excluded.
4. **Structured Schema Auditing**: Copy the page source (from `view-source`) of the homepage and paste it into the [Schema Markup Validator](https://validator.schema.org/) or the Google Rich Results Test tool to check markup validity. Ensure no schema output is generated when `schemaEnabled` is set to `false`.
