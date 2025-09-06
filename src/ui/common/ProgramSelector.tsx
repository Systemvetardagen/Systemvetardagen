import type { CandidateProgram, MasterProgram } from "@/lib/types/company";
import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

type Program = CandidateProgram | MasterProgram;
type BachelorProgram = CandidateProgram;

interface ProgramSelectorProps {
  value: Program | undefined;
  onChange: (program: Program) => void;
  className?: string;
  required?: boolean;
}

const ProgramSelector: FC<ProgramSelectorProps> = ({
  value,
  onChange,
  className = "",
  required = false,
}) => {
  const { t } = useTranslation('programs');
  
  const bachelorProgramTranslations = t('candidatePrograms', { returnObjects: true }) as Record<BachelorProgram, string>;
  const masterProgramTranslations = t('masterPrograms', { returnObjects: true }) as Record<MasterProgram, string>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as Program;
    onChange(selectedValue);
  };

  return (
    <div className={className}>
      <label
        htmlFor="program"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Program
      </label>
      <select
        id="program"
        value={value || ""}
        onChange={handleChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white"
      >
        <option value="" disabled>
          Select your program
        </option>

        <optgroup label="Bachelor Programs">
          {Object.entries(bachelorProgramTranslations).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </optgroup>

        <optgroup label="Master Programs">
          {Object.entries(masterProgramTranslations).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default ProgramSelector;
