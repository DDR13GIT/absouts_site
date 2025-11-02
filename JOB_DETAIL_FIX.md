# Job Detail Page "No Job Found" Issue - Troubleshooting Guide

## Problem
Jobs are displaying on the career page, but clicking "Show Details" shows "Job Not Found" error.

## Diagnostic Steps

### Step 1: Test Database Connection

Visit this URL to check your database:
```
https://your-site.vercel.app/api/test-db
```

This will show:
- ✅ Environment variables are set correctly
- ✅ Supabase connection is working
- ✅ All jobs in the database (with their IDs and statuses)
- ✅ Published jobs specifically

**What to check:**
- Does it show `"success": true`?
- Are there jobs listed?
- Do the job IDs match what you see on the career page?
- Are the jobs marked as `"status": "published"`?

### Step 2: Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click **Deployments** → Latest deployment
3. Click **Functions** tab
4. Find `/api/jobs/[id]` function
5. Check the logs for errors

**Look for these log messages:**
```
Request query: { id: 'xxx-xxx-xxx' }
Job ID from query: xxx-xxx-xxx
Fetching job with ID: xxx-xxx-xxx
Job check result: ...
```

### Step 3: Test API Endpoint Directly

Get a job ID from your career page (inspect element or check database), then test:

```bash
# Replace JOB_ID with an actual UUID from your database
curl https://your-site.vercel.app/api/jobs/JOB_ID
```

**Expected response** (success):
```json
{
  "id": "xxx-xxx-xxx",
  "title": "Job Title",
  "location": "Remote",
  ...
}
```

**Error response** (if failing):
```json
{
  "error": "Job not found",
  "id": "xxx-xxx-xxx",
  "exists": true/false,
  "status": "draft"/"published"/null
}
```

### Step 4: Check Browser Network Tab

1. Open career page
2. Open browser DevTools (F12)
3. Go to Network tab
4. Click "Show Details" on a job
5. Find the API request to `/api/jobs/xxx`

**What to check:**
- Status code (should be 200, if 404 then issue confirmed)
- Request URL (is the job ID correct?)
- Response (what error message?)

## Common Causes & Solutions

### Cause 1: Jobs Not Published

**Symptom:** Test endpoint shows jobs exist but with `"status": "draft"`

**Solution:** Update jobs in Supabase to have `status='published'`

```sql
-- In Supabase SQL Editor
UPDATE absoutsjobs
SET status = 'published'
WHERE status != 'published';
```

### Cause 2: Row Level Security (RLS) Policy Issue

**Symptom:** Test endpoint works but individual job fetch fails

**Solution:** Check RLS policies in Supabase

1. Go to Supabase Dashboard → Table Editor → `absoutsjobs`
2. Click the 🔒 RLS icon
3. Verify this policy exists:

```sql
-- Policy: Allow public read for published jobs
CREATE POLICY "Public read access for published jobs"
ON absoutsjobs
FOR SELECT
USING (status = 'published');
```

If missing, add it:

```sql
-- Enable RLS
ALTER TABLE absoutsjobs ENABLE ROW LEVEL SECURITY;

-- Add policy
CREATE POLICY "Public read access for published jobs"
ON absoutsjobs
FOR SELECT
USING (status = 'published');
```

### Cause 3: ID Format Mismatch

**Symptom:** Job ID looks strange or incorrect format

**Solution:** Verify job IDs are valid UUIDs

Check database:
```sql
SELECT id, job_title FROM absoutsjobs LIMIT 5;
```

IDs should look like: `550e8400-e29b-41d4-a716-446655440000`

If IDs are different format, update the API query to match.

### Cause 4: CORS Issues

**Symptom:** Browser console shows CORS error

**Solution:** Already fixed in updated `api/jobs/[id].ts` with CORS headers:
```typescript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
```

Redeploy if you don't have these headers.

### Cause 5: Environment Variables Not Set

**Symptom:** Test endpoint shows `"hasUrl": false` or `"hasKey": false`

**Solution:** Set environment variables in Vercel

```bash
vercel env add SUPABASE_URL production
vercel env add SUPABASE_ANON_KEY production
vercel --prod
```

## Quick Fixes to Try

### Fix 1: Publish All Jobs

```sql
UPDATE absoutsjobs SET status = 'published';
```

### Fix 2: Clear Vercel Cache and Redeploy

```bash
vercel --prod --force
```

### Fix 3: Check API File Exists

Verify this file exists:
```
/api/jobs/[id].ts
```

The `[id]` in brackets is important for dynamic routing!

### Fix 4: Test With Known Job ID

1. Get a job ID from career page:
   - Right-click on "Show Details" button
   - Inspect element
   - Look for `data-testid="button-details-xxx"`

2. Test directly:
   ```bash
   curl https://your-site.vercel.app/api/jobs/[paste-id-here]
   ```

## Verification Checklist

After applying fixes:

- [ ] Test endpoint (`/api/test-db`) shows success
- [ ] Jobs have `status='published'` in database
- [ ] RLS policies allow SELECT for published jobs
- [ ] Direct API call to `/api/jobs/[id]` returns 200
- [ ] Browser network tab shows successful API response
- [ ] Job detail page loads without error
- [ ] All job details display correctly

## Still Not Working?

If issues persist after trying all fixes:

1. **Check Vercel Function Logs** - Look for specific error messages
2. **Test API endpoint** - Use curl to test directly
3. **Verify database** - Make sure jobs exist with correct status
4. **Check browser console** - Look for JavaScript errors
5. **Compare working vs broken** - Test with multiple job IDs

## Debug Commands Reference

```bash
# Test database connection
curl https://your-site.vercel.app/api/test-db

# Test specific job
curl https://your-site.vercel.app/api/jobs/YOUR_JOB_ID

# Check all jobs
curl https://your-site.vercel.app/api/jobs

# View Vercel logs
vercel logs --follow

# Force redeploy
vercel --prod --force
```

## Expected Working Flow

1. ✅ Career page loads → Shows job listings
2. ✅ Click "Show Details" → Navigates to `/job/[id]`
3. ✅ Job detail page → Fetches from `/api/jobs/[id]`
4. ✅ API → Queries Supabase with job ID
5. ✅ Response → Returns job details as JSON
6. ✅ Page → Displays job information

## Contact Support

If you've tried everything and it still doesn't work:

1. Run `/api/test-db` and save the output
2. Check Vercel function logs for `/api/jobs/[id]`
3. Note the exact error message from browser console
4. Check Supabase logs for query errors
5. Create an issue with all this information

---

**Last Updated:** 2025-11-02
**Status:** Debugging in progress
