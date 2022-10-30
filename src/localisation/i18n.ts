import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json';
import translationZH from './translations/zh.json';

export const resources = {
  // English
  en: {
    translation: translationEN,
  },
  // Chinese
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
