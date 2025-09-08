import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "@/ui";
import { CompanyCard } from "@/ui";
import Seperator from "@/ui/common/Seperator";
import { useCompanyContext } from "@/lib/context/CompanyContext";
import {
  CandidateProgram,
  MasterProgram,
  Position,
} from "@/lib/types/company";

const Companies: React.FC = () => {
  const [t] = useTranslation("companies");

  const {
    filteredCompanies,
    partners,
    filters,
    setSearch,
    toggleCandidateProgram,
    toggleMasterProgram,
    togglePosition,
    clearFilters,
  } = useCompanyContext();

  const [programsExpanded, setProgramsExpanded] = useState<boolean>(false);
  const [positionsExpanded, setPositionsExpanded] = useState<boolean>(false);

  const candidateProgramCodes = Object.keys(
    t("candidatePrograms", { returnObjects: true }) as Record<string, string>
  ) as CandidateProgram[];
  const masterProgramCodes = Object.keys(
    t("mastersPrograms", { returnObjects: true }) as Record<string, string>
  ) as MasterProgram[];
  const positions = Object.keys(
    t("positions", { returnObjects: true }) as Record<string, string>
  ) as Position[];

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

  const getLabel = (
    set: Set<string>,
    type: "programs" | "positions"
  ): string => {
    const size = set.size;
    if (size === 0) return `${t("global.all")} ${t(`global.${type}`)}`;
    if (size === 1) {
      const code = Array.from(set)[0];
      if (type === "programs") {
        if (candidateProgramCodes.includes(code as CandidateProgram)) {
          return t(`candidatePrograms.${code}`);
        }
        if (masterProgramCodes.includes(code as MasterProgram)) {
          return t(`mastersPrograms.${code}`);
        }
      } else if (type === "positions") {
        return t(`positions.${code}`);
      }
      return code; // fallback (shouldn't normally hit)
    }
    return `${size} ${t(`global.${type}`)}`;
  };

  const noFiltersSelected =
    filters.candidatePrograms.size === 0 &&
    filters.mastersPrograms.size === 0 &&
    filters.positions.size === 0 &&
    filters.search === "";

  return (
    <div className="flex flex-col items-center py-32 px-10">
      <h2 className="text-5xl font-semibold lg:text-6xl mb-8">
        {t("global.header")}
      </h2>
      <div className="relative">
        <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
          <h2 className="font-light text-gray-700">{t("global.showing")}</h2>
          <div className="">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                setProgramsExpanded(!programsExpanded);
                setPositionsExpanded(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-2xl hover:opacity-90 transition-opacity"
            >
              <p className="">
                {getLabel(
                  new Set<string>([
                    ...filters.candidatePrograms,
                    ...filters.mastersPrograms,
                  ]),
                  "programs"
                )}
              </p>
              <ChevronDown
                className={`transform transition-transform duration-200 ${
                  programsExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <h1 className="font-light text-gray-700">{t("global.and")}</h1>
          <div className="">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                setPositionsExpanded(!positionsExpanded);
                setProgramsExpanded(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-accent rounded-2xl hover:opacity-90 transition-opacity"
            >
              {getLabel(filters.positions, "positions")}
              <ChevronDown
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
              placeholder={t("global.searchPlaceholder")}
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filters.search && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setSearch("")}
                aria-label={t("search.clearSearch") || "Clear search"}
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
              {candidateProgramCodes.map((program) => (
                <label key={program} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program}
                    checked={filters.candidatePrograms.has(program)}
                    onChange={() => toggleCandidateProgram(program)}
                    className="mr-2"
                  />
                  {t(`candidatePrograms.${program}`)}
                </label>
              ))}
              <h1>Master&apos;s programmes</h1>
              {masterProgramCodes.map((program) => (
                <label key={program} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program}
                    checked={filters.mastersPrograms.has(program)}
                    onChange={() => toggleMasterProgram(program)}
                    className="mr-2"
                  />
                  {t(`mastersPrograms.${program}`)}
                </label>
              ))}
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {t("global.clearFilters")}
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
              {positions.map((position) => (
                <label key={position} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={position}
                    checked={filters.positions.has(position)}
                    onChange={() => togglePosition(position)}
                    className="mr-2"
                  />
                  {t(`positions.${position}`)}
                </label>
              ))}
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {t("global.clearFilters")}
              </button>
            </div>
          )}
        </div>
      </div>
      {noFiltersSelected ? (
        <div>
          <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
            {t("global.partners")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grd-flow-row gap-6">
            {partners.map((partner, index) => (
              <CompanyCard key={index} company={partner} />
            ))}
          </div>
          <Seperator className="my-10" />
        </div>
      ) : (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-md hover:opacity-90 transition-opacity mb-8"
        >
          {t("global.clearFilters")}
        </button>
      )}
      <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
        {t("global.allCompanies")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
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
