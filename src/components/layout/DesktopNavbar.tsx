import { FC } from "react";
import { Link } from "./Navbar";
import { NavLink } from "react-router-dom";

interface DesktopNavbarProps {
  links: Link[];
  getNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({ links, getNavLinkClass }) => {
  return (
    <div className="hidden lg:flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
      {links.map((link, index) => (
        <div key={index} className="relative group">
          <NavLink to={link.href} className={getNavLinkClass}>
            <span>{link.section}</span>
          </NavLink>
          {/* invisible bridge div */}
          <div className="absolute left-1/2 -translate-x-1/2 w-full h-4 bg-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default DesktopNavbar;
