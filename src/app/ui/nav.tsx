import NavLinks from "./nav-links";

export default function Nav() {

    return (
        <>
            <header className="primary-header">
                <div>
                    
                </div>
                <NavLinks links={[
                    { name: "Home", href: "/" },
                    { name: "Destination", href: "/destination" },
                    { name: "Crew", href: "/crew" },
                    { name: "Technology", href: "/technology" },
                    { name: "Design System", href: "/design-system" },
                ]}></NavLinks>
            </header>
        </>
    )
}