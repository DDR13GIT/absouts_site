import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Input: token-styled, consistent hit area (h-10), clear focus ring.
// placeholder uses text-text-muted for legibility without distraction.
// transition on border-color + box-shadow keeps focus state smooth.
// disabled:cursor-not-allowed communicates non-interactivity clearly.

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full",
          "rounded-lg border border-neutral-dark/20 bg-bg-surface px-3 py-2",
          "text-sm text-text-primary",
          "placeholder:text-text-muted",
          "transition-[border-color,box-shadow] duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-brand-accent focus-visible:ring-offset-0",
          "focus-visible:border-brand-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
