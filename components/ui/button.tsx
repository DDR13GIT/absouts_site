"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

export const buttonVariants = cva(
  // Base: precise transition on transform+colors+opacity only (not `all`).
  // Scale 0.97 on active — instant tactile feedback (Emil: 100-160ms).
  // Focus-visible ring uses brand-accent offset from surface for legibility.
  // [&_svg]:size-4 ensures icon sizing without manual class on each icon.
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-lg font-medium text-sm leading-none",
    "transition-[transform,opacity,background-color,border-color,color,box-shadow]",
    "duration-150 ease-out",
    "select-none outline-none",
    "active:scale-[0.97]",
    "focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface",
    "disabled:opacity-50 disabled:pointer-events-none",
    "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-brand-primary text-white",
          "hover:bg-brand-primary/90",
          "shadow-[var(--shadow-subtle)]",
        ],
        secondary: [
          "bg-brand-secondary text-white",
          "hover:bg-brand-secondary/90",
          "shadow-[var(--shadow-subtle)]",
        ],
        outline: [
          "border border-brand-primary text-brand-primary bg-transparent",
          "hover:bg-brand-primary hover:text-white",
        ],
        ghost: [
          "bg-transparent text-brand-primary",
          "hover:bg-brand-primary/8",
        ],
        destructive: [
          "bg-[#c0392b] text-white",
          "hover:bg-[#a93226]",
          "shadow-[var(--shadow-subtle)]",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1.5",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
