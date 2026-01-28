# Contact Form Supabase RLS Integration - Midmortem

**Date:** January 27, 2026  
**Status:** IN PROGRESS - RLS Policy Blocking Submissions  
**Severity:** HIGH - Contact form non-functional in production

---

## Executive Summary

Attempted to integrate Supabase database backend for the contact form at `https://99pablos.com/contact`. The table was created successfully, API route implemented, and frontend wired up. However, Row Level Security (RLS) policies are blocking anonymous form submissions despite multiple attempts to configure them correctly.

---

## Timeline of Events

### Initial Setup (Successful)
1. ✅ **Supabase Already Configured**
   - Package: `@supabase/supabase-js` v2.93.2 already installed
   - Credentials: Found in codebase (`https://cvaujkhxgzrqwqjofgls.supabase.co`)
   - Client: Existing Supabase client in `lib/blog.ts`

2. ✅ **Created Database Schema**
   - File: `supabase-contact-form-schema.sql`
   - Table: `contact_form_submissions`
   - Columns: `id`, `name`, `email`, `message`, `created_at`, `updated_at`
   - Indexes: On `created_at` and `email`
   - RLS: Enabled with policies for public inserts

3. ✅ **Created API Route**
   - File: `app/api/contact/route.ts`
   - Validates: name, email, message
   - Sanitizes: trims input, lowercases email
   - Returns: JSON success/error responses

4. ✅ **Updated Contact Form**
   - File: `app/contact/page.tsx`
   - Changed: Mock submission → API POST to `/api/contact`
   - Error handling: Shows toast on success/failure
   - Form reset: Clears fields on success

5. ✅ **Deployed to Production**
   - Committed to GitHub
   - Deployed to Fly.io
   - Environment variables set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Configuration Issues (Ongoing)

6. ❌ **Next.js Config Issues**
   - Problem: Added `trailingSlash: true` and `assetPrefix` causing:
     - API route 404 errors
     - CORS issues with fonts
   - Fix: Removed both settings
   - Result: API route accessible but still failing

7. ❌ **RLS Policy Blocking Inserts**
   - Error: `"new row violates row-level security policy for table 'contact_form_submissions'"`
   - Code: `42501` (Insufficient privilege)
   - Attempted fixes:
     - Created policy: `"Allow public inserts"` with `WITH CHECK (true)`
     - Recreated policy targeting `anon` role specifically
     - Dropped and recreated with unique names
     - All attempts still blocking

8. 🔄 **Current State**
   - Table: ✅ Created and accessible
   - API Route: ✅ Working and receiving requests
   - Frontend: ✅ Submitting to API correctly
   - RLS Policies: ❌ Blocking anonymous inserts
   - Test: Disabled RLS temporarily to isolate issue

---

## Technical Details

### Error Messages

**Production Logs (Fly.io):**
```
Supabase error: {
  code: '42501',
  details: null,
  hint: null,
  message: 'new row violates row-level security policy for table "contact_form_submissions"'
}
```

**Browser Console:**
```
POST https://99pablos.fly.dev/api/contact 500 (Internal Server Error)
Form submission error: Error: Failed to submit form
```

### SQL Attempts

**Attempt 1 - Original Schema:**
```sql
CREATE POLICY "Allow public inserts" ON contact_form_submissions
  FOR INSERT
  WITH CHECK (true);
```

**Attempt 2 - Explicit Anon Role:**
```sql
CREATE POLICY "Enable insert for anon users" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Attempt 3 - Drop and Recreate:**
```sql
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_form_submissions;
CREATE POLICY "contact_form_anon_insert" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Current Test - RLS Disabled:**
```sql
ALTER TABLE contact_form_submissions DISABLE ROW LEVEL SECURITY;
```

---

## Root Cause Analysis

### Hypotheses

1. **Policy Not Applied to Anon Role**
   - Supabase client uses `anon` role with anon key
   - Policy may not be targeting correct role
   - Status: TESTING

2. **Policy Syntax Issue**
   - `WITH CHECK (true)` may not be sufficient
   - May need additional conditions
   - Status: UNLIKELY (syntax is standard)

3. **Supabase Client Configuration**
   - Client may not be using anon key correctly
   - Environment variables may not be set in production
   - Status: UNLIKELY (env vars confirmed set)

