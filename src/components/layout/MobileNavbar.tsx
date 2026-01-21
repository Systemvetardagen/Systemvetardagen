import { FC, useState, useEffect } from "react";
import { Link } from "./Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { LanguageSwitch } from "../common";
import { FaUserCircle } from "react-icons/fa";

interface MobileNavbarProps {
  links: Link[];
  isSticky: boolean;
  getNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
}

const MobileNavbar: FC<MobileNavbarProps> = ({
  links,
  isSticky,
  getNavLinkClass,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

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

      {/* overlay */}
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
          } px-4 ${
            isSticky ? "pb-4" : "pb-10"
          } font-bold font-heading tracking-wide bg-white w-screen transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.section}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 px-2" onClick={() => setIsOpen(false)}>
            <a
              href="https://mitt.systemvetardagen.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-link transition-colors duration-200"
            >
              <FaUserCircle size={24} />
            </a>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
