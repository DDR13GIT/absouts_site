"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";

// Checkbox: Radix primitive with branded check icon.
// Checked state uses brand-accent background — visible but not overpowering.
// Focus ring matches other form primitives for system cohesion.
// transition covers background-color + box-shadow for smooth state change.

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-4 shrink-0 cursor-pointer",
      "rounded-[4px] border border-neutral-dark/30 bg-bg-surface",
      "transition-[background-color,border-color,box-shadow] duration-150 ease-out",
      // Checked: brand-accent fill, white border
      "data-[state=checked]:bg-brand-accent data-[state=checked]:border-brand-accent",
      "data-[state=checked]:text-white",
      // Indeterminate
      "data-[state=indeterminate]:bg-brand-accent/20 data-[state=indeterminate]:border-brand-accent",
      // Focus ring
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-brand-accent focus-visible:ring-offset-2",
      "focus-visible:ring-offset-bg-surface",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center",
        "transition-opacity duration-100",
      )}
    >
      <Check className="size-3 stroke-[2.5]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
