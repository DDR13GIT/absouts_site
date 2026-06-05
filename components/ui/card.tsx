import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Card: bg-bg-surface, rounded-2xl, shadow+border for elevation.
// Consistent padding rhythm: header/footer use px-6 py-4, content px-6 py-4.
// No nested cards — card is its own elevation layer.

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-dark/8 bg-bg-surface",
        "shadow-[var(--shadow-medium)]",
        className
      )}
      {...props}
    />
  );
}
Card.displayName = "Card";

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 px-6 pt-6 pb-4", className)}
      {...props}
    />
  );
}
CardHeader.displayName = "CardHeader";

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4", className)} {...props} />
  );
}
CardContent.displayName = "CardContent";

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center px-6 pt-2 pb-6",
        className
      )}
      {...props}
    />
  );
}
CardFooter.displayName = "CardFooter";
