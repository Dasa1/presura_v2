# 05A UI Component Spec

Status: DRAFT — implementation blueprint generated from approved website-only docs.  
Source: `/project-docs/05-ui-system.md`, `/project-docs/04A-page-ux-blueprints.md`, `/project-docs/03-requirements.md`

## Purpose

This document converts the approved UI direction into component-level implementation guidance for Astro + Tailwind CSS v4.

Use this before updating or executing tasks that create components, layouts, navigation, CTAs, forms or interaction states.

## Rules

- Components must support the approved MVP only.
- Do not add CRM, A/B testing, advanced configurators, multi-client packaging or SaaS UI.
- Use build placeholders only where allowed; real proof/trust assets must replace launch-critical placeholders before launch.
- Every interactive component must include visible focus, keyboard behavior and accessible names.
- Respect `prefers-reduced-motion`.
- Do not hardcode final public NAP/contact/schema data until approved.

## Component index

| Component | Purpose | Variants | Related pages | Related requirements | MVP/V1/Future |
|---|---|---|---|---|---|
| Site shell | Page frame, skip link, header/footer slots | Default | All | REQ-A11Y-001, REQ-UI-001 | MVP |
| Header / navigation | Primary navigation and call entry | Desktop, mobile menu | All | REQ-PROD-001, REQ-A11Y-001 | MVP |
| Sticky mobile CTA | Persistent call action | Call, inquiry secondary | Commercial pages | REQ-PROD-001 | MVP |
| Hero | Page context and CTA | Home, service, problem, location, pricing/contact | All key pages | REQ-UI-001, REQ-SEO-001 | MVP |
| Trust bar | Certifications/reviews/proof | Icon chips, compact strip | Home, service, location | REQ-UI-001, REQ-SEO-001 | MVP |
| Card grid | Services/problems/locations/works | Service, problem, location, work | Index and related sections | REQ-PROD-002, REQ-A11Y-001 | MVP |
| Pricing anchors | Price range display | From price, range, quote required | Pricing/service | REQ-UI-001, REQ-FORM-001 | MVP |
| FAQ accordion | Scannable FAQ content | Default | Service/problem/location/contact | REQ-SEO-001, REQ-A11Y-001 | MVP |
| Before/after proof block | Visual proof | Static pair, accessible toggle | Service/works | REQ-UI-001, REQ-A11Y-001 | MVP light |
| Inquiry/contact form | Lead capture | Contact, pricing, inline | Contact/pricing/service | REQ-FORM-001, REQ-FORM-002, REQ-SEC-001 | MVP |
| Cookie/analytics notice | Privacy notice if needed | Minimal notice | All | REQ-PRIV-001 | MVP if needed |
| Footer | NAP placeholders, links, trust | Default | All | REQ-SEO-001, REQ-PRIV-001 | MVP |

## Design tokens

### Color tokens

- `brand.primary`: dark navy/technical blue.
- `brand.accent`: warm orange/red for urgent CTAs.
- `neutral.*`: slate/gray scale for text, borders and backgrounds.
- `status.success`, `status.error`, `status.warning`, `status.info`: form and system states.

NEEDS HUMAN APPROVAL: final brand palette if existing brand guidelines are provided later.

### Typography

- Neutral sans-serif, readable body text and strong headings.
- Maintain clear H1/H2/H3 hierarchy.
- Avoid all-caps body copy.

### Spacing and layout

- 4/8px rhythm.
- Large mobile tap targets, minimum 44x44 CSS pixels for interactive controls.
- Content max-widths should preserve readable line length.

## Site shell

### Purpose

Provide consistent landmarks, skip link, responsive spacing and global header/footer placement.

### Content fields / props

- `title`, `description`, `canonical`, `schema`, `bodyClass` if needed.
- Slots: header, main, footer.

### Accessibility requirements

- Include skip-to-content link.
- Use `<header>`, `<nav>`, `<main>`, `<footer>`.
- Main content receives a stable `id`.

### Related requirements

REQ-A11Y-001, REQ-SEO-001.

## Header / navigation

### Purpose

Let users reach key silos and contact immediately.

### Variants

- Desktop: logo, service/problem/location/pricing/contact links, call button.
- Mobile: logo, menu button, collapsible nav, call CTA visible.

### Content fields / props

Logo placeholder, nav items from Sanity/site config or static config, phone placeholder, CTA labels.

### Behavior

- Current page indicated with `aria-current="page"`.
- Mobile menu button has `aria-expanded` and accessible name.
- Escape closes menu if implemented with JS.

### What to avoid

Mega menu, hidden phone number, nav requiring hover only.

### Related requirements

REQ-PROD-001, REQ-A11Y-001, REQ-UI-001.

