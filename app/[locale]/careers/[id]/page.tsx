import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { ArrowLeft, Briefcase, Calendar, Clock, DollarSign, Mail, MapPin, Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JobDetailApply } from "@/components/careers/job-detail-apply";
import { PerksBenefits } from "@/components/careers/perks-benefits";
import { Badge, Button, Card, CardContent } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { Reveal, SectionHeading } from "@/components/sections";
import { getJobById } from "@/lib/db/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "seo.jobDetail" });

  try {
    const job = await getJobById(id);

    if (!job) {
      return buildMetadata({
        locale,
        title: t("title", { jobTitle: "Role" }),
        description: t("description", { jobTitle: "Role" }),
        path: `/careers/${id}`,
      });
    }

    return buildMetadata({
      locale,
      title: t("title", { jobTitle: job.title }),
      description: t("description", { jobTitle: job.title }),
      path: `/careers/${id}`,
      keywords: `${job.title}, Absouts careers, jobs`,
      type: "article",
    });
  } catch {
    return buildMetadata({
      locale,
      title: t("title", { jobTitle: "Role" }),
      description: t("description", { jobTitle: "Role" }),
      path: `/careers/${id}`,
    });
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  await connection();

  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "careers.detail" });
  const job = await getJobById(id);

  if (!job) notFound();

  const requirements = splitLines(job.requirements);
  const benefits = splitLines(job.benefits);
  const testimonials = t.raw("testimonials.items") as Array<{ quote: string; author: string; position: string }>;

  return (
    <>
      <section className="bg-bg-base px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/careers">
              <ArrowLeft className="mr-2 size-4" />
              {t("back")}
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6">
              <Reveal>
                <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
                  <CardContent className="space-y-6 p-8">
                    <div className="space-y-4">
                      <h1 className="text-balance text-4xl font-bold leading-tight text-brand-primary sm:text-5xl">
                        {job.title}
                      </h1>
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                        <Meta icon={<MapPin className="size-4" />} label={job.location} />
                        <Meta icon={<Briefcase className="size-4" />} label={job.type} />
                        <Meta icon={<Clock className="size-4" />} label={formatDate(job.postedDate)} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-brand-primary">{t("aboutRole")}</h2>
                      <p className="leading-relaxed text-text-secondary">{job.description}</p>
                    </div>
                    <div className="rounded-lg border border-brand-accent/20 bg-brand-accent/10 p-4">
                      <p className="font-medium text-brand-primary">{t("openStatus")}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <ContentPanel title={t("requirements")} items={requirements} />
              <ContentPanel title={t("benefits")} items={benefits} />

              <Reveal>
                <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
                  <CardContent className="space-y-6 p-8">
                    <h2 className="text-2xl font-semibold text-brand-primary">{t("testimonials.title")}</h2>
                    <div className="space-y-6">
                      {testimonials.map((item) => (
                        <blockquote key={item.author} className="border-l-4 border-brand-accent pl-5">
                          <Quote className="mb-3 size-5 text-brand-accent" />
                          <p className="mb-3 text-sm italic leading-relaxed text-text-secondary">
                            {item.quote}
                          </p>
                          <footer>
                            <p className="font-semibold text-brand-primary">{item.author}</p>
                            <p className="text-sm text-text-muted">{item.position}</p>
                          </footer>
                        </blockquote>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
                <CardContent className="space-y-5 p-6">
                  <h2 className="text-xl font-semibold text-brand-primary">{t("detailsTitle")}</h2>
                  <DetailRow icon={<DollarSign className="size-4" />} label={t("salary")} value={job.salary} />
                  <DetailRow icon={<Briefcase className="size-4" />} label={t("experience")} value={job.experience} />
                  {job.deadline ? (
                    <DetailRow icon={<Calendar className="size-4" />} label={t("deadline")} value={formatDate(job.deadline)} />
                  ) : null}
                  <DetailRow icon={<Mail className="size-4" />} label={t("contact")} value={job.contact} />
                  <JobDetailApply jobId={job.id} jobTitle={job.title} />
                </CardContent>
              </Card>

              {job.skills.length ? (
                <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
                  <CardContent className="space-y-4 p-6">
                    <h2 className="text-lg font-semibold text-brand-primary">{t("skills")}</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-bg-section/70 text-brand-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-bg-darker px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PerksBenefits />
        </div>
      </section>
    </>
  );
}

function ContentPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <Card className="border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
        <CardContent className="space-y-4 p-8">
          <h2 className="text-2xl font-semibold text-brand-primary">{title}</h2>
          <ul className="space-y-3 text-text-secondary">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Reveal>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-brand-accent">{icon}</div>
      <div>
        <p className="text-sm text-text-muted">{label}</p>
        <p className="font-medium text-brand-primary">{value}</p>
      </div>
    </div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      {icon}
      {label}
    </span>
  );
}

function splitLines(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
