import { useMemo } from 'react';
import { Company } from '../types/company';
import { Filters } from './useFilters';

export const useCompanyFilter = (companies: Company[] | undefined, filters: Filters) => {
    const filteredCompanies = useMemo(() => {
        if (!companies) return [];

        return companies.filter((company) => {
            const searchTerm = filters.search.toLowerCase().trim();
            if (searchTerm) {
                const searchableText = [
                    company.name,
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }

            // company must have at least one of the selected programs and more than 0 positions are selected
            if (filters.candidatePrograms.size > 0) {
                const hasMatchingProgram = company.candidatePrograms.some(candidateProgram => 
                    filters.candidatePrograms.has(candidateProgram)
                );
                if (!hasMatchingProgram) {
                    return false;
                }
            }
            if (filters.mastersPrograms.size > 0) {
                const hasMatchingProgram = company.masterPrograms.some(masterProgram => 
                    filters.mastersPrograms.has(masterProgram)
                );
                if (!hasMatchingProgram) {
                    return false;
                }
            }
            
            //company must have at least one of the selected positions and more than 0 positions are selected
            if (filters.positions.size > 0) {
                const hasMatchingPosition = company.positions.some(position => 
                    filters.positions.has(position)
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