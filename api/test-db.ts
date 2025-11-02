import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({
        success: false,
        error: 'Missing environment variables',
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get all jobs (without status filter first)
    const { data: allJobs, error: allError } = await supabase
      .from('absoutsjobs')
      .select('id, job_title, status')
      .limit(10);

    // Get published jobs
    const { data: publishedJobs, error: pubError } = await supabase
      .from('absoutsjobs')
      .select('id, job_title, status')
      .eq('status', 'published')
      .limit(10);

    return res.status(200).json({
      success: true,
      environment: {
        hasSupabaseUrl: !!supabaseUrl,
        hasSupabaseKey: !!supabaseAnonKey,
        supabaseUrl: supabaseUrl
      },
      database: {
        allJobs: {
          count: allJobs?.length || 0,
          error: allError?.message || null,
          jobs: allJobs?.map(j => ({
            id: j.id,
            title: j.job_title,
            status: j.status
          })) || []
        },
        publishedJobs: {
          count: publishedJobs?.length || 0,
          error: pubError?.message || null,
          jobs: publishedJobs?.map(j => ({
            id: j.id,
            title: j.job_title,
            status: j.status
          })) || []
        }
      }
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
