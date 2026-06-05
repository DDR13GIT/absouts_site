import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().trim().email(),
  company: z.string().trim().optional(),
  serviceInterest: z.string().trim().optional(),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});

export const applicationSchema = z.object({
  jobId: z.string().trim().min(1),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().min(1).regex(/^[\d\s+\-()]+$/),
  experience: z.string().trim().min(1),
  resumeUrl: z.string().trim().url(),
  coverLetter: z.string().trim().max(10000).optional(),
  privacyConsent: z.literal(true),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
