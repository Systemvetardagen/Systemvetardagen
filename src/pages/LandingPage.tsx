import "@/app/App.css";
import { CompanyLoop, Partners } from "@/components";
import { Hero, InfoSections, Statistics, FAQ, HighlightSection } from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="grow">
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
          <Partners containerClassName="mt-10" />
          <Statistics />
          <HighlightSection />
          <FAQ />
          {/* <FairieSignup /> */}
          {/* <SignupLink /> */}
        </div>
      </section>
    </div>
  );
}
