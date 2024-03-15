import type { Metadata } from "next";
import BackgroundImage from "../ui/background-image";
import BackgroundDestinationMobile from '/public/images/destination/background-destination-mobile.jpg';
import BackgroundDestinationTablet from '/public/images/destination/background-destination-tablet.jpg';
import BackgroundDestinationDesktop from '/public/images/destination/background-destination-desktop.jpg';

import DestinationTabs from "../ui/destination/destination-tabs";

export const metadata: Metadata = {
    title: 'Destination',
    description: "A website made to practice CSS and NextJS",
};

export default function Destination() {
    return (
        <>
            <main id="main" className="grid-container grid-container--destination flow">
                <h1 className="numbered-title"><span aria-hidden="true">01</span>pick your destination</h1>
                <DestinationTabs />
            </main>
            <BackgroundImage
                alt="The background image. It shows the void of space, littered with distant stars."
                desktop={BackgroundDestinationDesktop}
                mobile={BackgroundDestinationMobile}
                tablet={BackgroundDestinationTablet}
            />
        </>
    );
}

