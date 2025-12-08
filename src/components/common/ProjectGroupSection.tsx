import React, { useState } from "react";
import { FaChevronDown, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FadeInSection } from "../layout";
import {
  ProjectGroupMember,
  ProjectGroupType,
} from "@/lib/types/project-group";

const SocialLinks: React.FC<ProjectGroupMember> = ({
  linkedIn,
  github,
  email,
}) => {
  return (
    <div className="flex gap-2 mt-2">
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:text-black transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:text-black transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:text-black transition-colors duration-300"
        >
          <IoMdMail size={20} />
        </a>
      )}
    </div>
  );
};

const ProjectGroupSection: React.FC<ProjectGroupType> = ({
  name,
  leaders,
  members,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <FadeInSection direction="fadeLeft">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {leaders.map((leader, index) => (
            <div className="" key={index}>
              <img
                src={`/images/portraits/${leader.image}`}
                className="h-60 rounded-lg object-cover mb-2"
                alt={`${leader.name} portrait`}
              />
              <p className="text-xl">{leader.name}</p>
              <p className="text-md text-gray-500">{leader.role}</p>
              <SocialLinks {...leader} />
            </div>
          ))}
        </div>
        {members && members.length > 0 && (
          <div className="space-y-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Team Members
              <FaChevronDown
                className={`transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {members.map((member, index) => (
                <div key={index} className="space-y-2">
                  <p>{member.name}</p>
                  <SocialLinks {...member} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </FadeInSection>
  );
};

export default ProjectGroupSection;
