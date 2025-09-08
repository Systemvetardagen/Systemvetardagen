import { FC, ReactNode, useMemo } from "react";
import { Company } from "../types/company";
import { CompanyContext } from "./CompanyContext";
import useCompanyFilters from "../hooks/userCompanyFilters";

interface CompanyContextProviderProps {
  children?: ReactNode | undefined;
}

export const CompanyContextProvider: FC<CompanyContextProviderProps> = ({
  children,
}) => {
  const {
    filters,
    setSearch,
    toggleCandidateProgram,
    toggleMasterProgram,
    togglePosition,
    clearFilters,
  } = useCompanyFilters("companyFilters");
  // Company useQuery here once backend is created
  const companies: Company[] = []

  const filteredCompanies = useMemo(() => {
    if (!companies) return [];
    return companies.filter((company) => {
      const searchTerm = filters.search.toLowerCase().trim();
      if (searchTerm) {
        const searchableText = [company.name].join(" ").toLowerCase();
        if (!searchableText.includes(searchTerm)) {
          return false;
        }
      }
      if (filters.candidatePrograms.size > 0) {
        const hasMatchingProgram = company.candidatePrograms.some(
          (candidateProgram) => filters.candidatePrograms.has(candidateProgram)
        );
        if (!hasMatchingProgram) {
          return false;
        }
      }
      if (filters.mastersPrograms.size > 0) {
        const hasMatchingProgram = company.masterPrograms.some(
          (masterProgram) => filters.mastersPrograms.has(masterProgram)
        );
        if (!hasMatchingProgram) {
          return false;
        }
      }
      if (filters.positions.size > 0) {
        const hasMatchingPosition = company.positions.some((position) =>
          filters.positions.has(position)
        );
        if (!hasMatchingPosition) {
          return false;
        }
      }
      return true;
    });
  }, [companies, filters]);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filteredCompanies,
        totalCount: companies.length,
        filteredCount: filteredCompanies.length,
        filters,
        setSearch,
        toggleCandidateProgram,
        toggleMasterProgram,
        togglePosition,
        clearFilters,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
