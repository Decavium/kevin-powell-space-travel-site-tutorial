import Logo from "./logo";
import NavLinks from "./nav-links";
import Image, { StaticImageData } from "next/image";
import IconClose from '/public/images/shared/icon-close.svg';
import IconHamburgur from '/public/images/shared/icon-hamburger.svg';

export default function Nav() {

    return (
        <>
            <header className="primary-header flex">
                <Logo />
                <NavToggle />
                <NavLinks links={[
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

export function NavToggle() {
    const closed = true;

    return (
        <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
        >
            <span className="sr-only">Menu</span>
            {closed && (
                <NavIcon
                    src={IconHamburgur}
                    alt={"The nav button icon. It shows a hamburgur icon."}
                    width={24}
                    height={21}
                />
            )}
            {!closed && (
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
            className={`${className}`}
        />
    )
}
