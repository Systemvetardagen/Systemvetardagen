import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
import { NavLink } from "react-router-dom";
import { useCompanies } from "@/lib/hooks/useCompanyContext";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../common/LoadingSpinner";

interface CompanyLoopProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const CompanyLoop: React.FC<CompanyLoopProps> = ({ className, ref }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { companies, isLoading } = useCompanies();
  const [t] = useTranslation("landing");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const companyLogos: LogoItem[] = companies.map((company) => {
    return {
      src: company.logoURL,
      href: `/companies/${company.slug}`,
    };
  });

  const totalCompanies = companies.length;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-10">
        <LoadingSpinner isLoading={isLoading} size={32} />
      </div>
    );
  }

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
          to="/companies"
          className="inline-flex items-center gap-2 text-lg font-medium hover:underline transition-all group"
        >
          {t("companies", { count: totalCompanies })}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </NavLink>
      </div>
    </div>
  );
};

export default CompanyLoop;
