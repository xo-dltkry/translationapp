import React, { createContext, useContext, useMemo, useState } from 'react';
import { LANGUAGES, translations } from '@/i18n/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'site-language';

const getInitialLanguage = () => {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return LANGUAGES.includes(saved) ? saved : 'en';
};

const getByPath = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (!LANGUAGES.includes(nextLanguage)) return;
        setLanguage(nextLanguage);
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      },
      t: (path) => getByPath(translations[language], path) ?? getByPath(translations.en, path) ?? path,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
