import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json'; // example for French

i18n
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // connects with React
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    fallbackLng: 'fr',
    detection: {
      order: ['navigator'],
      caches: [],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;