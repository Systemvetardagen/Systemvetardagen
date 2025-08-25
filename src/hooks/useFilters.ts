import { useState } from "react";
import { Position, Program } from "../types/company";

export interface Filters {
  search: string;
  programs: Set<string>;
  positions: Set<string>;
}

const initialFilters: Filters = {
  search: "",
  programs: new Set(),
  positions: new Set(),
};

export default function useFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  };

  const toggleProgram = (program: Program) => {
    setFilters((prev) => {
      const newPrograms = new Set(prev.programs);
      if (newPrograms.has(program.id)) {
        newPrograms.delete(program.id);
      } else {
        newPrograms.add(program.id);
      }
      return { ...prev, programs: newPrograms };
    });
  };

  const togglePosition = (position: Position) => {
    setFilters((prev) => {
      const newPositions = new Set(prev.positions);
      if (newPositions.has(position.id)) {
        newPositions.delete(position.id);
      } else {
        newPositions.add(position.id);
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

  return { filters, setSearch, toggleProgram, togglePosition, clearFilters };
}
