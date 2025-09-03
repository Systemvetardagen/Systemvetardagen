import common_en from "@/lib/locales/en/common.json";
import common_se from "@/lib/locales/se/common.json";
import landing_en from "@/lib/locales/en/landing.json";
import landing_se from "@/lib/locales/se/landing.json";
import visitInfo_en from "@/lib/locales/en/visit-info.json";
import visitInfo_se from "@/lib/locales/se/visit-info.json";
import about_en from "@/lib/locales/en/about.json";
import about_se from "@/lib/locales/se/about.json";
import companies_en from "@/lib/locales/en/companies.json";
import companies_se from "@/lib/locales/se/companies.json";
import faq_en from "@/lib/locales/en/faq.json";
import faq_se from "@/lib/locales/se/faq.json";
import navbar_en from "@/lib/locales/en/navbar.json";
import navbar_se from "@/lib/locales/se/navbar.json";
import lectures_en from "@/lib/locales/en/lectures.json";
import lectures_se from "@/lib/locales/se/lectures.json";
import i18next from "i18next";

const availableLanguages: string[] = ["en", "sv"];
const userLocale = Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];
const selectedLanguage = availableLanguages.includes(userLocale)
  ? userLocale
  : "en";
i18next.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  resources: {
    en: {
      common: common_en,
      landing: landing_en,
      visitInfo: visitInfo_en,
      about: about_en,
      companies: companies_en,
      faq: faq_en,
      navbar: navbar_en,
      lectures: lectures_en,
    },
    sv: {
      common: common_se,
      landing: landing_se,
      visitInfo: visitInfo_se,
      about: about_se,
      companies: companies_se,
      faq: faq_se,
      navbar: navbar_se,
      lectures: lectures_se,
    },
  },
});

export default i18next;
