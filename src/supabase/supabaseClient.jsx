import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://ajhrjkmsantxeoeycrqw.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqaHJqa21zYW50eGVvZXljcnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NTg3MDIsImV4cCI6MjA0MTEzNDcwMn0.oIDk3nBN4S01ePEmWpldzphTewG0zvr90Lz7EBMTnng";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
