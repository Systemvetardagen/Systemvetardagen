import React from 'react';
import { Program, Position, StrapiProgram, StrapiPosition } from '../../types/company';
import { useStrapiCollection } from '../../hooks/useStrapi';
import FilterList from '../../components/FilterList';

interface CompanyFiltersProps {
    setSearch: (search: string) => void;
    toggleProgram: (program: Program) => void;
    togglePosition: (position: Position) => void;
}

const CompanyFilterControls: React.FC<CompanyFiltersProps> = ({
    setSearch,
    togglePosition,
    toggleProgram,
}) => {
    const { data: programsData, isLoading: isLoadingPrograms } =
        useStrapiCollection('programs', {
            pagination: { pageSize: 100 },
        });

    const { data: positionsData, isLoading: isLoadingPositions } =
        useStrapiCollection('positions', {});

    const programs: Program[] =
        (programsData?.data as StrapiProgram[])?.map((program) => ({
            id: program.programID,
            name: program.name,
            link: program.programLink,
            type: program.type,
        })) || [];

    const positions: Position[] =
        (positionsData?.data as StrapiPosition[])?.map((position) => ({
            id: position.id,
            name: position.name,
        })) || [];

    // Sort programs by type
    const bachelorPrograms = programs.filter(
        (program) => program.type === 'Bachelor'
    );
    const masterPrograms = programs.filter(
        (program) => program.type === 'Master'
    );

    // Check if either is loading
    const isLoading = isLoadingPrograms || isLoadingPositions;

    return isLoading ? (
        <div className="flex justify-center items-center py-8">
            <div className="text-gray-600">
                Loading{' '}
                {isLoadingPrograms && isLoadingPositions
                    ? 'programs and positions'
                    : isLoadingPrograms
                    ? 'programs'
                    : 'positions'}
                ...
            </div>
        </div>
    ) : (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search programs..."
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <FilterList
                    title="Bachelor's Programmes"
                    items={bachelorPrograms}
                    onToggle={toggleProgram}
                />

                <FilterList
                    title="Master's Programmes"
                    items={masterPrograms}
                    onToggle={toggleProgram}
                />

                <FilterList
                    title="Positions"
                    items={positions}
                    onToggle={togglePosition}
                />
            </div>
        </div>
    );
};

export default CompanyFilterControls;
