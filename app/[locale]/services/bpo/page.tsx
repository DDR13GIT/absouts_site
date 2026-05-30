import Image from "next/image";
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
        layout="banner"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        actions={[
          { label: t("hero.primary"), href: "/contact", variant: "secondary" },
          { label: t("hero.secondary"), href: "/services", variant: "outline" },
        ]}
        backgroundImage={BACKGROUNDS.bpo}
      />

      <section className="bg-bg-base px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
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
          <Reveal delay={80} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-primary shadow-[0_24px_60px_-32px_rgb(11_11_68/0.5)]">
            <Image
              src={BACKGROUNDS.bpo}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="max-w-sm text-pretty text-2xl font-bold leading-tight tracking-tight text-white">
                {t("operatingModel.imageCaption")}
              </p>
            </div>
          </Reveal>
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
