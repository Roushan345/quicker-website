import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klrgkpiwdeobrhxbxeoy.supabase.co'
const supabaseAnonKey = 'sb_publishable_Nb8To7QEq6pucqvF3to04g_FzZN5K0B'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
