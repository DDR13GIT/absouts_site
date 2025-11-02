# Supabase Setup Guide for Absouts Career Page

This guide will help you set up Supabase to power the career/jobs functionality on the Absouts website.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. Node.js and npm installed
3. Access to your Supabase project dashboard

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in the project details:
   - **Name**: absouts-website (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
4. Wait for the project to be provisioned (~2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL**: Something like `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`

## Step 3: Set Up Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`):

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
RESEND_CAREERS_EMAIL=careers@absouts.com
```

2. Replace the placeholder values with your actual credentials

## Step 4: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of `supabase-setup.sql` from the project root
4. Click **Run** to execute the SQL

This will:
- ✅ Create the `absoutsjobs` table with all required columns
- ✅ Set up indexes for better performance
- ✅ Enable Row Level Security (RLS) policies
- ✅ Insert 5 sample job postings for testing

## Step 5: Verify the Setup

### Check the Table

1. Go to **Table Editor** in Supabase
2. You should see the `absoutsjobs` table
3. It should contain 5 sample job postings

### Test the API Endpoints

Start your development server:

```bash
npm run dev
```

Then test the endpoints:

**Get all jobs:**
```bash
curl http://localhost:5000/api/jobs
```

**Get a specific job:**
```bash
curl http://localhost:5000/api/jobs/[JOB_ID]
```

Replace `[JOB_ID]` with an actual job ID from your database.

### Test the Career Page

1. Navigate to `http://localhost:5000/career`
2. You should see the 5 sample job postings
3. Click "Show Details" on any job to see the full job description
4. Click "Apply Now" to test the job application form

## Step 6: Adding New Job Postings

### Option 1: Using Supabase Dashboard

1. Go to **Table Editor** → **absoutsjobs**
2. Click **Insert** → **Insert row**
3. Fill in the job details:
   - **job_title**: The job title (e.g., "Senior Developer")
   - **job_short_description**: A brief description (1-2 sentences)
   - **job_type**: One of: `full_time`, `part_time`, `contract`, `internship`, `temporary`, `freelance`
   - **location**: City/country or "Remote"
   - **is_remote**: `true` or `false`
   - **required_skills**: Array of strings (e.g., `["React", "Node.js"]`)
   - **qualifications**: Array of strings with requirements
   - **requirements**: Array of strings with job responsibilities
   - **salary_min**: Minimum salary (integer)
   - **salary_max**: Maximum salary (integer)
   - **salary_currency**: Currency code (e.g., "USD", "BDT")
   - **status**: Set to `published` to make it visible on the website
   - **posted_at**: Current timestamp
4. Click **Save**

### Option 2: Using SQL

```sql
INSERT INTO absoutsjobs (
  job_title,
  job_short_description,
  job_type,
  location,
  is_remote,
  required_skills,
  qualifications,
  requirements,
  salary_min,
  salary_max,
  salary_currency,
  status,
  posted_at
) VALUES (
  'Your Job Title',
  'A brief description of the role',
  'full_time',
  'Location or Remote',
  true,
  ARRAY['Skill 1', 'Skill 2', 'Skill 3'],
  ARRAY['Qualification 1', 'Qualification 2'],
  ARRAY['Requirement 1', 'Requirement 2'],
  50000,
  75000,
  'USD',
  'published',
  NOW()
);
```

## Database Schema Reference

### absoutsjobs Table Structure

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | UUID | Auto | Unique identifier |
| `job_title` | TEXT | Yes | Job title |
| `job_short_description` | TEXT | Yes | Brief job description |
| `job_type` | TEXT | Yes | `full_time`, `part_time`, `contract`, `internship`, `temporary`, `freelance` |
| `location` | TEXT | No | Location or "Remote" |
| `is_remote` | BOOLEAN | No | Whether the job is remote |
| `required_skills` | TEXT[] | No | Array of required skills |
| `qualifications` | TEXT[] | No | Array of qualifications |
| `requirements` | TEXT[] | No | Array of job responsibilities |
| `salary_min` | INTEGER | No | Minimum salary |
| `salary_max` | INTEGER | No | Maximum salary |
| `salary_currency` | TEXT | No | Currency code (default: USD) |
| `company_name` | TEXT | No | Company name (default: Absouts) |
| `status` | TEXT | Yes | `draft`, `published`, or `closed` |
| `posted_at` | TIMESTAMPTZ | No | When the job was posted |
| `created_at` | TIMESTAMPTZ | Auto | When the record was created |
| `updated_at` | TIMESTAMPTZ | Auto | When the record was last updated |

## Security Notes

### Row Level Security (RLS)

The table is protected with RLS policies:

1. **Public Read Policy**: Only jobs with `status = 'published'` are visible to the public
2. **Admin Policy**: Authenticated users have full access (for admin panel)

### API Security

- The frontend uses the **anon/public key** which is safe to expose
- RLS policies ensure users can only see published jobs
- Job applications and contact forms are handled server-side with validation

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution**: Make sure your `.env` file has both `SUPABASE_URL` and `SUPABASE_ANON_KEY` set correctly.

### Issue: No jobs showing on the career page

**Possible causes**:
1. No jobs in the database → Add sample jobs using `supabase-setup.sql`
2. Jobs have `status = 'draft'` → Update jobs to `status = 'published'`
3. Wrong Supabase credentials → Double-check your `.env` file
4. RLS policies blocking access → Verify RLS policies are set up correctly

**Debug steps**:
```bash
# Check if the API is working
curl http://localhost:5000/api/jobs

# Check Supabase directly
# Go to Table Editor and verify jobs exist with status='published'
```

### Issue: "Job not found" on detail page

**Solution**: Make sure the job ID in the URL matches an actual job ID in your database. Check the `id` column in Supabase Table Editor.

### Issue: Job application form not submitting

**Possible causes**:
1. Missing email configuration → Set up `GMAIL_USER` and `GMAIL_PASSWORD` in `.env`
2. Invalid Gmail app password → Create an app-specific password (not your regular Gmail password)
3. Database error → Check server logs for errors

## Next Steps

Once your Supabase setup is complete:

1. ✅ Test all career page functionality
2. ✅ Add real job postings
3. ✅ Set up email notifications (Gmail app password)
4. ✅ Monitor job applications in the `job_applications` table
5. ✅ Consider building an admin panel to manage jobs

## Support

If you encounter any issues:

1. Check the server logs for error messages
2. Verify your Supabase credentials in the dashboard
3. Test the API endpoints directly with curl
4. Review the RLS policies in Supabase

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [React Query Documentation](https://tanstack.com/query/latest)
