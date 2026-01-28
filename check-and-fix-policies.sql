-- First, check what policies exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename = 'contact_form_submissions';

-- Drop ALL policies (run this after checking above)
DROP POLICY IF EXISTS "contact_form_anon_insert" ON contact_form_submissions;
DROP POLICY IF EXISTS "contact_form_auth_select" ON contact_form_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_form_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_form_submissions;
DROP POLICY IF EXISTS "Allow public inserts" ON contact_form_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_form_submissions;

-- Create simple permissive policy for INSERT
CREATE POLICY "anon_insert_policy" 
ON contact_form_submissions
AS PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);

-- Create simple permissive policy for SELECT
CREATE POLICY "auth_select_policy"
ON contact_form_submissions
AS PERMISSIVE
FOR SELECT
TO authenticated
WITH CHECK (true);

-- Verify policies were created
SELECT policyname, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contact_form_submissions';
