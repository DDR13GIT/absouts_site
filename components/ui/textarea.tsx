import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Textarea: mirrors Input tokens exactly for visual consistency.
// min-h-[120px] gives usable default; resize-y lets user expand naturally.
// Same focus ring as Input — unified form component language.

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full",
          "rounded-lg border border-neutral-dark/20 bg-bg-surface px-3 py-2.5",
          "text-sm text-text-primary",
          "placeholder:text-text-muted",
          "resize-y",
          "transition-[border-color,box-shadow] duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-brand-accent focus-visible:ring-offset-0",
          "focus-visible:border-brand-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
