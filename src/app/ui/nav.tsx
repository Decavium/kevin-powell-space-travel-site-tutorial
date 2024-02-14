import NavLinks from "./nav-links";

export default function Nav() {

    return (
        <>
            <header className="primary-header">
                <div></div>
                <NavLinks links={[
                    { name: "Active", href: "/" },
                    { name: "Hovered", href: "#" },
                    { name: "Idle", href: "#" }
                ]}></NavLinks>
            </header>
        </>
    )
}