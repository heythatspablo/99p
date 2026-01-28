-- Grant ALL permissions to anon role on the table
GRANT ALL ON contact_form_submissions TO anon;

-- Grant ALL permissions to authenticated role
GRANT ALL ON contact_form_submissions TO authenticated;

-- Verify the grants were applied
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name='contact_form_submissions';
