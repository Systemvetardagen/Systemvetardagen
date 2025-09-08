import { Company } from "@/lib/types/company";
import React from "react";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  company: Company;
  className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, className }) => {
  return (
    <div
      className={
        `bg-white rounded-lg hover:scale-105 transition-transform duration-100 shadow-xl p-4 h-44 w-[308px]` +
        (className ? ` ${className}` : "")
      }
    >
      <Link to={`/companies/${company.id}`} aria-label={company.name}>
        {company.logo ? (
          <img
            src={company.logo}
            className="object-contain mx-auto h-full w-full"
            alt={`${company.name} logo`}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center text-black text-2xl font-semibold h-full w-full">
            {company.name}
          </div>
        )}
      </Link>
    </div>
  );
};

export default CompanyCard;
