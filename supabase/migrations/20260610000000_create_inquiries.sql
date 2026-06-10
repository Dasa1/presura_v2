-- Migration: Create inquiries table with 6-month retention metadata
-- Status: STAGING TEMPLATE (DO NOT RUN DIRECTLY WITHOUT EXPLICIT APPROVAL)

CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  phone TEXT, -- Optional contact method (Phone or Email required at API level)
  email TEXT, -- Optional contact method (Phone or Email required at API level)
  contact_method TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT NOT NULL,
  retention_delete_after TIMESTAMP WITH TIME ZONE DEFAULT (timezone('utc'::text, now()) + INTERVAL '6 months') NOT NULL,
  status TEXT DEFAULT 'active' NOT NULL
);

-- Index on retention date for automated cleanup queries
CREATE INDEX IF NOT EXISTS idx_inquiries_retention_delete ON public.inquiries(retention_delete_after);

-- Enable Row-Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Block public anonymous reads (SELECT)
CREATE POLICY "Block anonymous reads" ON public.inquiries 
  FOR SELECT USING (false);

-- Block public anonymous writes (INSERT). Only server-side POST endpoint can insert using service role key.
CREATE POLICY "Block anonymous inserts" ON public.inquiries 
  FOR INSERT WITH CHECK (false);
