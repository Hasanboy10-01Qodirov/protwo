import i18next from "i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import uzTranslate from "../public/locales/uz.json";
import ruTranslate from "../public/locales/ru.json";
import enTranslate from "../public/locales/en.json";
const savedLanguage = localStorage.getItem("language") || "uz";
i18next
  .use(i18nextBrowserLanguagedetector)
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: savedLanguage,
    debug: true,
    resources: {
      uz: { translation: uzTranslate },
      ru: { translation: ruTranslate },
      en: { translation: enTranslate },
    },
  });

export default i18next;
