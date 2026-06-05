"use client";

import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import type { JobListItem } from "@/lib/db/queries";
import { Link } from "@/i18n/navigation";
import { Badge, Button, Card, CardContent, CardHeader } from "@/components/ui";

type JobListCardProps = {
  job: JobListItem;
  onApply: (job: Pick<JobListItem, "id" | "title">) => void;
};

export function JobListCard({ job, onApply }: JobListCardProps) {
  const t = useTranslations("careers.jobCard");

  return (
    <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
      <CardHeader>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-3">
            <h3 className="text-2xl font-bold leading-tight text-brand-primary">{job.title}</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
              <Meta icon={<MapPin className="size-4" />} label={job.location} />
              <Meta icon={<Briefcase className="size-4" />} label={job.type} />
              <Meta icon={<Clock className="size-4" />} label={relativeDate(job.postedDate, t)} />
              {job.salary ? (
                <Meta icon={<DollarSign className="size-4" />} label={job.salary} accent />
              ) : null}
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button onClick={() => onApply({ id: job.id, title: job.title })}>{t("apply")}</Button>
            <Button asChild variant="outline">
              <Link href={`/careers/${job.id}`}>{t("details")}</Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">{job.description}</p>
        {job.skills.length ? (
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="border-brand-primary/10 bg-bg-darker text-brand-primary">
                {skill}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

function Meta({
  icon,
  label,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  accent?: boolean;
}) {
  return (
    <span className={accent ? "flex items-center gap-1.5 font-medium text-brand-accent" : "flex items-center gap-1.5"}>
      {icon}
      {label}
    </span>
  );
}

function relativeDate(dateString: string, t: ReturnType<typeof useTranslations<"careers.jobCard">>) {
  const date = new Date(dateString);
  const diffDays = Math.max(1, Math.ceil(Math.abs(Date.now() - date.getTime()) / 86_400_000));
  if (diffDays === 1) return t("postedOneDay");
  if (diffDays < 7) return t("postedDays", { count: diffDays });
  if (diffDays < 30) return t("postedWeeks", { count: Math.floor(diffDays / 7) });
  return t("postedMonths", { count: Math.floor(diffDays / 30) });
}
