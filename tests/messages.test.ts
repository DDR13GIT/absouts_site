import { describe, expect, test } from "vitest";
import en from "../messages/en.json";
import es from "../messages/es.json";

const requiredSubservices = [
  "ecommerce",
  "mobile",
  "cloud",
  "testing",
  "legaltech",
  "webportal",
  "fintech",
  "ai",
] as const;

function flattenKeys(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, child]) =>
      flattenKeys(child, prefix ? `${prefix}.${key}` : key)
    );
  }

  return [prefix];
}

function collectEmptyStrings(value: unknown, prefix = ""): string[] {
  if (typeof value === "string") {
    return value.trim() === "" ? [prefix] : [];
  }

  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, child]) =>
      collectEmptyStrings(child, prefix ? `${prefix}.${key}` : key)
    );
  }

  return [];
}

describe("locale messages", () => {
  test("English and Spanish messages have identical keys and no empty strings", () => {
    expect(flattenKeys(es).sort()).toEqual(flattenKeys(en).sort());
    expect(collectEmptyStrings(en)).toEqual([]);
    expect(collectEmptyStrings(es)).toEqual([]);
  });

  test("service department pages expose the required localized copy contract", () => {
    for (const localeMessages of [en, es]) {
      expect(localeMessages.departments.cloudAccounting.services).toHaveLength(8);
      expect(localeMessages.departments.bpo.services).toHaveLength(5);
      expect(localeMessages.departments.software.services).toBeDefined();

      for (const slug of requiredSubservices) {
        expect(localeMessages.subservices[slug].title).toBeTruthy();
        expect(localeMessages.subservices[slug].short).toBeTruthy();
      }
    }
  });
});
