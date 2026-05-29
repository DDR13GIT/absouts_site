export function formatJobType(type: string | null): string {
  if (!type) return "Full-time";
  const map: Record<string, string> = {
    full_time: "Full-time",
    part_time: "Part-time",
    contract: "Contract",
    internship: "Internship",
    temporary: "Temporary",
    freelance: "Freelance",
  };
  return map[type] ?? "Full-time";
}

export function formatSalary(
  min: number | null,
  max: number | null,
  currency: string | null,
): string | undefined {
  if (!currency || (!min && !max)) return undefined;
  if (min && max) return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  if (min) return `${currency} ${min.toLocaleString()}+`;
  if (max) return `Up to ${currency} ${max.toLocaleString()}`;
  return undefined;
}
