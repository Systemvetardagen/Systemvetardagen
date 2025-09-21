export interface ProjectGroupType {
  name: string;
  leaders: ProjectGroupMember[];
  members?: ProjectGroupMember[];
}

export interface ProjectGroupMember {
  name: string;
  role: string;
  image?: string;
  linkedIn?: string;
  github?: string;
  email?: string;
}
