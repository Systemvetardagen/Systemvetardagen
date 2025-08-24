import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import linkData from '../../data/links.json';

export interface Link {
    headKey: string;
    headHref: string;
    childLinks: {
        childKey: string;
        childHref: string;
        hashLink?: string;
    }[];
}

const Navbar: React.FC = () => {
    const links: Link[] = linkData as Link[];
    const [isSticky, setIsSticky] = useState<boolean>(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollWithOffset = (el: HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
        `font-semibold text-[20px] text-black relative ${
            isActive
                ? 'text-black underline underline-offset-4'
                : 'hover:text-gray-500'
        }`;

    return (
        <nav
            className={`${
                isSticky
                    ? 'fixed top-0 left-0 w-full rounded-none h-14'
                    : 'absolute top-8 w-[90vw] mx-[5vw] rounded-md'
            } flex bg-white text-black px-4 lg:py-1 z-20 items-center justify-between transition-all duration-150 shadow-md`}
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
                />
            </NavLink>

            <DesktopNavbar
                links={links}
                getNavLinkClass={getNavLinkClass}
                scrollWithOffset={scrollWithOffset}
            />

            <MobileNavbar
                links={links}
                isSticky={isSticky}
                getNavLinkClass={getNavLinkClass}
                scrollWithOffset={scrollWithOffset}
            />
            {isSticky && (
                <div className="absolute bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            )}
            <div className="hidden lg:flex">
                <LanguageSwitch />
            </div>
        </nav>
    );
};

export default Navbar;
