import "@/app/App.css";
import { SignupLink } from "@/ui/common";
// import { CompanyLoop } from "@/ui/company";
import { Hero, Anniversary, Statistics, FairieSignup, FAQ } from "@/ui/landing";

export default function LandingPage() {
  return (
    <div className="grow">
      <Hero />
      {/* <CompanyLoop className="mt-6" /> */}
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
          {/* <FairieSignup /> */}
          {/* <SignupLink /> */}
        </div>
      </section>
    </div>
  );
}
