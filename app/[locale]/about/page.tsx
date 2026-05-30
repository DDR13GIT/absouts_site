import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Award,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Globe2,
} from "lucide-react";
import { Hero, SectionHeading, Reveal, Cta } from "@/components/sections";
import { ABOUT, BACKGROUNDS, LEADERSHIP_PHOTOS } from "@/lib/assets";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, organizationSchema } from "@/lib/seo/structured-data";

const VALUE_ICONS = {
  excellence: Award,
  innovation: Lightbulb,
  integrity: ShieldCheck,
  clientSuccess: Target,
  collaboration: Users,
  globalPartnership: Globe2,
} as const;

const LEADERS = [
  { key: "kdRoy", photo: LEADERSHIP_PHOTOS.kdRoy },
  { key: "enamKhan", photo: LEADERSHIP_PHOTOS.enamKhan },
  { key: "razwanKader", photo: LEADERSHIP_PHOTOS.razwanKader },
  { key: "pritamKumarDas", photo: LEADERSHIP_PHOTOS.pritamKumarDas },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/about",
    keywords: "Absouts, outsourcing company, global delivery, BPO, software development",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const valueKeys = [
    "excellence",
    "innovation",
    "integrity",
    "clientSuccess",
    "collaboration",
    "globalPartnership",
  ] as const;

  return (
    <>
      <JsonLd data={organizationSchema()} />
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <Hero
        layout="banner"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage={ABOUT.base}
        backgroundAlt=""
      />

      {/* ─── FOUNDATION: split, image + narrative ────────────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-strong)] lg:aspect-[5/4]">
            <Image
              src={ABOUT.foundation}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 to-transparent"
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading title={t("foundation.title")} />
            <Reveal delay={60}>
              <p className="text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {t("foundation.description1")}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {t("foundation.description2")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── MISSION + VISION: two contrasting panels ────────────────────── */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Reveal className="relative isolate overflow-hidden rounded-2xl bg-brand-primary p-8 sm:p-10">
            <Image
              src={ABOUT.mission}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-20"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-brand-primary/70" />
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t("mission.title")}
              </h2>
              <p className="text-pretty leading-relaxed text-white/80">
                {t("mission.description")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="relative isolate overflow-hidden rounded-2xl bg-brand-secondary p-8 sm:p-10">
            <Image
              src={ABOUT.vision}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-20"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-brand-secondary/70" />
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t("vision.title")}
              </h2>
              <p className="text-pretty leading-relaxed text-white/80">
                {t("vision.description")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── VALUES ──────────────────────────────────────────────────────── */}
      <section className="bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("values.badge")}
            title={t("values.title")}
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {valueKeys.map((key, i) => {
              const Icon = VALUE_ICONS[key];
              return (
                <Reveal key={key} delay={(i % 3) * 60} as="div" className="flex flex-col gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-secondary">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold text-brand-primary">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(`values.${key}.description`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ──────────────────────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={t("leadership.title")}
            lead={t("leadership.subtitle")}
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {LEADERS.map(({ key, photo }, i) => (
              <Reveal
                key={key}
                delay={(i % 2) * 60}
                as="article"
                className={cn(
                  "group flex flex-col gap-5 overflow-hidden rounded-2xl border border-neutral-dark/8 bg-bg-surface p-6 shadow-[var(--shadow-medium)] sm:flex-row sm:items-start sm:p-7",
                  "transition-shadow duration-300 ease-out hover:shadow-[var(--shadow-strong)]"
                )}
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
                  <Image
                    src={photo}
                    alt={t(`leadership.${key}.name`)}
                    fill
                    sizes="112px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-pretty text-lg font-bold leading-tight text-brand-primary">
                    {t(`leadership.${key}.name`)}
                  </h3>
                  <p className="text-sm font-medium text-brand-secondary">
                    {t(`leadership.${key}.position`)}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(`leadership.${key}.description`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-24">
        <Cta
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "/services" }}
          secondary={{ label: t("cta.secondary"), href: "/contact" }}
          backgroundImage={BACKGROUNDS.whyChooseUs}
        />
      </section>
    </>
  );
}
