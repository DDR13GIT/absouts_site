import { memo, useCallback } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "@/lib/translation-context";
import { languages, Language } from "@/lib/translations";
import { Globe } from "lucide-react";

export const LanguageSelector = memo(function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  const handleLanguageChange = useCallback((languageCode: string) => {
    if (languageCode !== language) {
      setLanguage(languageCode as Language);
    }
  }, [language, setLanguage]);

  return (
    <Select
      key={`language-select-${language}`}
      value={language}
      onValueChange={handleLanguageChange}
      data-testid="language-selector"
    >
      <SelectTrigger className="w-auto min-w-[120px] gap-2 bg-brand-secondary hover:bg-brand-secondary/90 hover:scale-105 text-white border-0 rounded-2xl font-light text-sm tracking-wide transition-all duration-200 shadow-medium">
        <Globe className="h-4 w-4" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-bg-surface border-brand-accent/20">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            data-testid={`language-${lang.code}`}
            className="cursor-pointer hover:bg-brand-accent/10 text-text-primary"
          >
            {lang.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