## Sticky mobile CTA

### Purpose

Keep emergency call path available on mobile commercial pages.

### Variants

- Primary call-only bar.
- Call + inquiry split bar only if it does not reduce call clarity.

### Behavior

- Mobile only unless desktop design requires compact call button.
- Must not obscure keyboard focus, form fields or cookie/privacy controls.
- Should include safe-area padding for mobile devices.

### Accessibility

- Accessible label includes action and business/service context.
- Focus ring visible.
- `tel:` href uses approved placeholder until final NAP approval.

### Related requirements

REQ-PROD-001, REQ-A11Y-001.

## Hero

### Purpose

Communicate page relevance and primary action in the first viewport.

### Variants

- Homepage hero: brand/service area promise.
- Service hero: service + area + CTA.
- Problem hero: symptom + reassurance + CTA.
- Location hero: location + local proof statement.
- Pricing/contact hero: expectation setting + CTA.

### Content fields / props

`eyebrow`, `headline`, `subheadline`, `primaryCta`, `secondaryCta`, `media`, `trustChips`.

### Behavior

- Avoid heavy sliders.
- Hero media must have explicit dimensions and meaningful alt text if informative.
- Use optimized eager loading only for true LCP image.

### Related requirements

REQ-PROD-001, REQ-PERF-001, REQ-A11Y-001, REQ-UI-001.

## Trust bar

### Purpose

Show fast credibility signals.

### Variants

Certification chips, review rating placeholder, years/experience placeholder, local proof chip.

### Content fields / props

`label`, `icon`, `source`, `link`, `approvalStatus`.

### Rules

- Do not fabricate reviews, certifications or years of experience.
- Use placeholder labels during build if final proof assets are not available.

### Related requirements

REQ-UI-001, REQ-SEO-001.

## Card components

### Purpose

Represent services, problems, locations and works consistently.

### Variants

- Service card: title, short description, icon/image, CTA.
- Problem card: symptom title, short problem statement, recommended service.
- Location card: city, short proof summary, CTA.
- Work card: service, location, image, summary.

### States

Default, hover, focus, current/selected if used, empty/missing image.

### Accessibility

Cards must not contain nested interactive elements that conflict. Either whole card link or separate explicit CTA, not both unless carefully structured.

### Related requirements

REQ-PROD-002, REQ-PROD-003A, REQ-A11Y-001.

## Pricing anchors

### Purpose

Display from/range prices transparently with caveats.

### Content fields / props

`title`, `priceType`, `fromPrice`, `rangeMin`, `rangeMax`, `currency`, `includedItems`, `caveatText`, `relatedService`.

### Rules

- Every displayed price must include caveat text.
- Hide fixed-price style unless data explicitly marks it fixed and approved.

### Related requirements

REQ-FORM-001, REQ-UI-001.

## FAQ accordion

### Purpose

Make FAQs scannable and schema-ready.

### Behavior

- Each item has button-controlled disclosure.
- Keyboard accessible with Tab/Enter/Space.
- Open state is reflected with `aria-expanded`.
- FAQ content remains available to crawlers.

### Related requirements

REQ-SEO-001, REQ-A11Y-001.

## Before/after proof block

### Purpose

Show service outcomes without relying on stock imagery.

### Behavior

- MVP should prefer static side-by-side or stacked images.
- Do not use drag-only comparison as the only interaction.
- If a slider is later added, provide button alternative.

### Privacy

Must respect consent status and avoid private customer identifiers.

### Related requirements

REQ-UI-001, REQ-A11Y-001, REQ-PRIV-001.

## Inquiry/contact form

### Purpose

Capture qualified leads safely and accessibly.

### Fields

Name, phone, email, preferred contact method, service interest, location, message, consent/privacy acknowledgement where legally required, honeypot field, Turnstile widget/site key.

### States

- Idle.
- Validating/submitting.
- Field validation error.
- Anti-spam failure.
- Server failure.
- Success.

### Accessibility

- Labels are visible, not placeholder-only.
- Errors are tied to fields with `aria-describedby`.
- Success/error summary is announced to assistive tech.
- Touch targets meet minimum size.

### Security/privacy

- Do not expose Supabase service role key, Resend API key or Turnstile secret.
- Do not log full message body.

### Related requirements

REQ-FORM-001, REQ-FORM-002, REQ-SEC-001, REQ-PRIV-001, REQ-A11Y-001.

## Footer

### Purpose

Provide site navigation, contact placeholders, legal/privacy links and local SEO support.

### Rules

- Public NAP/contact data must remain placeholder until approved.
- Include privacy link if forms/analytics exist.
- Avoid stuffing location keywords.

### Related requirements

REQ-SEO-001, REQ-PRIV-001.
