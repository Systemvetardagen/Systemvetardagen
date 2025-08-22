import { FC } from 'react';
import { Link } from './Navbar';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

interface DesktopNavbarProps {
    links: Link[];
    getNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
    scrollWithOffset: (el: HTMLElement) => void;
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({ links, getNavLinkClass, scrollWithOffset }) => {
    
    return (
        <div className="hidden lg:flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
            {links.map((link, index) => (
                <div key={index} className="relative group">
                    <NavLink to={link.headHref} className={getNavLinkClass}>
                        <span className="hover:text-link">
                            {link.headLabel}
                        </span>
                    </NavLink>
                    {/* invisible bridge div */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-full h-4 bg-transparent"></div>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out flex flex-col gap-2 p-2 bg-white absolute left-1/2 -translate-x-1/2 mt-4 rounded-md shadow-lg min-w-max z-50">
                        {link.childLinks.map((childLink, index) =>
                            childLink.hashLink ? (
                                <NavHashLink
                                    to={childLink.childHref.concat(
                                        '#' + childLink.hashLink
                                    )}
                                    key={index}
                                    smooth
                                    scroll={scrollWithOffset}
                                    className="hover:text-link whitespace-nowrap px-2 py-1 rounded"
                                >
                                    {childLink.childLabel}
                                </NavHashLink>
                            ) : (
                                <NavLink
                                    key={index}
                                    to={childLink.childHref}
                                    className="hover:text-link whitespace-nowrap px-2 py-1 rounded"
                                >
                                    {childLink.childLabel}
                                </NavLink>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesktopNavbar;
