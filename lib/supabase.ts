// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Pastikan variabel environment sudah disetting di .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Peringatan: URL atau Anon Key Supabase belum dikonfigurasi!")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)