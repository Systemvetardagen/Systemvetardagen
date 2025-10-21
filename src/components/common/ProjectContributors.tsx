import React from "react";
import ProjectGroupSection from "./ProjectGroupSection.tsx";
// import FadeInSection from "../layout/FadeInSection.tsx";
import { useTranslation } from "react-i18next";
import { ProjectGroupType } from "@/lib/types/project-group.ts";

const ProjectGroup: React.FC = () => {
  const [t] = useTranslation("projectGroup");
  const projectGroups: ProjectGroupType[] = t("groups", {
    returnObjects: true,
  }) as ProjectGroupType[];

  return (
    <section id="project-group" className="space-y-8">
      {/* <FadeInSection direction="fadeLeft">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Project Group
        </h2>
      </FadeInSection> */}
      <div className="space-y-12">
        {projectGroups.map((group: ProjectGroupType, index) => (
          <ProjectGroupSection
            key={index}
            name={group.name}
            leaders={group.leaders}
            members={group.members}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectGroup;
