import { FC, useState, useEffect } from "react";
import { Link } from "./Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import LanguageSwitch from "../LanguageSwitch";
import { useTranslation } from "react-i18next";
interface MobileNavbarProps {
  links: Link[];
  isSticky: boolean;
  getNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
  scrollWithOffset: (el: HTMLElement) => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({
  links,
  isSticky,
  getNavLinkClass,
  scrollWithOffset,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const [t] = useTranslation("common");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="block lg:hidden z-30">
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center"
        >
          <img
            src={isOpen ? "/svgs/cross.svg" : "/svgs/burger.svg"}
            className="h-12 p-1 transition-all duration-300 ease-in-out"
            style={{
              opacity: isOpen ? "1" : "0.8",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
            alt="Toggle Menu"
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 flex flex-col justify-center gap-4 ${
            isSticky ? "pt-3" : "pt-10"
          } pl-12 pr-10 ${
            isSticky ? "pb-4" : "pb-10"
          } font-bold font-heading tracking-wide bg-white w-screen transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {links.map((link, index) => (
            <div key={index}>
              <NavLink
                to={link.href}
                className={getNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {t(`navbar.${link.section}.headLabel`)}
              </NavLink>
              {link.childLinks.map((childLink, childIndex) =>
                childLink.hashLink ? (
                  <NavHashLink
                    to={childLink.href.concat("#" + childLink.hashLink)}
                    key={childIndex}
                    smooth
                    scroll={scrollWithOffset}
                    className="hover:text-link whitespace-nowrap px-2 py-1 rounded block ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navbar.${link.section}.childLinks.${childLink.key}`)}
                  </NavHashLink>
                ) : (
                  <NavLink
                    key={childIndex}
                    to={childLink.href}
                    className="hover:text-link whitespace-nowrap px-2 py-1 rounded block ml-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navbar.${link.section}.childLinks.${childLink.key}`)}
                  </NavLink>
                )
              )}
            </div>
          ))}
          <div onClick={() => setIsOpen(false)}>
            <LanguageSwitch />
          </div>
          <div className="absolute bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
