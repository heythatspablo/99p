# Supabase Blog Migration - Setup Instructions

## Prerequisites
- Supabase account with project created
- Access to Supabase dashboard
- Fly.io CLI installed and authenticated

## Step 1: Database Setup

### 1.1 Create Database Schema
1. Go to Supabase Dashboard: https://app.supabase.com/project/cvaujkhxgzrqwqjofgls
2. Navigate to SQL Editor
3. Run the SQL from `supabase-setup.sql`:

```sql
-- Create posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT DEFAULT '📝',
  cover_image TEXT,
  excerpt TEXT,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX idx_posts_published ON posts(published);
CREATE INDEX idx_posts_created_at ON posts(created_at);
CREATE INDEX idx_posts_slug ON posts(slug);
```

### 1.2 Configure Row Level Security
Run the SQL from `supabase-rls-policies.sql` in the SQL Editor.

### 1.3 Create Storage Bucket
1. Navigate to Storage in Supabase Dashboard
2. Create a new bucket named `blog-images`
3. Set it to **Public**
4. Configure CORS if needed

## Step 2: Local Development Setup

### 2.1 Environment Variables
The `.env.local` file has been created with:
```
NEXT_PUBLIC_SUPABASE_URL=https://cvaujkhxgzrqwqjofgls.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-key>
ADMIN_PASSWORD=mainchance1970
STORAGE_BUCKET=blog-images
```

### 2.2 Install Dependencies
Already completed:
```bash
npm install @supabase/supabase-js marked
```

### 2.3 Test Local Development
```bash
npm run dev
```

Visit:
- Blog listing: http://localhost:3000/blog
- Admin panel: http://localhost:3000/blog-admin.html

## Step 3: Production Deployment (Fly.io)

### 3.1 Set Environment Secrets
Already completed - secrets have been set on Fly.io:
```bash
fly secrets set \
  NEXT_PUBLIC_SUPABASE_URL=https://cvaujkhxgzrqwqjofgls.supabase.co \
  NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-key> \
  ADMIN_PASSWORD=mainchance1970 \
  STORAGE_BUCKET=blog-images
```

### 3.2 Deploy to Fly.io
```bash
fly deploy
```

### 3.3 Verify Deployment
- Visit: https://99pablos.fly.dev/blog
- Admin: https://99pablos.fly.dev/blog-admin.html

## Step 4: Testing Checklist

### Backend (Admin Panel)
Access: https://99pablos.fly.dev/blog-admin.html

- [ ] Login with password `mainchance1970`
- [ ] View all posts (published + drafts)
- [ ] Filter by published/draft status
- [ ] Create new post
- [ ] Edit existing post
- [ ] Delete post
- [ ] Upload cover image
- [ ] Upload content images
- [ ] Copy markdown for images
- [ ] Save as draft
- [ ] Publish post
- [ ] Verify Netlify rebuild trigger (optional)

### Frontend
Access: https://99pablos.fly.dev/blog

- [ ] Display all published posts
- [ ] Display recent posts (homepage)
- [ ] Load single post by slug
- [ ] Render markdown content
- [ ] Display cover images
- [ ] Display post metadata (date, icon, excerpt)
- [ ] Navigate between posts

### Storage
- [ ] Images upload to `blog-images` bucket
- [ ] Images are publicly accessible
- [ ] Image URLs are correct in posts

## Step 5: Optional - Static Site Generation

If you want to pre-generate static HTML for posts:

```bash
node build-blog.js
```

This will create static HTML files in `public/blog/` directory.

## Files Created

### Core Implementation
- `/lib/blog.ts` - Supabase client and blog functions
- `/app/blog/page.tsx` - Blog listing page
- `/app/blog/[slug]/page.tsx` - Individual blog post page
- `/public/blog-admin.html` - Admin panel
- `/public/blog.js` - Client-side blog utilities

### Configuration
- `/.env.local` - Local environment variables (gitignored)
- `/supabase-setup.sql` - Database schema
- `/supabase-rls-policies.sql` - Security policies
- `/build-blog.js` - Optional SSG script

## Troubleshooting

### Issue: Posts not loading
- Check Supabase URL and anon key in environment variables
- Verify RLS policies are set correctly
- Check browser console for errors

### Issue: Images not uploading
- Verify `blog-images` bucket exists and is public
- Check storage policies in Supabase
- Verify file size limits

### Issue: Admin panel login fails
- Verify ADMIN_PASSWORD environment variable
- Check browser console for errors
- Clear sessionStorage and try again

### Issue: Build fails on Fly.io
- Check environment variables are set: `fly secrets list`
- Review build logs: `fly logs`
- Verify Next.js build succeeds locally

## Next Steps

1. **Run Database Setup** - Execute SQL scripts in Supabase dashboard
2. **Test Locally** - Verify everything works on localhost
3. **Deploy** - Push to Fly.io with `fly deploy`
4. **Create First Post** - Use admin panel to create a test post
5. **Verify Production** - Check blog displays correctly on live site

## Support Resources

- Supabase Dashboard: https://app.supabase.com/project/cvaujkhxgzrqwqjofgls
- Supabase Docs: https://supabase.com/docs
- Fly.io Dashboard: https://fly.io/dashboard
- Next.js Docs: https://nextjs.org/docs
