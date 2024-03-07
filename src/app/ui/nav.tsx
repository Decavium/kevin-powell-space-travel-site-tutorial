'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Logo from "./logo";
import NavLinks from "./nav-links";
import Image, { StaticImageData } from "next/image";
import IconClose from '/public/images/shared/icon-close.svg';
import IconHamburgur from '/public/images/shared/icon-hamburger.svg';

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const pathname = usePathname();

    const handleToggleClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    // Close the nav if the path changes
    useEffect(() => { setIsNavOpen(false) }, [pathname])

    return (
        <>
            <header className="primary-header flex">
                <Logo />
                <NavToggle
                    navOpen={isNavOpen}
                    handleToggleClick={handleToggleClick}
                />
                <NavLinks
                    navOpen={isNavOpen}
                    links={[
                        { name: "Home", href: "/" },
                        { name: "Destination", href: "/destination" },
                        { name: "Crew", href: "/crew" },
                        { name: "Technology", href: "/technology" },
                        { name: "Design System", href: "/design-system" },
                    ]} />
            </header>
        </>
    )
}

interface NavToggleProps {
    navOpen: boolean;
    handleToggleClick: () => void;
}

export function NavToggle({ navOpen, handleToggleClick }: NavToggleProps) {

    return (
        <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={navOpen}
            onClick={() => { handleToggleClick() }}
        >
            <span className="sr-only">Menu</span>
            {!navOpen && (
                <NavIcon
                    src={IconHamburgur}
                    alt={"The nav button icon. It shows a hamburgur icon."}
                    width={24}
                    height={21}
                />
            )}
            {navOpen && (
                <NavIcon
                    src={IconClose}
                    alt={"The nav button icon. It shows a close icon."}
                    width={20}
                    height={21}
                />
            )}
        </button>
    )
}

interface NavIconProps {
    alt: string;
    src: StaticImageData;
    width: number | `${number}`;
    height: number | `${number}`;
    className?: string;
}

export function NavIcon({
    alt, src, width, height, className
}: NavIconProps) {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={`${className} nav-icon`}
        />
    )
}
