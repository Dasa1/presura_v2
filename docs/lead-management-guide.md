# Lead Management & Retention Guide

Status: VERIFIED (Phase 6 Handover)  
Audience: owner / maintainer / sales responder  
Project: technical-service-website / Presura

## Purpose

This guide outlines the data lifecycle of customer inquiries submitted through the website, detailing lead schemas, notification flows, security boundaries, and GDPR-compliant data retention parameters.

---

## Approved Lead Stack & Data Flows

1. **User Action**: The visitor fills in the contact form on `/kontakt` and completes spam verification (Cloudflare Turnstile).
2. **API Endpoint**: The browser submits the form data strictly to the server-side endpoint `POST /api/inquiries`.
3. **Validations**: The endpoint performs input validation, rate limiting, and honeypot checks.
4. **Database Write**: The endpoint writes the record to the `inquiries` table in Supabase.
5. **Notification Dispatch**: Upon successful database save, the endpoint dispatches a notification email via Resend to the company inbox.

*Note: In local staging builds without credentials, database inserts and email alerts operate under a Mock posture (NOT VERIFIED).*

---

## Verified Database Schema (`inquiries`)

| Field Name | Type | Constraint | Purpose / Notes |
| :--- | :---: | :---: | :--- |
| `id` | UUID | PRIMARY KEY | Unique identifier (generated via `gen_random_uuid()`). |
| `created_at` | TIMESTAMPTZ | NOT NULL | Records when the lead was submitted (UTC). |
| `name` | TEXT | NOT NULL | Customer's full name. |
| `phone` | TEXT | NULLABLE | Contact telephone (required if `email` is blank). |
| `email` | TEXT | NULLABLE | Contact e-mail (required if `phone` is blank). |
| `contact_method` | TEXT | NOT NULL | Preferred contact method (`phone` or `email`). |
| `service_interest`| TEXT | NOT NULL | Service category selected. |
| `location` | TEXT | NOT NULL | Customer city or area. |
| `message` | TEXT | NOT NULL | Detailed problem description (max 1000 characters). |
| `retention_delete_after`| TIMESTAMPTZ| NOT NULL | Auto-calculated date for deletion (created_at + 6 months). |
| `status` | TEXT | NOT NULL | Lead workflow status (default `'active'`). |

---

## API Validation Boundaries

To reduce user friction and maximize lead capture rates, the API enforces a flexible contact requirement:
* **Rule**: Submissions require a **Name, Message, and at least one contact channel (Phone OR Email)**.
* **Reasoning**: Requiring both fields is blocked (marked as NEEDS HUMAN APPROVAL due to conversion friction). The form validation will reject submissions only if both Phone and Email are left blank.

---

## Row-Level Security (RLS) Posture

To protect customer privacy:
* **Anonymous Access**: Public anonymous INSERT and SELECT operations directly against the Supabase table are strictly disabled.
* **Access Boundary**: Write operations are authorized exclusively through the server-side Astro endpoint using high-privilege `SUPABASE_SERVICE_ROLE_KEY` tokens. No client-side code can query the database.

---

## GDPR Retention & Deletion Policy

* **6-Month Retention Limit**: All inquiry records stored in Supabase must be anonymized or deleted exactly 6 months after submission (`retention_delete_after` timestamp).
* **Deletions Executions**: Automated cron script configurations are dependent on production host environments. During staging, deletion checks remain **NOT VERIFIED**. Manual database exports/prunes must be executed by administrators regularly.
