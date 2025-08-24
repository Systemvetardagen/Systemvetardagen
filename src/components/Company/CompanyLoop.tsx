import React from "react";
import LogoLoop, { LogoItem } from "../ReactBits/LogoLoop";
import companiesData from "../../assets/companies.json";
import type { Company } from "../../assets/companies";
import { useCompanies } from "../../context/CompaniesContext";

interface CompanyLoopProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const CompanyLoop: React.FC<CompanyLoopProps> = ({ className, ref }) => {
  const { companies, isLoading } = useCompanies();
  const companyLogos: LogoItem[] = companies.map((company) => {
    return {
      src: company.logo?.url,
      href: `/companies/${company.slug}`,
    };
  });
  return (
    <div
      style={{
        overflow: "hidden",
      }}
      ref={ref}
      className={className}
    >
      <LogoLoop
        logos={companyLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default CompanyLoop;
