import "@/app/App.css";
import { useTranslation } from "react-i18next";
import { CompanyLoop, Partners } from "@/components";
import {
  Hero,
  InfoSections,
  Statistics,
  FAQ,
  HighlightSection,
} from "@/components/landing";
// import { SnowOverlay } from "react-snow-overlay";

export default function LandingPage() {
  const { t } = useTranslation("landing");
  return (
    <div className="grow">
      {/* <SnowOverlay /> */}
      <Hero />
      <CompanyLoop className="pt-10" />
      <section
        id="body"
        className="pt-10 pb-20  md:px-20 flex flex-col items-center gap-10"
      >
        {/* <NavLink to={"/companies"}>
          <Button variant="outline" size="lg">
          <span>{t("exhibitors")}</span>
          </Button>
          </NavLink> */}
        <div className="w-full max-w-[90%] md:max-w-5xl flex flex-col items-center">
          <InfoSections />
          <p className="mt-10 text-center text-sm text-gray-600">{t("previousPartners")}</p>
          <Partners containerClassName="mt-3" useCards />
          <Statistics />
          <HighlightSection />
          <div className="w-full h-0.5 bg-gray-400/30 mb-10"></div>
          <FAQ />
        </div>
      </section>
    </div>
  );
}
