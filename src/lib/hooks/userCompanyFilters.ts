import { useState } from "react";
import {
  Position,
  Program,
} from "../types/program";

export interface Filters {
  search: string;
  programs: Set<Program>;
  positions: Set<Position>;
}

const initialFilters: Filters = {
  search: "",
  programs: new Set(),
  positions: new Set(),
};

export default function useCompanyFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  };

  const toggleProgram = (program: Program) => {
    setFilters((prev) => {
      const newPrograms = new Set(prev.programs);
      if (newPrograms.has(program)) {
        newPrograms.delete(program);
      } else {
        newPrograms.add(program);
      }
      return { ...prev, programs: newPrograms };
    });
  };

  const togglePosition = (position: Position) => {
    setFilters((prev) => {
      const newPositions = new Set(prev.positions);
      if (prev.positions.has(position)) {
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
      programs: new Set(),
      positions: new Set(),
    });
  };

  return {
    filters,
    setSearch,
    toggleProgram,
    togglePosition,
    clearFilters,
  };
}
