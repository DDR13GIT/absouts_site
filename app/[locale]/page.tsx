import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ShieldCheck, Globe2, Award, TrendingUp } from "lucide-react";
import {
  Hero,
  SectionHeading,
  StatMetrics,
  DepartmentCard,
  Reveal,
  Cta,
} from "@/components/sections";
import { getDepartmentsInOrder } from "@/lib/services";
import { BACKGROUNDS } from "@/lib/assets";
import { cn } from "@/lib/utils/cn";

// Map department slug -> message key under home.services / services.departments.
const DEPT_MESSAGE_KEY: Record<string, "cloudAccounting" | "bpo" | "software"> = {
  "cloud-accounting": "cloudAccounting",
  bpo: "bpo",
  software: "software",
};

const WHY_ICONS = {
  expertise: Award,
  global: Globe2,
  security: ShieldCheck,
  scalability: TrendingUp,
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const departments = getDepartmentsInOrder();

  const stats = [
    { value: t("hero.metrics.talents"), label: t("hero.metrics.talentsLabel") },
    { value: t("hero.metrics.clients"), label: t("hero.metrics.clientsLabel") },
    { value: t("hero.metrics.retention"), label: t("hero.metrics.retentionLabel") },
  ];

  const whyItems = (["expertise", "global", "security", "scalability"] as const).map((key) => ({
    key,
    Icon: WHY_ICONS[key],
    title: t(`whyChooseUs.items.${key}.title`),
    description: t(`whyChooseUs.items.${key}.description`),
  }));

  return (
    <>
      {/* ─── HERO: asymmetric split, copy + image bento ─────────────────── */}
      <Hero
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        actions={[
          { label: t("hero.findTalent"), href: "/careers", variant: "default" },
          { label: t("hero.learnMore"), href: "/about", variant: "outline" },
        ]}
        footer={<StatMetrics stats={stats} />}
        media={
          <div className="grid grid-cols-2 gap-4">
            {/* Tall primary image */}
            <div className="relative col-span-1 row-span-2 aspect-[3/4] overflow-hidden rounded-2xl shadow-[var(--shadow-strong)]">
              <Image
                src={BACKGROUNDS.heroBg1}
                alt={t("hero.imageAlt1")}
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            {/* Secondary image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-medium)]">
              <Image
                src={BACKGROUNDS.heroBg2}
                alt={t("hero.imageAlt2")}
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            {/* Accent stat tile — fills the bento, brand-toned, no empty cell */}
            <div className="flex flex-col justify-center gap-1 rounded-2xl bg-brand-primary p-5 shadow-[var(--shadow-medium)]">
              <span className="text-3xl font-bold tracking-tight text-white">
                {t("hero.metrics.retention")}
              </span>
              <span className="text-sm font-medium text-white/70">
                {t("hero.metrics.retentionLabel")}
              </span>
              <span className="mt-2 h-1 w-10 rounded-full bg-brand-accent" aria-hidden="true" />
            </div>
          </div>
        }
      />

      {/* ─── SERVICES: 3 departments, asymmetric grid ───────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("services.badge")}
            title={t("services.title")}
            lead={t("services.subtitle")}
            className="max-w-3xl"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {departments.map((dept, i) => {
              const key = DEPT_MESSAGE_KEY[dept.slug];
              // First department (Cloud Accounting) is featured full-width.
              const featured = i === 0;
              return (
                <Reveal
                  key={dept.slug}
                  delay={i * 60}
                  className={cn(featured && "lg:col-span-2")}
                >
                  <DepartmentCard
                    href={`/services/${dept.slug}`}
                    title={t(`services.${key}.title`)}
                    description={t(`services.${key}.description`)}
                    image={dept.background}
                    index={String(dept.order).padStart(2, "0")}
                    exploreLabel={t("services.explore")}
                    featured={featured}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY ABSOUTS: values, on a tinted section ───────────────────── */}
      <section className="bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              title={t("whyChooseUs.title")}
              lead={t("whyChooseUs.subtitle")}
            />
            <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {whyItems.map(({ key, Icon, title, description }, i) => (
                <Reveal key={key} delay={i * 60} as="div" className="flex flex-col gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-secondary">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <dt className="text-lg font-semibold text-brand-primary">{title}</dt>
                  <dd className="text-sm leading-relaxed text-text-secondary">{description}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-24">
        <Cta
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "/contact" }}
          secondary={{ label: t("cta.secondary"), href: "/services" }}
          backgroundImage={BACKGROUNDS.whyChooseUs}
        />
      </section>
    </>
  );
}
