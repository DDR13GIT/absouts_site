"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

// Inline SVG flags — tiny, no external dependency.
function FlagUS({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 15"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="20" height="15" fill="#B22234" />
      <rect y="1.154" width="20" height="1.154" fill="#fff" />
      <rect y="3.462" width="20" height="1.154" fill="#fff" />
      <rect y="5.769" width="20" height="1.154" fill="#fff" />
      <rect y="8.077" width="20" height="1.154" fill="#fff" />
      <rect y="10.385" width="20" height="1.154" fill="#fff" />
      <rect y="12.692" width="20" height="1.154" fill="#fff" />
      <rect width="8" height="8.077" fill="#3C3B6E" />
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 15"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="20" height="15" fill="#c60b1e" />
      <rect y="3.75" width="20" height="7.5" fill="#ffc400" />
    </svg>
  );
}

const LOCALE_META: Record<
  string,
  { label: string; Flag: (props: { className?: string }) => React.ReactElement }
> = {
  en: { label: "English", Flag: FlagUS },
  es: { label: "Español", Flag: FlagES },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(next: string) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  const CurrentFlag = LOCALE_META[locale]?.Flag ?? FlagUS;
  const currentLabel = LOCALE_META[locale]?.label ?? locale;

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className="h-auto w-auto min-w-[120px] gap-2 rounded-full border-0 bg-neutral-dark px-4 py-2 text-sm font-light tracking-wide text-white shadow-[var(--shadow-medium)] transition-all duration-200 hover:scale-105 hover:bg-slate-900 focus-visible:ring-brand-accent [&>svg:last-child]:text-white/55"
        aria-label="Select language"
      >
        <CurrentFlag className="h-3.5 w-5 shrink-0 rounded-[1px]" />
        <span>{currentLabel}</span>
      </SelectTrigger>
      <SelectContent className="min-w-[9rem]">
        {routing.locales.map((loc) => {
          const meta = LOCALE_META[loc];
          if (!meta) return null;
          const { label, Flag } = meta;
          return (
            <SelectItem key={loc} value={loc}>
              <span className="flex items-center gap-2">
                <Flag className="h-3.5 w-5 shrink-0 rounded-[1px]" />
                <span>{label}</span>
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
