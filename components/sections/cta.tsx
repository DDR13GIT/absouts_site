import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./reveal";
import { BlobBackground } from "./blob-background";

// CTA: closing call-to-action band. Server component. Dark brand surface with a
// background image (optional) + tasteful blobs. One primary action, optional
// secondary. Inverted text. Buttons inherit the design-system press feedback.

type CtaAction = { label: string; href: string };

type CtaProps = {
  title: string;
  description?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /** /assets path for a background image (rendered with a dark scrim). */
  backgroundImage?: string;
  backgroundAlt?: string;
  className?: string;
};

export function Cta({
  title,
  description,
  primary,
  secondary,
  backgroundImage,
  backgroundAlt = "",
  className,
}: CtaProps) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8", className)}>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-primary px-6 py-16 sm:px-12 sm:py-20">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/85 to-brand-primary/40"
            />
          </>
        ) : (
          <BlobBackground onDark />
        )}

        <div className="relative z-10 flex max-w-3xl flex-col gap-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          {description ? (
            <Reveal delay={60}>
              <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
                {description}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={description ? 120 : 60} className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="lg" variant="secondary">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white hover:text-brand-primary"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
