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
            const existingIndex = prev.programs.findIndex(p => p.id === program.id);
            const programs = existingIndex !== -1
                ? prev.programs.filter((p) => p.id !== program.id)
                : [...prev.programs, program];
            return { ...prev, programs };
        });
    };
    
    const togglePosition = (position: Position) => {
        setFilters((prev) => {
            const existingIndex = prev.positions.findIndex(p => p.id === position.id);
            const positions = existingIndex !== -1
                ? prev.positions.filter((p) => p.id !== position.id)
                : [...prev.positions, position];
            return { ...prev, positions };
        });
    };

    return {filters, setSearch, toggleProgram, togglePosition}
}
