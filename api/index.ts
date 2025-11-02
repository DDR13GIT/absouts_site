import type { VercelRequest, VercelResponse } from '@vercel/node';
import express, { type Request, Response, NextFunction } from "express";
import { Resend } from "resend";
import { createClient } from '@supabase/supabase-js';
import { insertContactSubmissionSchema, insertJobApplicationSchema } from "../shared/schema";
import { rateLimiter, sanitizeInput, validateEmail } from "../server/middleware/rate-limiter";

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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

// Contact form endpoint
app.post(
  "/contact",
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    maxRequests: 3,
    message: "Too many contact form submissions. Please try again in 15 minutes."
  }),
  sanitizeInput,
  validateEmail,
  async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);

      if (validatedData.message.length > 5000) {
        return res.status(400).json({
          success: false,
          message: "Message is too long. Please keep it under 5000 characters."
        });
      }

      // Store in Supabase
      if (!supabase) {
        return res.status(500).json({
          success: false,
          message: "Database not configured"
        });
      }

      const { data: submission, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([validatedData])
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        return res.status(500).json({
          success: false,
          message: "Failed to save contact submission"
        });
      }

      // Send email via Resend
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.RESEND_TO_EMAIL || 'ddroy13@gmail.com',
          subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #667eea; }
                  .value { margin-top: 5px; }
                  .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2 style="margin: 0;">New Contact Form Submission</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Name:</div>
                      <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                    </div>
                    <div class="field">
                      <div class="label">Company:</div>
                      <div class="value">${validatedData.company || 'Not provided'}</div>
                    </div>
                    <div class="field">
                      <div class="label">Service Interest:</div>
                      <div class="value">${validatedData.serviceInterest || 'Not specified'}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message:</div>
                      <div class="message-box">${validatedData.message}</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
      }

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({
        success: false,
        message: "Failed to submit contact form",
        error: errorMessage
      });
    }
  }
);

// Job applications endpoint
app.post(
  "/job-applications",
  rateLimiter({
    windowMs: 60 * 60 * 1000,
    maxRequests: 5,
    message: "Too many job applications. Please try again in an hour."
  }),
  sanitizeInput,
  validateEmail,
  async (req: Request, res: Response) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);

      if (validatedData.coverLetter && validatedData.coverLetter.length > 10000) {
        return res.status(400).json({
          success: false,
          message: "Cover letter is too long. Please keep it under 10000 characters."
        });
      }

      if (validatedData.phone && !/^[\d\s\+\-\(\)]+$/.test(validatedData.phone)) {
        return res.status(400).json({
          success: false,
          message: "Invalid phone number format."
        });
      }

      if (!supabase) {
        return res.status(500).json({
          success: false,
          message: "Database not configured"
        });
      }

      const { data: application, error: dbError } = await supabase
        .from('job_applications')
        .insert([validatedData])
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        return res.status(500).json({
          success: false,
          message: "Failed to save job application"
        });
      }

      // Send email via Resend
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.RESEND_CAREERS_EMAIL || process.env.RESEND_TO_EMAIL || 'ddroy13@gmail.com',
          subject: `New Job Application: ${validatedData.jobId}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                  .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #059669; }
                  .value { margin-top: 5px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2 style="margin: 0;">New Job Application</h2>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Position:</div>
                      <div class="value">${validatedData.jobId}</div>
                    </div>
                    <div class="field">
                      <div class="label">Name:</div>
                      <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value">${validatedData.email}</div>
                    </div>
                    <div class="field">
                      <div class="label">Phone:</div>
                      <div class="value">${validatedData.phone}</div>
                    </div>
                    <div class="field">
                      <div class="label">Experience:</div>
                      <div class="value">${validatedData.experience}</div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
      }

      res.status(201).json({
        success: true,
        message: "Job application submitted successfully",
        id: application.id
      });
    } catch (error) {
      console.error("Job application error:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({
        success: false,
        message: "Failed to submit job application",
        error: errorMessage
      });
    }
  }
);

// Get all jobs
app.get("/jobs", async (req: Request, res: Response) => {
  try {
    if (!supabase) {
      return res.status(500).json({
        success: false,
        message: "Database not configured"
      });
    }

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

    res.json(transformedJobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job listings"
    });
  }
});

// Get job by ID
app.get("/jobs/:id", async (req: Request, res: Response) => {
  try {
    if (!supabase) {
      return res.status(500).json({
        success: false,
        message: "Database not configured"
      });
    }

    const { data: job, error } = await supabase
      .from('absoutsjobs')
      .select('*')
      .eq('id', req.params.id)
      .eq('status', 'published')
      .single();

    if (error || !job) {
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

    res.json(transformedJob);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job details"
    });
  }
});

// Upload resume endpoint
app.post("/upload-resume", async (req: Request, res: Response) => {
  try {
    const mockUrl = `https://storage.example.com/resumes/${Date.now()}-resume.pdf`;
    res.json({ success: true, url: mockUrl });
  } catch (error) {
    console.error("Resume upload error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload resume"
    });
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export for Vercel serverless
export default async (req: VercelRequest, res: VercelResponse) => {
  // Remove /api prefix if present
  const path = req.url?.replace(/^\/api/, '') || '/';

  // Create a new request with the cleaned path
  const expressReq = Object.assign(req, { url: path }) as any;

  return app(expressReq, res as any);
};
