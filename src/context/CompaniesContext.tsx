import { createContext, ReactNode, useContext, useEffect } from "react";
import { Company } from "../types/company";
import { useStrapiCollection } from "../hooks/useStrapi";

// This context exposes the fetch for exhibiting companies to the whole app (everything inside the provider)

interface CompaniesContextType {
  companies: Company[];
  isLoading: boolean;
  error?: Error | null;
}

const CompaniesContext = createContext<CompaniesContextType | undefined>(
  undefined
);

interface CompaniesProviderProps {
  children: ReactNode;
}

export const CompaniesProvider: React.FC<CompaniesProviderProps> = ({
  children,
}) => {
  const {
    data: companiesData,
    isLoading,
    error,
  } = useStrapiCollection("companies", {
    populate: ["logo", "banner", "positions", "programs"],
  });
  useEffect(() => {
    console.log(companiesData);
  }, [companiesData]);
  const companies: Company[] = (companiesData?.data as Company[]) || [];

  return (
    <CompaniesContext.Provider value={{ companies, isLoading, error }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompanies = (): CompaniesContextType => {
  const context = useContext(CompaniesContext);
  if (context === undefined) {
    throw new Error("useCompanies must be used within a CompaniesProvider");
  }
  return context;
};
