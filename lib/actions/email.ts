import { Resend } from "resend";
import type { ApplicationInput, ContactInput } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: Omit<ContactInput, "website">) {
  try {
    const to = process.env.RESEND_TO_EMAIL;
    if (!to) return;

    await resend.emails.send({
      from: fromEmail,
      to,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
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
              .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; white-space: pre-wrap; }
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
                  <div class="value">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${data.company ? escapeHtml(data.company) : "Not provided"}</div>
                </div>
                <div class="field">
                  <div class="label">Service Interest:</div>
                  <div class="value">${data.serviceInterest ? escapeHtml(data.serviceInterest) : "Not specified"}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${escapeHtml(data.message)}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact email via Resend:", error);
  }
}

export async function sendApplicationEmail(data: Omit<ApplicationInput, "website">) {
  try {
    const to = process.env.RESEND_CAREERS_EMAIL ?? process.env.RESEND_TO_EMAIL;
    if (!to) return;

    await resend.emails.send({
      from: fromEmail,
      to,
      subject: `New Job Application: ${data.jobId}`,
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
              .cover-letter-box { background: white; padding: 15px; border-left: 4px solid #10b981; margin-top: 10px; white-space: pre-wrap; }
              .resume-link { display: inline-block; background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Job Application</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Position Applied:</div>
                  <div class="value" style="font-size: 18px; font-weight: 600; color: #059669;">${escapeHtml(data.jobId)}</div>
                </div>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <div class="field">
                  <div class="label">Applicant Name:</div>
                  <div class="value">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Years of Experience:</div>
                  <div class="value">${escapeHtml(data.experience)}</div>
                </div>
                <div class="field">
                  <div class="label">Resume:</div>
                  <div class="value">
                    <a href="${escapeHtml(data.resumeUrl)}" class="resume-link" target="_blank">View Resume</a>
                  </div>
                </div>
                ${data.coverLetter ? `
                  <div class="field">
                    <div class="label">Cover Letter:</div>
                    <div class="cover-letter-box">${escapeHtml(data.coverLetter)}</div>
                  </div>
                ` : ""}
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <div class="field">
                  <div class="label">Submitted:</div>
                  <div class="value" style="font-size: 12px; color: #666;">${new Date().toLocaleString()}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error("Failed to send job application email via Resend:", error);
  }
}
