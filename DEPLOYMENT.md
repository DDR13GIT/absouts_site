# Vercel Deployment Guide

This guide provides detailed steps for deploying the Absouts website to Vercel with Supabase and Resend integration.

## Quick Deploy

The fastest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/absouts-site)

## Prerequisites Checklist

Before deploying, ensure you have:

- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] GitHub/GitLab/Bitbucket account with your repository
- [ ] Supabase project created and configured ([See SUPABASE_SETUP.md](./SUPABASE_SETUP.md))
- [ ] Resend account with API key ([resend.com](https://resend.com))
- [ ] All environment variables ready

## Environment Variables Required

```bash
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# Resend Email
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev  # or your verified domain
RESEND_TO_EMAIL=your-email@example.com
RESEND_CAREERS_EMAIL=careers@yourcompany.com

# Optional
NODE_ENV=production
```

## Deployment Methods

### Method 1: Vercel Dashboard (Recommended for First Deploy)

#### Step 1: Push to Git

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Project"**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Choose the repository
5. Click **"Import"**

#### Step 3: Configure Project

Vercel will auto-detect settings. Verify:

- **Framework Preset**: Other (or leave as detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

#### Step 4: Add Environment Variables

In the Vercel dashboard:

1. Click **"Environment Variables"**
2. Add each variable from the list above
3. Select all environments (Production, Preview, Development)
4. Click **"Add"** for each variable

#### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-5 minutes for build completion
3. Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI (For Updates and CI/CD)

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login

```bash
vercel login
```

#### Step 3: Deploy to Preview

```bash
vercel
```

This creates a preview deployment for testing.

#### Step 4: Add Environment Variables

```bash
# Add all required environment variables
vercel env add SUPABASE_URL production
vercel env add SUPABASE_ANON_KEY production
vercel env add RESEND_API_KEY production
vercel env add RESEND_FROM_EMAIL production
vercel env add RESEND_TO_EMAIL production
vercel env add RESEND_CAREERS_EMAIL production
```

You'll be prompted to enter values for each.

#### Step 5: Deploy to Production

```bash
vercel --prod
```

## Post-Deployment Configuration

### 1. Update Supabase Settings

In your Supabase dashboard:

#### Authentication Settings
1. Navigate to **Authentication** → **URL Configuration**
2. **Site URL**: `https://your-domain.vercel.app`
3. **Redirect URLs**: Add `https://your-domain.vercel.app/**`

#### API Settings (Optional)
1. Navigate to **Settings** → **API**
2. Add your Vercel domain to allowed origins if needed

### 2. Update Resend Settings

#### Verify Domain (Recommended)

1. Go to Resend dashboard → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `absouts.com`)
4. Add DNS records shown in Resend:
   - **TXT** record for verification
   - **MX** records for receiving
   - **CNAME** records for DKIM
5. Wait for verification (up to 48 hours)

#### Update Environment Variables

After domain verification:

```bash
vercel env add RESEND_FROM_EMAIL production
# Enter: noreply@yourdomain.com (or preferred email)
```

Then redeploy:

```bash
vercel --prod
```

### 3. Custom Domain Setup (Optional)

#### Add Domain in Vercel

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `absouts.com`)
4. Choose domain type:
   - **Primary**: Main domain
   - **Redirect**: Redirect to primary

#### Update DNS Records

Add these records in your domain registrar:

**For Root Domain (absouts.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For Subdomain (www.absouts.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Wait for Propagation

- DNS changes can take 24-48 hours
- Check status in Vercel dashboard
- Test with: `dig absouts.com` or `nslookup absouts.com`

## Vercel Configuration Explained

### vercel.json Breakdown

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",

  "rewrites": [
    // API routes handled by serverless function
    { "source": "/api/:path*", "destination": "/api/:path*" },
    // All other routes serve index.html (SPA)
    { "source": "/(.*)", "destination": "/index.html" }
  ],

  "headers": [
    // Security headers for all pages
    // CORS headers for API routes
    // Cache headers for static assets
  ]
}
```

### Project Structure for Vercel

```
absouts-site/
├── api/
│   └── index.ts          # Serverless function for all API routes
├── client/               # React frontend
├── dist/
│   └── public/          # Built static files (auto-generated)
├── server/              # Original server code (reference)
└── vercel.json          # Vercel configuration
```

## Monitoring and Debugging

### View Deployment Logs

#### In Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Select your project
3. Click on latest deployment
4. View **Build Logs** tab

#### Via CLI
```bash
vercel logs <deployment-url>
```

### View Runtime Logs

#### Function Logs
1. In Vercel dashboard → **Deployments**
2. Click on deployment
3. Click **"Functions"** tab
4. Select `/api/index`
5. View execution logs

#### Real-time Logs
```bash
vercel logs --follow
```

### Check Build Status

```bash
vercel inspect <deployment-url>
```

## Troubleshooting

### Build Failures

#### Error: "Cannot find module"

**Cause**: Missing dependency

**Solution**:
```bash
# Install missing package locally
npm install <package-name>

# Commit and push
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push

# Or trigger rebuild in Vercel
vercel --prod
```

#### Error: "TypeScript compilation failed"

**Cause**: Type errors in code

**Solution**:
```bash
# Check types locally
npm run check

# Fix errors, then deploy
```

#### Error: "Build exceeded maximum duration"

**Cause**: Build taking too long

**Solution**:
- Upgrade Vercel plan for longer build times
- Optimize build process
- Check for infinite loops in build scripts

### Runtime Errors

#### API Routes Return 404

**Symptoms**: `/api/jobs` returns 404 Not Found

**Solution**:
1. Verify `vercel.json` exists in root
2. Check `api/index.ts` is properly exported
3. Redeploy:
   ```bash
   vercel --prod --force
   ```

#### API Routes Return 500

**Symptoms**: Internal Server Error

**Solution**:
1. Check Function Logs in Vercel dashboard
2. Verify environment variables are set
3. Test endpoint locally:
   ```bash
   npm run dev
   curl http://localhost:8080/api/jobs
   ```

#### Database Connection Errors

**Symptoms**: "Missing Supabase environment variables" or "Failed to fetch jobs"

**Solution**:
1. Verify environment variables in Vercel:
   ```bash
   vercel env ls
   ```
2. Check values match Supabase dashboard
3. Re-add if needed:
   ```bash
   vercel env rm SUPABASE_URL production
   vercel env add SUPABASE_URL production
   ```
4. Redeploy:
   ```bash
   vercel --prod
   ```

#### Email Not Sending

**Symptoms**: Contact form submits but no email received

**Solution**:
1. Check Resend API key is valid
2. Verify domain is verified (if not using `onboarding@resend.dev`)
3. Check Resend logs: [resend.com/logs](https://resend.com/logs)
4. Test with curl:
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

### Performance Issues

#### Slow API Response Times

**Solution**:
1. Check Supabase performance metrics
2. Add database indexes (see `supabase-setup.sql`)
3. Enable connection pooling in Supabase
4. Consider upgrading Supabase plan

#### Slow Page Loads

**Solution**:
1. Enable Vercel Analytics
2. Check bundle size:
   ```bash
   npm run build
   # Check dist/public size
   ```
3. Optimize images
4. Enable Edge caching

### Environment Variable Issues

#### Variables Not Available

**Symptoms**: `process.env.VARIABLE_NAME` is undefined

**Solution**:
1. Verify variable is set in Vercel dashboard
2. Check variable is added to all environments
3. Rebuild to pick up new variables:
   ```bash
   vercel --prod --force
   ```

#### Wrong Variable Values

**Solution**:
1. List all variables:
   ```bash
   vercel env ls
   ```
2. Pull to check locally:
   ```bash
   vercel env pull .env.local
   cat .env.local
   ```
3. Update if needed:
   ```bash
   vercel env rm VARIABLE_NAME production
   vercel env add VARIABLE_NAME production
   ```

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys:

- **Production**: Commits to `main` branch
- **Preview**: Commits to any branch
- **Pull Requests**: Preview deployments for each PR

### Configure Branch Deployments

In Vercel dashboard:

1. Go to **Settings** → **Git**
2. Set **Production Branch**: `main`
3. Enable **"Automatic Deployments"**
4. Optional: Set **Deploy Hooks** for manual triggers

### Deploy Hooks

Create webhook for manual deployments:

1. **Settings** → **Git** → **Deploy Hooks**
2. Click **"Create Hook"**
3. Name: "Manual Deploy"
4. Branch: `main`
5. Copy webhook URL

Trigger deployment:
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/...
```

## Security Best Practices

### 1. Environment Variables

- ✅ Never commit `.env` files
- ✅ Use Vercel's encrypted environment variables
- ✅ Rotate API keys regularly
- ✅ Use different keys for production/preview

### 2. API Security

- ✅ Rate limiting is enabled (see `server/middleware/rate-limiter.ts`)
- ✅ Input sanitization active
- ✅ Email validation enforced
- ✅ CORS headers configured

### 3. Database Security

- ✅ Row Level Security (RLS) enabled in Supabase
- ✅ Use `SUPABASE_ANON_KEY` (not service key) in frontend
- ✅ Regular backups enabled in Supabase

### 4. Domain Security

- ✅ HTTPS enforced automatically by Vercel
- ✅ Security headers configured in `vercel.json`
- ✅ HSTS enabled
- ✅ XSS protection headers

## Rollback Procedure

If deployment has issues:

### Via Dashboard

1. Go to **Deployments**
2. Find last working deployment
3. Click **"⋯"** menu
4. Select **"Promote to Production"**

### Via CLI

```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote <deployment-url>
```

## Performance Optimization

### 1. Enable Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `client/src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// Add to app
<Analytics />
```

### 2. Enable Speed Insights

```bash
npm install @vercel/speed-insights
```

### 3. Configure Caching

Already configured in `vercel.json`:
- Static assets: 1 year cache
- HTML: No cache (always fresh)
- API: No cache

### 4. Image Optimization

Use Vercel Image Optimization:

```typescript
import Image from 'next/image'; // If using Next.js
// Or optimize images before deployment
```

## Scaling Considerations

### Traffic Scaling

Vercel automatically scales:
- **Serverless Functions**: Auto-scale with traffic
- **Static Assets**: Served via CDN (100+ regions)
- **No configuration needed**

### Database Scaling

For high traffic:
1. Upgrade Supabase plan
2. Enable connection pooling
3. Add read replicas
4. Implement caching (Redis)

### Cost Optimization

Monitor usage:
1. Check **Vercel Dashboard** → **Usage**
2. Monitor function execution time
3. Optimize bundle size
4. Use Edge Functions for simple logic

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **GitHub Issues**: Create issue in your repository

## Checklist: Pre-Deploy

- [ ] All tests pass locally
- [ ] Build succeeds locally (`npm run build`)
- [ ] Environment variables documented
- [ ] Supabase tables created
- [ ] Resend account configured
- [ ] `.env.example` updated
- [ ] `.gitignore` includes `.env`
- [ ] README.md updated

## Checklist: Post-Deploy

- [ ] Site loads at Vercel URL
- [ ] All pages accessible
- [ ] API endpoints working
- [ ] Contact form submits successfully
- [ ] Email notifications received
- [ ] Job listings display correctly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Monitoring set up

---

**Last Updated**: 2025-11-02
**Vercel Version**: 2
**Node Version**: 18.x
