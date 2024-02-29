import Logo from "./logo";
import NavLinks from "./nav-links";

export default function Nav() {

    return (
        <>
            <header className="primary-header flex">
                <Logo />
                <button
                    className="mobile-nav-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                ><span className="sr-only">Menu</span></button>
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