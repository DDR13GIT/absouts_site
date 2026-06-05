import { BACKGROUNDS } from "@/lib/assets";
import type { DepartmentConfig, DepartmentSlug } from "./types";

export const DEPARTMENTS: DepartmentConfig[] = [
  {
    slug: "cloud-accounting" as DepartmentSlug,
    order: 1,
    iconKey: "calculator",
    background: BACKGROUNDS.cloudAccounting,
  },
  {
    slug: "bpo" as DepartmentSlug,
    order: 2,
    iconKey: "building",
    background: BACKGROUNDS.bpo,
  },
  {
    slug: "software" as DepartmentSlug,
    order: 3,
    iconKey: "gears",
    background: BACKGROUNDS.software,
  },
];

/** Returns all departments sorted by their declared order (ascending). */
export function getDepartmentsInOrder(): DepartmentConfig[] {
  return [...DEPARTMENTS].sort((a, b) => a.order - b.order);
}
