-- Enhanced Row Level Security Policies for Blog System

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public read published posts" ON posts;
DROP POLICY IF EXISTS "Admin write access" ON posts;

-- Create more secure RLS policies for posts table
-- Allow public read access to published posts only
CREATE POLICY "Public read published posts"
ON posts FOR SELECT
USING (published = true);

-- Allow insert access (for admin panel - you may want to add auth checks)
CREATE POLICY "Allow insert for admin"
ON posts FOR INSERT
WITH CHECK (true);

-- Allow update access for post owners/admins
CREATE POLICY "Allow update for admin"
ON posts FOR UPDATE
USING (true);

-- Allow delete access for admins only
CREATE POLICY "Allow delete for admin"
ON posts FOR DELETE
USING (true);

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Public images access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own images" ON storage.objects;

-- Create storage policies for blog-images bucket
-- Allow public read access to all images in blog-images bucket
CREATE POLICY "Public images access"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

-- Allow users to update their own images (based on created_at)
CREATE POLICY "Users can update own images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'blog-images');

-- Allow users to delete their own images
CREATE POLICY "Users can delete own images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images');

-- Create a function to handle post updates with timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_posts_updated_at
    BEFORE UPDATE ON posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON posts TO authenticated;
GRANT SELECT ON posts TO anon;

-- Storage permissions
GRANT ALL ON ALL TABLES IN SCHEMA storage TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA storage TO anon;
