import { CandidateProgram, MasterProgram, Position } from "./program";

export interface Company {
  id: string;
  name: string;
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
  logo?: string | null;
  banner?: string | null;
  qualifications?: string;
  sponsor: boolean;
  candidatePrograms: CandidateProgram[];
  masterPrograms: MasterProgram[];
  positions: Position[];
}



