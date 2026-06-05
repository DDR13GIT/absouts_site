import * as Icons from "lucide-react";
import Image from "next/image";
import { ArrowLeft, Check, type LucideProps } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui";
import { Cta, Reveal } from "@/components/sections";
import { Link } from "@/i18n/navigation";
import { getSubService, type SubServiceSlug } from "@/lib/services";
import { cn } from "@/lib/utils/cn";

type IconComponent = React.ComponentType<LucideProps>;

type FeatureCopy = {
  title: string;
  description: string;
};

type AccentStyles = {
  /** Accent ink for numerals, labels, icons. */
  text: string;
  /** Soft tinted fill behind the service icon. */
  soft: string;
  /** Hairline accent border (image frame, chips). */
  border: string;
  /** Solid accent for rules, dots, offset panel. */
  bar: string;
};

// Static class strings so Tailwind's scanner emits every accent variant.
const ACCENTS: Record<SubServiceSlug, AccentStyles> = {
  ecommerce: {
    text: "text-mediterranean-terra",
    soft: "bg-mediterranean-terra/12",
    border: "border-mediterranean-terra/35",
    bar: "bg-mediterranean-terra",
  },
  legaltech: {
    text: "text-mediterranean-terra",
    soft: "bg-mediterranean-terra/12",
    border: "border-mediterranean-terra/35",
    bar: "bg-mediterranean-terra",
  },
  mobile: {
    text: "text-mediterranean-herb",
    soft: "bg-mediterranean-herb/12",
    border: "border-mediterranean-herb/35",
    bar: "bg-mediterranean-herb",
  },
  fintech: {
    text: "text-mediterranean-herb",
    soft: "bg-mediterranean-herb/12",
    border: "border-mediterranean-herb/35",
    bar: "bg-mediterranean-herb",
  },
  cloud: {
    text: "text-mediterranean-french",
    soft: "bg-mediterranean-french/16",
    border: "border-mediterranean-french/35",
    bar: "bg-mediterranean-french",
  },
  ai: {
    text: "text-mediterranean-french",
    soft: "bg-mediterranean-french/16",
    border: "border-mediterranean-french/35",
    bar: "bg-mediterranean-french",
  },
  testing: {
    text: "text-mediterranean-terra",
    soft: "bg-mediterranean-clementine/18",
    border: "border-mediterranean-clementine/45",
    bar: "bg-mediterranean-clementine",
  },
  webportal: {
    text: "text-mediterranean-terra",
    soft: "bg-mediterranean-clementine/18",
    border: "border-mediterranean-clementine/45",
    bar: "bg-mediterranean-clementine",
  },
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
  const accent = ACCENTS[slug];
  const captionTechnologies = service.technologies.slice(0, 3);

  return (
    <>
      {/* ─── HERO: editorial split, real photograph ──────────────────────── */}
      <section className="relative isolate overflow-hidden bg-bg-base px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <div
          aria-hidden="true"
          className={cn(
            "absolute -right-32 -top-16 h-80 w-80 rounded-full opacity-[0.12] blur-3xl",
            accent.bar
          )}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-brand-primary/10"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Button asChild variant="ghost" size="sm" className="-ml-3">
            <Link href="/services/software">
              <ArrowLeft aria-hidden="true" />
              {detailT("back")}
            </Link>
          </Button>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <Reveal className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-text-secondary">
                <span
                  aria-hidden="true"
                  className={cn("h-2 w-2 rounded-full", accent.bar)}
                />
                {detailT("badge")}
              </span>

              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex size-14 shrink-0 items-center justify-center rounded-2xl",
                    accent.soft,
                    accent.text
                  )}
                >
                  <Icon className="size-7" aria-hidden="true" strokeWidth={1.7} />
                </span>
                <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-tight text-brand-primary sm:text-5xl lg:text-[3.5rem]">
                  {t("title")}
                </h1>
              </div>

              <p className="max-w-[60ch] text-pretty text-lg leading-relaxed text-text-secondary sm:text-xl">
                {t("description")}
              </p>

              <ul className="mt-1 flex flex-wrap gap-2.5">
                {coreFeatures.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-full border border-brand-primary/12 bg-bg-surface px-3.5 py-1.5 text-sm font-medium text-brand-primary"
                  >
                    {feature.title}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className="relative">
              <div
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-4 -left-4 hidden h-40 w-40 rounded-3xl opacity-15 sm:block",
                  accent.bar
                )}
              />
              <figure
                className={cn(
                  "relative overflow-hidden rounded-[1.75rem] border bg-bg-darker shadow-[0_30px_70px_-40px_rgb(11_11_68/0.45)]",
                  accent.border
                )}
              >
                <div className="relative aspect-[4/5] sm:aspect-[5/5]">
                  <Image
                    src={service.image}
                    alt={t("title")}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-primary/55 via-brand-primary/5 to-transparent"
                  />
                  <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/80 p-2.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                    {captionTechnologies.map((technology) => (
                      <span
                        key={technology.name}
                        className="flex size-9 items-center justify-center rounded-xl bg-bg-surface shadow-sm"
                        title={technology.name}
                      >
                        <Image
                          src={technology.icon}
                          alt=""
                          width={22}
                          height={22}
                          sizes="22px"
                          className="size-5 object-contain"
                        />
                      </span>
                    ))}
                    <span className="ml-1 text-xs font-semibold text-text-secondary">
                      {captionTechnologies.map((tc) => tc.name).join(" · ")}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CORE FEATURES: numbered editorial rows ──────────────────────── */}
      <section className="bg-bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex max-w-2xl flex-col gap-4">
            <span
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
                accent.text
              )}
            >
              {detailT("featuresBadge")}
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-brand-primary sm:text-4xl">
              {t("coreFeaturesTitle")}
            </h2>
            <p className="max-w-[58ch] text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              {t("coreFeaturesSubtitle")}
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col sm:mt-16">
            {coreFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 2) * 60}>
                <div className="grid gap-4 border-t border-brand-primary/12 py-8 first:border-t-0 sm:grid-cols-[6rem_1fr] sm:gap-12 sm:py-10">
                  <span
                    className={cn(
                      "text-4xl font-bold leading-none tracking-tight tabular-nums sm:text-5xl",
                      accent.text
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-brand-primary sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="max-w-[62ch] text-base leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL CAPABILITIES: light beige checklist ──────────────── */}
      <section className="bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <span
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
                accent.text
              )}
            >
              {detailT("additionalBadge")}
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-brand-primary sm:text-4xl">
              {detailT("additionalTitle")}
            </h2>
          </Reveal>

          <ul className="grid gap-x-12 sm:grid-cols-2">
            {additionalFeatures.map((feature, index) => (
              <Reveal key={feature} delay={(index % 2) * 55} as="li">
                <div className="flex items-start gap-3 border-t border-brand-primary/12 py-4">
                  <Check
                    className={cn("mt-0.5 size-5 shrink-0", accent.text)}
                    aria-hidden="true"
                    strokeWidth={2.4}
                  />
                  <p className="text-sm font-medium leading-relaxed text-text-primary sm:text-base">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK: one unified hairline panel ────────────────── */}
      <section className="bg-bg-base px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex max-w-2xl flex-col gap-4">
            <span
              className={cn(
                "text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
                accent.text
              )}
            >
              {detailT("techBadge")}
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-brand-primary sm:text-4xl">
              {detailT("techTitle")}
            </h2>
            <p className="max-w-[58ch] text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              {t("techStackSubtitle")}
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology.name}
                className="inline-flex items-center gap-3 rounded-2xl border border-brand-primary/10 bg-bg-surface py-2.5 pl-2.5 pr-5 shadow-[var(--shadow-subtle)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-primary/20"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-primary/8 bg-white">
                  <Image
                    src={technology.icon}
                    alt=""
                    width={28}
                    height={28}
                    sizes="28px"
                    className="size-7 object-contain"
                  />
                </span>
                <span className="text-base font-semibold tracking-tight text-brand-primary">
                  {technology.name}
                </span>
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CLOSING CTA ─────────────────────────────────────────────────── */}
      <Cta
        title={detailT("ctaTitle")}
        description={detailT("ctaDescription")}
        primary={{ label: detailT("ctaPrimary"), href: "/contact" }}
        secondary={{ label: detailT("ctaSecondary"), href: "/services/software" }}
        backgroundImage={service.image}
        className="pb-20 sm:pb-24"
      />
    </>
  );
}
