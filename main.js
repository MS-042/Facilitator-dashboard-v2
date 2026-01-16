import { createClient } from '@supabase/supabase-js';

window.connect = function connect(url, anonKey) {
  return createClient(url, anonKey);
};
