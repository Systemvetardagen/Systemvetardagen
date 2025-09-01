import { CandidateProgram, MasterProgram, Position } from "../types/company";
import companiesData from "./companies.json";

export const candidatePrograms: CandidateProgram[] = [
  "SYSDK", // Computer and Systems Sciences
  "SAFFK", // Enterprise Systems and Service Design
  "SDAVK", // Computer Science and Software Engineering
  "SGAMK", // Computer Game Development
  "SDIMK", // Digital media
  "SITEK", // Business Administration and Informaton Technology
  "SIADK", // Interaction Design
  "SMARK", // Market Communication and Information Technology
];

export const masterPrograms: MasterProgram[] = [
  "SAIHO", // AI for health
  "SMINO", // Information Security
  "SMEFO", // Open eGovernment
  "SCSSO", // Computer and Systems Sciences
  "SHINO", // Health Informatics
  "SSLIO", // Strategic Information Systems Management
  "SDSBO", // Data Science, Statistics and Decision Analysis
  "SPROM", // IT Project Management
  "SDKIO", // Design for Creative and Immersive Technology
];

export const positions: Position[] = [
  "fullTime",
  "partTime",
  "thesis",
  "trainee",
  "internship",
  "foreignServices",
];

export const NUM_OF_COMPANIES = companiesData.length;