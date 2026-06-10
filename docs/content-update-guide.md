# Content Update & Redeployment Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / editor / maintainer  
Project: technical-service-website / Presura

## Purpose

This guide outlines how content updates in the CMS propagate to the live website, highlighting build revalidation and editorial safety principles.

---

## Static Route Revalidation (Vercel Build Webhooks)

The website is compiled as a fully static, fast-loading Astro site. To update the content:
1. **CMS Event**: An editor publishes or unpublishes content in Sanity Studio.
2. **Webhook Trigger**: Sanity fires a secure webhook to Vercel.
3. **Rebuild**: Vercel triggers a clean project build (`pnpm run build`), pulling the updated documents.
4. **Deploy**: The new static files are deployed globally.

*Note: During Phase 2, this workflow is mocked locally using `src/sanity/seed.json` for fully offline verification.*

---

## Content Update Principles & Safeguards

### 1. Services (`/usluge`)
- Keep user intent clear: emergency visitors need quick contact paths, research visitors need proof.
- Always link services to corresponding `priceItem` and `problem` schemas to provide a complete conversion tunnel.

### 2. Problems (`/problemi`)
- Map symptoms directly to a `recommendedService` to guide users to a solution.
- Use clear bullet points in the `symptoms` array.
- **Safety First**: Always keep the safety warning disclaimer about plinskih sustava (gas systems) intact.

### 3. Local Landing Pages (`/lokacije`)
- **Compiling Constraint**: Every location page must have at least one custom element in `localProofBlocks`.
- If a location page has zero proof blocks, **it is excluded from compilation during build time** to protect the site from thin-content SEO penalties.
- Provide a unique `localIntro` text segment describing services in that specific city.

### 4. Works & Case Studies (`/radovi`)
- Focus on technical execution details (e.g. equipment used, duration, results).
- **Privacy Gate**: Case studies will only compile if `publishConsentStatus` is set to `approved`. Otherwise, they are filtered out to prevent GDPR or privacy issues.

### 5. Pricing Items (`/cjenik`)
- Always accompany price figures with a clear, realistic `caveatText` explaining price variability factors.
- Ensure `rangeMin` and `rangeMax` are logical.
- If no pricing documents exist, a fallback message ("Cijena na upit") is automatically displayed.

---

## Pre-Launch Placeholder Checklist (Launch Blockers)

Before launching the site into production, the following abstract tokens must be replaced in the CMS siteSettings and checked for compliance:
- **`PHONE_PLACEHOLDER`**: Replace with the owner's legally registered telephone routing number.
- **`EMAIL_PLACEHOLDER`**: Replace with the company's verified inquiry inbox email address.
- **`ADDRESS_PLACEHOLDER`**: Replace with the official business registration physical address.
- **`HOURS_PLACEHOLDER`**: Update with real, verified company working hours.
- **`RATING_PLACEHOLDER` & `REVIEW_COUNT_PLACEHOLDER`**: Swap for verified, attributed Google Business Profile scores and counts.
- **Local Context Mocks**: Ensure `LOCAL_CONTEXT_PLACEHOLDER_..._NEEDS_VERIFICATION` tags are replaced with real, localized service descriptions, and placeholder local proof blocks contain real evidence.
- **`publishConsentStatus`**: Ensure case studies are set to `approved` only after client consent has been logged.

