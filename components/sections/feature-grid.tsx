import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils/cn";

type IconComponent = React.ComponentType<LucideProps>;

type FeatureItem = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  iconKey: string;
  accentClassName: string;
};

export function FeatureGrid({
  title,
  subtitle,
  features,
  iconKey,
  accentClassName,
}: FeatureGridProps) {
  const Icon =
    (Icons as unknown as Record<string, IconComponent>)[iconKey] ?? Icons.Code2;

  return (
    <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-brand-primary/8"
      />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="flex flex-col gap-5">
            <span
              className={cn(
                "flex size-13 items-center justify-center rounded-2xl text-white shadow-[0_18px_42px_-24px_rgb(11_11_68/0.45)]",
                accentClassName
              )}
            >
              <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-brand-primary sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-[54ch] text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {subtitle}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 2) * 70}>
              <article
                className={cn(
                  "group min-h-[17rem] rounded-2xl border border-neutral-dark/8 bg-bg-surface p-6 shadow-[var(--shadow-medium)]",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-[0_20px_48px_-28px_rgb(11_11_68/0.36)]",
                  index === 1 && "sm:mt-8",
                  index === 2 && "sm:-mt-3"
                )}
              >
                <span className="font-mono text-xs font-medium tracking-[0.18em] text-brand-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight text-brand-primary">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
