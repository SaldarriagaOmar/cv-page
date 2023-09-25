import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xsmjbyboucylbbnizgko.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzbWpieWJvdWN5bGJibml6Z2tvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTYwNzA3OSwiZXhwIjoyMDExMTgzMDc5fQ.V8JyMbPWC4LV26cr8Eki0lkUiFXlf9RIOeUoj30wQ0Q';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;