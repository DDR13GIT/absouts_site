import Image from "next/image";
import type { Technology } from "@/lib/services";
import { cn } from "@/lib/utils/cn";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type TechStackProps = {
  title: string;
  subtitle: string;
  technologies: Technology[];
  accentClassName: string;
};

export function TechStack({
  title,
  subtitle,
  technologies,
  accentClassName,
}: TechStackProps) {
  return (
    <section className="bg-bg-darker px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
          <SectionHeading title={title} lead={subtitle} />
          <div className="hidden h-px bg-brand-primary/10 lg:block" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <Reveal key={technology.name} delay={(index % 4) * 50}>
              <article
                className={cn(
                  "group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-2xl border border-neutral-dark/8 bg-bg-surface p-5 shadow-[var(--shadow-medium)]",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-[0_20px_44px_-28px_rgb(11_11_68/0.34)]"
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute right-0 top-0 h-1 w-16 rounded-bl-full opacity-85",
                    accentClassName
                  )}
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-13 items-center justify-center rounded-2xl border border-neutral-dark/8 bg-white shadow-[0_12px_28px_-22px_rgb(11_11_68/0.5)]">
                    <Image
                      src={technology.icon}
                      alt=""
                      width={34}
                      height={34}
                      sizes="34px"
                      className="size-8 object-contain"
                    />
                  </span>
                  <span className="font-mono text-xs font-medium tracking-[0.16em] text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-bold tracking-tight text-brand-primary">
                  {technology.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
