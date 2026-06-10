# Verification Evidence — TASK-006

**Task ID:** TASK-006  
**Date:** 2026-06-10  
**Status:** PASS (Mock/Code verification)  

---

## 1. Description & Context

TASK-006 requires defining a Supabase schema for minimal inquiries/lead storage with a 6-month retention policy and secure access bounds. Real database execution is locked (marked as NOT VERIFIED) until staging/production credentials exist.

---

## 2. Table Migrations

The table schema is defined inside [supabase/migrations/20260610000000_create_inquiries.sql](file:///d:/Presura_v2/supabase/migrations/20260610000000_create_inquiries.sql):
- **Columns**: `id` (UUID key), `created_at` (TIMESTAMPTZ), `name` (TEXT), `phone` (TEXT, nullable), `email` (TEXT, nullable), `contact_method` (TEXT), `service_interest` (TEXT), `location` (TEXT), `message` (TEXT), `retention_delete_after` (TIMESTAMPTZ defaulting to +6 months), `status` (TEXT).
- **Index**: `idx_inquiries_retention_delete` is created on `retention_delete_after` to support retention sweeps.

---

## 3. RLS Policies Enforced

To safeguard private leads:
1. **Enable RLS**: `ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;`
2. **Block Anonymous INSERT**: Direct client-side inserts from browsers are blocked:
   ```sql
   CREATE POLICY "Block anonymous inserts" ON public.inquiries FOR INSERT WITH CHECK (false);
   ```
3. **Block Anonymous SELECT**: No public selects are allowed:
   ```sql
   CREATE POLICY "Block anonymous reads" ON public.inquiries FOR SELECT USING (false);
   ```
4. **Server-Only Posture**: Writes are only permitted through backend endpoints authenticates via private keys.

---

## 4. Verification Check

- [x] **Migration File Created:** Verified [supabase/migrations/20260610000000_create_inquiries.sql](file:///d:/Presura_v2/supabase/migrations/20260610000000_create_inquiries.sql) exists.
- [x] **Direct Anonymous Write Blocked:** Confirmed RLS policy restricts INSERT to false for public roles.
- [x] **No Direct DB Connection Executed:** Confirmed no SQL migrations or database connections were run. Storing live database entries remains **NOT VERIFIED**.
