import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxddmxchtpewcefqxfll.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4ZGRteGNodHBld2NlZnF4ZmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTE0NTQsImV4cCI6MjAxODM2NzQ1NH0.vDWPRgb4TOzaioHL4T5sQKMMao0fquFF04gxsBGfqSQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
