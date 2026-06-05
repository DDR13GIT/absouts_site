import { cn } from "@/lib/utils/cn";
import { Reveal } from "./reveal";

// StatMetrics: a row of headline numbers (e.g. 540+ / 40+ / 95%).
// Server component. Separated by hairlines rather than cards (design mandate:
// metrics breathe in plain layout). Staggered reveal, 60ms apart.

export type Stat = { value: string; label: string };

type StatMetricsProps = {
  stats: Stat[];
  className?: string;
  tone?: "default" | "inverted";
};

export function StatMetrics({ stats, className, tone = "default" }: StatMetricsProps) {
  const inverted = tone === "inverted";
  return (
    <dl
      className={cn(
        "grid grid-cols-3 gap-px overflow-hidden rounded-2xl",
        inverted ? "bg-white/10" : "bg-neutral-dark/8",
        className
      )}
    >
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 60}
          className={cn(
            "flex flex-col gap-1 px-4 py-5 sm:px-6",
            inverted ? "bg-brand-primary" : "bg-bg-surface"
          )}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl",
              inverted ? "text-white" : "text-brand-primary"
            )}
          >
            {stat.value}
          </dd>
          <span
            className={cn(
              "text-xs font-medium sm:text-sm",
              inverted ? "text-white/70" : "text-text-secondary"
            )}
          >
            {stat.label}
          </span>
        </Reveal>
      ))}
    </dl>
  );
}
