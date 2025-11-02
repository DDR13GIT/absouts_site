import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { insertJobApplicationSchema } from '../shared/schema';

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple rate limiting using in-memory storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting: 5 requests per hour
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 'unknown';
    if (!checkRateLimit(ip, 5, 60 * 60 * 1000)) {
      return res.status(429).json({
        success: false,
        message: "Too many job applications. Please try again in an hour."
      });
    }

    // Validate request data
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

    // Store in Supabase
    if (!supabase) {
      return res.status(500).json({
        success: false,
        message: "Database not configured"
      });
    }

    const { data: application, error: dbError } = await supabase
      .from('job_applications')
      .insert([{
        jobId: validatedData.jobId,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        experience: validatedData.experience,
        resumeUrl: validatedData.resumeUrl,
        coverLetter: validatedData.coverLetter
      }])
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
                  ${validatedData.resumeUrl ? `
                  <div class="field">
                    <div class="label">Resume:</div>
                    <div class="value"><a href="${validatedData.resumeUrl}">View Resume</a></div>
                  </div>
                  ` : ''}
                </div>
              </div>
            </body>
          </html>
        `
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email fails
    }

    return res.status(201).json({
      success: true,
      message: "Job application submitted successfully",
      id: application.id
    });
  } catch (error) {
    console.error("Job application error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).json({
      success: false,
      message: "Failed to submit job application",
      error: errorMessage
    });
  }
}
