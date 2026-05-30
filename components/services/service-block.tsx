import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui";
import { Reveal } from "@/components/sections";
import { cn } from "@/lib/utils/cn";

export type ServiceBlockData = {
  title: string;
  subtitle: string;
  description: string;
  whatWeProvide: string[];
  advantage: string;
  image: string;
  tags: string[];
  icon?: string;
};

type ServiceBlockProps = {
  service: ServiceBlockData;
  index: number;
  labels: {
    whatWeProvide: string;
    keyAdvantage: string;
  };
  tone?: "cloud" | "bpo";
};

export function ServiceBlock({
  service,
  index,
  labels,
  tone = "cloud",
}: ServiceBlockProps) {
  const flipped = index % 2 === 1;
  const sectionTone =
    tone === "cloud"
      ? index % 2 === 0
        ? "bg-bg-base"
        : "bg-bg-darker"
      : index % 2 === 0
        ? "bg-bg-darker"
        : "bg-bg-base";

  return (
    <section className={cn("relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8", sectionTone)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-12 h-64 w-64 rounded-full blur-3xl",
          tone === "cloud" ? "bg-brand-accent/10" : "bg-med-calendula/18",
          flipped ? "right-[-5rem]" : "left-[-5rem]"
        )}
      />
      <div
        className={cn(
          "relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16",
          flipped && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal className="flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              {service.icon ? (
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary shadow-[0_14px_32px_-18px_rgb(11_11_68/0.55)]">
                  <Image
                    src={service.icon}
                    alt=""
                    width={34}
                    height={34}
                    className="size-8 object-contain brightness-0 invert"
                  />
                </span>
              ) : null}
              <div className="flex min-w-0 flex-col gap-3">
                <span className="font-mono text-xs font-medium tracking-[0.18em] text-brand-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-brand-primary sm:text-4xl">
                  {service.title}
                </h2>
              </div>
            </div>
            <p className="border-l-4 border-brand-accent/50 pl-4 text-pretty text-lg font-medium leading-relaxed text-brand-secondary">
              {service.subtitle}
            </p>
            <p className="text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              {service.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-brand-primary/10 bg-brand-primary/5 text-brand-primary"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <h3 className="sm:col-span-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-primary/75">
              {labels.whatWeProvide}
            </h3>
            {service.whatWeProvide.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                  strokeWidth={1.8}
                />
                <span className="text-sm font-medium leading-relaxed text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-primary/10 pt-6">
            <div className="flex gap-4 rounded-2xl border border-brand-accent/18 bg-brand-accent/8 p-5 shadow-[0_14px_34px_-24px_rgb(39_170_225/0.55)]">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-secondary">
                <ArrowRight className="size-5" aria-hidden="true" strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                  {labels.keyAdvantage}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-text-secondary">
                  {service.advantage}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="relative">
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 rounded-3xl",
              tone === "cloud" ? "bg-brand-accent/16" : "bg-med-clementine/18",
              flipped ? "translate-x-4 rotate-2" : "-translate-x-4 -rotate-2"
            )}
          />
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-primary shadow-[0_24px_60px_-32px_rgb(11_11_68/0.5)]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-primary/35 via-transparent to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
