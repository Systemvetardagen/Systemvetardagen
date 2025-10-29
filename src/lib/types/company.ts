import { Position, Program } from "./program";

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
  qualifications: string;
  programs: Program[];
  positions: Position[];
  slug: string;
  packageId: number;
  networkMeeting: boolean;
  logoURL: string;
  bannerURL: string;
}
