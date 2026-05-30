import * as Icons from "lucide-react";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, type LucideProps } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge, Button } from "@/components/ui";
import { FeatureGrid, Reveal, TechStack } from "@/components/sections";
import { Link } from "@/i18n/navigation";
import { BACKGROUNDS } from "@/lib/assets";
import { getSubService, type SubServiceSlug } from "@/lib/services";
import { cn } from "@/lib/utils/cn";

type IconComponent = React.ComponentType<LucideProps>;

type FeatureCopy = {
  title: string;
  description: string;
};

const ACCENT_CLASSES: Record<SubServiceSlug, string> = {
  ecommerce: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  mobile: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  cloud: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  testing: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  legaltech: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  webportal: "bg-gradient-to-br from-brand-primary to-brand-secondary",
  fintech: "bg-gradient-to-br from-brand-secondary to-success",
  ai: "bg-gradient-to-br from-brand-secondary to-success",
};

const TINT_CLASSES: Record<SubServiceSlug, string> = {
  ecommerce: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  mobile: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  cloud: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  testing: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  legaltech: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  webportal: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  fintech: "bg-bg-darker border-brand-primary/10 text-brand-primary",
  ai: "bg-bg-darker border-brand-primary/10 text-brand-primary",
};

export async function SubServiceTemplate({ slug }: { slug: SubServiceSlug }) {
  const service = getSubService(slug);

  if (!service) {
    return null;
  }

  const t = await getTranslations(`subservices.${slug}`);
  const detailT = await getTranslations("subservices.detail");
  const Icon =
    (Icons as unknown as Record<string, IconComponent>)[service.iconKey] ??
    Icons.Code2;
  const coreFeatures = t.raw("coreFeatures") as FeatureCopy[];
  const additionalFeatures = t.raw("additionalFeatures") as string[];
  const accentClassName = ACCENT_CLASSES[slug];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-bg-base px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <div
          aria-hidden="true"
          className={cn(
            "absolute -right-24 top-24 h-72 w-72 rounded-full opacity-15 blur-3xl",
            accentClassName
          )}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-brand-primary/8"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal className="flex flex-col items-start gap-7">
            <Button asChild variant="ghost" size="sm" className="-ml-3">
              <Link href="/services/software">
                <ArrowLeft aria-hidden="true" />
                {detailT("back")}
              </Link>
            </Button>

            <div className="flex flex-col gap-5">
              <Badge
                variant="outline"
                className={cn("border px-3 py-1", TINT_CLASSES[slug])}
              >
                {detailT("badge")}
              </Badge>
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-1 flex size-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_18px_42px_-24px_rgb(11_11_68/0.48)]",
                    accentClassName
                  )}
                >
                  <Icon className="size-7" aria-hidden="true" strokeWidth={1.7} />
                </span>
                <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
                  {t("title")}
                </h1>
              </div>
              <p className="max-w-[62ch] text-pretty text-lg leading-relaxed text-text-secondary sm:text-xl">
                {t("description")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="relative">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 translate-x-4 rotate-2 rounded-3xl opacity-70",
                accentClassName
              )}
            />
            <div className="relative overflow-hidden rounded-3xl bg-brand-primary shadow-[0_24px_60px_-32px_rgb(11_11_68/0.52)]">
              <div className="relative aspect-[5/4] min-h-80">
                <Image
                  src={BACKGROUNDS.software}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-30"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/82 to-brand-secondary/70"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.technologies.slice(0, 4).map((technology) => (
                      <div
                        key={technology.name}
                        className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 p-3"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white">
                          <Image
                            src={technology.icon}
                            alt=""
                            width={26}
                            height={26}
                            sizes="26px"
                            className="size-6 object-contain"
                          />
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {technology.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FeatureGrid
        title={t("coreFeaturesTitle")}
        subtitle={t("coreFeaturesSubtitle")}
        features={coreFeatures}
        iconKey={service.iconKey}
        accentClassName={accentClassName}
      />

      <section className="bg-brand-primary px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <Badge
              variant="secondary"
              className="w-fit bg-white/10 text-white"
            >
              {detailT("additionalBadge")}
            </Badge>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              {detailT("additionalTitle")}
            </h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {additionalFeatures.map((feature, index) => (
              <Reveal key={feature} delay={(index % 2) * 55}>
                <div className="flex min-h-16 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand-accent"
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm font-medium leading-relaxed text-white/78">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack
        title={detailT("techTitle")}
        subtitle={t("techStackSubtitle")}
        technologies={service.technologies}
        accentClassName={accentClassName}
      />
    </>
  );
}
