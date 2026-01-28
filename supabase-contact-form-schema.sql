-- Create contact_form_submissions table
CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_created_at 
ON contact_form_submissions(created_at DESC);

-- Create index on email for lookups
CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_email 
ON contact_form_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_form_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON contact_form_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_form_submissions_updated_at 
  BEFORE UPDATE ON contact_form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
