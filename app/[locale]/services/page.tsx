import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Handshake,
  PackageCheck,
  ServerCog,
  GraduationCap,
  Boxes,
  Gauge,
  Scaling,
} from "lucide-react";
import {
  Hero,
  SectionHeading,
  DepartmentCard,
  Reveal,
  Cta,
} from "@/components/sections";
import { getDepartmentsInOrder } from "@/lib/services";
import { BACKGROUNDS } from "@/lib/assets";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/seo/metadata";

const DEPT_MESSAGE_KEY: Record<string, "cloudAccounting" | "bpo" | "software"> = {
  "cloud-accounting": "cloudAccounting",
  bpo: "bpo",
  software: "software",
};

const PILLAR_ICONS = {
  clientRelationship: Handshake,
  serviceDelivery: PackageCheck,
  technology: ServerCog,
  talent: GraduationCap,
} as const;

const BENEFIT_ICONS = {
  vendorManagement: Boxes,
  efficiency: Gauge,
  scalability: Scaling,
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.services" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/services",
    keywords: "outsourcing services, cloud accounting, BPO, software development",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const departments = getDepartmentsInOrder();

  const pillarKeys = [
    "clientRelationship",
    "serviceDelivery",
    "technology",
    "talent",
  ] as const;
  const benefitKeys = ["vendorManagement", "efficiency", "scalability"] as const;

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <Hero
        layout="banner"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage={BACKGROUNDS.software}
        backgroundAlt=""
      />

      {/* ─── DEPARTMENTS: 3 ordered cards, featured first ────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {departments.map((dept, i) => {
              const key = DEPT_MESSAGE_KEY[dept.slug];
              const featured = i === 0;
              return (
                <Reveal
                  key={dept.slug}
                  delay={i * 60}
                  className={cn(featured && "lg:col-span-2")}
                >
                  <DepartmentCard
                    href={`/services/${dept.slug}`}
                    title={t(`departments.${key}.title`)}
                    description={t(`departments.${key}.description`)}
                    image={dept.background}
                    index={String(dept.order).padStart(2, "0")}
                    exploreLabel={t(`departments.${key}.button`)}
                    featured={featured}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICE PILLARS: 4, on dark band ────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-primary px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("pillars.badge")}
            title={t("pillars.title")}
            lead={t("pillars.subtitle")}
            tone="inverted"
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillarKeys.map((key, i) => {
              const Icon = PILLAR_ICONS[key];
              return (
                <Reveal
                  key={key}
                  delay={i * 60}
                  as="div"
                  className="flex flex-col gap-4 bg-brand-primary p-6 sm:p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {t(`pillars.${key}.description`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS: 3 ─────────────────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t("benefits.title")} className="max-w-2xl" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefitKeys.map((key, i) => {
              const Icon = BENEFIT_ICONS[key];
              return (
                <Reveal
                  key={key}
                  delay={i * 60}
                  as="div"
                  className="flex flex-col gap-4 rounded-2xl border border-neutral-dark/8 bg-bg-surface p-7 shadow-[var(--shadow-medium)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-secondary">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold text-brand-primary">
                    {t(`benefits.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(`benefits.${key}.description`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-24">
        <Cta
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "/contact" }}
          secondary={{ label: t("cta.secondary"), href: "/about" }}
          backgroundImage={BACKGROUNDS.cloudAccounting}
        />
      </section>
    </>
  );
}
