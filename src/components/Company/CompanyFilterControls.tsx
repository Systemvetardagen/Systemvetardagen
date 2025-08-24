import React from "react";
import {
  Program,
  Position,
  StrapiProgram,
  StrapiPosition,
} from "../../types/company";
import { useStrapiCollection } from "../../hooks/useStrapi";
import FilterList from "../../components/FilterList";
import { Filters } from "../../hooks/useFilters";

interface CompanyFiltersProps {
  filters: Filters;
  setSearch: (search: string) => void;
  toggleProgram: (program: Program) => void;
  togglePosition: (position: Position) => void;
  clearFilters: () => void;
}

const CompanyFilterControls: React.FC<CompanyFiltersProps> = ({
  filters,
  setSearch,
  togglePosition,
  toggleProgram,
  clearFilters,
}) => {
  const { data: programsData, isLoading: isLoadingPrograms } =
    useStrapiCollection("programs", {
      pagination: { pageSize: 100 },
    });

  const { data: positionsData, isLoading: isLoadingPositions } =
    useStrapiCollection("positions", {});

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

  const isLoading = isLoadingPrograms || isLoadingPositions;

  const handleToggleProgram = (programId: string) => {
    const program = programs.find((p) => p.id === programId);
    if (program) {
      toggleProgram(program);
    }
  };

  const handleTogglePosition = (positionId: string) => {
    const position = positions.find((p) => p.id === positionId);
    if (position) {
      togglePosition(position);
    }
  };

  return isLoading ? (
    <div className="flex justify-center items-center py-8">
      <div className="text-gray-600">
        Loading{" "}
        {isLoadingPrograms && isLoadingPositions
          ? "programs and positions"
          : isLoadingPrograms
          ? "programs"
          : "positions"}
        ...
      </div>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto p-6">
      <FilterList
        programItems={programs}
        positionItems={positions}
        selectedProgramFilters={filters.programs}
        selectedPositionFilters={filters.positions}
        onToggleProgram={handleToggleProgram}
        onTogglePosition={handleTogglePosition}
        onClearFilters={clearFilters}
      />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search companies"
          value={filters.search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default CompanyFilterControls;
