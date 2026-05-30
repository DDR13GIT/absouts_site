"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className="h-10 w-auto min-w-0 gap-2 rounded-full border-brand-primary/10 bg-white/70 px-3 text-sm text-brand-primary shadow-[0_8px_28px_-16px_rgb(11_11_68/0.22)] backdrop-blur-md hover:bg-white focus-visible:ring-brand-accent"
        aria-label="Select language"
      >
        <CurrentFlag className="h-3.5 w-5 shrink-0 rounded-[1px]" />
        <SelectValue />
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
