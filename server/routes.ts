import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertJobApplicationSchema } from "@shared/schema";
import { Resend } from "resend";
import { rateLimiter, sanitizeInput, validateEmail } from "./middleware/rate-limiter";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Contact form submission with rate limiting and security
  app.post(
    "/api/contact",
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 3, // Max 3 submissions per 15 minutes per IP
      message: "Too many contact form submissions. Please try again in 15 minutes."
    }),
    sanitizeInput,
    validateEmail,
    async (req, res) => {
      try {
        // Validate request data
        const validatedData = insertContactSubmissionSchema.parse(req.body);

        // Additional validation: Check message length
        if (validatedData.message.length > 5000) {
          return res.status(400).json({
            success: false,
            message: "Message is too long. Please keep it under 5000 characters."
          });
        }

        // Store in database first
        const submission = await storage.createContactSubmission(validatedData);

        // Send email notification using Resend
        try {
          const emailResponse = await resend.emails.send({
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
                      <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                        <div class="label">Submission ID:</div>
                        <div class="value" style="font-size: 12px; color: #666;">${submission.id}</div>
                      </div>
                    </div>
                  </div>
                </body>
              </html>
            `
          });

          console.log("Email sent successfully via Resend:", emailResponse);
        } catch (emailError) {
          // Log email error but don't fail the request since we already saved to DB
          console.error("Failed to send email via Resend:", emailError);
          // Optionally: Send notification to admin about email failure
        }

        res.status(201).json({
          success: true,
          message: "Contact form submitted successfully",
          id: submission.id
        });
      } catch (error) {
        console.error("Contact form submission error:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({
          success: false,
          message: "Failed to submit contact form",
          error: errorMessage
        });
      }
    }
  );

  // Job application submission with rate limiting and security
  app.post(
    "/api/job-applications",
    rateLimiter({
      windowMs: 60 * 60 * 1000, // 1 hour
      maxRequests: 5, // Max 5 applications per hour per IP
      message: "Too many job applications. Please try again in an hour."
    }),
    sanitizeInput,
    validateEmail,
    async (req, res) => {
      try {
        // Validate request data
        const validatedData = insertJobApplicationSchema.parse(req.body);

        // Additional validations
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

        // Store in database first
        const application = await storage.createJobApplication(validatedData);

        // Send email notification using Resend
        try {
          const emailResponse = await resend.emails.send({
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
                    .cover-letter-box { background: white; padding: 15px; border-left: 4px solid #10b981; margin-top: 10px; }
                    .resume-link { display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
                    .resume-link:hover { background: #059669; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h2 style="margin: 0;">🎯 New Job Application</h2>
                    </div>
                    <div class="content">
                      <div class="field">
                        <div class="label">Position Applied:</div>
                        <div class="value" style="font-size: 18px; font-weight: 600; color: #059669;">${validatedData.jobId}</div>
                      </div>
                      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                      <div class="field">
                        <div class="label">Applicant Name:</div>
                        <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
                      </div>
                      <div class="field">
                        <div class="label">Email:</div>
                        <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                      </div>
                      <div class="field">
                        <div class="label">Phone:</div>
                        <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
                      </div>
                      <div class="field">
                        <div class="label">Years of Experience:</div>
                        <div class="value">${validatedData.experience}</div>
                      </div>
                      <div class="field">
                        <div class="label">Resume:</div>
                        <div class="value">
                          <a href="${validatedData.resumeUrl}" class="resume-link" target="_blank">📄 View Resume</a>
                        </div>
                      </div>
                      ${validatedData.coverLetter ? `
                        <div class="field">
                          <div class="label">Cover Letter:</div>
                          <div class="cover-letter-box">${validatedData.coverLetter}</div>
                        </div>
                      ` : ''}
                      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                      <div class="field">
                        <div class="label">Application ID:</div>
                        <div class="value" style="font-size: 12px; color: #666;">${application.id}</div>
                      </div>
                      <div class="field">
                        <div class="label">Submitted:</div>
                        <div class="value" style="font-size: 12px; color: #666;">${new Date().toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </body>
              </html>
            `
          });

          console.log("Job application email sent successfully via Resend:", emailResponse);
        } catch (emailError) {
          // Log email error but don't fail the request since we already saved to DB
          console.error("Failed to send job application email via Resend:", emailError);
        }

        res.status(201).json({
          success: true,
          message: "Job application submitted successfully",
          id: application.id
        });
      } catch (error) {
        console.error("Job application submission error:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({
          success: false,
          message: "Failed to submit job application",
          error: errorMessage
        });
      }
    }
  );

  // Get job listings from Supabase
  app.get("/api/jobs", async (req, res) => {
    try {
      const { supabase } = await import("./lib/supabase");
      
      const { data: jobs, error } = await supabase
        .from('absoutsjobs')
        .select('*')
        .eq('status', 'published')
        .order('posted_at', { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        return res.status(500).json({ 
          success: false,
          message: "Failed to fetch job listings from database",
          error: error.message 
        });
      }

      // Transform Supabase data to match frontend Job interface
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
      console.error("Error fetching jobs from Supabase:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch job listings",
        error: errorMessage 
      });
    }
  });

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


  // Get specific job by ID from Supabase
  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const { supabase } = await import("./lib/supabase");
      const jobId = req.params.id;
      
      const { data: job, error } = await supabase
        .from('absoutsjobs')
        .select('*')
        .eq('id', jobId)
        .eq('status', 'published')
        .single();

      if (error) {
        // PGRST116 means no rows found - this is a 404, not a 500
        if (error.code === 'PGRST116') {
          return res.status(404).json({ error: "Job not found" });
        }
        
        console.error("Supabase error fetching job by ID:", error);
        return res.status(500).json({ 
          success: false,
          message: "Failed to fetch job details from database",
          error: error.message 
        });
      }

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      // Transform Supabase data to match frontend JobDetail interface
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
      console.error("Error fetching job by ID from Supabase:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch job details",
        error: errorMessage 
      });
    }
  });

  // File upload endpoint for job applications
  app.post("/api/upload-resume", async (req, res) => {
    try {
      // In a real implementation, this would handle file upload to cloud storage
      // For now, return a mock URL
      const mockUrl = `https://storage.example.com/resumes/${Date.now()}-resume.pdf`;
      
      res.json({ 
        success: true, 
        url: mockUrl 
      });
    } catch (error) {
      console.error("Resume upload error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to upload resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
