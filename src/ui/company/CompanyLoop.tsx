import React from "react";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
import companiesData from "@/assets/companies.json";
import { Company } from "@/assets/companies";

interface CompanyLoopProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const CompanyLoop: React.FC<CompanyLoopProps> = ({ className, ref }) => {
  const companies: Company[] = companiesData as Company[];
  const companyLogos: LogoItem[] = companies.map((company) => {
    return {
      src: `/companies/${company.id}/logo.webp`,
      href: `/companies/${company.id}`,
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
