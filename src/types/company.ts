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
    slug: string;
    slogan: string;
    areaOfBusiness: string;
    founded?: Date;
    employeesSweden?: number;
    employeesWorld?: number;
    description: string;
    websiteLink?: string;
    linkedInLink?: string;
    instagramLink?: string;
    facebookLink?: string;
    logo?: any;
    banner?: any;
    qualifications?: string;
    sponsor: boolean;
    positions: Position[];
    programs: Program[];
}

export interface CompanyImage {
    
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
