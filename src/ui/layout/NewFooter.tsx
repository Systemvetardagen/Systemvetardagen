import React from "react";
import { useTranslation } from "react-i18next";

interface FooterSection {
  title: string;
  links: FooterSectionLink[];
}

interface FooterSectionLink {
  name: string;
  href: string;
}

const NewFooter = () => {
  const [t] = useTranslation("footer");
  const footerLinkSections: FooterSection[] = t("sections", {
    returnObjects: true,
  }) as FooterSection[];

  return <div>NewFooter</div>;
};

export default NewFooter;
