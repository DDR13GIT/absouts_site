import { describe, it, expect, vi } from "vitest";

// Stub the DB client so module loads without a DATABASE_URL
vi.mock("@/lib/db/client", () => ({ db: {} }));

import { toJobListItem, toJobDetail } from "@/lib/db/queries";
import type { JobRow } from "@/lib/db/schema";

const row: JobRow = {
  id: "abc", jobTitle: "Dev", jobShortDescription: "desc", jobType: "full_time",
  location: "Dhaka", isRemote: false, requiredSkills: ["React"], qualifications: ["BSc"],
  requirements: ["Build"], salaryMin: 60000, salaryMax: 90000, salaryCurrency: "USD",
  companyName: "Absouts", status: "published", postedAt: new Date("2025-01-01"),
  createdAt: new Date("2025-01-01"), updatedAt: new Date("2025-01-01"),
};

describe("toJobListItem", () => {
  it("maps a row to list shape with formatted fields", () => {
    const j = toJobListItem(row);
    expect(j).toMatchObject({
      id: "abc", title: "Dev", location: "Dhaka", type: "Full-time",
      salary: "USD 60,000 - 90,000", skills: ["React"],
    });
  });
  it("shows Remote when is_remote", () => {
    expect(toJobListItem({ ...row, isRemote: true }).location).toBe("Remote");
  });
});

describe("toJobDetail", () => {
  it("joins arrays and fills defaults", () => {
    const d = toJobDetail(row);
    expect(d.requirements).toBe("Build");
    expect(d.experience).toBe("BSc");
    expect(d.contact).toBe("careers@absouts.com");
    expect(d.salary).toBe("USD 60,000 - 90,000");
  });
});
