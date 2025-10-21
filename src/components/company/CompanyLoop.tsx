import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
// import { useCompanies } from "@/lib/hooks/useCompanyContext";

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

  // const { companies } = useCompanies();
  // const companyLogos: LogoItem[] = (companies ?? []).map((company) => {
  //   return {
  //     src: company.logoURL,
  //     href: `/companies/${company.slug}`,
  //   };
  // });

  // Hardcoded test logos from public folder
  const companyLogos: LogoItem[] = [
    { src: "/companies/accenture/logo.webp", href: "#" },
    { src: "/companies/deloitte/logo.webp", href: "#" },
    { src: "/companies/handelsbanken/logo.webp", href: "#" },
    { src: "/companies/ericsson/logo.webp", href: "#" },
    { src: "/companies/cgi/logo.webp", href: "#" },
    { src: "/companies/akavia/logo.webp", href: "#" },
    { src: "/companies/swedbank/logo.webp", href: "#" },
    { src: "/companies/kpmg/logo.webp", href: "#" },
    { src: "/companies/columbus/logo.webp", href: "#" },
    { src: "/companies/lime/logo.webp", href: "#" },
    { src: "/companies/scania/logo.webp", href: "#" },
    { src: "/companies/capgemini/logo.webp", href: "#" },
  ];

  const totalCompanies = companyLogos.length;

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
        <a
          href="/companies"
          className="inline-flex items-center gap-2 text-lg font-medium hover:underline transition-all group"
        >
          See all {totalCompanies} exhibitors
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default CompanyLoop;
