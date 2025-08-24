import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import FadeInSection from "./FadeInSection";

interface FilterItem {
  id: string;
  name: string;
  type?: "Bachelor" | "Master";
}

interface FilterListProps<T extends FilterItem> {
  programItems: T[];
  positionItems: T[];
  selectedProgramFilters: Set<string>;
  selectedPositionFilters: Set<string>;
  onToggleProgram: (itemId: string) => void;
  onTogglePosition: (itemId: string) => void;
  onClearFilters: () => void;
}

const FilterList = <T extends FilterItem>({
  programItems,
  positionItems,
  selectedProgramFilters,
  selectedPositionFilters,
  onToggleProgram,
  onTogglePosition,
  onClearFilters,
}: FilterListProps<T>) => {
  const [t] = useTranslation("companies");
  const [programsExpanded, setProgramsExpanded] = useState<boolean>(false);
  const [positionsExpanded, setPositionsExpanded] = useState<boolean>(false);

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
    if (size === 1) return t(`${type}.${Array.from(set)[0]}`);

    return `${size} ${t(`global.${type}`)}`;
  };

  const bachelorPrograms = programItems.filter(
    (item) => item.type === "Bachelor"
  );
  const masterPrograms = programItems.filter((item) => item.type === "Master");

  return (
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
            <p className="">{getLabel(selectedProgramFilters, "programs")}</p>
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
            {getLabel(selectedPositionFilters, "positions")}
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                positionsExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div className="relative">
        {programsExpanded && (
          <FadeInSection direction="fadeDown">
            <div
              ref={programsRef}
              className="absolute bg-white rounded-xl flex flex-col shadow-md p-4 left-1/2 -translate-x-1/2 w-full max-w-[550px] gap-2"
            >
              <h1>Bachelor&apos;s programmes</h1>
              {bachelorPrograms.map((program) => (
                <label key={program.id} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program.id}
                    checked={selectedProgramFilters.has(program.id)}
                    onChange={() => onToggleProgram(program.id)}
                    className="mr-2"
                  />
                  {program.name}
                </label>
              ))}
              <h1>Master&apos;s programmes</h1>
              {masterPrograms.map((program) => (
                <label key={program.id} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={program.id}
                    checked={selectedProgramFilters.has(program.id)}
                    onChange={() => onToggleProgram(program.id)}
                    className="mr-2"
                  />
                  {program.name}
                </label>
              ))}
              <button
                onClick={onClearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {t("global.clearFilters")}
              </button>
            </div>
          </FadeInSection>
        )}
      </div>

      <div className="relative">
        {positionsExpanded && (
          <FadeInSection direction="fadeDown">
            <div
              ref={positionsRef}
              className="absolute bg-white rounded-xl flex flex-col right-0 shadow-md p-4 gap-2"
            >
              {positionItems.map((position) => (
                <label key={position.id} className="font-light text-gray-700">
                  <input
                    type="checkbox"
                    value={position.id}
                    checked={selectedPositionFilters.has(position.id)}
                    onChange={() => onTogglePosition(position.id)}
                    className="mr-2"
                  />
                  {position.name}
                </label>
              ))}
              <button
                onClick={onClearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
              >
                {t("global.clearFilters")}
              </button>
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  );
};

export default FilterList;
