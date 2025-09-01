export interface Company {
    id: string;
    name: string;
    slogan?: string;
    video?: string;
    founded: number;
    employeesSweden?: number;
    employeesTotal?: number;
    contacts?: Contact[];
    candidatePrograms?: string[];
    masterPrograms?: string[];
    positions?: string[];
    isPartner?: boolean;
    websiteLink: string;
    linkedIn?: string;
    instagram?: string;
    facebook?: string;
}
export interface Contact {
    name?: string;
    mail?: string;
    phoneNumber?: string;
}