import { z } from "zod";

// User schemas
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const userSchema = insertUserSchema.extend({
  id: z.string(),
});

// Contact submission schemas
export const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const contactSubmissionSchema = insertContactSubmissionSchema.extend({
  id: z.string(),
  company: z.string().nullable(),
  serviceInterest: z.string().nullable(),
  createdAt: z.date(),
});

// Job application schemas
export const insertJobApplicationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  experience: z.string().min(1, "Experience is required"),
  resumeUrl: z.string().url("Please provide a valid resume URL"),
  coverLetter: z.string().optional(),
  privacyConsent: z.boolean().optional(),
});

export const jobApplicationSchema = insertJobApplicationSchema.extend({
  id: z.string(),
  coverLetter: z.string().nullable(),
  privacyConsent: z.boolean(),
  createdAt: z.date(),
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;
export type JobApplication = z.infer<typeof jobApplicationSchema>;

// Supabase Job Types (from absoutsjobs table)
export const JobTypeEnum = z.enum(['full_time', 'part_time', 'contract', 'internship', 'temporary', 'freelance']);
export const JobStatusEnum = z.enum(['draft', 'published', 'closed']);

export type JobType = z.infer<typeof JobTypeEnum>;
export type JobStatus = z.infer<typeof JobStatusEnum>;

export interface SupabaseJob {
  id: string;
  job_title: string;
  job_short_description: string;
  job_type: JobType;
  location: string | null;
  is_remote: boolean;
  required_skills: string[];
  qualifications: string[];
  requirements: string[];
  salary_min: number | null;
  salary_max: number | null;
  salary_currency: string;
  company_name: string;
  status: JobStatus;
  posted_at: string | null;
  created_at: string;
}
