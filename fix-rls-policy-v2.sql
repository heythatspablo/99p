-- First, drop ALL existing policies on the table
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_form_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_form_submissions;
DROP POLICY IF EXISTS "Allow public inserts" ON contact_form_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_form_submissions;

-- Now create the correct policies with unique names
CREATE POLICY "contact_form_anon_insert" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "contact_form_auth_select" ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);
