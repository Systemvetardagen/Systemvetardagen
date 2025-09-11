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

export const CANDIDATE_PROGRAMS: CandidateProgram[] = [
  "SYSDK",
  "SAFFK",
  "SDAVK",
  "SGAMK",
  "SDIMK",
  "SITEK",
  "SIADK",
  "SMARK",
];
export const MASTER_PROGRAMS: MasterProgram[] = [
  "SAIHO",
  "SMINO",
  "SMEFO",
  "SCSSO",
  "SHINO",
  "SSLIO",
  "SDSBO",
  "SPROM",
  "SDKIO",
];
export const POSITIONS: Position[] = [
  "fullTime",
  "partTime",
  "thesis",
  "trainee",
  "internship",
  "foreignServices",
];
