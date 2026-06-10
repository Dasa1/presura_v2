# Sanity CMS Editor Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: content editor / owner / maintainer  
Project: technical-service-website / Presura

## Purpose

This guide explains how editors use Sanity Studio for structured website content, including validation rules and publishing requirements.

## CMS Scope

Sanity handles all public-facing marketing copy, service details, troubleshooting problems, localized landing page inputs, pricing structures, and testimonials. 
Supabase is used only for secure transactional database storage (contact lead capture) and is not accessible to content editors.

## Configured MVP Schemas

We have defined 7 local Sanity schemas for the MVP:

1. **Global Site Settings (`siteSettings`)**:
   - `title`: Brand name (must be "Presura" for placeholders).
   - `phoneDisplay`, `phoneTelHref`, `emailDisplay`, `addressDisplay`: Placeholders like `PHONE_PLACEHOLDER`, `EMAIL_PLACEHOLDER`, `ADDRESS_PLACEHOLDER` or non-functional values (`#`). Do not write real contact info until approved.
   - `schemaEnabled`: Boolean switch for schema.org HVAC markup. Set to `false` until approved.
2. **Services (`service`)**:
   - Marketing landing page info for individual technical offerings. Includes title, slug, status, short description, portable text blocks, and relations.
3. **Problems (`problem`)**:
   - User-symptom-focused landing pages. Requires a reference to a `recommendedService` to resolve the symptom.
4. **Locations (`location`)**:
   - Geotargeted search landings. Needs a custom local introduction (`localIntro`) and localized references.
5. **Works/Case Studies (`work`)**:
   - Completed project references on the ground.
6. **Price Items (`priceItem`)**:
   - Pricing display units (type `from`, `range`, or `quote-only`).
7. **FAQs (`faq`)**:
   - Standard question/answer pairs.

---

## Editor Publishing Rules & Validation Constraints

To protect the website's SEO health and legal stance, specific validation constraints are enforced directly in Sanity Studio:

### 1. Thin Content Guard (Locations)
- **Rule**: A `location` document cannot have its status set to `published` unless it contains **at least one** unique item in `localProofBlocks`.
- **Reasoning**: To prevent search engines from penalizing the domain for duplicate or low-value city pages ("thin content"). Every local page must prove physical service delivery in that city.

### 2. GDPR & Customer Privacy Guard (Works/Case Studies)
- **Rule**: A `work` document cannot have its status set to `published` unless the `publishConsentStatus` field is explicitly set to `approved`.
- **Reasoning**: Protects the company from privacy violations. Case studies featuring residential systems or photos cannot be made public without explicit owner consent.

### 3. Transparent Pricing Guard (Price Items)
- **Rule**: A `priceItem` cannot be `published` without providing a `caveatText` (e.g. explaining price variability based on materials/models).
- **Rule**: For `priceType === 'range'`, `rangeMax` must be greater than or equal to `rangeMin`.

---

## Safe Editing Workflow & State Transitions

1. **Edit Draft**: Fill in fields inside Sanity Studio. The document is initially created with a status of `draft`.
2. **Move to Review**: If approval is required, change the status field to `review` to alert administrators.
3. **Resolve Errors**: Ensure no validation warnings (red borders) are present in the Studio.
4. **Verify Consent / Proofs**: Confirm that customer consent is logged for case studies, and that unique local proof tags are active for location landing pages.
5. **Publish**: Transition the status to `published` and click "Publish" in the Studio. Dynamic static paths filter out any documents with statuses other than `published`.
6. **Vercel Rebuild**: Publishing triggers the Vercel deploy webhook to render the updated content live.
