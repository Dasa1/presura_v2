# Implementation Plan — Post-Demo Owner Feedback Phase

- **Project**: Presura v2
- **Objective**: Establish the technical and operational workflows required to process, classify, and implement changes based on owner feedback from the demo.
- **Status**: **DRAFT / PLAN READY FOR HUMAN APPROVAL**
- **Public Launch Status**: **NOT APPROVED**

---

## 1. Phase Purpose
The purpose of this plan is to ensure that all feedback collected from the owner-facing demo review is logged, classified, and implemented safely without violating safety boundaries or MVP scope. This phase governs the transition from visual preview feedback to pre-launch configuration.

---

## 2. Inputs Required
- Completed `owner-feedback-intake-checklist.md`.
- Specific design adjustments, real text copy, and approved asset packages (logos, reviews, images).
- Explicit human approvals for data updates or claim insertions.

---

## 3. Owner Feedback Collection
All feedback must be collected from the owner via written communication or recorded meeting notes, then copied directly into the checklist format before any code modifications are proposed or analyzed.

---

## 4. Feedback Classification
Every request received from the owner must be classified into one of the following categories:
* **Must fix before owner approval:** Critical corrections to layouts or navigation requested by the owner for signing off on visual design.
* **Nice to have for demo:** Aesthetic adjustments that improve look-and-feel but are not functional blockers.
* **Production-only:** Tasks that must only be completed during final production setup (e.g., configuring final domains, removing preview protections).
* **Requires real NAP/legal data:** Content updates replacing placeholders with real name, address, phone, OIB, or IBAN numbers.
* **Requires proof/certification/brand approval:** References to manufacturer brands (Vaillant, Bosch) or technical claims that require written proof of authority/qualification.
* **Security/privacy sensitive:** Contact form configurations, Turnstile secrets setup, or database credentials.
* **SEO/indexing sensitive:** Dynamic schema injections or search engine indexing parameters (`sitemap.xml`, removal of `noindex`).
* **Out of MVP scope:** Any request that introduces CRM pipelines, multi-client scaling, SaaS features, or advanced workforce dashboards.
* **Launch blocker:** Deficiencies in content, layout, or accessibility that prevent a public release.
* **Not verified:** Items requiring additional user QA validation before they can be considered resolved.

---

## 5. Human Decision Review
All classified feedback items must be presented to the user (human reviewer) for verification before any coding tasks are drafted. The human reviewer must confirm:
- The accuracy of classifications.
- The validity of any certification or branding claims.
- The approval to proceed with specific code updates.

---

## 6. Approved Change List
An explicit, immutable checklist of approved changes must be written to the project records before coding starts.
No task is to be executed unless it resides in the approved change list.

---

## 7. Operational Rules & Boundaries

> [!CAUTION]
> **No-Task Rule Until Approval:**
> The AI agent (Antigravity) must NOT generate code edits, task files, or implementation scripts until the owner feedback has been classified, recorded in the approved change list, and explicitly approved by the human supervisor.

* **Placeholder Rule:**
  Do NOT replace placeholder business, contact, legal, or reference data with real values without explicit user instructions and validation.
* **Sandbox Integrity:**
  Do NOT enable live contact forms, Turnstile tokens, Resend APIs, or database connections. All integrations must remain in mock/sandbox modes.
* **Indexing and SEO Block:**
  Do NOT activate schema markup (`schemaEnabled: true`) or remove indexing blocks (`noindex, nofollow` meta tags).
* **Public Release Restriction:**
  Public launch remains **NOT APPROVED** until final launch checklist evidence is fully gathered and signed off.

---

## 8. Classification Workflows

### What Can Be Implemented Immediately (Upon Human Approval)
- Minor text typos in non-data content blocks.
- Spacing, padding, responsive layout grid adjustments, or color adjustments.
- Navigation link URL corrections.

### What Requires Real Data Approval
- Updating phone numbers, email display tags, physical address copy, or business registration identifiers (OIB/IBAN).

### What Requires Legal/Proof Approval
- Adding manufacturer logos (e.g. Vaillant, Bosch) or licensing trust badges.
- Mentioning official emergency responses or specific utility certifications.

### What Is Production-Only
- Mapping custom apex domains.
- Setting live database and email credentials in production environment portals.
- Setting `robots.txt` and meta tags to `index, follow`.

### What Is Out of Scope
- Customer account logins or booking portals.
- Integration with third-party invoicing/service software.
- Massive programmatic local landing page generation.

---

## 9. Antigravity Task Generation Preconditions
Before Antigravity can initialize any post-feedback implementation tasks (generating a new `task.md`), the following must be true:
1. `owner-feedback-intake-checklist.md` is completed and committed to git.
2. The `post-demo-owner-feedback-plan.md` has been updated with the final approved change list.
3. The human reviewer has approved the implementation plan in the chat logs.

---

## 10. Recommended Next Phases
1. **Phase A:** Visual and typo corrections (Safe visual-only pass).
2. **Phase B:** Integration of real NAP, legal, and GDPR details (Data insertion pass).
3. **Phase C:** Live API credentials, performance audit, and SEO preparation (Security and Performance pass).
4. **Phase D:** Production launch pipeline initialization (Release pass).

---

## 11. Launch Readiness Preconditions
A public production release cannot occur until:
- [ ] Lighthouse mobile audits show acceptable performance metrics.
- [ ] Form submissions successfully pass security/turnstile validations.
- [ ] All brand claims are legally cleared and verified.
- [ ] SEO schemas match structural requirements.
- [ ] Custom domain resolves correctly.
