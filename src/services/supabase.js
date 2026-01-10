import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://itqiueefnfycygbuzlhq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cWl1ZWVmbmZ5Y3lnYnV6bGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1ODMzMzQsImV4cCI6MjA4MDE1OTMzNH0.mb88aBt5AId-VBu_piC-_Dvkd8UATBzE84q5TbKF6LM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
