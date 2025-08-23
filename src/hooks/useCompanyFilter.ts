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
            if (filters.programs.length > 0) {
                const hasMatchingProgram = filters.programs.some(filterProgram =>
                    company.programs.some(companyProgram => 
                        companyProgram.id === filterProgram.id
                    )
                );
                if (!hasMatchingProgram) {
                    return false;
                }
            }

            // Position filter - company must have at least one of the selected positions
            if (filters.positions.length > 0) {
                const hasMatchingPosition = filters.positions.some(filterPosition =>
                    company.positions.some(companyPosition => 
                        companyPosition.id === filterPosition.id
                    )
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