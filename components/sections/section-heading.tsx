import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui";
import { Reveal } from "./reveal";

// SectionHeading: eyebrow (optional) + title + optional lead paragraph.
// Server component. Eyebrows are RATIONED across a page (design mandate:
// max ~1 per 3 sections) — pass `eyebrow` only where it earns its place.
//
// align controls horizontal alignment; the lead caps at ~60ch for readability.

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Render heading as h1 on hero-level usage; default h2. */
  as?: "h1" | "h2";
  className?: string;
  /** Color treatment for placement on dark backgrounds. */
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Heading = "h2",
  className,
  tone = "default",
}: SectionHeadingProps) {
  const inverted = tone === "inverted";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Badge
            variant={inverted ? "secondary" : "outline"}
            className={cn(
              "px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em]",
              inverted && "bg-white/10 text-white"
            )}
          >
            {eyebrow}
          </Badge>
        </Reveal>
      ) : null}

      <Reveal delay={eyebrow ? 60 : 0}>
        <Heading
          className={cn(
            "text-balance font-bold tracking-tight",
            Heading === "h1"
              ? "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
              : "text-3xl leading-[1.1] sm:text-4xl",
            inverted ? "text-white" : "text-brand-primary"
          )}
        >
          {title}
        </Heading>
      </Reveal>

      {lead ? (
        <Reveal delay={eyebrow ? 120 : 60}>
          <p
            className={cn(
              "max-w-[60ch] text-pretty text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto",
              inverted ? "text-white/75" : "text-text-secondary"
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
