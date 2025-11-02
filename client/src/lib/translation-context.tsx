import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { Language, translations, TranslationKeys } from './translations';

interface TranslationContextType {
  language: Language;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage after component mounts
  useEffect(() => {
    try {
      const saved = localStorage.getItem('absouts-language');
      if (saved && (saved === 'en' || saved === 'es')) {
        setLanguageState(saved as Language);
      }
    } catch (error) {
      console.error('Failed to load language from localStorage:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Memoize the translation object to prevent unnecessary re-renders
  const t = useMemo(() => translations[language], [language]);

  // Memoize the setLanguage callback
  const setLanguage = useCallback((newLang: Language) => {
    if (newLang === language) return; // Prevent unnecessary updates
    setLanguageState(newLang);
  }, [language]);

  // Save to localStorage when language changes (only after initialization)
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem('absouts-language', language);
    } catch (error) {
      console.error('Failed to save language to localStorage:', error);
    }
  }, [language, isInitialized]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ language, t, setLanguage }),
    [language, t, setLanguage]
  );

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}