# Maintenance Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: maintainer / owner  
Project: technical-service-website / Presura

## Purpose

This guide explains routine maintenance after launch. It does not add new product scope.

## Weekly checks

- Check the website loads on mobile and desktop.
- Submit one safe test inquiry if allowed and verify expected behavior.
- Check Resend delivery status for failed notifications.
- Review Supabase inquiry storage for unexpected spam volume.
- Check Sanity content changes for accidental drafts or broken references.
- Check analytics for traffic or conversion anomalies.

## Monthly checks

- Review inquiry retention and deletion/anonymization expectations.
- Check dependencies for security updates.
- Review Vercel deployment logs for build failures.
- Review Sanity user access and remove users who no longer need access.
- Review Supabase access and API key handling.
- Review content quality on service/problem/location pages.
- Confirm local pages still have unique proof/value.

## Quarterly checks

- **Run accessibility smoke checks:**
  - Verify keyboard focus sequence is logical (using `Tab` and `Shift+Tab`).
  - Check that `:focus-visible` outlines are visually distinct on all interactive components.
  - Test accordion elements toggle correctly via `Enter` / `Space`.
  - Validate form errors associate programmatically using `aria-describedby` and screen reader announcements occur.
- **Run performance checks and compare against targets:**
  - Check that new media/images upload with explicit width/height parameters.
  - Review that below-fold image elements use lazy loading.
  - Confirm page size stays minimal and target CWV (LCP <= 1.5s, CLS = 0) are monitored.
- Review SEO metadata and structured data.
- Review privacy/cookie/analytics behavior.
- Review backup/export posture for Sanity and Supabase.
- Confirm account ownership and emergency contacts remain current.

## Security maintenance

- Rotate credentials after personnel changes.
- Enforce least privilege in Sanity, Supabase, Vercel, Resend and analytics accounts.
- Keep 2FA enabled where available.
- Never share admin accounts.
- Never paste API keys into Sanity content fields or docs.

## Content maintenance

See:

- `/docs/cms-editor-guide.md`
- `/docs/content-update-guide.md`
- `/docs/seo-maintenance-guide.md`

## Lead management maintenance

See `/docs/lead-management-guide.md`.

## NOT VERIFIED

- Automated retention job exists. NOT VERIFIED.
- Backup/export procedure exists. NOT VERIFIED.
- Monitoring/alerting setup exists. NOT VERIFIED.
- Final owner of each maintenance activity. NEEDS HUMAN APPROVAL.
