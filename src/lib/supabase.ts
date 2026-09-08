import { createClient } from "@supabase/supabase-js";

function cleanEnvVar(val: string | undefined): string {
  if (!val) return "";
  let cleaned = String(val).trim();
  cleaned = cleaned.replace(/%(0a|0d|20)/gi, '');
  try {
    cleaned = decodeURIComponent(cleaned);
  } catch (e) {
    // ignore
  }
  return cleaned
    .replace(/%(0a|0d|20)/gi, '')
    .replace(/[\r\n\t\s\u200B-\u200D\uFEFF]/g, '')
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
