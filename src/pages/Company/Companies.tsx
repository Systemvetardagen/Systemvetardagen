import React, { useEffect } from 'react';
import useFilters from '../../hooks/useFilters';
import CompanyFilterControls from './CompanyFilterControls';

interface CompaniesProps {
    temp: string;
}

const Companies: React.FC<CompaniesProps> = ({ temp }) => {
    const { filters, togglePosition, toggleProgram, setSearch } = useFilters();
    useEffect(() => {console.log(filters)}, [filters])
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1>Companies</h1>
            <CompanyFilterControls
                togglePosition={togglePosition}
                toggleProgram={toggleProgram}
                setSearch={setSearch}
            />
        </div>
    );
};

export default Companies;
