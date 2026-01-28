-- Verify RLS is enabled on contact_form_submissions table
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_form_submissions';

-- If RLS is disabled, re-enable it
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Verify policies exist (they should still be there)
SELECT policyname, roles, cmd
FROM pg_policies
WHERE tablename = 'contact_form_submissions';
