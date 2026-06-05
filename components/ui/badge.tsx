import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

// Badge: inline label for status, tags, categories.
// No bold-only differentiation — uses background tints for restrained color.
// Rounded-full for pill shape; tight padding keeps it compact.

export const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-full border px-2.5 py-0.5",
    "text-xs font-medium leading-none",
    "transition-colors duration-150",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-transparent bg-brand-primary text-white",
        ],
        secondary: [
          "border-brand-primary/10 bg-bg-darker text-brand-primary",
        ],
        outline: [
          "border-brand-primary/30 bg-transparent text-brand-primary",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
Badge.displayName = "Badge";
