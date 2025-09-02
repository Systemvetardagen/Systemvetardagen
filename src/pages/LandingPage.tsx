import "@/app/App.css";
import { NavLink } from "react-router-dom";
import { Button, SignupLink } from "@/ui/common";
import { CompanyLoop } from "@/ui/company";
import { Hero, Anniversary, Statistics, FairieSignup, FAQ } from "@/ui/landing";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const [t] = useTranslation("landing");
  return (
    <div>
      <Hero />
      <CompanyLoop className="mt-6" />
      <section
        id="body"
        className="py-10 md:px-20 flex flex-col items-center gap-10"
      >
        {/* <NavLink to={"/companies"}>
          <Button variant="outline" size="lg">
            <span>{t("exhibitors")}</span>
          </Button>
        </NavLink> */}
        <div className="w-full max-w-[90%] md:max-w-3xl flex flex-col items-center">
          <Anniversary />
          <Statistics />
          <FAQ />
          <FairieSignup />
          <SignupLink />
        </div>
      </section>
    </div>
  );
}
