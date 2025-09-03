export interface ProjectGroupType {
  name: string;
  head?: ProjectGroupMember;
  vice?: ProjectGroupMember;
  members?: ProjectGroupMember[];
}

export interface ProjectGroupMember {
  name: string;
  role: string;
  linkedIn?: string;
  github?: string;
  email?: string;
}
