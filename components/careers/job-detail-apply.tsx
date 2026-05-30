"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { JobApplicationForm } from "@/components/forms/job-application-form";

export function JobDetailApply({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
  const t = useTranslations("careers.detail");
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button className="w-full" onClick={() => setOpen(true)}>
        {t("apply")}
      </Button>
      <JobApplicationForm jobId={jobId} jobTitle={jobTitle} open={open} onOpenChange={setOpen} />
    </>
  );
}
