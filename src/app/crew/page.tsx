import type { Metadata } from "next";
import BackgroundImage from "../ui/background-image";
import BackgroundCrewMobile from '/public/images/crew/background-crew-mobile.jpg';
import BackgroundCrewDesktop from '/public/images/crew/background-crew-desktop.jpg';
import BackgroundCrewTablet from '/public/images/crew/background-crew-tablet.jpg';

import CrewDots from "../ui/crew/crew-dots";

export const metadata: Metadata = {
    title: 'Crew',
    description: "A website made to practice CSS and NextJS",
};

export default function Crew() {
    return (
        <>
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span>meet your crew</h1>
                <CrewDots />
            </main>
            <BackgroundImage
                alt="The background image. It shows the earth at night."
                desktop={BackgroundCrewDesktop}
                mobile={BackgroundCrewMobile}
                tablet={BackgroundCrewTablet}
            />
        </>
    );
}