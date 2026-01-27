import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug logging
console.log('🔧 Initializing Supabase Client...')
console.log('📍 Supabase URL:', supabaseUrl)
console.log('🔑 Supabase Key exists:', !!supabaseKey)

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials!')
  console.error('URL:', supabaseUrl)
  console.error('Key:', supabaseKey ? 'exists' : 'missing')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('✅ Supabase client initialized successfully')
