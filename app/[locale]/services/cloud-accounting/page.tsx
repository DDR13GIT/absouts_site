import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Calculator, FileCheck2, LineChart, ShieldCheck } from "lucide-react";
import { Cta, Hero, Reveal, SectionHeading } from "@/components/sections";
import { ServiceBlock, type ServiceBlockData } from "@/components/services/service-block";
import { BACKGROUNDS } from "@/lib/assets";
import { absoluteUrl, buildMetadata, localizedPath } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

const METRIC_ICONS = [Calculator, FileCheck2, LineChart, ShieldCheck] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.cloudAccounting" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/services/cloud-accounting",
    keywords: "cloud accounting, bookkeeping, payroll, tax compliance, finance operations",
  });
}

export default async function CloudAccountingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "departments.cloudAccounting" });
  const services = t.raw("services") as ServiceBlockData[];
  const metrics = t.raw("metrics") as { value: string; label: string }[];
  const url = localizedPath(locale, "/services/cloud-accounting");

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: t("title"),
          description: t("hero.subtitle"),
          url,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl(localizedPath(locale, "/")) },
          { name: "Services", url: absoluteUrl(localizedPath(locale, "/services")) },
          { name: t("title"), url: absoluteUrl(url) },
        ])}
      />
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
