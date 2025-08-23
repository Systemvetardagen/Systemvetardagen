import { useState } from 'react';
import { Position, Program } from '../types/company';

export interface Filters {
    search: string;
    programs: Program[];
    positions: Position[];
}

const initialFilters: Filters = {
    search: '',
    programs: [],
    positions: [],
};

export default function useFilters() {
    const [filters, setFilters] = useState<Filters>(initialFilters);

    const setSearch = (search: string) => {
        setFilters((prev) => ({ ...prev, search }));
    };

    const toggleProgram = (program: Program) => {
        setFilters((prev) => {
            const programs = prev.programs.includes(program)
                ? prev.programs.filter((p) => p.id !== program.id)
                : [...prev.programs, program];
            return { ...prev, programs };
        });
    };
    const togglePosition = (position: Position) => {
        setFilters((prev) => {
            const positions = prev.positions.includes(position)
                ? prev.positions.filter((p) => p.name !== position.name)
                : [...prev.positions, position];
            return { ...prev, positions };
        });
    };
    return {filters, setSearch, toggleProgram, togglePosition}
}
