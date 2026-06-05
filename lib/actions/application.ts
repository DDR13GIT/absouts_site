"use server";

import { db } from "@/lib/db/client";
import { jobApplications } from "@/lib/db/schema";
import { applicationSchema } from "./schemas";
import { sendApplicationEmail } from "./email";

export async function submitApplication(raw: unknown): Promise<{ ok: boolean; error?: string }> {
  if (raw && typeof raw === "object" && "website" in raw && String(raw.website).length > 0) {
    return { ok: true };
  }

  const parsed = applicationSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "invalid" };

  const { website, ...data } = parsed.data;

  try {
    await db.insert(jobApplications).values(data);
    await sendApplicationEmail(data);
    return { ok: true };
  } catch (error) {
    console.error("Job application submission error:", error);
    return { ok: false, error: "server" };
  }
}
