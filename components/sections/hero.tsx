import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Badge, Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./reveal";
import { BlobBackground } from "./blob-background";

// Hero: flexible building block for the top of each page.
//
// Two layouts:
//  • "split"   — asymmetric: copy left, `media` slot right (used on Home).
//  • "banner"  — centered copy over a dark image background (About / Services).
//
// Server component. Title can be a string or ReactNode (for emphasis spans).
// Anti-slop: no centered-hero-with-3-cards default; split is the home shape.

type HeroAction = { label: string; href: string; variant?: "default" | "secondary" | "outline" };

type HeroProps = {
  layout?: "split" | "banner";
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  actions?: HeroAction[];
  /** Right-column content for the split layout (e.g. a bento image arrangement). */
  media?: React.ReactNode;
  /** Below-copy content for the split layout (e.g. stat metrics). */
  footer?: React.ReactNode;
  /** Background image path for the banner layout. */
  backgroundImage?: string;
  backgroundAlt?: string;
  className?: string;
};

export function Hero({
  layout = "split",
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  footer,
  backgroundImage,
  backgroundAlt = "",
  className,
}: HeroProps) {
  if (layout === "banner") {
    return (
      <section
        className={cn(
          "relative isolate overflow-hidden bg-brand-primary",
          "px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8",
          className
        )}
      >
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-brand-primary"
            />
          </>
        ) : (
          <BlobBackground onDark />
        )}

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow ? (
            <Reveal>
              <Badge variant="secondary" className="bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-white">
                {eyebrow}
              </Badge>
            </Reveal>
          ) : null}
          <Reveal delay={eyebrow ? 60 : 0}>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle ? (
            <Reveal delay={eyebrow ? 120 : 60}>
              <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
          {actions?.length ? (
            <Reveal delay={eyebrow ? 180 : 120} className="flex flex-wrap justify-center gap-3 pt-2">
              {actions.map((a) => (
                <HeroButton key={a.href + a.label} action={a} onDark />
              ))}
            </Reveal>
          ) : null}
        </div>
      </section>
    );
  }

  // split layout
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-bg-base",
        "px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8",
        className
      )}
    >
      <BlobBackground />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-bg-section/40 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy column */}
        <div className="flex flex-col gap-6">
          {eyebrow ? (
            <Reveal>
              <Badge variant="outline" className="w-fit px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]">
                {eyebrow}
              </Badge>
            </Reveal>
          ) : null}
          <Reveal delay={eyebrow ? 60 : 0}>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle ? (
            <Reveal delay={eyebrow ? 120 : 60}>
              <p className="max-w-[52ch] text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
          {actions?.length ? (
            <Reveal delay={eyebrow ? 180 : 120} className="flex flex-wrap gap-3 pt-1">
              {actions.map((a) => (
                <HeroButton key={a.href + a.label} action={a} />
              ))}
            </Reveal>
          ) : null}
          {footer ? <div className="pt-4">{footer}</div> : null}
        </div>

        {/* Media column */}
        {media ? (
          <Reveal delay={120} className="w-full">
            {media}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function HeroButton({ action, onDark }: { action: HeroAction; onDark?: boolean }) {
  const variant = action.variant ?? "default";
  // On dark banner, the outline variant needs white borders for contrast.
  const outlineOnDark =
    onDark && variant === "outline"
      ? "border-white/40 bg-transparent text-white hover:bg-white hover:text-brand-primary"
      : undefined;
  return (
    <Button asChild size="lg" variant={variant} className={outlineOnDark}>
      <Link href={action.href}>{action.label}</Link>
    </Button>
  );
}
