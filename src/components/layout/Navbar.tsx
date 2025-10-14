import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LanguageSwitch } from "../common";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useTranslation } from "react-i18next";

export interface Link {
  section: string;
  href: string;
}

const Navbar: React.FC = () => {
  const { t } = useTranslation("navbar");
  const links: Link[] = t("navbar", { returnObjects: true }) as Link[];
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `relative font-semibold text-[18px] px-2 py-1 transition-all duration-200 inline-block
   ${isActive ? "text-black" : "text-black hover:text-link"} 
   after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-1 
   after:h-[2px] after:rounded-full after:transition-all after:duration-300
   ${
     isActive
       ? "after:bg-black after:scale-x-100"
       : "after:bg-link after:scale-x-0 hover:after:scale-x-100"
   }`;

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 w-full rounded-none h-14"
          : "absolute top-8 w-[90vw] mx-[5vw] rounded-full"
      } flex bg-white text-black px-4 lg:py-1 z-20 items-center justify-between transition-all duration-150 shadow-md `}
    >
      {/* FREDRIK SNÄLLAAA LÅT DEN VARA SNÄLLA */}
      {/* NE DEDÄR ÄR ACTUALLY ETT BROTT SLUTA JAG ACCEPTERAR MAX P-2 JAG KOMMER LÄGGA EN --force JAG SVÄR*/}
      {/* NEJ DET BLIR 3 FUCK U */}
      {/* O_O me verry sad */}
      {/* sorry man */}
      <NavLink to="/" className="flex-shrink-0">
        <img
          src="/svgs/specialLogo.svg"
          alt="Left Logo"
          className="h-10 p-0 m-0"
          fetchPriority="high"
        />
      </NavLink>

      <DesktopNavbar links={links} getNavLinkClass={getNavLinkClass} />

      <MobileNavbar
        links={links}
        isSticky={isSticky}
        getNavLinkClass={getNavLinkClass}
      />
      <div className="hidden lg:flex">
        <LanguageSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
