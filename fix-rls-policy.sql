-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON contact_form_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_form_submissions;

-- Recreate the insert policy to allow anonymous inserts
CREATE POLICY "Enable insert for anon users" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Recreate the select policy for authenticated users only
CREATE POLICY "Enable read for authenticated users" ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);
