"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Reveal: scroll-triggered entrance. IntersectionObserver flips a data attribute;
// the actual animation is CSS (off main thread), ease-out-expo, fires once.
// prefers-reduced-motion: opacity only (no translate) — handled in globals.
//
// Emil: entering elements use ease-out (immediate, responsive). Asymmetric — no
// exit animation here since content only enters. Stagger via `delay` prop in ms.

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  /** Entrance translate distance; defaults to 16px up */
  as?: React.ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in view on mount (above the fold), reveal without waiting.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -64px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-reveal=""
      data-shown={shown ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal-target", className)}
    >
      {children}
    </Tag>
  );
}
