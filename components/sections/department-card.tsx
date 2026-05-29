import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";

// DepartmentCard: rich link card for a service department.
// Server component (no hooks) — all motion is CSS hover/active on the <a>.
//
// Emil micro-interactions (gated behind hover:hover via Tailwind hover: prefix,
// which only fires on pointer devices):
//  • whole card lifts -4px on hover, tinted brand shadow (not pure black)
//  • background image scales 1.04 on hover, masking the seam with overflow-hidden
//  • arrow nudges right 4px
//  • active: scale(0.99) press feedback
// transition targets explicit properties only (no transition-all).

type DepartmentCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  /** Display index, e.g. "01" — communicates the ordered lineup. */
  index: string;
  exploreLabel: string;
  /** featured spans full width on the asymmetric grid */
  featured?: boolean;
  className?: string;
};

export function DepartmentCard({
  href,
  title,
  description,
  image,
  index,
  exploreLabel,
  featured = false,
  className,
}: DepartmentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl",
        "border border-neutral-dark/8 bg-brand-primary",
        "shadow-[var(--shadow-medium)]",
        "transition-[transform,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgb(11_11_68/0.45)]",
        "active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
        featured ? "min-h-[22rem] sm:min-h-[24rem]" : "min-h-[20rem]",
        className
      )}
    >
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* Scrim for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/65 to-brand-primary/15"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-7">
        <span className="font-mono text-xs font-medium tracking-[0.18em] text-brand-accent">
          {index}
        </span>
        <h3 className="text-pretty text-xl font-bold leading-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className={cn("text-pretty text-sm leading-relaxed text-white/75", featured ? "max-w-[48ch]" : "max-w-[40ch]")}>
          {description}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-white">
          {exploreLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
