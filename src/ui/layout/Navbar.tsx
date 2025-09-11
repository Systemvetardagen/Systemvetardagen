import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LanguageSwitch, Seperator } from "../common";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useTranslation } from "react-i18next";

export interface Link {
  section: string;
  href: string;
  childLinks: {
    name: string;
    href: string;
  }[];
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
    `font-semibold text-[20px] text-black relative ${
      isActive
      ? "text-black underline underline-offset-4 underline decoration-2"
      : "hover:text-link"
    }`;

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 w-full rounded-none h-14"
          : "absolute top-8 w-[90vw] mx-[5vw] rounded-md"
      } flex bg-white text-black px-4 lg:py-1 z-20 items-center justify-between transition-all duration-150 shadow-md `}
    >
      {/* FREDRIK SNÄLLAAA LÅT DEN VARA SNÄLLA */}
      {/* NE DEDÄR ÄR ACTUALLY ETT BROTT SLUTA JAG ACCEPTERAR MAX P-2 JAG KOMMER LÄGGA EN --force JAG SVÄR*/}
      {/* NEJ DET BLIR 3 FUCK U */}
      {/* O_O me verry sad */}
      {/* sorry man */}
      <NavLink to="/" className="flex-shrink-0">
        <img
          src="/images/systemvetardagen-logo-2026-black.png"
          alt="Left Logo"
          className="h-10 p-0 m-0"
        />
      </NavLink>

      <DesktopNavbar
        links={links}
        getNavLinkClass={getNavLinkClass}
      />

      <MobileNavbar
        links={links}
        isSticky={isSticky}
        getNavLinkClass={getNavLinkClass}
      />
      {isSticky && <Seperator className="absolute bottom-0 left-0 w-screen" />}
      <div className="hidden lg:flex">
        <LanguageSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
