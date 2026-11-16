const SUPABASE_URL = "https://hpryzmogmghekphwxjrq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_KFRvSrzIqldy3qbRCY9l_w_t3Oy3CVI";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);