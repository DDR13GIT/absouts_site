"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import type { JobListItem } from "@/lib/db/queries";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { JobListCard } from "./job-list-card";

type CareersOpeningsProps = {
  jobs: JobListItem[];
};

export function CareersOpenings({ jobs }: CareersOpeningsProps) {
  const t = useTranslations("careers");
  const [selectedJob, setSelectedJob] = React.useState<Pick<JobListItem, "id" | "title"> | null>(null);

  return (
    <>
      <div className="space-y-5">
        {jobs.length ? (
          jobs.map((job) => <JobListCard key={job.id} job={job} onApply={setSelectedJob} />)
        ) : (
          <div className="rounded-xl border border-neutral-dark/10 bg-bg-surface p-8 text-center shadow-[var(--shadow-subtle)]">
            <p className="text-text-secondary">{t("noJobs")}</p>
          </div>
        )}
      </div>

      <JobApplicationForm
        jobId={selectedJob?.id ?? ""}
        jobTitle={selectedJob?.title ?? ""}
        open={Boolean(selectedJob)}
        onOpenChange={(open) => {
          if (!open) setSelectedJob(null);
        }}
      />
    </>
  );
}
