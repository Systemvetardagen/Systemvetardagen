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

export type CandidateProgram =
  | "SYSDK" // Computer and Systems Sciences
  | "SAFFK" // Enterprise Systems and Service Design
  | "SDAVK" // Computer Science and Software Engineering
  | "SGAMK" // Computer Game Development
  | "SDIMK" // Digital media
  | "SITEK" // Business Administration and Information Technology
  | "SIADK" // Interaction Design
  | "SMARK"; // Market Communication and Information Technology

export type MasterProgram =
  | "SAIHO" // AI for health
  | "SMINO" // Information Security
  | "SMEFO" // Open eGovernment
  | "SCSSO" // Computer and Systems Sciences
  | "SHINO" // Health Informatics
  | "SSLIO" // Strategic Information Systems Management
  | "SDSBO" // Data Science, Statistics and Decision Analysis
  | "SPROM" // IT Project Management
  | "SDKIO"; // Design for Creative and Immersive Technology

export type Position =
  | "fullTime"
  | "partTime"
  | "thesis"
  | "trainee"
  | "internship"
  | "foreignServices";

export type CandidatePrograms = CandidateProgram[];
export type MasterPrograms = MasterProgram[];
export type Positions = Position[];


