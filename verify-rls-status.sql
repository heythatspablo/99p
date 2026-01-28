-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_form_submissions';

-- Try a test insert as anon role
SET ROLE anon;
INSERT INTO contact_form_submissions (name, email, message)
VALUES ('Test User', 'test@example.com', 'Test message');
RESET ROLE;

-- Check if the insert worked
SELECT * FROM contact_form_submissions ORDER BY created_at DESC LIMIT 1;
