import { useState } from "react";
import { CandidateProgram, MasterProgram, Position } from "../types/program";

export interface Filters {
  search: string;
  candidatePrograms: Set<CandidateProgram>;
  mastersPrograms: Set<MasterProgram>;
  positions: Set<Position>;
}

const initialFilters: Filters = {
  search: "",
  candidatePrograms: new Set(),
  mastersPrograms: new Set(),
  positions: new Set(),
};


export default function useCompanyFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  };

  const toggleCandidateProgram = (program: CandidateProgram) => {
    setFilters((prev) => {
      const newCandidatePrograms = new Set(prev.candidatePrograms);
      if (newCandidatePrograms.has(program)) {
        newCandidatePrograms.delete(program);
      } else {
        newCandidatePrograms.add(program);
      }
      return { ...prev, candidatePrograms: newCandidatePrograms };
    });
  };

  const toggleMasterProgram = (program: MasterProgram) => {
    setFilters((prev) => {
      const newMasterPrograms = new Set(prev.mastersPrograms);
      if (newMasterPrograms.has(program)) {
        newMasterPrograms.delete(program);
      } else {
        newMasterPrograms.add(program);
      }
      return { ...prev, mastersPrograms: newMasterPrograms };
    });
  };

  const togglePosition = (position: Position) => {
    setFilters((prev) => {
      const newPositions = new Set(prev.positions);
      if (newPositions.has(position)) {
        newPositions.delete(position);
      } else {
        newPositions.add(position);
      }
      return { ...prev, positions: newPositions };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      candidatePrograms: new Set(),
      mastersPrograms: new Set(),
      positions: new Set(),
    });
  };

  return {
    filters,
    setSearch,
    toggleCandidateProgram,
    toggleMasterProgram,
    togglePosition,
    clearFilters,
  };
}
