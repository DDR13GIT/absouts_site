-- Supabase Table Setup for Job Postings
-- Run this SQL in your Supabase SQL Editor

-- Create the absoutsjobs table
CREATE TABLE IF NOT EXISTS absoutsjobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title TEXT NOT NULL,
  job_short_description TEXT NOT NULL,
  job_type TEXT NOT NULL CHECK (job_type IN ('full_time', 'part_time', 'contract', 'internship', 'temporary', 'freelance')),
  location TEXT,
  is_remote BOOLEAN DEFAULT false,
  required_skills TEXT[] DEFAULT '{}',
  qualifications TEXT[] DEFAULT '{}',
  requirements TEXT[] DEFAULT '{}',
  salary_min INTEGER,
  salary_max INTEGER,
  salary_currency TEXT DEFAULT 'USD',
  company_name TEXT DEFAULT 'Absouts',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'closed')),
  posted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_absoutsjobs_status ON absoutsjobs(status);
CREATE INDEX IF NOT EXISTS idx_absoutsjobs_posted_at ON absoutsjobs(posted_at DESC);
CREATE INDEX IF NOT EXISTS idx_absoutsjobs_status_posted ON absoutsjobs(status, posted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE absoutsjobs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published jobs only
CREATE POLICY "Allow public read access to published jobs"
  ON absoutsjobs
  FOR SELECT
  USING (status = 'published');

-- Create policy to allow authenticated users to manage all jobs (for admin panel)
CREATE POLICY "Allow authenticated users full access"
  ON absoutsjobs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample job postings for testing
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
  company_name,
  status,
  posted_at
) VALUES
(
  'Senior Full Stack Developer',
  'Join our development team to build cutting-edge web applications using modern technologies. Work on exciting projects for international clients and grow your career in a supportive environment.',
  'full_time',
  'Dhaka, Bangladesh',
  true,
  ARRAY['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  ARRAY['5+ years of full-stack development experience', 'Strong proficiency in React and Node.js', 'Experience with cloud platforms (AWS/Azure/GCP)', 'Excellent problem-solving skills'],
  ARRAY['Design and implement scalable web applications', 'Collaborate with cross-functional teams', 'Write clean, maintainable code', 'Mentor junior developers', 'Participate in code reviews'],
  60000,
  90000,
  'USD',
  'Absouts',
  'published',
  NOW()
),
(
  'Cloud Accountant',
  'Provide virtual accounting services to US and UK clients. Work with modern cloud accounting platforms and be part of a professional accounting team.',
  'full_time',
  'Remote',
  true,
  ARRAY['QuickBooks Online', 'Xero', 'Excel', 'Financial Reporting', 'Tax Preparation'],
  ARRAY['Bachelor''s degree in Accounting or Finance', '3+ years of accounting experience', 'Proficiency in QuickBooks and Xero', 'Strong attention to detail', 'Excellent communication skills'],
  ARRAY['Manage bookkeeping for multiple clients', 'Prepare financial statements and reports', 'Handle accounts payable and receivable', 'Assist with tax preparation', 'Communicate with clients regularly'],
  30000,
  45000,
  'USD',
  'Absouts',
  'published',
  NOW()
),
(
  'Business Development Executive',
  'Drive business growth by identifying new opportunities and building relationships with potential clients across global markets. Be the face of Absouts to prospective clients.',
  'full_time',
  'Dhaka, Bangladesh',
  false,
  ARRAY['Sales', 'Client Relationship Management', 'CRM Software', 'Lead Generation', 'Presentation Skills'],
  ARRAY['3+ years in B2B sales or business development', 'Proven track record of meeting sales targets', 'Experience with CRM systems', 'Excellent communication and negotiation skills', 'Understanding of BPO/software services'],
  ARRAY['Identify and pursue new business opportunities', 'Build and maintain client relationships', 'Conduct product presentations and demos', 'Negotiate contracts and close deals', 'Collaborate with delivery teams', 'Maintain accurate sales records in CRM'],
  25000,
  40000,
  'USD',
  'Absouts',
  'published',
  NOW()
),
(
  'UI/UX Designer',
  'Create beautiful and intuitive user interfaces for web and mobile applications. Work closely with developers and product managers to deliver exceptional user experiences.',
  'full_time',
  'Remote',
  true,
  ARRAY['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping', 'Wireframing'],
  ARRAY['3+ years of UI/UX design experience', 'Strong portfolio demonstrating design skills', 'Proficiency in design tools (Figma, Adobe XD)', 'Understanding of design systems', 'Knowledge of HTML/CSS basics'],
  ARRAY['Design user interfaces for web and mobile apps', 'Create wireframes and prototypes', 'Conduct user research and testing', 'Collaborate with developers and stakeholders', 'Maintain design system consistency', 'Present design concepts to clients'],
  35000,
  55000,
  'USD',
  'Absouts',
  'published',
  NOW()
),
(
  'DevOps Engineer',
  'Build and maintain our infrastructure and deployment pipelines. Help our development teams ship faster and more reliably with modern DevOps practices.',
  'full_time',
  'Dhaka, Bangladesh',
  true,
  ARRAY['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform', 'Jenkins'],
  ARRAY['4+ years of DevOps/SRE experience', 'Strong knowledge of AWS or Azure', 'Experience with containerization (Docker/Kubernetes)', 'Proficiency in scripting (Bash/Python)', 'Understanding of CI/CD pipelines'],
  ARRAY['Manage cloud infrastructure on AWS/Azure', 'Build and maintain CI/CD pipelines', 'Implement monitoring and alerting', 'Optimize application performance', 'Ensure system security and compliance', 'Automate operational tasks'],
  50000,
  75000,
  'USD',
  'Absouts',
  'published',
  NOW()
);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function
CREATE TRIGGER update_absoutsjobs_updated_at
  BEFORE UPDATE ON absoutsjobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Verify the setup
SELECT
  id,
  job_title,
  job_type,
  location,
  is_remote,
  status,
  posted_at
FROM absoutsjobs
WHERE status = 'published'
ORDER BY posted_at DESC;
