import { createClient } from '@supabase/supabase-js';

// Read environment variables - these must be prefixed with VITE_ to be accessible in the browser
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid Supabase configuration
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

// Use provided environment variables or throw an error if missing
export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || '', 
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

export type Database = {
  public: {
    Tables: {
      trips: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          destination: string;
          start_date: string;
          end_date: string;
          params_json: any;
          itinerary_json: any;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          destination: string;
          start_date: string;
          end_date: string;
          params_json: any;
          itinerary_json: any;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          destination?: string;
          start_date?: string;
          end_date?: string;
          params_json?: any;
          itinerary_json?: any;
        };
      };
    };
  };
};