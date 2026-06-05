import { describe, it, expect } from "vitest";
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

describe("structured-data builders", () => {
  it("organization has type + addresses", () => {
    const s = organizationSchema();
    expect(s["@type"]).toBe("Organization");
    expect(Array.isArray(s.address)).toBe(true);
  });

  it("breadcrumb numbers items from 1", () => {
    const s = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ]);
    expect(s.itemListElement[0].position).toBe(1);
    expect(s.itemListElement[1].position).toBe(2);
  });

  it("service carries name + provider", () => {
    const s = serviceSchema({ name: "BPO", description: "d", url: "/x" });
    expect(s.serviceType).toBe("BPO");
    expect(s.provider.name).toBe("Absouts");
  });
});
