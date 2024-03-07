import type { Metadata } from "next";
import BackgroundImage from "../ui/background-image";
import BackgroundHomeMobile from '/public/images/home/background-home-mobile.jpg';
import BackgroundHomeDesktop from '/public/images/home/background-home-desktop.jpg';
import BackgroundHomeTablet from '/public/images/home/background-home-tablet.jpg';

export const metadata: Metadata = {
    title: 'Technology',
    description: "A website made to practice CSS and NextJS",
};

export default function Crew() {
    return (
        <main className="">
            <BackgroundImage
                alt="The background image."
                desktop={BackgroundHomeDesktop}
                mobile={BackgroundHomeMobile}
                tablet={BackgroundHomeTablet}
            />
            <div id="main" className="">

            </div>
        </main>
    );
}