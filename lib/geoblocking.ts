export function isBlockedCountry(country: string | null, blockedList: string): boolean {
  if (!country || !blockedList) return false;
  const blocked = blockedList.split(",").map((c) => c.trim().toUpperCase()).filter(Boolean);
  return blocked.includes(country.toUpperCase());
}
