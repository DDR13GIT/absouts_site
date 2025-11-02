import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to format job type
function formatJobType(type: string | null): string {
  if (!type) return 'Full-time';

  const typeMap: Record<string, string> = {
    full_time: 'Full-time',
    part_time: 'Part-time',
    contract: 'Contract',
    internship: 'Internship',
    temporary: 'Temporary',
    freelance: 'Freelance'
  };
  return typeMap[type] || 'Full-time';
}

// Helper function to format salary
function formatSalary(min: number | null, max: number | null, currency: string | null): string | undefined {
  if (!currency || (!min && !max)) return undefined;
  if (min && max) return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  if (min) return `${currency} ${min.toLocaleString()}+`;
  if (max) return `Up to ${currency} ${max.toLocaleString()}`;
  return undefined;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!supabase) {
      console.error('Supabase not initialized');
      return res.status(500).json({
        success: false,
        message: "Database not configured"
      });
    }

    // Check if this is a request for a specific job ID
    // URL pattern: /api/jobs or /api/jobs?id=xxx or /api/jobs/xxx
    const jobId = req.query.id || req.url?.split('/api/jobs/')[1]?.split('?')[0];

    if (jobId && typeof jobId === 'string') {
      // Fetch specific job
      console.log(`Fetching job with ID: ${jobId}`);

      const { data: job, error } = await supabase
        .from('absoutsjobs')
        .select('*')
        .eq('id', jobId)
        .eq('status', 'published')
        .maybeSingle();

      console.log('Job query result:', { hasJob: !!job, error: error?.message });

      if (error) {
        console.error('Supabase error fetching job:', error);
        return res.status(500).json({
          error: "Database error",
          details: error.message
        });
      }

      if (!job) {
        console.error('Job not found with ID:', jobId);
        return res.status(404).json({
          error: "Job not found",
          id: jobId
        });
      }

      const transformedJob = {
        id: job.id,
        title: job.job_title,
        location: job.is_remote ? 'Remote' : (job.location || 'Not specified'),
        type: formatJobType(job.job_type),
        postedDate: job.posted_at || job.created_at || new Date().toISOString(),
        description: job.job_short_description,
        skills: job.required_skills || [],
        salary: formatSalary(job.salary_min, job.salary_max, job.salary_currency) || 'Competitive',
        requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : 'To be discussed during interview',
        experience: Array.isArray(job.qualifications) ? job.qualifications.join('\n') : 'Will be discussed during interview',
        benefits: 'See company benefits section below',
        contact: 'careers@absouts.com',
        deadline: null
      };

      return res.status(200).json(transformedJob);
    }

    // Fetch all jobs
    console.log('Fetching all jobs from Supabase...');

    const { data: jobs, error } = await supabase
      .from('absoutsjobs')
      .select('*')
      .eq('status', 'published')
      .order('posted_at', { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch job listings",
        error: error.message
      });
    }

    console.log(`Found ${jobs?.length || 0} jobs`);

    const transformedJobs = (jobs || []).map(job => ({
      id: job.id,
      title: job.job_title,
      location: job.is_remote ? 'Remote' : (job.location || 'Not specified'),
      type: formatJobType(job.job_type),
      postedDate: job.posted_at || job.created_at,
      description: job.job_short_description,
      skills: job.required_skills || [],
      salary: formatSalary(job.salary_min, job.salary_max, job.salary_currency),
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : undefined,
      experience: Array.isArray(job.qualifications) ? job.qualifications.join('\n') : undefined,
    }));

    return res.status(200).json(transformedJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch job listings",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
