import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sqcfzwbdfmfcrtwxqmof.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxY2Z6d2JkZm1mY3J0d3hxbW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5NTIzNzYsImV4cCI6MjAwNzUyODM3Nn0.tUAlh_cn7-fDCEjm15DKn_PMp3Q-ivBH9shHw5bG248';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;