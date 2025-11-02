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
      return res.status(500).json({
        success: false,
        message: "Database not configured"
      });
    }

    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    console.log(`Fetching job with ID: ${id}`);

    const { data: job, error } = await supabase
      .from('absoutsjobs')
      .select('*')
      .eq('id', id)
      .eq('status', 'published')
      .single();

    if (error || !job) {
      console.error('Job not found or error:', error);
      return res.status(404).json({ error: "Job not found" });
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
  } catch (error) {
    console.error("Error fetching job:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch job details",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
