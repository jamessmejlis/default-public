import { createClient } from '@supabase/supabase-js'

export async function createSupabaseClientSsr() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}