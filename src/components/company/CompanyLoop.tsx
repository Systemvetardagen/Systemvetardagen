import React, { useState, useEffect, useMemo } from "react";
import { FiArrowRight } from "react-icons/fi";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
import companiesData from "@/assets/companies.json";
import { Company } from "@/assets/companies";
import { NavLink } from "react-router-dom";

interface CompanyLoopProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const CompanyLoop: React.FC<CompanyLoopProps> = ({ className, ref }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const companies: Company[] = useMemo(() => shuffleArray(companiesData), []);

  const companyLogos: LogoItem[] = companies.map((company) => {
    return {
      src: `/companies/${company.id}/logo.webp`,
      href: company.websiteLink,
    };
  });

  const totalCompanies = companies.length;

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <LogoLoop
          logos={companyLogos}
          speed={50}
          direction="left"
          logoHeight={isMobile ? 32 : 48}
          gap={isMobile ? 24 : 40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      
      <div className="mt-8 flex justify-center">
        <NavLink
          to="/companies/old"
          className="inline-flex items-center gap-2 text-lg font-medium hover:underline transition-all group"
        >
          See all {totalCompanies} exhibitors from last year
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </NavLink>
      </div>
    </div>
  );
};

export default CompanyLoop;
