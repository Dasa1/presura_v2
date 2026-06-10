# Verification Evidence — TASK-008

**Task ID:** TASK-008  
**Date:** 2026-06-10  
**Status:** PASS (Mock/Code verification corrected and re-run)  

---

## 1. Description & Context

TASK-008 requires implementing the contact form UI, managing dynamic field loops, supporting client-side validation logic, displaying success/error notification panels, and enforcing accessible landmarks.

*Correction Note:* Prior evidence was based on a broken mock model where `MockSupabaseClient` threw a runtime exception. The mock setup has been fixed and local form submissions have been re-verified to succeed synchronously under mock DEV mode.

---

## 2. Form Interface Structure

The form resides in [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) and includes:
- **Inputs**: Name, Message, Phone, Email, Location select dropdown, and Service select dropdown.
- **Dynamic Options**: Dropdown menus dynamically query published services and location data from the mock client at build time.
- **GDPR Statement**: Prominent text stating:
  *"Slanjem ovog obrasca slažete se s obradom osobnih podataka u svrhu obrade Vašeg upita i izrade informativne ponude. Vaši podaci pohranjuju se na rok od maksimalno 6 mjeseci..."*

---

## 3. UI Validation & Safety States

### A. Phone OR Email Contact validation
- **JavaScript Validator**:
  ```javascript
  if (!phone && !email) {
    showError('Molimo unesite barem jedan kontakt kanal (Broj telefona ili E-mail)...');
    return;
  }
  ```
- **Constraint**: Only Name and Message are marked as required in input markup. Validation permits submission if phone is provided and email is blank, or vice versa.

### B. Accessibility Features Enforced
- **Dynamic Loading states**: The submit button uses `aria-disabled="true"` and `disabled = true` during submissions, adding a visual spinner.
- **Dynamic Error Panel**: Displays errors at the top of the form, shifting focus using `aria-describedby` structures to ensure screen-reader announcements.
- **Focus Ring visibility**: Inputs inherit accessible borders on focus:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-brand-accent);
    outline-offset: 2px;
  }
  ```

---

## 4. Verification Check

- [x] **Component Form Created:** Verified [src/components/InquiryForm.astro](file:///d:/Presura_v2/src/components/InquiryForm.astro) builds correctly.
- [x] **GDPR Privacy Notice Visible:** Verified notice text is rendered at the bottom of the form container.
- [x] **Touch Target Sizes Checked:** Confirm buttons and input select options satisfy 44x44px requirements.
- [x] **Local form submission works:** Tested locally in DEV mode via Mock database responses. Live integration remains **NOT VERIFIED**.
