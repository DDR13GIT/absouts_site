import { and, desc, eq } from "drizzle-orm";
import { db } from "./client";
import { jobs, type JobRow } from "./schema";
import { formatJobType, formatSalary } from "./format";

export type JobListItem = {
  id: string; title: string; location: string; type: string;
  postedDate: string; description: string; skills: string[];
  salary?: string; requirements?: string; experience?: string;
};

export type JobDetailVM = JobListItem & {
  salary: string; requirements: string; experience: string;
  benefits: string; contact: string; deadline: string | null;
};

export function toJobListItem(j: JobRow): JobListItem {
  return {
    id: j.id,
    title: j.jobTitle,
    location: j.isRemote ? "Remote" : j.location ?? "Not specified",
    type: formatJobType(j.jobType),
    postedDate: (j.postedAt ?? j.createdAt ?? new Date()).toISOString(),
    description: j.jobShortDescription,
    skills: j.requiredSkills ?? [],
    salary: formatSalary(j.salaryMin, j.salaryMax, j.salaryCurrency),
    requirements: j.requirements?.length ? j.requirements.join("\n") : undefined,
    experience: j.qualifications?.length ? j.qualifications.join("\n") : undefined,
  };
}

export function toJobDetail(j: JobRow): JobDetailVM {
  const base = toJobListItem(j);
  return {
    ...base,
    salary: base.salary ?? "Competitive",
    requirements: j.requirements?.length ? j.requirements.join("\n") : "To be discussed during interview",
    experience: j.qualifications?.length ? j.qualifications.join("\n") : "Will be discussed during interview",
    benefits: "See company benefits section below",
    contact: "careers@absouts.com",
    deadline: null,
  };
}

export async function getPublishedJobs(): Promise<JobListItem[]> {
  const rows = await db.select().from(jobs)
    .where(eq(jobs.status, "published"))
    .orderBy(desc(jobs.postedAt));
  return rows.map(toJobListItem);
}

export async function getJobById(id: string): Promise<JobDetailVM | null> {
  const rows = await db.select().from(jobs)
    .where(and(eq(jobs.id, id), eq(jobs.status, "published"))).limit(1);
  return rows[0] ? toJobDetail(rows[0]) : null;
}
