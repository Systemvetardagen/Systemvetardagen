import React from "react";
import ProjectGroup from "@/components/common/ProjectContributors";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/components";
import Seperator from "@/components/common/Seperator";

const About: React.FC = () => {
  const [t] = useTranslation("about");
  return (
    <div className="flex flex-col items-center">
      <img
        src={"/images/2024logoWithShirt.webp"}
        alt="Systemvetardagen Logo shirt"
        className="w-screen h-[20vh] lg:h-[40vh] max-h-[400px] object-cover object-[20%_50%]"
      />
      <div className="flex flex-col items-center max-w-4xl px-4 sm:px-6 lg:px-8 my-10">
        <div className="space-y-12">
          <section className="space-y-8">
            <div className="space-y-6">
              <FadeInSection direction="fadeLeft">
                <h2 className="text-2xl font-semibold mb-3">{t("header")}</h2>
                <p className="text-lg leading-relaxed font-light">{t("body")}</p>
              </FadeInSection>
              <FadeInSection direction="fadeLeft">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("where-when.header")}
                </h2>
                <p className="text-lg leading-relaxed font-light">
                  {t("where-when.body")}
                </p>
              </FadeInSection>
              {/* <FadeInSection direction="fadeLeft">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("companies.header")}
                </h2>
                <p className="text-lg leading-relaxed font-light">
                  {t("companies.body")}{" "}
                  <a href="/companies" className="text-link hover:underline">
                    {t("companies.link")}
                  </a>
                  .
                </p>
              </FadeInSection> */}
              <FadeInSection direction="fadeLeft">
                <h2 className="text-2xl font-semibold mb-3">
                  {t("company-display.header")}
                </h2>
                <p className="text-lg leading-relaxed font-light" >
                  {t("company-display.body")}{" "}
                  <a
                    href="mailto:systemvetardagen@disk.su.se"
                    className="text-link hover:underline"
                  >
                    systemvetardagen@disk.su.se
                  </a>
                  .
                </p>
              </FadeInSection>
            </div>
          </section>
          <Seperator/>
          <ProjectGroup />
        </div>
      </div>
    </div>
  );
};

export default About;
