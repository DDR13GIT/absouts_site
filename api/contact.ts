import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { insertContactSubmissionSchema } from '../shared/schema';

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
    // Rate limiting: 3 requests per 15 minutes
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 'unknown';
    if (!checkRateLimit(ip, 3, 15 * 60 * 1000)) {
      return res.status(429).json({
        success: false,
        message: "Too many contact form submissions. Please try again in 15 minutes."
      });
    }

    // Validate request data
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
      .insert([{
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        company: validatedData.company,
        serviceInterest: validatedData.serviceInterest,
        message: validatedData.message
      }])
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
      // Don't fail the request if email fails
    }

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      id: submission.id
    });
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).json({
      success: false,
      message: "Failed to submit contact form",
      error: errorMessage
    });
  }
}