4. **Table Ownership/Permissions**
   - Table may be owned by different role
   - Anon role may not have INSERT grant
   - Status: POSSIBLE

---

## Impact Assessment

### User Impact
- **Severity:** HIGH
- **Affected Users:** All visitors attempting to use contact form
- **User Experience:** Form appears to work but shows error toast
- **Workaround:** None available to users

### Business Impact
- **Lead Generation:** BLOCKED - Cannot receive contact form submissions
- **Professional Image:** NEGATIVE - Form appears broken
- **Revenue Impact:** MEDIUM - Potential clients cannot reach out

---

## Attempted Solutions

| Solution | Status | Result |
|----------|--------|--------|
| Create RLS policy with `WITH CHECK (true)` | ❌ Failed | Still blocking |
| Target `anon` role explicitly | ❌ Failed | Still blocking |
| Drop and recreate policies | ❌ Failed | Still blocking |
| Remove Next.js config issues | ✅ Success | API accessible |
| Set Fly.io environment variables | ✅ Success | Credentials available |
| Disable RLS temporarily | 🔄 Testing | Awaiting test results |

---

## Next Steps

### Immediate Actions
1. **Test with RLS Disabled**
   - Verify form works without RLS
   - Confirms RLS is the blocker
   - Timeline: IMMEDIATE

2. **If RLS is Confirmed Blocker:**
   - Check table grants: `GRANT INSERT ON contact_form_submissions TO anon;`
   - Verify policy application: Query `pg_policies` table
   - Check Supabase dashboard for policy UI

3. **If RLS Disabled Works:**
   - Re-enable RLS
   - Create policy via Supabase UI instead of SQL
   - Test incrementally

### Alternative Approaches

**Option A: Service Role Key (Not Recommended)**
- Use service role key instead of anon key
- Bypasses RLS entirely
- Security risk: Exposes full database access

**Option B: API-Only Validation**
- Keep RLS disabled
- Rely on API route validation only
- Less secure but functional

**Option C: Supabase Auth**
- Implement anonymous auth sessions
- Use authenticated role for inserts
- More complex but more secure

---

## Lessons Learned

### What Went Well
1. ✅ Supabase already configured - saved setup time
2. ✅ API route implementation clean and working
3. ✅ Frontend integration straightforward
4. ✅ Deployment process smooth
5. ✅ Quick identification of RLS as blocker

### What Went Wrong
1. ❌ Added unnecessary Next.js config causing side issues
2. ❌ RLS policies not working despite standard syntax
3. ❌ Multiple policy creation attempts without verification
4. ❌ Didn't verify policy application before deploying

### What to Improve
1. 🔄 Test RLS policies in development before production
2. 🔄 Use Supabase dashboard to verify policy creation
3. 🔄 Check `pg_policies` table after each policy change
4. 🔄 Consider disabling RLS during initial testing
5. 🔄 Document exact Supabase version and behavior

---

## Files Created/Modified

### New Files
- `supabase-contact-form-schema.sql` - Table schema with RLS
- `fix-rls-policy.sql` - First policy fix attempt
- `fix-rls-policy-v2.sql` - Second policy fix attempt
- `check-policies.sql` - Query to verify policies
- `disable-rls-test.sql` - Temporary RLS disable
- `app/api/contact/route.ts` - API endpoint
- `CONTACT_FORM_SETUP.md` - Setup documentation

### Modified Files
- `app/contact/page.tsx` - Form submission logic
- `next.config.ts` - Removed problematic settings
- `.env.local` - Supabase credentials (already present)

---

## Open Questions

1. Why are standard RLS policies not working for anon role?
2. Does the anon role have INSERT grant on the table?
3. Are there conflicting policies from table creation?
4. Is the Supabase client using the correct role?
5. Should we use Supabase UI instead of SQL for policies?

---

## Status: AWAITING TEST RESULTS

**Current Action:** Testing form with RLS disabled  
**Expected Outcome:** Form should work if RLS is the blocker  
**Next Decision Point:** Based on test results, choose path forward

---

**Document Version:** 1.0  
**Last Updated:** January 27, 2026, 10:08 PM PST  
**Author:** Cascade AI  
**Reviewer:** Pending resolution
