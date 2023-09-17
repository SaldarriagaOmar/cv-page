import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jrumwklzqgjmialglypi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydW13a2x6cWdqbWlhbGdseXBpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDg4Mjk1MSwiZXhwIjoyMDEwNDU4OTUxfQ.g7nZZKHoVtU5nOfnQ2wHYoxDJ0pkmhxp54OnAiW4JFM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;