import { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

function useCompaniesContext() {
  const ctx = useContext(CompanyContext);
  if (!ctx)
    throw new Error(
      "useCompanies / useCompany must be used within <CompaniesProvider>"
    );
  return ctx;
}

export function useCompanies() {
  return useCompaniesContext();
}

export function useCompany(slug: string ) {
  const { getBySlug, isLoading, isError } = useCompaniesContext();
  return { company: getBySlug(slug), isLoading, isError };
}
