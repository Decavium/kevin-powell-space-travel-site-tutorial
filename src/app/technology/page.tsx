import type { Metadata } from "next";
import BackgroundImage from "../ui/background-image";
import BackgroundTechnologyMobile from '/public/images/technology/background-technology-mobile.jpg';
import BackgroundTechnologyDesktop from '/public/images/technology/background-technology-desktop.jpg';
import BackgroundTechnologyTablet from '/public/images/technology/background-technology-tablet.jpg';

import TechnologyNumbers from "../ui/technology/technology-numbers";

export const metadata: Metadata = {
    title: 'Technology',
    description: "A website made to practice CSS and NextJS",
};

export default function Technology() {
    return (
        <>
            <main id="main" className="grid-container grid-container--technology flow">
                <h1 className="numbered-title"><span aria-hidden="true">03</span>space launch 101</h1>
                <TechnologyNumbers />
            </main>
            <BackgroundImage
                alt="The background image. It shows a timelapse shot of the night sky."
                desktop={BackgroundTechnologyDesktop}
                mobile={BackgroundTechnologyMobile}
                tablet={BackgroundTechnologyTablet}
            />
        </>
    );
}