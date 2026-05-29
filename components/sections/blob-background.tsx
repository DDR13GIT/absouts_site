import { cn } from "@/lib/utils/cn";

// BlobBackground: decorative animated gradient blobs behind a hero/section.
// Pure presentation — no hooks, server component. Uses the brand palette so the
// motion stays on-brand instead of generic AI-purple. animate-blob + delay
// utilities live in globals.css. Tasteful: low opacity, blur-3xl, mix-blend.
//
// Restraint: at most three blobs, tinted to brand tones, behind content only.

type BlobBackgroundProps = {
  className?: string;
  /** When true, blobs sit on a dark surface and use lighter tints. */
  onDark?: boolean;
};

export function BlobBackground({ className, onDark = false }: BlobBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -top-24 left-[8%] h-72 w-72 rounded-full blur-3xl mix-blend-multiply animate-blob",
          onDark
            ? "bg-brand-accent/25 mix-blend-screen"
            : "bg-brand-accent/20"
        )}
      />
      <div
        className={cn(
          "absolute top-10 right-[12%] h-80 w-80 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000",
          onDark
            ? "bg-brand-secondary/30 mix-blend-screen"
            : "bg-med-sky/40"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000",
          onDark
            ? "bg-med-calendula/20 mix-blend-screen"
            : "bg-med-calendula/30"
        )}
      />
    </div>
  );
}
