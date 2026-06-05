import type { Metadata } from "next";
import Image from "next/image";
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
  Reveal,
  Cta,
} from "@/components/sections";
import { Link } from "@/i18n/navigation";
import { BACKGROUNDS } from "@/lib/assets";
import { buildMetadata } from "@/lib/seo/metadata";

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

const SERVICE_CARDS = [
  {
    image: BACKGROUNDS.cloudAccounting,
    badge: "Finance Ready",
    dotClass: "bg-orange-500",
    title: "Cloud Accounting",
    description:
      "End-to-end bookkeeping, reporting, and compliance handled with precision and automation. Removes manual workload and enforces consistent financial accuracy.",
    href: "/services/cloud-accounting",
    hoverClass: "hover:border-orange-500 hover:text-orange-500",
    featured: true,
  },
  {
    image: BACKGROUNDS.bpo,
    badge: "Efficiency Guaranteed",
    dotClass: "bg-gray-900",
    title: "Business Process Outsourcing",
    description:
      "Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.",
    href: "/services/bpo",
    hoverClass: "hover:border-gray-500 hover:text-gray-600",
  },
  {
    image: BACKGROUNDS.software,
    badge: "Built for Scale",
    dotClass: "bg-purple-500",
    title: "Software Development",
    description:
      "Custom software engineered for scale, reliability, and long-term maintainability. Covers full-cycle delivery from architecture to deployment.",
    href: "/services/software",
    hoverClass: "hover:border-purple-500 hover:text-purple-500",
  },
] as const;

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
  const tHome = await getTranslations({ locale, namespace: "home" });

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
        bannerTone="soft"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      {/* ─── DEPARTMENTS: 3 ordered cards, featured first ────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.title}
                className={`relative min-h-[350px] overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                  "featured" in card && card.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={`${card.title} background`}
                    fill
                    sizes={
                      "featured" in card && card.featured
                        ? "(max-width: 768px) 100vw, 1280px"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-white/80 px-3 py-1.5">
                    <div className={`h-2 w-2 rounded-full ${card.dotClass}`}></div>
                    <span className="text-xs font-medium text-gray-700">{card.badge}</span>
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mb-8 font-medium leading-relaxed text-gray-700">
                    {card.description}
                  </p>
                </div>

                <Link href={card.href} className="absolute bottom-8 left-8 z-20">
                  <span
                    className={`inline-flex items-center border-b-2 border-gray-900 pb-1 font-medium text-gray-900 transition-colors duration-300 ${card.hoverClass}`}
                  >
                    {tHome("services.explore")}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE PILLARS: 4, on light beige band ─────────────────────── */}
      <section className="relative isolate overflow-hidden bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("pillars.badge")}
            title={t("pillars.title")}
            lead={t("pillars.subtitle")}
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-brand-primary/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillarKeys.map((key, i) => {
              const Icon = PILLAR_ICONS[key];
              return (
                <Reveal
                  key={key}
                  delay={i * 60}
                  as="div"
                  className="flex flex-col gap-4 bg-mediterranean-linen p-6 sm:p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-mediterranean-herb/15 text-mediterranean-herb">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base font-semibold text-brand-primary">
                    {t(`pillars.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
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
                  <span className="flex size-11 items-center justify-center rounded-xl border border-brand-primary/10 bg-bg-darker text-brand-primary">
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
