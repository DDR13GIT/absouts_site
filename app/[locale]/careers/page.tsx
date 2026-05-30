import type { Metadata } from "next";
import { Briefcase, Globe, TrendingUp, Users } from "lucide-react";
import { connection } from "next/server";
import { getTranslations } from "next-intl/server";
import { CareersOpenings } from "@/components/careers/careers-openings";
import { PerksBenefits } from "@/components/careers/perks-benefits";
import { Card, CardContent } from "@/components/ui";
import { Hero, Reveal, SectionHeading } from "@/components/sections";
import { getPublishedJobs, type JobListItem } from "@/lib/db/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

const whyIcons = [TrendingUp, Globe, Users];

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.careers" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/careers",
    keywords: "careers, jobs, Absouts careers, outsourcing jobs",
  });
}

export default async function CareersPage({ params }: PageProps) {
  await connection();

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careers" });
  let jobs: JobListItem[] = [];
  let jobsError = false;

  try {
    jobs = await getPublishedJobs();
  } catch (error) {
    jobsError = true;
    console.error("Failed to load published jobs:", error);
  }

  const whyItems = t.raw("why.items") as Array<{ title: string; description: string }>;
  const processItems = t.raw("process.items") as Array<{ title: string; description: string }>;

  return (
    <>
      <Hero
        layout="banner"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/assets/hero-bg2.jpg"
      />

      <section className="bg-bg-base px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading title={t("why.title")} lead={t("why.lead")} align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {whyItems.map((item, index) => {
              const Icon = whyIcons[index] ?? Briefcase;
              return (
                <Reveal key={item.title} delay={index * 70}>
                  <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-subtle)]">
                    <CardContent className="space-y-4 p-6 text-center">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                        <Icon className="size-7" />
                      </div>
                      <h2 className="text-xl font-semibold text-brand-primary">{item.title}</h2>
                      <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-darker px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            eyebrow={t("openings.badge")}
            title={t("openings.title")}
            lead={t("openings.lead")}
            align="center"
          />
          {jobsError ? (
            <div className="rounded-xl border border-neutral-dark/10 bg-bg-surface p-8 text-center shadow-[var(--shadow-subtle)]">
              <p className="text-text-secondary">{t("jobsUnavailable")}</p>
            </div>
          ) : (
            <CareersOpenings jobs={jobs} />
          )}
        </div>
      </section>

      <section className="bg-bg-base px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading title={t("process.title")} lead={t("process.lead")} align="center" />
          <div className="grid gap-5 md:grid-cols-4">
            {processItems.map((step, index) => (
              <Reveal key={step.title} delay={index * 55}>
                <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-subtle)]">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <h2 className="text-lg font-semibold text-brand-primary">{step.title}</h2>
                    <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
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
