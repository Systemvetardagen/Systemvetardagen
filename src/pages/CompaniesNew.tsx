import React, { useEffect } from "react";
import useFilters from "../hooks/useFilters";
import { useCompanyFilter } from "../hooks/useCompanyFilter";
import CompanyFilterControls from "../components/Company/CompanyFilterControls";
import { Company } from "../types/company";
import { useStrapiCollection } from "../hooks/useStrapi";
import CompanyCard from "../components/Company/CompanyCard";
import FadeInSection from "../components/FadeInSection";
import { useCompanies } from "../context/CompaniesContext";

const Companies: React.FC = () => {
  const { filters, togglePosition, toggleProgram, setSearch, clearFilters } = useFilters();
  const { companies, isLoading } = useCompanies();
  const { filteredCompanies, totalCount, filteredCount } = useCompanyFilter(
    companies,
    filters
  );

  useEffect(() => {
    console.log("Active filters:", filters);
    console.log(`Showing ${filteredCount} of ${totalCount} companies`);
  }, [filters, filteredCount, totalCount]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-lg">Loading companies...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-32 px-10">
      <h2 className="text-5xl font-semibold lg:text-6xl mb-8">Companies</h2>
      <CompanyFilterControls
        filters={filters}
        togglePosition={togglePosition}
        toggleProgram={toggleProgram}
        setSearch={setSearch}
        clearFilters={clearFilters}
      />
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredCount} of {totalCount} companies
      </div>
      <CompanyList companies={filteredCompanies} />
    </div>
  );
};

interface CompanyListProps {
  companies: Company[];
}

const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
  if (companies.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No companies match your current filters. Try adjusting your search
        criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
      {companies.map((company, index) => (
        <FadeInSection key={company.slug} direction="fadeLeft">
          <CompanyCard
            name={company.name}
            slug={company.slug}
            logoUrl={company.logo?.url}
            className="h-32 w-56"
          />
        </FadeInSection>
      ))}
    </div>
  );
};

export default Companies;
