import { memo, useCallback } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "@/lib/translation-context";
import { languages, Language } from "@/lib/translations";

// Flag SVG components
const USFlag = () => (
  <svg className="h-4 w-4" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="28" height="1.54" fill="#B22234"/>
    <rect y="3.08" width="28" height="1.54" fill="#B22234"/>
    <rect y="6.15" width="28" height="1.54" fill="#B22234"/>
    <rect y="9.23" width="28" height="1.54" fill="#B22234"/>
    <rect y="12.31" width="28" height="1.54" fill="#B22234"/>
    <rect y="15.38" width="28" height="1.54" fill="#B22234"/>
    <rect y="18.46" width="28" height="1.54" fill="#B22234"/>
    <rect width="11.2" height="10.77" fill="#3C3B6E"/>
  </svg>
);

const SpainFlag = () => (
  <svg className="h-4 w-4" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#AA151B"/>
    <rect y="5" width="28" height="10" fill="#F1BF00"/>
  </svg>
);

const getFlagIcon = (languageCode: string) => {
  switch (languageCode) {
    case 'en':
      return <USFlag />;
    case 'es':
      return <SpainFlag />;
    default:
      return <USFlag />;
  }
};

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
      <SelectTrigger className="w-auto min-w-[120px] gap-2 bg-gray-700 hover:bg-gray-600 hover:scale-105 text-white border-0 rounded-full font-light text-sm tracking-wide transition-all duration-200 shadow-medium">
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
            <div className="flex items-center gap-2">
              {getFlagIcon(lang.code)}
              {lang.nativeName}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
