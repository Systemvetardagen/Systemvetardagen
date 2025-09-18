import React, { useState, useEffect, useRef } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { FadeInSection, LoadingSpinner } from "@/ui";
import { CompanyCard } from "@/ui";
import { useCompanies } from "@/lib/hooks/useCompanyContext";
import {
  CANDIDATE_PROGRAMS,
  MASTER_PROGRAMS,
  Position,
  POSITIONS,
  Program,
} from "@/lib/types/program";
import useCompanyFilters from "@/lib/hooks/userCompanyFilters";
import { Company } from "@/lib/types/company";

const Companies: React.FC = () => {
  const [t] = useTranslation("companies");

  const { companies, isLoading, isError } = useCompanies();
  const { filters, setSearch, toggleProgram, togglePosition, clearFilters } =
    useCompanyFilters();

  const [programsExpanded, setProgramsExpanded] = useState<boolean>(false);
  const [positionsExpanded, setPositionsExpanded] = useState<boolean>(false);

  const candidateProgramLabels = t("candidatePrograms", {
    returnObjects: true,
  }) as Record<string, string>;
  const masterProgramLabels = t("mastersPrograms", {
    returnObjects: true,
  }) as Record<string, string>;
  const positionLabels = t("positions", {
    returnObjects: true,
  }) as Record<string, string>;
  const globalLabels = t("global", {
    returnObjects: true,
  }) as Record<string, string>;

  const programsRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        programsExpanded &&
        programsRef.current &&
        !programsRef.current.contains(e.target as Node)
      ) {
        setProgramsExpanded(false);
      }
      if (
        positionsExpanded &&
        positionsRef.current &&
        !positionsRef.current.contains(e.target as Node)
      ) {
        setPositionsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [programsExpanded, positionsExpanded]);

  const getProgramLabel = (programs: Set<string>): string => {
    const totalSize = programs.size;

    if (totalSize === 0) {
      return `${globalLabels.all} ${globalLabels.programs}`;
    }

    if (totalSize === 1) {
      const [code] = programs.entries().next().value as [string, unknown];

      if (candidateProgramLabels && code in candidateProgramLabels) {
        return candidateProgramLabels[code];
      }
      if (masterProgramLabels && code in masterProgramLabels) {
        return masterProgramLabels[code];
      }
      return code; //fallback
    }

    return `${totalSize} ${globalLabels.programs}`;
  };

  const getPositionLabel = (positions: Set<string>): string => {
    const size = positions.size;

    if (size === 0) {
      return `${globalLabels.all} ${globalLabels.positions}`;
    }

    if (size === 1) {
      const code = Array.from(positions)[0];
      return positionLabels[code] || code;
    }

    return `${size} ${globalLabels.positions}`;
  };

  const noFiltersSelected =
    filters.programs.size === 0 &&
    filters.positions.size === 0 &&
    filters.search === "";

  const filteredCompanies = companies
    ? companies.filter((company: Company) => {
        const hasProgram =
          filters.programs.size === 0 ||
          (company.programs &&
            company.programs.some((p: Program) => filters.programs.has(p)));

        const hasPosition =
          filters.positions.size === 0 ||
          (company.positions &&
            company.positions.some((pos: Position) =>
              filters.positions.has(pos)
            ));

        const matchesSearch =
          !filters.search ||
          company.companyName
            .toLowerCase()
            .includes(filters.search.toLowerCase()) ||
          (company.areaOfBusiness &&
            company.areaOfBusiness
              .toLowerCase()
              .includes(filters.search.toLowerCase()));

        return hasProgram && hasPosition && matchesSearch;
      })
    : [];
  const partners = companies
    ? companies.filter((company) => {
        return company.isSponsor;
      })
    : [];
  return (
    <div className="flex flex-col items-center py-32 px-10">
      <h2 className="text-5xl font-semibold lg:text-6xl mb-8">
        {globalLabels.header}
      </h2>
      <div className="relative">
        <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
          <h2 className="font-light text-gray-700">{globalLabels.showing}</h2>
          <div className="">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                setProgramsExpanded(!programsExpanded);
                setPositionsExpanded(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-2xl hover:opacity-90 transition-opacity"
            >
              <p className="">{getProgramLabel(filters.programs)}</p>
              <LuChevronDown
                className={`transform transition-transform duration-200 ${
                  programsExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <h1 className="font-light text-gray-700">{globalLabels.and}</h1>
          <div className="">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                setPositionsExpanded(!positionsExpanded);
                setProgramsExpanded(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-accent rounded-2xl hover:opacity-90 transition-opacity"
            >
              {getPositionLabel(filters.positions)}
              <LuChevronDown
                className={`transform transition-transform duration-200 ${
                  positionsExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
                positionsExpanded
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={globalLabels.searchPlaceholder}
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filters.search && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setSearch("")}
                aria-label={globalLabels.clearSearch || "Clear search"}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className="relative">
          {programsExpanded && (
            <div
              ref={programsRef}
              className="absolute bg-white rounded-xl flex flex-col shadow-md p-4 left-1/2 -translate-x-1/2 w-full max-w-[550px] gap-2 z-50"
            >
              <h1>Bachelor&apos;s programmes</h1>
              {CANDIDATE_PROGRAMS.map((program) => (
                <label key={program} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program}
                    checked={filters.programs.has(program)}
                    onChange={() => toggleProgram(program)}
                    className="mr-2"
                  />
                  {candidateProgramLabels[program]}
                </label>
              ))}
              <h1>Master&apos;s programmes</h1>
              {MASTER_PROGRAMS.map((program) => (
                <label key={program} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program}
                    checked={filters.programs.has(program)}
                    onChange={() => toggleProgram(program)}
                    className="mr-2"
                  />
                  {masterProgramLabels[program]}
                </label>
              ))}
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {globalLabels.clearFilters}
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          {positionsExpanded && (
            <div
              ref={positionsRef}
              className="absolute bg-white rounded-xl flex flex-col right-0 shadow-md p-4 gap-2 z-50"
            >
              {POSITIONS.map((position) => (
                <label key={position} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={position}
                    checked={filters.positions.has(position)}
                    onChange={() => togglePosition(position)}
                    className="mr-2"
                  />
                  {positionLabels[position]}
                </label>
              ))}
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {globalLabels.clearFilters}
              </button>
            </div>
          )}
        </div>
      </div>
      {!noFiltersSelected && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-md hover:opacity-90 transition-opacity mb-8"
        >
          {globalLabels.clearFilters}
        </button>
      )}
      {noFiltersSelected && partners.length > 0 && (
        <div className="mb-8">
          <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
            {globalLabels.partners}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {partners.map((partner, index) => (
              <FadeInSection key={index} direction="fadeLeft">
                <CompanyCard company={partner} className="h-32 w-56" />
              </FadeInSection>
            ))}
          </div>
        </div>
      )}

      <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
        {globalLabels.allCompanies}
      </h1>
      {isLoading ? (
        <LoadingSpinner isLoading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
          {filteredCompanies &&
            filteredCompanies.map((company, index) => (
              <FadeInSection key={index} direction="fadeLeft">
                <CompanyCard company={company} className="h-32 w-56" />
              </FadeInSection>
            ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
