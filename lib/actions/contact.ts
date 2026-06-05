"use server";

import { db } from "@/lib/db/client";
import { contactSubmissions } from "@/lib/db/schema";
import { contactSchema } from "./schemas";
import { sendContactEmail } from "./email";

export async function submitContact(raw: unknown): Promise<{ ok: boolean; error?: string }> {
  if (raw && typeof raw === "object" && "website" in raw && String(raw.website).length > 0) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "invalid" };

  const { website, ...data } = parsed.data;

  try {
    await db.insert(contactSubmissions).values(data);
    await sendContactEmail(data);
    return { ok: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { ok: false, error: "server" };
  }
}
