import { Company } from "@/lib/types/company";
import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface CompanyCardProps {
  company: Company;
  className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, className }) => {
  return (
    <div
      className={`bg-white rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl p-4 ${className}`}
    >
      <Link to={`/companies/${company.slug}`} aria-label={company.companyName}>
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
      </Link>
    </div>
  );
};

interface CompanyCardSkeletonProps {
  className?: string;
}

export const CompanyCardSkeleton: React.FC<CompanyCardSkeletonProps> = ({
  className,
}) => {
  return (
    <Skeleton className={`rounded-2xl shadow-xl p-4 ${className}`}></Skeleton>
  );
};

export default CompanyCard;
