import React, { useState, useMemo } from "react";
import {
  candidatePrograms,
  masterPrograms,
  positions,
  Company,
} from "../assets/companies";
import companiesData from "../assets/companies.json";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/components";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { Button } from "@/components/common/button";
import { FaChevronDown } from "react-icons/fa";

const Companies: React.FC = () => {
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle companies on every render
  const companies: Company[] = useMemo(() => shuffleArray(companiesData), []);
  const [t] = useTranslation("companies");

  const [selectedPrograms, setSelectedPrograms] = useState<Set<string>>(
    new Set()
  );
  const [selectedPositions, setSelectedPositions] = useState<Set<string>>(
    new Set()
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const toggleProgram = (program: string) => {
    setSelectedPrograms((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(program)) {
        newSet.delete(program);
      } else {
        newSet.add(program);
      }
      return newSet;
    });
  };

  const togglePosition = (position: string) => {
    setSelectedPositions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(position)) {
        newSet.delete(position);
      } else {
        newSet.add(position);
      }
      return newSet;
    });
  };

  const clearFilters = () => {
    setSelectedPrograms(new Set());
    setSelectedPositions(new Set());
    setSearchTerm("");
  };

  const getProgramLabel = (): string => {
    const totalSize = selectedPrograms.size;

    if (totalSize === 0) {
      return `${globalLabels.all} ${globalLabels.programs}`;
    }

    if (totalSize === 1) {
      const [code] = selectedPrograms.entries().next().value as [
        string,
        unknown
      ];

      if (candidateProgramLabels && code in candidateProgramLabels) {
        return candidateProgramLabels[code];
      }
      if (masterProgramLabels && code in masterProgramLabels) {
        return masterProgramLabels[code];
      }
      return code;
    }

    return `${totalSize} ${globalLabels.programs}`;
  };

  const getPositionLabel = (): string => {
    const size = selectedPositions.size;

    if (size === 0) {
      return `${globalLabels.all} ${globalLabels.positions}`;
    }

    if (size === 1) {
      const code = Array.from(selectedPositions)[0];
      return positionLabels[code] || code;
    }

    return `${size} ${globalLabels.positions}`;
  };

  const filteredCompanies = companies.filter((company: Company) => {
    const hasCandidateProgram =
      selectedPrograms.size === 0 ||
      (company.candidatePrograms &&
        company.candidatePrograms.some((p: string) => selectedPrograms.has(p)));

    const hasMasterProgram =
      selectedPrograms.size === 0 ||
      (company.masterPrograms &&
        company.masterPrograms.some((p: string) => selectedPrograms.has(p)));

    const hasProgram = hasCandidateProgram || hasMasterProgram;

    const hasPosition =
      selectedPositions.size === 0 ||
      (company.positions &&
        company.positions.some((pos: string) => selectedPositions.has(pos)));

    const matchesSearch =
      !searchTerm ||
      company.name.toLowerCase().includes(searchTerm.toLowerCase());

    return hasProgram && hasPosition && matchesSearch;
  });

  const CompanyCard: React.FC<{ company: Company; className: string }> = ({
    company,
    className,
  }) => {
    const logoPath = `/companies/${company.id}/logo.webp`;
    return (
      <div className="bg-white rounded-3xl hover:scale-105 transition-transform duration-100 shadow-xl p-4">
        <a
          className=""
          rel="noreferrer"
          target="_blank"
          href={company.websiteLink}
        >
          <img
            src={logoPath}
            className={`object-contain ${className}`}
            alt={`${company.name} logo`}
          />
        </a>
      </div>
    );
  };

  const noFiltersSelected =
    selectedPrograms.size === 0 &&
    selectedPositions.size === 0 &&
    searchTerm === "";

  return (
    <div className="flex flex-col items-center py-32 px-10">
      <h2 className="text-5xl font-semibold lg:text-6xl mb-4 sm:mb-6">
        {globalLabels.header}
      </h2>
      <div className="flex flex-col sm:flex-row gap-2 py-4 items-center">
        <h2 className="font-light text-gray-700">{globalLabels.showing}</h2>
        <div className="flex flex-row gap-2 items-center">
          <DropdownMenu open={programsOpen} onOpenChange={setProgramsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="text-black max-w-[90vw] sm:max-w-sm md:max-w-md truncate"
              >
                <span className="truncate flex-1">{getProgramLabel()} </span>
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
              {candidatePrograms.map((program, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  className="cursor-pointer"
                  checked={selectedPrograms.has(program)}
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
              {masterPrograms.map((program, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  className="cursor-pointer"
                  checked={selectedPrograms.has(program)}
                  onCheckedChange={() => toggleProgram(program)}
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  {masterProgramLabels[program]}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuLabel
                onClick={clearFilters}
                className="hover:underline cursor-pointer"
              >
                Clear Filters
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="hidden md:block font-light text-gray-700">
            {globalLabels.and}
          </h1>
          <DropdownMenu open={positionsOpen} onOpenChange={setPositionsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="accent" className="text-black">
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
              {positions.map((position, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  className="cursor-pointer"
                  color=""
                  checked={selectedPositions.has(position)}
                  onCheckedChange={() => togglePosition(position)}
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  {positionLabels[position]}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuLabel
                onClick={clearFilters}
                className="hover:underline cursor-pointer"
              >
                Clear Filters
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="max-w-2xl mb-4">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={globalLabels.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setSearchTerm("")}
              aria-label={globalLabels.clearSearch || "Clear search"}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {!noFiltersSelected && (
        <Button className="mb-2" onClick={clearFilters} variant={"default"}>
          {globalLabels.clearFilters}
        </Button>
      )}
      <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
        {globalLabels.allCompanies}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
        {filteredCompanies.map((company, index) => (
          <FadeInSection key={index} direction="fadeLeft">
            <CompanyCard company={company} className="h-32 w-56" />
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Companies;
