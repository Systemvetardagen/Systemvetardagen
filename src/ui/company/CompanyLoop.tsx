import React, { useState, useEffect } from "react";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
import { useCompanyContext } from "@/lib/context/CompanyContext";

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

  const { companies } = useCompanyContext();
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
  );
};

export default CompanyLoop;
