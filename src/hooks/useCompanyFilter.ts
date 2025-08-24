import { useMemo } from 'react';
import { Company } from '../types/company';
import { Filters } from './useFilters';

export const useCompanyFilter = (companies: Company[] | undefined, filters: Filters) => {
    const filteredCompanies = useMemo(() => {
        if (!companies) return [];

        return companies.filter((company) => {
            // Search filter - check company name, slogan, and area of business
            const searchTerm = filters.search.toLowerCase().trim();
            if (searchTerm) {
                const searchableText = [
                    company.name,
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }

            // Program filter - company must have at least one of the selected programs
            if (filters.programs.size > 0) {
                const hasMatchingProgram = company.programs.some(companyProgram => 
                    filters.programs.has(companyProgram.id)
                );
                if (!hasMatchingProgram) {
                    return false;
                }
            }

            // Position filter - company must have at least one of the selected positions
            if (filters.positions.size > 0) {
                const hasMatchingPosition = company.positions.some(companyPosition => 
                    filters.positions.has(companyPosition.id)
                );
                if (!hasMatchingPosition) {
                    return false;
                }
            }

            return true;
        });
    }, [companies, filters]);

    return {
        filteredCompanies,
        totalCount: companies?.length || 0,
        filteredCount: filteredCompanies.length
    };
};