import "@/app/App.css";
import { Seperator } from "@/components";
// import { CompanyLoop } from "@/components";
import { Hero, InfoSections, Statistics, FAQ } from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="grow">
      <Hero />
      {/* <CompanyLoop className="pt-10" /> */}
      <section
        id="body"
        className="pt-4 pb-20 md:pt-20 md:px-20 flex flex-col items-center gap-10"
      >
        {/* <NavLink to={"/companies"}>
          <Button variant="outline" size="lg">
            <span>{t("exhibitors")}</span>
          </Button>
        </NavLink> */}
        <div className="w-full max-w-[90%] md:max-w-5xl flex flex-col items-center">
          <InfoSections />
          {/* <div className="flex flex-col p-4 my-10 gap-4 md:flex-row md:items-center md:max-w-2xl mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/images/nod.webp"
                alt="Systemvetardagen"
                className="h-40 object-cover rounded-2xl"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-2">
                  Systemvetardagen 2026: Av studenter, för studenter!
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  Vi är otroligt glada att kunna berätta att Systemvetardagen är
                  tillbaka! Från första dagen i det här projektet har vi lagt
                  stor...
                </p>
                <a
                  href="#"
                  className="text-blue-500 font-medium text-sm hover:underline"
                >
                  Läs mer
                </a>
              </div>
          </div> */}
          <Statistics />
          <FAQ />
          {/* <FairieSignup /> */}
          {/* <SignupLink /> */}
        </div>
      </section>
    </div>
  );
}
