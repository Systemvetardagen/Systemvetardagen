import { Program } from "./program";

export interface Company {
  companyName: string;
  slogan: string;
  areaOfBusiness: string;
  foundedYear: number;
  employeesSweden: number;
  employeesWorld: number;
  description: string;
  websiteLink: string;
  linkedInLink: string;
  instagramLink: string;
  facebookLink: string;
  isSponsor: boolean;
  qualifications: string;
  programs: Program[];
  slug: string;
  logoURL: string;
  bannerURL: string;
}



