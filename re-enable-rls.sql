-- Re-enable Row Level Security on contact_form_submissions table
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Verify RLS is now enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_form_submissions';

-- Verify existing policies are still in place
SELECT policyname, roles, cmd, permissive
FROM pg_policies
WHERE tablename = 'contact_form_submissions';
