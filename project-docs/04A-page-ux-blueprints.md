# 04A Page UX Blueprints

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/01-research.md`, `/project-docs/02-product-spec.md`, `/project-docs/03-requirements.md`, `/project-docs/04-ux-spec.md`, `/project-docs/05-ui-system.md`

## Purpose

This document converts the approved UX strategy into page-level implementation guidance for the technical-service-website project.

Use this document before updating or executing tasks that create or modify pages, layouts, navigation, CTAs, forms, responsive behavior, content routes or user journeys.

## Rules

- Do not change approved MVP scope.
- Do not introduce Croatian scheduling SaaS concepts, requirements, architecture, risks or roadmap items.
- Keep public content in Sanity and inquiry/lead records in Supabase.
- Keep CRM, mass local page generation, A/B testing, advanced configurators, multi-client template packaging and large blog program outside MVP.
- Mobile-first behavior must be explicit.
- Use placeholders for public NAP/contact/schema data until final human approval.
- Build placeholders for proof/media are allowed, but real proof assets must replace them before launch where required.
- Numeric Core Web Vitals values are targets only, not automatic hard launch blockers.
- No PASS without evidence.

## Page blueprint index

| Page type | Route pattern | Primary user intent | Primary CTA | Related requirements | MVP/V1/Future |
|---|---|---|---|---|---|
| Homepage | `/` | Understand services, trust and service area quickly | Call / request inquiry | REQ-PROD-001, REQ-PROD-002, REQ-UI-001, REQ-SEO-001 | MVP |
| Service index | `/usluge/` | Browse available technical services | View service / call | REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001 | MVP |
| Service page | `/usluge/[slug]/` | Solve a known service need | Call for service | REQ-PROD-001, REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001 | MVP |
| Problem index | `/problemi/` | Find solution by symptom/problem | View problem solution | REQ-PROD-002, REQ-SEO-001 | MVP |
| Problem page | `/problemi/[slug]/` | Understand likely cause and recommended service | Call / request inquiry | REQ-PROD-001, REQ-PROD-002, REQ-SEO-001 | MVP |
| Location index | `/lokacije/` | Confirm service area | View local page / call | REQ-PROD-002, REQ-SEO-001 | MVP |
| Location page | `/lokacije/[slug]/` | Confirm local availability and proof | Call local service | REQ-PROD-002, REQ-SEO-001 | MVP only when unique proof exists |
| Pricing/inquiry page | `/cjenik/` or `/upit/` | Understand price ranges and submit inquiry | Submit inquiry | REQ-FORM-001, REQ-FORM-002, REQ-SEC-001, REQ-PRIV-001 | MVP |
| Works/case study index | `/radovi/` | Review proof of expertise | View proof / inquiry | REQ-PROD-003A, REQ-UI-001, REQ-SEO-001 | MVP light |
| Contact page | `/kontakt/` | Contact business quickly | Call / submit inquiry | REQ-PROD-001, REQ-FORM-001, REQ-FORM-002, REQ-SEC-001 | MVP |
| Legal/privacy page | `/privatnost/` | Understand data handling | None | REQ-PRIV-001, REQ-FORM-001 | MVP |

## Global UX patterns

### Emergency mobile path

- Every commercial page must support a visible tap-to-call path.
- On mobile, the sticky call CTA must remain reachable without covering focused controls.
- The first viewport of service/problem/location pages must answer: what is solved, where service is available and how to contact.
- No newsletter popups, sliders, interstitials or heavy animations may block the call path.

### Research and high-consideration path

- Users comparing higher-ticket services need proof, price anchors, plain-language explanation and a short form.
- Proof blocks should show real work photos, certifications, reviews, local proof and before/after examples where available.
- If proof assets are missing during build, mark them as placeholders and include replacement requirement before launch.

### Required common states

- Loading: skeleton or simple loading state for dynamic Sanity content where applicable.
- Empty: clear fallback if optional CMS references are missing.
- Error: user-safe message without provider stack traces or secret details.
- Success: clear confirmation after form submission and expectation setting for response time.

## Homepage blueprint

### User intent

Primary: quickly determine whether this business can solve a heating/technical service issue in the local area.  
Secondary: compare trust signals, services, proof and pricing/inquiry path.

### UX objective

Create a fast, trustworthy navigation hub that routes emergency users to phone contact and research users to service/problem/local proof pages.

### Primary CTA

`Nazovite servis` / `Call service` using approved phone placeholder until NAP approval.

### Secondary CTA

`Zatražite ponudu` / `Request inquiry` linking to inquiry/pricing/contact form.

### Recommended section order

1. Short hero with service area placeholder, value proposition and primary/secondary CTA.
2. Trust bar with certification/review/proof placeholders.
3. Service cards for up to 6 MVP services.
4. Problem-based navigation cards.
5. Pricing transparency teaser with ranges/from-prices and caveats.
6. Works/proof strip with real asset placeholders.
7. Local service area section for 2-3 approved local pages.
8. FAQ summary.
9. Final CTA and footer.

### Mobile-first behavior

- Hero copy must be short enough to keep CTA in the first viewport.
- Sticky call CTA active on mobile after initial hero or immediately if layout requires.
- Service/problem cards stack vertically with large touch targets.
- Trust bar may scroll horizontally only if keyboard accessible; prefer wrapping chips.

### Trust/proof elements

- Certification/authorization badges where approved.
- Real work/photo placeholders with replacement requirement.
- Review/testimonial excerpts only if approved and attributable.
- Local proof snippets for approved locations.

### SEO/content purpose

Homepage establishes brand, local service category and links to service/problem/location silos.

### Form/call behavior

Homepage may link to inquiry form but should not require form interaction for emergency contact.

### Accessibility requirements

Semantic landmarks, one H1, visible focus, 44x44 touch targets, reduced motion support, no autoplay sliders.

### Related requirements

REQ-PROD-001, REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-A11Y-001, REQ-UI-001.

### What to avoid

Generic stock-heavy hero, large carousel, vague CTA such as “Learn more,” hidden phone number, or unapproved NAP.

## Service index blueprint

### User intent

Browse the service catalog and select the most relevant service.

### UX objective

Provide scannable service cards that lead to deeper service pages and support immediate call conversion.

### Recommended section order

1. Index hero.
2. Service card grid from Sanity.
3. Problem-to-service helper block.
4. Pricing/inquiry CTA.
5. FAQ / trust bar.

### Mobile-first behavior

Cards stack; each card has readable title, short description and one clear CTA.

### Related requirements

REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-A11Y-001.

## Service page blueprint

### User intent

User knows the service they need or has high commercial intent.

### UX objective

Convert quickly for urgent services while providing enough detail and proof for research users.

### Primary CTA

Call service.

### Secondary CTA

Request price/inquiry.

### Recommended section order

1. Service hero with problem solved, area and CTA.
2. Trust/proof strip relevant to service.
3. Service explanation in plain language.
4. Symptoms/problems this service solves.
5. Pricing anchor/range with caveat.
6. Before/after or work proof.
7. Related FAQs.
8. Related locations.
9. Final CTA.

### Mobile-first behavior

- Primary CTA visible near top and sticky.
- Long technical detail collapses into readable sections but remains accessible/indexable.
- Images lazy-load below the fold; hero image uses optimized priority loading where appropriate.

### Trust/proof elements

Service-specific certification, real work photo, before/after, local review and case study references.

### SEO/content purpose

Target transactional service queries and feed Service schema/FAQ schema.

### Form/call behavior

Short inline inquiry CTA can open or link to form. Form should not block phone call.

### Required states

- Empty related works: show trust bar and CTA instead of blank section.
- Missing price: show “Price depends on scope” caveat and inquiry CTA.

### Accessibility requirements

Readable hierarchy, semantic sections, descriptive image alt text, no drag-only before/after control.

### Related requirements

REQ-PROD-001, REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-PERF-001, REQ-A11Y-001.

### What to avoid

Technical jargon without benefits, hidden pricing caveats, forced form for emergency service, or unapproved fixed prices.

## Problem page blueprint

### User intent

User describes a symptom rather than knowing the technical service name.

### UX objective

Explain likely causes, recommended service, urgency level and next action without pretending to diagnose remotely.

### Primary CTA

Call if urgent.

### Secondary CTA

Request assessment/inquiry.

### Recommended section order

1. Problem hero: symptom statement and reassurance.
2. “What this usually means” explanation.
3. Recommended service link/card.
4. Warning signs / when to call immediately.
5. Proof or related works.
6. Pricing expectation if known.
7. FAQ.
8. Final CTA.

### Mobile-first behavior

Use short paragraphs, warning callouts and clear CTA. Avoid dense diagnosis tables on small screens.

### Trust/proof elements

Problem-specific proof photos, technician explanation, related case study.

### SEO/content purpose

Capture long-tail symptom searches and route to service pages.

### Form/call behavior

Inquiry form should capture symptom, location and preferred contact method; do not request excessive personal data.

### Related requirements

REQ-PROD-001, REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-FORM-001.

### What to avoid

Remote diagnosis certainty, fearmongering, unsupported safety claims.

## Location page blueprint

### User intent

Confirm whether the business serves a specific town/area and has local proof.

### UX objective

Build trust with unique local evidence, not cloned pages.

### Primary CTA

Call service in this area.

### Secondary CTA

Request inquiry for this location.

### Recommended section order

1. Local hero with city/area and CTA.
2. Local proof block: works, photos, testimonials, local notes.
3. Services available in that location.
4. Location-specific FAQs or service considerations.
5. Related works/case studies.
6. Pricing/inquiry CTA.

### Unique local proof requirements

Required for publication:

- A specific location/city name approved for public use.
- At least one unique local proof item, such as local work/case study, approved local review, real photo, or locally relevant service note.
- No private customer address or confidential job detail.

Must not publish if:

- Only city name is swapped into generic content.
- There is no unique proof/value.
- NAP/schema data is unapproved and cannot safely be represented as placeholder.

### Related requirements

REQ-PROD-002, REQ-PROD-003A, REQ-SEO-001, REQ-PRIV-001.

## Pricing / inquiry page blueprint

### User intent

Understand expected cost range and submit an inquiry.

### UX objective

Reduce price anxiety while preventing false fixed-price commitments.

### Primary CTA

Submit inquiry.

### Secondary CTA

Call service.

### Recommended section order

1. Pricing hero and caveat.
2. Price item cards grouped by service.
3. What affects final price.
4. Short inquiry form.
5. Trust/privacy note.
6. FAQ.

### Pricing transparency rules

- Use ranges/from-prices where possible.
- Every price block needs caveat text and included/excluded notes if available.
- Fixed prices only when human-approved.

### Form behavior

Use `/api/inquiries`. Must validate fields, honeypot, Turnstile/equivalent, Supabase insert and Resend notification.

### Related requirements

REQ-FORM-001, REQ-FORM-002, REQ-SEC-001, REQ-PRIV-001, REQ-SEO-001.

## Works / proof blueprint

### User intent

Verify quality, expertise and real-world capability.

### UX objective

Show authentic proof without exposing private customer information.

### Recommended section order

1. Works index hero.
2. Filterable/light grouped work cards only if simple.
3. Before/after proof blocks.
4. Related service/location links.
5. CTA.

### Privacy rules

- Publish only approved media.
- Do not show house numbers, license plates, private interiors or people without consent.
- Use Sanity `consentStatus` and `source` metadata.

### Related requirements

REQ-PROD-003A, REQ-PRIV-001, REQ-UI-001, REQ-SEO-001.

## Contact page blueprint

### User intent

Contact business with minimum friction.

### UX objective

Offer immediate call and safe inquiry submission with clear expectations.

### Recommended section order

1. Contact hero with approved/placeholder phone and service area.
2. Call card.
3. Inquiry form.
4. Service area summary.
5. Privacy/response time microcopy.
6. FAQ.

### Form fields

Name, phone or email, service interest, location, message, preferred contact method, consent checkbox/notice as required by privacy copy.

### Related requirements

REQ-PROD-001, REQ-FORM-001, REQ-FORM-002, REQ-SEC-001, REQ-PRIV-001, REQ-A11Y-001.
