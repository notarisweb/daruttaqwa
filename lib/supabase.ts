import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Pengecekan agar build worker tidak crash saat prerendering
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Peringatan: Kredensial Supabase Darut Taqwa belum lengkap di environment.");
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);