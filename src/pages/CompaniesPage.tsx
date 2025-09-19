import React, { useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

const Companies: React.FC = () => {
  const [t] = useTranslation("companies");

  const { companies, isLoading } = useCompanies();
  const { filters, toggleProgram, togglePosition, clearFilters } =
    useCompanyFilters();

  const [programsOpen, setProgramsOpen] = useState(false);
  const [positionsOpen, setPositionsOpen] = useState(false);

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

  const getProgramLabel = (): string => {
    const totalSize = filters.programs.size;

    if (totalSize === 0) {
      return `${globalLabels.all} ${globalLabels.programs}`;
    }

    if (totalSize === 1) {
      const [code] = filters.programs.entries().next().value as [
        string,
        unknown
      ];

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

  const getPositionLabel = (): string => {
    const size = filters.positions.size;

    if (size === 0) {
      return `${globalLabels.all} ${globalLabels.positions}`;
    }

    if (size === 1) {
      const code = Array.from(filters.positions)[0];
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
      <div className="flex gap-4 py-4">
        <DropdownMenu open={programsOpen} onOpenChange={setProgramsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              {getProgramLabel()}{" "}
              <FaChevronDown
                className={`transform transition-transform duration-200 ${
                  programsOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>Bachelor&apos;s programmes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {CANDIDATE_PROGRAMS.map((program, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                className="cursor-pointer"
                checked={filters.programs.has(program)}
                onCheckedChange={() => toggleProgram(program)}
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                {candidateProgramLabels[program]}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuLabel>Master&apos;s programmes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {MASTER_PROGRAMS.map((program, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                className="cursor-pointer"
                checked={filters.programs.has(program)}
                onCheckedChange={() => toggleProgram(program)}
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                {masterProgramLabels[program]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu open={positionsOpen} onOpenChange={setPositionsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              {getPositionLabel()}{" "}
              <FaChevronDown
                className={`transform transition-transform duration-200 ${
                  positionsOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>Positions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {POSITIONS.map((position, index) => (
              <DropdownMenuCheckboxItem
                key={index}
                className="cursor-pointer"
                color=""
                checked={filters.positions.has(position)}
                onCheckedChange={() => togglePosition(position)}
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                {positionLabels[position]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {!noFiltersSelected && (
        <Button onClick={clearFilters} variant={"secondary"}>
          {globalLabels.clearFilters}
        </Button>
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
