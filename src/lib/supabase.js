import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey || supabaseAnonKey.includes('REPLACE_WITH') || supabaseAnonKey.includes('...')) {
    console.error('supabaseUrl', supabaseUrl)
    console.error('supabaseAnonKey', supabaseAnonKey)
    throw new Error('Supabase is not configured. Set VITE_SUPABASE_URL and the complete VITE_SUPABASE_ANON_KEY in .env.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
