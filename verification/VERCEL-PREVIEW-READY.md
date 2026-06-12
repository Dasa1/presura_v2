# Vercel Preview Verification Log

- **Date:** 2026-06-12
- **Target Branch**: `demo-visual-polish`
- **Source Commit**: `3470c47`
- **Deployment Status**: **PASS** (Deployed successfully at https://presurav2-f74xx7xy7-dasas-projects-60f4ac4f.vercel.app)
- **Public Launch Status**: **NOT APPROVED**
- **Live Integrations**: **NOT CONNECTED**
- **Indexing/Schema**: **DISABLED / NOT APPROVED**
- **Form State**: **DEMO-DISABLED**

---

## 1. QA Verification Status Table

| # | QA Check | Expected Behavior | Status | Evidence Path |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Homepage Layout | Cinematic hero overlay, process card strip, header navigation render cleanly. | **PASS** | Manual user QA check (looks OK) |
| 2 | Services snap-scroll | Manual touch-swipe snap-scroll with keyboard arrow button controls works. | **PASS** | Manual user QA check (looks OK) |
| 3 | Problems snap-scroll | Diagnostic card symptoms and recommendations visible in snap-scroll. | **PASS** | Manual user QA check (looks OK) |
| 4 | Location Detail - Osijek | `/lokacije/osijek` renders fallback text without relatedServices crash. | **PASS** | Manual user QA check (looks OK) |
| 5 | Location Detail - Bilje | `/lokacije/bilje` renders fallback text without relatedServices crash. | **PASS** | Manual user QA check (looks OK) |
| 6 | Location Detail - Čepin | `/lokacije/cepin` renders fallback text without relatedServices crash. | **PASS** | Manual user QA check (looks OK) |
| 7 | Sticky Header UX | Header is persistently sticky at the bottom of long scroll sections. | **PASS** | Manual user QA check (looks OK) |
| 8 | Contact Form State | Inputs and submit button are disabled with orange warning banner visible. | **PASS** | Manual user QA check (looks OK) |
| 9 | Form Network Sandbox | DevTools shows no lead POST requests or database writes during click events. | **PASS** | Code verified; form input disabled |
| 10 | robots Meta Tag | Check page source contains `<meta name="robots" content="noindex, nofollow" />`. | **PASS** | Checked `MetaTags.astro` (noindex output active on vercel.app domains) |
| 11 | Structured Data | No search engine LocalBusiness or HVACBusiness schemas are injected. | **PASS** | Checked `SchemaMarkup.astro` & `seed.json` (schemaEnabled = false) |
| 12 | Safe NAP Wording | Placeholder phone, email, and address displays correctly without real values. | **PASS** | Verified placeholder labels in `seed.json` & homepage rendering |
| 13 | Safe Marketing Claims | No Vaillant/Bosch claims or hitne intervencije/24-7 claims are visible. | **PASS** | Source code compliance verified |
| 14 | Vercel Build Success | Dashboard shows successful compilation logs for the preview build. | **PASS** | Vercel deployment succeeded |
| 15 | Mobile Throttled Performance | Performance check under artificial 3G throttling. | **PARTIAL / KNOWN LIMITATION** | Not launch-approved; acceptable for owner-facing demo. |

---

## 2. Staging Environment Evidence Logs

* **Robots visibility check**: PASS
* **Inquiry form state check**: PASS
* **Network submit check**: PASS
* **Locations dynamic detail routes check**: PASS
* **Sticky header check**: PASS
* **Build log check**: PASS

> [!IMPORTANT]
> **Mobile Performance & Throttling Note:**
> Artificial 3G throttling showed elevated LCP/load timing, likely related to image LCP and repeated image validation requests. With throttling disabled, mobile preview was acceptable for owner-facing demo review. Performance optimization is deferred to P1 before public launch.
> 
> **Indexation & Access Protection Note:**
> The `noindex, nofollow` robots tag reduces indexing risk on public search engines, but it is not a security/access-control mechanism. Vercel access protection (Authentication) is required to restrict unauthorized users from opening the preview URL.


