import { createClient } from "@supabase/supabase-js";

function cleanEnvVar(val: string | undefined): string {
  if (!val) return "";
  let cleaned = val;
  try {
    cleaned = decodeURIComponent(cleaned);
  } catch (e) {
    // ignore
  }
  return cleaned
    .replace(/%0[ad]/gi, '')
    .replace(/[\r\n\t\s]/g, '')
    .trim();
}

const DEFAULT_URL = "https://zoxqjjuokxiyxusqapvv.supabase.co";
const DEFAULT_KEY = "sb_publishable_si6AX2a9wvUOanT9rzYO3g_Z00nBcWv";

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

const cleanedUrl = cleanEnvVar(rawUrl);
const cleanedKey = cleanEnvVar(rawKey);

const supabaseUrl = cleanedUrl || DEFAULT_URL;
const supabaseAnonKey = cleanedKey || DEFAULT_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
