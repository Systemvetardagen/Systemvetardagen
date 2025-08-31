import React from "react";
import LogoLoop, { LogoItem } from "../common/LogoLoop";
interface CompanyLoopProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const CompanyLoop: React.FC<CompanyLoopProps> = ({ className, ref }) => {
  const companyLogos: LogoItem[] = [
    { src: "/companies/accenture/logo.webp", href: "/companies/accenture" },
    { src: "/companies/deloitte/logo.webp", href: "/companies/deloitte" },
    { src: "/companies/kpmg/logo.webp", href: "/companies/kpmg" },
    { src: "/companies/scania/logo.webp", href: "/companies/scania" },
  ];

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
