import React from "react";
import { Link } from "react-router-dom";

interface CompanyCardProps {
  name: string;
  id: string;
  logoUrl?: string;
  className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  id,
  logoUrl,
  className,
}) => {
  return (
    <div className="bg-white rounded-lg hover:scale-105 transition-transform duration-100 shadow-xl p-4">
      <Link className="" to={`/companies/${id}`}>
        {logoUrl ? (
          <img
            src={logoUrl}
            className={`object-contain ${className}`}
            alt={`${id} logo`}
          />
        ) : (
          <div
            className={`flex items-center justify-center text-black text-2xl font-semibold${className}`}
          >
            {name}
          </div>
        )}
      </Link>
    </div>
  );
};

export default CompanyCard;
