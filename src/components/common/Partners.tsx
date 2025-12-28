import React from "react";
import { useCompanies } from "@/lib/hooks/useCompanyContext";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../layout";
import { CompanyCard } from "../company";
import { CompanyCardSkeleton } from "../company/CompanyCard";
import { NavLink } from "react-router-dom";

interface PartnersProps {
  title?: string;
  showTitle?: boolean;
  cardClassName?: string;
  containerClassName?: string;
  useCards?: boolean;
  isLoading?: boolean;
}

const Partners: React.FC<PartnersProps> = ({
  title,
  showTitle = true,
  cardClassName = "h-32 w-56",
  containerClassName = "",
  useCards = false,
  isLoading = false,
}) => {
  const { t } = useTranslation("common");
  const { partners, isLoading: contextLoading } = useCompanies();
  
  const loading = isLoading || contextLoading;
  const displayTitle = title || t("partners");

  if (!loading && (!partners || partners.length === 0)) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center ${containerClassName}`}>
      {showTitle && (
        <h3 className="text-2xl mb-8 text-center text-gray-700 font-light">
          {displayTitle}
        </h3>
      )}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <FadeInSection key={index} direction="fadeLeft">
                {useCards ? (
                  <CompanyCardSkeleton className={cardClassName} />
                ) : (
                  <div className={`bg-gray-200 animate-pulse rounded-lg ${cardClassName}`} />
                )}
              </FadeInSection>
            ))
          : partners.map((partner, index) => (
              <FadeInSection key={index} direction="fadeDown" delay={index * 200}>
                {useCards ? (
                  <CompanyCard company={partner} className={cardClassName} />
                ) : (
                  <NavLink to={`/companies/${partner.slug}`}>
                    <img
                      src={partner.logoURL}
                      className={`object-contain ${cardClassName}`}
                      alt={`${partner.companyName} logo`}
                    />
                  </NavLink>
                )}
              </FadeInSection>
            ))}
      </div>
    </div>
  );
};

export default Partners;
