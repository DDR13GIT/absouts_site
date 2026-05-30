import * as Icons from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight, type LucideProps } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { Cta, Hero, Reveal, SectionHeading } from "@/components/sections";
import { Link } from "@/i18n/navigation";
import { BACKGROUNDS } from "@/lib/assets";
import { SUBSERVICES } from "@/lib/services";
import { cn } from "@/lib/utils/cn";
import { absoluteUrl, buildMetadata, localizedPath } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

const CARD_TONES: Record<string, string> = {
  ecommerce: "bg-bg-darker text-brand-primary border-brand-primary/10",
  mobile: "bg-bg-darker text-brand-primary border-brand-primary/10",
  cloud: "bg-bg-darker text-brand-primary border-brand-primary/10",
  testing: "bg-bg-darker text-brand-primary border-brand-primary/10",
  legaltech: "bg-bg-darker text-brand-primary border-brand-primary/10",
  webportal: "bg-bg-darker text-brand-primary border-brand-primary/10",
  fintech: "bg-bg-darker text-brand-primary border-brand-primary/10",
  ai: "bg-bg-darker text-brand-primary border-brand-primary/10",
};

type IconComponent = React.ComponentType<LucideProps>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.software" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/services/software",
    keywords: "software development, web development, mobile apps, cloud engineering, QA testing",
  });
}

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "departments.software" });
  const subT = await getTranslations({ locale, namespace: "subservices" });
  const process = t.raw("process.items") as { title: string; description: string }[];
  const url = localizedPath(locale, "/services/software");

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
        backgroundImage={BACKGROUNDS.software}
      />

      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-primary/8" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow={t("intro.badge")}
            title={t("intro.title")}
            lead={t("intro.lead")}
          />
          <Reveal className="relative overflow-hidden rounded-3xl bg-brand-primary p-6 shadow-[0_24px_60px_-32px_rgb(11_11_68/0.52)] sm:p-8">
            <Image
              src={BACKGROUNDS.software}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-18"
            />
            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              {process.map((item, index) => (
                <div key={item.title} className="border-t border-white/15 pt-4">
                  <span className="font-mono text-xs font-medium tracking-[0.18em] text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-base font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("services.badge")}
            title={t("services.title")}
            lead={t("services.lead")}
            align="center"
            className="mx-auto max-w-3xl"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUBSERVICES.map((service, index) => {
              const Icon = (Icons as unknown as Record<string, IconComponent>)[service.iconKey] ?? Icons.Code2;
              const href = `/services/software/${service.slug}`;
              return (
                <Reveal key={service.slug} delay={(index % 4) * 60}>
                  <Card
                    className={cn(
                      "group flex min-h-[18rem] flex-col overflow-hidden p-0",
                      "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                      "hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-[0_18px_42px_-22px_rgb(11_11_68/0.36)]"
                    )}
                  >
                    <Link
                      href={href}
                      className="flex h-full flex-col p-6 outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className={cn("flex size-12 items-center justify-center rounded-2xl border", CARD_TONES[service.slug])}>
                          <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
                        </span>
                        <span className="font-mono text-xs font-medium tracking-[0.18em] text-text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="mt-6 text-xl font-bold leading-tight tracking-tight text-brand-primary">
                        {subT(`${service.slug}.title`)}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                        {subT(`${service.slug}.short`)}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="flex -space-x-2">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech.name}
                              className="flex size-8 items-center justify-center rounded-full border border-neutral-dark/8 bg-white"
                            >
                              <Image src={tech.icon} alt={tech.name} width={20} height={20} className="size-5 object-contain" />
                            </span>
                          ))}
                        </div>
                        <ArrowRight
                          className="size-5 text-brand-secondary transition-transform duration-200 ease-out group-hover:translate-x-1"
                          aria-hidden="true"
                          strokeWidth={1.8}
                        />
                      </div>
                    </Link>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-brand-primary/10 bg-bg-surface p-6 shadow-[var(--shadow-medium)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge variant="outline" className="mb-4">
              {t("handoff.badge")}
            </Badge>
            <h2 className="max-w-2xl text-balance text-2xl font-bold leading-tight tracking-tight text-brand-primary sm:text-3xl">
              {t("handoff.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {t("handoff.description")}
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contact">{t("handoff.button")}</Link>
          </Button>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <Cta
          title={t("cta.title")}
          description={t("cta.description")}
          primary={{ label: t("cta.primary"), href: "/contact" }}
          secondary={{ label: t("cta.secondary"), href: "/services" }}
          backgroundImage={BACKGROUNDS.software}
        />
      </section>
    </>
  );
}
