"use client";

import * as React from "react";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";

type LazyMapProps = {
  src: string;
  title: string;
  className?: string;
};

export function LazyMap({ src, title, className }: LazyMapProps) {
  const t = useTranslations("contact.map");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
      {!isInView || !isLoaded ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg-section">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-accent text-white shadow-[var(--shadow-medium)]">
              <MapPin className="size-8" />
            </div>
            <p className="font-medium text-text-secondary">{isInView ? t("loadingInteractive") : t("loading")}</p>
          </div>
        </div>
      ) : null}

      {isInView ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "h-full w-full transition-opacity duration-300 ease-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      ) : null}
    </div>
  );
}
