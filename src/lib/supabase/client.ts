import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL || '';
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';

const isPlaceholder = 
  !supabaseUrl || 
  !supabaseServiceKey || 
  supabaseUrl.includes('PLACEHOLDER') || 
  supabaseServiceKey.includes('PLACEHOLDER');

// Serverless Mock Client fallback to allow builds and offline testing without live DB credentials
class MockSupabaseClient {
  from(table: string) {
    return {
      insert: async (data: any) => {
        // Redact values from logs
        console.log(`[MockSupabaseClient] Mock insert into table: ${table} (Lead info redacted for privacy)`);
        return { data: [data], error: null };
      }
    };
  }
}

// Fails safely in production if environment variables are missing
class BrokenProductionClient {
  from(table: string) {
    return {
      insert: async (data: any) => {
        console.error(`[Database] Production database configuration error: missing or placeholder credentials.`);
        return { data: null, error: { message: 'Database client not configured. Action rejected.' } };
      }
    };
  }
}

export const supabaseClient = (isPlaceholder && import.meta.env.DEV)
  ? new MockSupabaseClient() as any
  : (isPlaceholder
      ? new BrokenProductionClient() as any
      : createClient(supabaseUrl, supabaseServiceKey));
