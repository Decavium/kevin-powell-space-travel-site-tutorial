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
        <main className="grid-container-xxxx grid-container--destination">
            <BackgroundImage
                alt="The background image."
                desktop={BackgroundDestinationDesktop}
                mobile={BackgroundDestinationMobile}
                tablet={BackgroundDestinationTablet}
            />
            <div id="main" className="">
                <h2 className="numbered-title"><span>01</span>pick your destination</h2>
                <DestinationTabs />
            </div>
        </main>
    );
}

