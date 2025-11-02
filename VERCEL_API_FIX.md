# Vercel API Fix - Career Page Not Loading

## Problem
The career page was not loading job data from Supabase in Vercel deployment, even though it worked locally.

## Root Cause
The original setup had a single monolithic `/api/index.ts` file that tried to handle all routes. Vercel's serverless function architecture requires individual route files or proper catch-all routing.

## Solution Applied
Created individual serverless function files for each API endpoint:

```
api/
├── jobs/
│   ├── index.ts       → /api/jobs (GET)
│   └── [id].ts        → /api/jobs/:id (GET)
├── contact.ts         → /api/contact (POST)
├── job-applications.ts → /api/job-applications (POST)
└── upload-resume.ts   → /api/upload-resume (POST)
```

## What Changed

### Before
- Single `/api/index.ts` with Express app
- Vercel couldn't route requests properly
- API calls returned 404 or failed silently

### After
- Individual serverless function files
- Each file exports a default handler function
- Proper Vercel routing with dynamic routes `[id].ts`

## Deployment Steps

### 1. Verify Environment Variables in Vercel

Make sure these are set in your Vercel dashboard:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
RESEND_CAREERS_EMAIL=careers@yourcompany.com
```

### 2. Deploy to Vercel

```bash
# Option 1: Push to git (auto-deploy)
git add .
git commit -m "Fix API routes for Vercel serverless"
git push

# Option 2: Deploy with CLI
vercel --prod
```

### 3. Test API Endpoints

After deployment, test each endpoint:

**Test Jobs API:**
```bash
# Should return array of jobs
curl https://your-site.vercel.app/api/jobs

# Should return specific job
curl https://your-site.vercel.app/api/jobs/JOB_ID_HERE
```

**Test Contact API:**
```bash
curl -X POST https://your-site.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### 4. Check Career Page

Visit: `https://your-site.vercel.app/career`

Expected result: Job listings should load without errors

## Debugging Tips

### If Jobs Still Don't Load

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click latest deployment → Functions tab
   - Check logs for `/api/jobs/index` function

2. **Check Browser Console:**
   ```javascript
   // Open browser console on career page
   // Look for network errors
   ```

3. **Test API Directly:**
   ```bash
   # This should return jobs data
   curl https://your-site.vercel.app/api/jobs
   ```

4. **Verify Supabase Connection:**
   - Check environment variables are set correctly
   - Verify Supabase URL and Key are correct
   - Check Supabase project is accessible

### Common Issues

#### Issue: "Database not configured" error

**Solution:**
```bash
# Re-add environment variables in Vercel
vercel env add SUPABASE_URL production
vercel env add SUPABASE_ANON_KEY production

# Redeploy
vercel --prod
```

#### Issue: CORS errors in browser console

**Solution:**
Each API file already has CORS headers configured:
```typescript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
```

If still getting CORS errors, check that OPTIONS requests are handled.

#### Issue: 404 Not Found for API routes

**Solution:**
- Verify files are in `/api` directory
- Check file names match expected routes
- Make sure each file exports a default function
- Redeploy: `vercel --prod --force`

#### Issue: Jobs array is empty

**Solution:**
1. Check Supabase has jobs with `status='published'`
2. Verify RLS policies allow anonymous reads
3. Check Supabase logs for query errors
4. Test query directly in Supabase SQL Editor:
   ```sql
   SELECT * FROM absoutsjobs WHERE status = 'published';
   ```

## API File Structure Explained

### GET /api/jobs (jobs/index.ts)

```typescript
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Handle CORS
  // 2. Check method (GET only)
  // 3. Query Supabase for published jobs
  // 4. Transform data to frontend format
  // 5. Return JSON response
}
```

### GET /api/jobs/:id (jobs/[id].ts)

```typescript
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Handle CORS
  // 2. Check method (GET only)
  // 3. Extract ID from req.query.id
  // 4. Query Supabase for specific job
  // 5. Return job details or 404
}
```

### POST /api/contact (contact.ts)

```typescript
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Handle CORS
  // 2. Check method (POST only)
  // 3. Rate limiting check
  // 4. Validate input with Zod schema
  // 5. Save to Supabase
  // 6. Send email via Resend
  // 7. Return success response
}
```

## Performance Considerations

### Serverless Function Cold Starts
- First request may be slower (cold start)
- Subsequent requests are faster (warm)
- Vercel caches functions for ~5 minutes

### Database Connection Pooling
- Each function creates its own Supabase client
- Supabase handles connection pooling automatically
- No manual connection management needed

### Rate Limiting
- Implemented using in-memory Map
- Resets on function cold start
- Consider using Redis for production

## Monitoring

### Enable Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `client/src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your app
<Analytics />
```

### Check Function Logs

```bash
# Real-time logs
vercel logs --follow

# Specific deployment
vercel logs <deployment-url>
```

### Monitor Supabase

1. Go to Supabase Dashboard
2. Click "API" → "Logs"
3. Filter by table: `absoutsjobs`
4. Check for errors or slow queries

## Success Indicators

✅ Career page loads without "Error loading" message
✅ Job listings appear on the page
✅ "Apply Now" buttons work
✅ No console errors in browser
✅ API endpoints return 200 status
✅ Vercel function logs show successful requests

## Next Steps

1. **Test all pages** - Verify home, services, about, contact all work
2. **Test forms** - Submit contact form and job application
3. **Check emails** - Verify Resend emails are received
4. **Monitor performance** - Use Vercel Analytics
5. **Set up alerts** - Configure Vercel to notify on errors

## Support

If issues persist:
1. Check Vercel function logs
2. Check Supabase logs
3. Test API endpoints with curl
4. Verify environment variables
5. Create issue with error logs

---

**Last Updated:** 2025-11-02
**Status:** Fixed and Deployed
