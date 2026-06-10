# Verification Evidence — TASK-005

**Task ID:** TASK-005  
**Date:** 2026-06-10  
**Status:** PASS  

---

## 1. Description & Context

TASK-005 requires implementing search engine meta descriptors (titles, descriptions, self-canonical tags), dynamic sitemaps, crawlers directives (robots.txt), and JSON-LD local schema markers. It must safeguard the domain from indexation while using placeholder details.

---

## 2. Robots & Crawling Directives Verification

### A. Meta Indexation Lock (`src/components/seo/MetaTags.astro`)
The meta header dynamically checks `PUBLIC_SITE_URL` to append index blocks on local/sandbox hostnames:
```html
<meta name="robots" content="noindex, nofollow" />
```
Verified in build output: when built with default site settings, all generated HTML headers contain the `<meta name="robots" content="noindex, nofollow" />` element.

### B. Robots.txt Configuration (`public/robots.txt`)
Directly blocks all crawl activities:
```text
User-agent: *
Disallow: /

Sitemap: https://example.com/sitemap.xml
```

---

## 3. Dynamic Sitemap Compilation Verification

The dynamic route endpoint generates a sitemap at build time. Verification during `pnpm run build` confirmed the `/sitemap.xml` builds successfully, generating:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- PRODUCTION SITEMAP READINESS STATUS: NOT VERIFIED. Requires approved production domain. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/usluge/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/problemi/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/lokacije/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/cjenik/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/radovi/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/usluge/servis-plinskih-bojlera/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/usluge/strojno-ispiranje-radijatora/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/problemi/bojler-javlja-gresku/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/problemi/radijatori-hladni-pri-dnu/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/lokacije/osijek/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/lokacije/bilje/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```
* **Note**: Excludes locations without local proof blocks (Osijek and Bilje are included; others are filtered) and works without publish consent.
* **Sitemap Production Readiness**: **NOT VERIFIED**. The sitemap compiles successfully, but production indexing requires an approved production domain, which is launch-dependent.

---

## 4. JSON-LD Schema Boundary Verification

- **Default State**: Verified that `schemaEnabled` in `seed.json` is set to `false`.
- **Emissions Guard**: If `schemaEnabled` is false, no public business schema (`HVACBusiness` or `LocalBusiness`) is output to the page markup.
- **Local Test Output**: On staging/localhost environments, it outputs a safety-commented test schema:
  ```json
  {
    "@comment": "NOT VERIFIED — preview/noindex-safe local test schema only",
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Presura (Staging Placeholder)",
    "description": "Mock business schema verified locally during Phase 3 build checks.",
    "url": "https://example.com",
    "telephone": "PHONE_PLACEHOLDER",
    "email": "EMAIL_PLACEHOLDER"
  }
  ```
- **Public Schema Verification**: **NOT VERIFIED**. Actual business schemas using live phone, address, and email coordinates are completely locked until NAP details are approved.
