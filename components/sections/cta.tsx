import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./reveal";
import { BlobBackground } from "./blob-background";

// CTA: closing call-to-action band. Server component. Light beige surface with a
// background image (optional) + tasteful blobs. One primary action, optional
// secondary. Dark text. Buttons inherit the design-system press feedback.

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
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-mediterranean-linen px-6 py-16 sm:px-12 sm:py-20">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={backgroundAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-mediterranean-linen/85"
            />
          </>
        ) : (
          <BlobBackground />
        )}

        <div className="relative z-10 flex max-w-3xl flex-col gap-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-brand-primary sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          {description ? (
            <Reveal delay={60}>
              <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {description}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={description ? 120 : 60} className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="lg" variant="default">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
