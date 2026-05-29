import { describe, it, expect } from "vitest";
import { formatJobType, formatSalary } from "@/lib/db/format";

describe("formatJobType", () => {
  it("maps known types", () => {
    expect(formatJobType("full_time")).toBe("Full-time");
    expect(formatJobType("part_time")).toBe("Part-time");
    expect(formatJobType("freelance")).toBe("Freelance");
  });
  it("falls back to Full-time for null/unknown", () => {
    expect(formatJobType(null)).toBe("Full-time");
    expect(formatJobType("weird")).toBe("Full-time");
  });
});

describe("formatSalary", () => {
  it("formats a min-max range", () => {
    expect(formatSalary(60000, 90000, "USD")).toBe("USD 60,000 - 90,000");
  });
  it("formats min only and max only", () => {
    expect(formatSalary(60000, null, "USD")).toBe("USD 60,000+");
    expect(formatSalary(null, 90000, "USD")).toBe("Up to USD 90,000");
  });
  it("returns undefined when no currency or no bounds", () => {
    expect(formatSalary(60000, 90000, null)).toBeUndefined();
    expect(formatSalary(null, null, "USD")).toBeUndefined();
  });
});
