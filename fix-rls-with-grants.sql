-- Grant INSERT permission to anon role (this was missing!)
GRANT INSERT ON contact_form_submissions TO anon;

-- Grant USAGE on the sequence for the id column
GRANT USAGE ON SEQUENCE contact_form_submissions_id_seq TO anon;

-- Re-enable RLS
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "contact_form_anon_insert" ON contact_form_submissions;
DROP POLICY IF EXISTS "contact_form_auth_select" ON contact_form_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_form_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_form_submissions;

-- Create the insert policy for anon users
CREATE POLICY "contact_form_anon_insert" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create the select policy for authenticated users
CREATE POLICY "contact_form_auth_select" ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);
