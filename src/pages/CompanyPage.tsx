import React from "react";
import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import {
  LuLinkedin,
  LuInstagram,
  LuFacebook,
  LuBriefcase,
  LuCalendar,
  LuUsers,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { CompanyCard, FadeInSection } from "@/ui";
import { useCompany } from "@/lib/hooks/useCompanyContext";
import { NotFoundPage } from ".";

const CompanyPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { company, isLoading, isError } = useCompany(companyId || "");
  const { t } = useTranslation("companies");
  console.log(company);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (isError || !company) {
    return <NotFoundPage />;
  }
  return (
    <div className="min-h-screen overflow-x-hidden items-center flex flex-col gap-10 bg-[#F7F4FF]">
      <div className="relative w-full">
        <div
          className={`relative flex items-center justify-center h-[30vh] min-h-[300px] max-h-[400px] w-full ${
            company.bannerURL.length > 0 ? "" : "gradient-background"
          }`}
          style={
            company.bannerURL
              ? {
                  backgroundImage: `url(${company.bannerURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          <FadeInSection
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 "
            direction="fadeLeft"
          >
            <CompanyCard company={company} className="h-32 w-56" />
          </FadeInSection>
        </div>
      </div>

      <div className="max-w-[90vw] gap-10 flex flex-col items-center my-10">
        {company.slogan && (
          <h2 className="text-lg text-gray-600">{company.slogan}</h2>
        )}
        <div className="bg-white rounded-3xl w-[500px] max-w-[95vw] p-6 shadow-md">
          <div className="flex flex-col gap-5">
            <FadeInSection
              triggerOnce={true}
              direction="fadeLeft"
              className="flex items-start gap-3"
            >
              <div className="text-blue-500 mt-1">
                <LuBriefcase size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-600 text-sm font-medium">
                  {t("global.areaOfBusiness")}
                </h3>
                <p className="text-gray-800">{company.areaOfBusiness}</p>
              </div>
            </FadeInSection>
            <FadeInSection
              triggerOnce={true}
              direction="fadeLeft"
              className="flex items-start gap-3"
            >
              <div className="text-blue-500 mt-1">
                <LuCalendar size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-600 text-sm font-medium">
                  {t("global.founded")}
                </h3>
                <p className="text-gray-800">
                  {new Date(company.foundedYear || "").getFullYear()}
                </p>
              </div>
            </FadeInSection>
            {company.employeesSweden && (
              <FadeInSection
                triggerOnce={true}
                direction="fadeLeft"
                className="flex items-start gap-3"
              >
                <div className="text-blue-500 mt-1">
                  <LuUsers size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-600 text-sm font-medium">
                    {t("global.employeesInSweden")}
                  </h3>
                  <p className="text-gray-800">
                    {company.employeesSweden.toLocaleString("sv-SE")}
                  </p>
                </div>
              </FadeInSection>
            )}
            {company.employeesWorld && (
              <FadeInSection
                triggerOnce={true}
                direction="fadeLeft"
                className="flex items-start gap-3"
              >
                <div className="text-blue-500 mt-1">
                  <LuUsers size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-600 text-sm font-medium">
                    {t("global.employeesInternationally")}
                  </h3>
                  <p className="text-gray-800">
                    {company.employeesWorld.toLocaleString("sv-SE")}
                  </p>
                </div>
              </FadeInSection>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          {company.linkedInLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a rel="nofollow" href={company.linkedInLink}>
                <LuLinkedin />
              </a>
            </FadeInSection>
          )}
          {company.instagramLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a rel="nofollow" href={company.instagramLink}>
                <LuInstagram />
              </a>
            </FadeInSection>
          )}
          {company.facebookLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a rel="nofollow" href={company.facebookLink}>
                <LuFacebook />
              </a>
            </FadeInSection>
          )}
        </div>
        {/* <RecruitmentCard {...company} /> */}
        {/* Temporary */}
        <FadeInSection triggerOnce={true} direction="fadeUp">
          <span className="text-justify">{company.description}</span>
        </FadeInSection>
        <div className="flex gap-2">
          {company.programs.map((program, index) => (
            <span key={index}>{program}</span>
          ))}
        </div>
        <a
          className="text-link text-2xl text-center font-bold hover:underline"
          rel="nofollow"
          href={company.websiteLink}
        >
          {/* {t("global.learnMore", { company: company.companyName })} */}
        </a>
        <div className="flex gap-4">
          <Link
            to="/companies"
            className="rounded-2xl p-4 border-2 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            <span className="text-center">{t("global.backToCompanies")}</span>
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-2xl p-4 border-2 transition-all duration-100 hover:scale-105"
          >
            {t("global.scrollToTop")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
