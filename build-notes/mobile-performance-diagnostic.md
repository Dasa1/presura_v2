# Mobile Loading Performance Diagnostic

- **Date**: 2026-06-12
- **Branch**: `demo-visual-polish`
- **Target Commit**: `3470c47`
- **Optimization Status**: **REVERTED / DEFERRED** (No performance optimization patch is approved at this time)
- **Manual QA Status**: **PARTIAL / KNOWN LIMITATION** (Acceptable for internal/owner demo with throttling disabled; not launch-approved)

This document records the mobile performance bottlenecks identified on the homepage and the decisions regarding optimization patches.

---

## 1. Identified Bottlenecks (For Future Reference)

### Bottleneck 1: Hero Image LCP Delay
* **Problem**: The hero section image is loaded via Tailwind CSS class `bg-[url('/demo-assets/demo-hero-ambience.webp')]`. Because the image is defined in CSS, the browser cannot discover it until the stylesheet is downloaded and parsed. This delays LCP (Largest Contentful Paint) under throttled network conditions.
* **Proposed Fix (Deferred)**: Replace the CSS background with an eager HTML `<img>` tag placed absolutely behind the hero overlay, using attributes: `loading="eager"`, `decoding="async"`, `fetchpriority="high"`, `width="1920"`, `height="1080"`.

### Bottleneck 2: Potential Cumulative Layout Shift (CLS) on Cards
* **Problem**: Card images in `ServiceCard.astro` and `ProblemCard.astro` are lazy-loaded but lack explicit width and height attributes in the baseline code.
* **Proposed Fix (Deferred)**: Add explicit `width="640"` and `height="360"` attributes (standard 16:9 ratio) and `decoding="async"` to both components' `<img>` elements to reserve layout space.

---

## 2. Current Status & Manual QA Results

* **Local Dev & Preview Behavior**:
  - Slower loading is observed *only* under artificial 3G throttling.
  - With throttling disabled, mobile loading feels acceptable and performs well for demonstration purposes.
  - Similar slowness on localhost is related to dev environment image loading.
* **Current Posture**:
  - No performance optimization patch is approved for integration at this time. All source code changes have been reverted to maintain the baseline.
  - Preview is suitable for owner-facing visual demo review under Vercel preview protection.
  - Public launch remains **NOT APPROVED**.
  - Performance optimization remains a **P1 priority** before any public launch or broader sharing.

> [!IMPORTANT]
> **Mobile Performance & Throttling Note:**
> Artificial 3G throttling showed elevated LCP/load timing, likely related to image LCP and repeated image validation requests. With throttling disabled, mobile preview was acceptable for owner-facing demo review. Performance optimization is deferred to P1 before public launch.
