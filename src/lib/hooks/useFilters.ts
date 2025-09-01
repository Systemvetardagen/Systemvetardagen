import { useEffect, useState } from "react";
import { CandidateProgram, MasterProgram, Position } from "../types/company";

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

function serializeFilters(filters: Filters): string {
  return JSON.stringify({
    ...filters,
    candidatePrograms: Array.from(filters.candidatePrograms),
    masterPrograms: Array.from(filters.mastersPrograms),
    positions: Array.from(filters.positions),
  });
}

function deserializeFilters(raw: string | null): Filters {
  if (!raw) return initialFilters;
  try {
    const obj = JSON.parse(raw);
    return {
      search: obj.search ?? "",
      candidatePrograms: new Set(
        (obj.candidatePrograms as CandidateProgram[]) ?? []
      ),
      mastersPrograms: new Set((obj.mastersPrograms as MasterProgram[]) ?? []),
      positions: new Set((obj.positions as Position[]) ?? []),
    };
  } catch (e) {
    console.error("Failed to parse filters from sessionStorage", e);
    return {
      search: "",
      candidatePrograms: new Set(),
      mastersPrograms: new Set(),
      positions: new Set(),
    };
  }
}

export default function useFilters(key: string) {
  const [filters, setFilters] = useState<Filters>(() =>
    deserializeFilters(sessionStorage.getItem(key))
  );

  useEffect(() => {
    sessionStorage.setItem(key, serializeFilters(filters));
  }, [key, filters]);

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
