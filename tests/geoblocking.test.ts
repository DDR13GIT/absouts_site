import { describe, it, expect } from "vitest";
import { isBlockedCountry } from "@/lib/geoblocking";

describe("isBlockedCountry", () => {
  it("blocks a configured country (case-insensitive)", () => {
    expect(isBlockedCountry("KP", "KP")).toBe(true);
    expect(isBlockedCountry("kp", "KP,RU")).toBe(true);
  });
  it("allows non-listed and unknown", () => {
    expect(isBlockedCountry("US", "KP")).toBe(false);
    expect(isBlockedCountry(null, "KP")).toBe(false);
  });
  it("allows everything when list empty", () => {
    expect(isBlockedCountry("KP", "")).toBe(false);
  });
});
