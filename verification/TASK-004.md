# Verification Evidence — TASK-004

**Task ID:** TASK-004  
**Date:** 2026-06-10  
**Status:** PASS  

---

## 1. Description & Context

TASK-004 requires building the core visual design layout, responsive shell elements, accessible focus boundaries, and a sticky mobile CTA. All visual elements must utilize safety placeholders to prevent dialing or external contact triggers on fake/unapproved values.

---

## 2. Reusable Layout & Component Architecture

We created and integrated the following components under the standard page wrapper:
1. `Header.astro` — Collapsible navigation layout with responsive menus.
2. `Footer.astro` — Contains the dynamic copyright year, simple sitemaps, and static non-clickable NAP text placeholders.
3. `StickyCTA.astro` — Floating bottom panel shown only on mobile screen viewports.
4. `TrustBar.astro` — Centered badges representing experience and technical certifications.
5. `ServiceCard.astro` — Service list displays.
6. `ProblemCard.astro` — Symptom educational boxes.
7. `FAQAccordion.astro` — Interactive disclosures using button triggers and panels.

---

## 3. Safe Contact/CTA Implementations

### A. Non-Functional Sticky Mobile CTA (`src/components/StickyCTA.astro`)
The float CTA button renders as a disabled anchor utilizing preventDefault triggers to avoid initiating fake dialing on devices:
```html
<a 
  href="#" 
  aria-disabled="true"
  onclick="event.preventDefault();"
  class="flex-1 inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-bold rounded-lg bg-orange-600/50 text-slate-300 cursor-not-allowed select-none focus:outline-none"
  role="button"
  aria-label="Nazovite servis (Onemogućeno - placeholder)"
>
  Nazovite: PHONE_PLACEHOLDER
</a>
```

### B. Header / Navigation CTA Button (`src/components/Header.astro`)
The main menu uses a disabled button tag:
```html
<button 
  type="button" 
  aria-disabled="true" 
  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg bg-orange-600/50 text-slate-300 cursor-not-allowed select-none focus:outline-none min-h-[44px]"
>
  Servis: PHONE_PLACEHOLDER
</button>
```

---

## 4. Accessibility Check

- **Accessible Focus**: Checked, global styling outlines active focus bounds:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-brand-accent);
    outline-offset: 2px;
  }
  ```
- **Keyboard Tab-through**: Verified. Tabbing moves focus sequentially through:
  1. Skip link ("Preskoči na sadržaj")
  2. Logo anchor
  3. Menu anchors (Services, Problems, Locations, Pricing, Works)
  4. Cards/CTAs
  5. Footer sitemap links
- **Disclosure States**: The FAQ accordion dynamically manages `aria-expanded="false" -> "true"` states on click events.
- **Touch Target Dimensions**: Navigation links, mobile toggles, and buttons meet or exceed the minimum size of **44x44 CSS pixels** to prevent click overlap.
- **Motion Restraint**: Simple CSS toggles and layouts avoid large LCP shifting.
