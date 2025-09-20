import React from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@/ui";
import { useTranslation } from "react-i18next";
import { LuBriefcase, LuCalendar, LuUsers } from "react-icons/lu";
import { FadeInSection } from "@/ui";
import { useCompany } from "@/lib/hooks/useCompanyContext";
import { NotFoundPage } from ".";
import { CANDIDATE_PROGRAMS, MASTER_PROGRAMS } from "@/lib/types/program";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ButtonNavigate } from "@/components/ui/buttonNavigate";

const CompanyPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { company, isLoading, isError } = useCompany(companyId || "");
  const { t: tCompanies } = useTranslation("companies");
  const { t: tPrograms } = useTranslation("programs");
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner isLoading={isLoading} />
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
            direction="fadeUp"
          >
            <div
              className={"bg-white rounded-2xl shadow-xl p-4 h-44 w-[308px]"}
            >
              {company.logoURL ? (
                <img
                  src={company.logoURL}
                  className="object-contain mx-auto h-full w-full"
                  alt={`${company.companyName} logo`}
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center text-black text-xl text-center font-bold h-full w-full">
                  {company.companyName}
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>

      <div className="flex flex-col items-center my-10 gap-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        {company.slogan && (
          <h2 className="text-lg text-gray-600">{company.slogan}</h2>
        )}
        {/* {company.areaOfBusiness || company.foundedYear || company.employeesSweden || company.} */}
        <div className="bg-white rounded-3xl w-[500px] max-w-[95vw] shadow-md p-6 empty:hidden">
          <div className="flex flex-col gap-5">
            {company.areaOfBusiness && (
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
                    {tCompanies("global.areaOfBusiness")}
                  </h3>
                  <p className="text-gray-800">{company.areaOfBusiness}</p>
                </div>
              </FadeInSection>
            )}
            {company.foundedYear ? (
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
                    {tCompanies("global.founded")}
                  </h3>
                  <p className="text-gray-800">
                    {new Date(company.foundedYear || "").getFullYear()}
                  </p>
                </div>
              </FadeInSection>
            ) : null}
            {company.employeesSweden ? (
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
                    {tCompanies("global.employeesInSweden")}
                  </h3>
                  <p className="text-gray-800">
                    {company.employeesSweden.toLocaleString("sv-SE")}
                  </p>
                </div>
              </FadeInSection>
            ) : null}
            {company.employeesWorld ? (
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
                    {tCompanies("global.employeesInternationally")}
                  </h3>
                  <p className="text-gray-800">
                    {company.employeesWorld.toLocaleString("sv-SE")}
                  </p>
                </div>
              </FadeInSection>
            ) : null}
          </div>
        </div>

        <div className="flex gap-4">
          {company.linkedInLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a
                rel="nofollow"
                target="_blank"
                href={company.linkedInLink}
                className="hover:text-link transition-colors duration-300"
              >
                <FaLinkedin size={40} />
              </a>
            </FadeInSection>
          )}
          {company.instagramLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a
                rel="nofollow"
                target="_blank"
                href={company.instagramLink}
                className="hover:text-link transition-colors duration-300"
              >
                <FaInstagram size={40} />
              </a>
            </FadeInSection>
          )}
          {company.facebookLink && (
            <FadeInSection triggerOnce={true} direction="fadeUp">
              <a
                rel="nofollow"
                target="_blank"
                href={company.facebookLink}
                className="hover:text-link transition-colors duration-300"
              >
                <FaFacebook size={40} />
              </a>
            </FadeInSection>
          )}
        </div>
        {/* <RecruitmentCard {...company} /> */}
        {/* Temporary */}
        <FadeInSection triggerOnce={true} direction="fadeUp">
          <p className="text-justify">{company.description}</p>
        </FadeInSection>
        <div className="flex gap-2">
          {company.programs.map((program, index) => {
            let key = "";
            if (
              CANDIDATE_PROGRAMS.includes(
                program as (typeof CANDIDATE_PROGRAMS)[number]
              )
            ) {
              key = `candidatePrograms.${program}`;
            } else if (
              MASTER_PROGRAMS.includes(
                program as (typeof MASTER_PROGRAMS)[number]
              )
            ) {
              key = `masterPrograms.${program}`;
            }
            return <span key={index}>{tPrograms(key)}</span>;
          })}
        </div>
        <div className="flex gap-2">
          {company.positions.map((position, index) => (
            <span key={index}>{tPrograms(`positions.${position}`)}</span>
          ))}
        </div>
        <a
          className="text-link text-2xl text-center font-bold hover:underline"
          rel="nofollow"
          href={company.websiteLink}
        >
          {tCompanies("global.learnMore", { company: company.companyName })}
        </a>
        <div className="flex gap-4">
          <ButtonNavigate to="/companies" variant={"plain"} size={"xl"}>
            <span className="text-center">
              {tCompanies("global.backToCompanies")}
            </span>
          </ButtonNavigate>
          <Button
            variant={"plain"}
            size={"xl"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {tCompanies("global.scrollToTop")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
