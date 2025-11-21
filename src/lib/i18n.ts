import common_en from "@/lib/locales/en/common.json";
import common_sv from "@/lib/locales/sv/common.json";
import landing_en from "@/lib/locales/en/landing.json";
import landing_sv from "@/lib/locales/sv/landing.json";
import visitInfo_en from "@/lib/locales/en/visit-info.json";
import visitInfo_sv from "@/lib/locales/sv/visit-info.json";
import about_en from "@/lib/locales/en/about.json";
import about_sv from "@/lib/locales/sv/about.json";
import companies_en from "@/lib/locales/en/companies.json";
import companies_sv from "@/lib/locales/sv/companies.json";
import faq_en from "@/lib/locales/en/faq.json";
import faq_sv from "@/lib/locales/sv/faq.json";
import navbar_en from "@/lib/locales/en/navbar.json";
import navbar_sv from "@/lib/locales/sv/navbar.json";
import lectures_en from "@/lib/locales/en/lectures.json";
import lectures_sv from "@/lib/locales/sv/lectures.json";
import project_group_en from "@/lib/locales/en/project-group.json";
import project_group_sv from "@/lib/locales/sv/project-group.json";
import programs_en from "@/lib/locales/en/programs.json";
import programs_sv from "@/lib/locales/sv/programs.json";
import footer_en from "@/lib/locales/en/footer.json";
import footer_sv from "@/lib/locales/sv/footer.json";
import blog_en from "@/lib/locales/en/blog.json";
import blog_sv from "@/lib/locales/sv/blog.json";



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
      projectGroup: project_group_en,
      programs: programs_en,
      footer: footer_en,
      blog: blog_en
    },
    sv: {
      common: common_sv,
      landing: landing_sv,
      visitInfo: visitInfo_sv,
      about: about_sv,
      companies: companies_sv,
      faq: faq_sv,
      navbar: navbar_sv,
      lectures: lectures_sv,
      projectGroup: project_group_sv,
      programs: programs_sv,
      footer: footer_sv,
      blog: blog_sv
    },
  },
});

export default i18next;
