import { createContext, useContext } from "react";
import {
  Company,
  CandidateProgram,
  MasterProgram,
  Position,
} from "../types/company";

import { Filters } from "../hooks/userCompanyFilters";

interface CompanyContextType {
  companies: Company[];
  filteredCompanies: Company[];
  partners: Company[];
  totalCount: number;
  filteredCount: number;
  filters: Filters;
  setSearch: (search: string) => void;
  toggleCandidateProgram: (program: CandidateProgram) => void;
  toggleMasterProgram: (program: MasterProgram) => void;
  togglePosition: (position: Position) => void;
  clearFilters: () => void;
}

export const CompanyContext = createContext<CompanyContextType | undefined>(
  undefined
);

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error(
      "useCompanyContext must be used within a CompanyContextProvider"
    );
  }
  return context;
};
