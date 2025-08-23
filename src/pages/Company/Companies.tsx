import React, { useEffect } from 'react';
import useFilters from '../../hooks/useFilters';
import { useCompanyFilter } from '../../hooks/useCompanyFilter';
import CompanyFilterControls from './CompanyFilterControls';
import { Company } from '../../types/company';
import { useStrapiCollection } from '../../hooks/useStrapi';
import CompanyCard from './CompanyCard';
import FadeInSection from '../../components/FadeInSection';

const Companies: React.FC = () => {
    const { filters, togglePosition, toggleProgram, setSearch } = useFilters();
    
    const { data: companiesData, isLoading } = useStrapiCollection(
        'companies',
        { populate: ['logo', 'banner', 'positions', 'programs'] }
    );
    const companies: Company[] = companiesData?.data as Company[];
    
    const { filteredCompanies, totalCount, filteredCount } = useCompanyFilter(companies, filters);

    useEffect(() => {
        console.log('Active filters:', filters);
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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1>Companies</h1>
            <CompanyFilterControls
                togglePosition={togglePosition}
                toggleProgram={toggleProgram}
                setSearch={setSearch}
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
                No companies match your current filters. Try adjusting your search criteria.
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
