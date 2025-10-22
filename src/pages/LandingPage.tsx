import "@/app/App.css";
// import { CompanyLoop } from "@/components";
import { Hero, InfoSections, Statistics, FAQ } from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="grow">
      <Hero />
      {/* <CompanyLoop className="pt-10" /> */}
      <section
        id="body"
        className="py-20 md:px-20 flex flex-col items-center gap-10"
      >
        {/* <NavLink to={"/companies"}>
          <Button variant="outline" size="lg">
            <span>{t("exhibitors")}</span>
          </Button>
        </NavLink> */}
        <div className="w-full max-w-[90%] md:max-w-6xl flex flex-col items-center">
          <InfoSections />
          <Statistics />
          <FAQ />
          {/* <FairieSignup /> */}
          {/* <SignupLink /> */}
        </div>
      </section>
    </div>
  );
}
