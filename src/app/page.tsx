import BackgroundImage from "./ui/background-image";
import LargeButton from "./ui/large-button";
import BackgroundHomeMobile from '/public/images/home/background-home-mobile.jpg';
import BackgroundHomeDesktop from '/public/images/home/background-home-desktop.jpg';
import BackgroundHomeTablet from '/public/images/home/background-home-tablet.jpg';

export default function Home() {
  return (
    <>
      <main id="main" className="grid-container grid-container--home flow">
        <div>
          <h1 className="text-accent fs-500 uppercase letter-spacing-1">So, you want to travel to
            <span className="fs-900 text-white d-block" style={{ fontFamily: "--ff-serif" }}>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <LargeButton>Explore</LargeButton>
        </div>
      </main>
      <BackgroundImage
              alt="The background image. It shows Earth from low orbit."
              desktop={BackgroundHomeDesktop}
              mobile={BackgroundHomeMobile}
              tablet={BackgroundHomeTablet}
      />
    </>
  );
}
