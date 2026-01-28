# Contact Form Supabase Setup Guide

## ✅ What's Been Completed

1. **API Route Created**: `/app/api/contact/route.ts`
   - Handles POST requests from the contact form
   - Validates input (name, email, message)
   - Inserts data into Supabase

2. **Contact Form Updated**: `/app/contact/page.tsx`
   - Now submits to `/api/contact` endpoint
   - Shows success/error toasts
   - Clears form on successful submission

3. **SQL Schema Created**: `supabase-contact-form-schema.sql`
   - Ready to run in Supabase SQL Editor

## 🔧 Setup Instructions

### Step 1: Create the Supabase Table

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `cvaujkhxgzrqwqjofgls`
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**
5. Copy and paste the contents of `supabase-contact-form-schema.sql`
6. Click **Run** to execute the SQL

### Step 2: Verify the Table

1. Go to **Table Editor** in the left sidebar
2. You should see a new table: `contact_form_submissions`
3. The table should have these columns:
   - `id` (UUID, Primary Key)
   - `name` (TEXT)
   - `email` (TEXT)
   - `message` (TEXT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

### Step 3: Set Environment Variables in Fly.io

The Supabase credentials are already in your `.env.local` file, but you need to add them to Fly.io:

```bash
flyctl secrets set NEXT_PUBLIC_SUPABASE_URL="https://cvaujkhxgzrqwqjofgls.supabase.co"
flyctl secrets set NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw"
```

### Step 4: Test the Contact Form

1. Visit: https://99pablos.com/contact
2. Fill out the form with test data
3. Click "Send Message"
4. You should see a success toast
5. Check Supabase Table Editor to verify the submission was saved

## 🔒 Security Features

- **Row Level Security (RLS)**: Enabled on the table
- **Public Inserts**: Anyone can submit the form
- **Authenticated Reads**: Only authenticated users can view submissions
- **Email Validation**: API validates email format before saving
- **Input Sanitization**: All inputs are trimmed and email is lowercased

## 📊 Viewing Submissions

To view form submissions in Supabase:

1. Go to **Table Editor**
2. Select `contact_form_submissions`
3. You'll see all submissions with timestamps

Or query via SQL:

```sql
SELECT * FROM contact_form_submissions 
ORDER BY created_at DESC;
```

## 🚀 What Happens Next

Once deployed, every contact form submission will:
1. Be validated by the API
2. Be saved to Supabase
3. Show a success message to the user
4. Clear the form for the next submission

## 🐛 Troubleshooting

**Form submission fails:**
- Check browser console for errors
- Verify Supabase credentials are set in Fly.io
- Check Supabase logs for any database errors

**Table not found:**
- Make sure you ran the SQL schema in Supabase
- Verify the table name is exactly `contact_form_submissions`

**RLS policy errors:**
- The SQL schema includes policies for public inserts
- If you get permission errors, check the RLS policies in Supabase
