import type { Metadata } from "next";
import BackgroundImage from "../ui/background-image";
import BackgroundHomeMobile from '/public/images/home/background-home-mobile.jpg';
import BackgroundHomeDesktop from '/public/images/home/background-home-desktop.jpg';
import BackgroundHomeTablet from '/public/images/home/background-home-tablet.jpg';
import Tabs from "../ui/tabs";
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
                desktop={BackgroundHomeDesktop}
                mobile={BackgroundHomeMobile}
                tablet={BackgroundHomeTablet}
            />
            <div id="main" className="">
                <h2 className="numbered-title"><span>01</span>pick your destination</h2>
                <Tabs tabs={[
                    { name: "Moon" },
                    { name: "Mars" },
                    { name: "Europa" },
                ]} />
                <DestinationTabs />
            </div>
        </main>
    );
}

