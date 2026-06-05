import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Archive, Headphones, PackageCheck, UsersRound } from "lucide-react";
import { Cta, Hero, Reveal, SectionHeading } from "@/components/sections";
import { ServiceBlock, type ServiceBlockData } from "@/components/services/service-block";
import { BACKGROUNDS } from "@/lib/assets";
import { absoluteUrl, buildMetadata, localizedPath } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

const OPERATING_ICONS = [Archive, PackageCheck, Headphones, UsersRound] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.bpo" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/services/bpo",
    keywords: "BPO, business process outsourcing, back office support, customer support",
  });
}

export default async function BpoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "departments.bpo" });
  const services = t.raw("services") as ServiceBlockData[];
  const metrics = t.raw("metrics") as { value: string; label: string }[];
  const url = localizedPath(locale, "/services/bpo");

  return (
    <>
      <JsonLd data={serviceSchema({ name: t("title"), description: t("hero.subtitle"), url })} />
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
              const Icon = OPERATING_ICONS[index] ?? Archive;
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

      <section className="bg-bg-base px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow={t("operatingModel.badge")}
              title={t("operatingModel.title")}
              lead={t("operatingModel.lead")}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {(t.raw("operatingModel.points") as { title: string; description: string }[]).map((point, index) => {
                const Icon = OPERATING_ICONS[index] ?? Archive;
                return (
                  <Reveal
                    key={point.title}
                    delay={index * 60}
                    className="rounded-2xl border border-neutral-dark/8 bg-bg-surface p-5 shadow-[var(--shadow-subtle)]"
                  >
                    <Icon className="mb-4 size-5 text-brand-secondary" aria-hidden="true" strokeWidth={1.8} />
                    <h2 className="text-base font-semibold text-brand-primary">
                      {point.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {point.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceBlock
          key={service.title}
          service={service}
          index={index}
          tone="bpo"
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
          backgroundImage={BACKGROUNDS.bpo}
        />
      </section>
    </>
  );
}
