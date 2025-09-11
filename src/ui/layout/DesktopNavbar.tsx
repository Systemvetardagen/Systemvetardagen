import { FC } from "react";
import { Link } from "./Navbar";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { scrollWithOffset } from "@/lib/utilities/ScrollToTop";

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
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out flex flex-col gap-2 p-2 bg-white absolute left-1/2 -translate-x-1/2 mt-4 rounded-md shadow-lg min-w-max z-50">
            {link.childLinks.map((childLink, index) => (
              <NavHashLink
                to={childLink.href}
                key={index}
                smooth
                scroll={scrollWithOffset}
                className="hover:text-link whitespace-nowrap px-2 py-1 rounded"
              >
                {childLink.name}
              </NavHashLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopNavbar;
