import { describe, expect, it } from "vitest";
import { applicationSchema, contactSchema } from "@/lib/actions/schemas";

describe("contactSchema", () => {
  it("accepts a valid contact submission", () => {
    const result = contactSchema.safeParse({
      firstName: "Amina",
      lastName: "Rahman",
      email: "amina@example.com",
      company: "Northwind",
      serviceInterest: "Cloud accounting",
      message: "We would like to discuss monthly accounting support.",
      website: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects a bad email and short message", () => {
    const result = contactSchema.safeParse({
      firstName: "Amina",
      lastName: "Rahman",
      email: "not-an-email",
      message: "Short",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path.join("."));
      expect(paths).toContain("email");
      expect(paths).toContain("message");
    }
  });
});

describe("applicationSchema", () => {
  const validApplication = {
    jobId: "job-123",
    firstName: "Luis",
    lastName: "Garcia",
    email: "luis@example.com",
    phone: "+880 1717 435 794",
    experience: "4-5",
    resumeUrl: "https://example.com/resume.pdf",
    coverLetter: "I am interested in this role.",
    privacyConsent: true,
    website: "",
  };

  it("accepts a valid job application", () => {
    expect(applicationSchema.safeParse(validApplication).success).toBe(true);
  });

  it("requires privacy consent to be true", () => {
    const result = applicationSchema.safeParse({
      ...validApplication,
      privacyConsent: false,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path.join("."))).toContain("privacyConsent");
    }
  });

  it("requires resumeUrl to be a URL", () => {
    const result = applicationSchema.safeParse({
      ...validApplication,
      resumeUrl: "resume.pdf",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path.join("."))).toContain("resumeUrl");
    }
  });
});
