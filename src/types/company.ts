export type ProgramType = 'Bachelor' | 'Master';
export interface Program {
    name: string;
    id: string;
    link?: string;
    type: ProgramType;
}

export interface Position {
    name: string;
    id: string;
}

export interface Company {
    name: string;
    positions: Position[];
    programs: Program[];
}

export interface StrapiProgram {
    programID: string;
    name: string;
    programLink: string;
    type: 'Bachelor' | 'Master';
}

export interface StrapiPosition {
    id: string;
    name: string;
}
