import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Calculator, FileCheck2, LineChart, ShieldCheck } from "lucide-react";
import { Cta, Hero, Reveal, SectionHeading } from "@/components/sections";
import { ServiceBlock, type ServiceBlockData } from "@/components/services/service-block";
import { BACKGROUNDS } from "@/lib/assets";

const METRIC_ICONS = [Calculator, FileCheck2, LineChart, ShieldCheck] as const;

export default async function CloudAccountingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "departments.cloudAccounting" });
  const services = t.raw("services") as ServiceBlockData[];
  const metrics = t.raw("metrics") as { value: string; label: string }[];

  return (
    <>
      <Hero
        layout="split"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        actions={[
          { label: t("hero.primary"), href: "/contact" },
          { label: t("hero.secondary"), href: "/services", variant: "outline" },
        ]}
        footer={
          <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = METRIC_ICONS[index] ?? Calculator;
              return (
                <Reveal
                  key={metric.label}
                  delay={index * 50}
                  className="rounded-2xl border border-brand-primary/10 bg-bg-surface p-4 shadow-[var(--shadow-subtle)]"
                >
                  <Icon className="mb-3 size-5 text-brand-secondary" aria-hidden="true" strokeWidth={1.8} />
                  <div className="text-xl font-bold tracking-tight text-brand-primary">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-medium leading-snug text-text-secondary">
                    {metric.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        }
        media={
          <div className="relative min-h-[28rem] overflow-hidden rounded-3xl bg-brand-primary shadow-[0_28px_70px_-34px_rgb(11_11_68/0.58)]">
            <Image
              src={BACKGROUNDS.cloudAccounting}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover opacity-80"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-brand-primary/85 via-brand-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-sm rounded-2xl bg-white p-5 shadow-[0_20px_48px_-24px_rgb(11_11_68/0.42)]">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-secondary">
                  {t("hero.cardLabel")}
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-brand-primary">
                  {t("hero.cardValue")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t("hero.cardDescription")}
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow={t("intro.badge")}
            title={t("intro.title")}
            lead={t("intro.lead")}
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {(t.raw("intro.points") as string[]).map((point) => (
              <div key={point} className="rounded-2xl border border-neutral-dark/8 bg-bg-surface p-5 shadow-[var(--shadow-subtle)]">
                <p className="text-sm font-medium leading-relaxed text-text-secondary">
                  {point}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceBlock
          key={service.title}
          service={service}
          index={index}
          tone="cloud"
          labels={{
            whatWeProvide: t("labels.whatWeProvide"),
            keyAdvantage: t("labels.keyAdvantage"),
          }}
        />
      ))}

      <section className="py-20 sm:py-24">
        <Cta
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "/contact" }}
          secondary={{ label: t("cta.secondary"), href: "/services" }}
          backgroundImage={BACKGROUNDS.cloudAccounting}
        />
      </section>
    </>
  );
}
