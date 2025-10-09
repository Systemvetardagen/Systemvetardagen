import { createContext, type PropsWithChildren, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Company } from "../types/company";
import customFetch from "../api/customFetch";

const companiesQueryKey = ["companies", "public"] as const;

interface CompanyContextType {
  companies: Company[];
  partners: Company[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  getBySlug: (slug: string) => Company | undefined;
  upsertCompany: (c: Company) => void;
}

export const CompanyContext = createContext<CompanyContextType | undefined>(
  undefined
);

export function CompanyContextProvider({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: companiesQueryKey,
    queryFn: () => customFetch("public/companies"),
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 30 * 60 * 1000, // 30 min cache
    retry: 1,
  });
  
  const partners = useMemo(() => {
    return data
      ? data.filter((company: Company) => {
          return company.isSponsor;
        })
      : [];
  }, [data]);

  const value: CompanyContextType = useMemo(
    () => ({
      companies: data,
      partners,
      isLoading,
      isError,
      refetch: () => {
        void refetch();
      },
      getBySlug: (slug: string) =>
        data?.find((c: { slug: string }) => c.slug === slug),
      upsertCompany: (c: Company) => {
      queryClient.setQueryData<Company[] | undefined>(
        companiesQueryKey,
          (old) => {
            if (!old) return [c];
            const idx = old.findIndex((o) => o.slug === c.slug);
            if (idx === -1) return [...old, c];
            const clone = [...old];
            clone[idx] = { ...clone[idx], ...c };
            return clone;
          }
        );
      },
    }),
    [data, partners, isLoading, isError, refetch, queryClient]
  );
  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
}
