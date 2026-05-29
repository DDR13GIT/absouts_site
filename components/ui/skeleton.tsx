import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Skeleton: pulse animation on bg-bg-darker.
// Rounded-md default; consumers can override.
// No border — skeleton is a placeholder, not a card.

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-bg-darker",
        className
      )}
      {...props}
    />
  );
}
Skeleton.displayName = "Skeleton";
