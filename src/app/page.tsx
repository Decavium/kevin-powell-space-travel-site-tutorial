import LargeButton from "./ui/large-button";

export default function Home() {
  return (
    <main className="home">
      <div className="grid-container grid-container--home">
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
      </div>
    </main>
  );
}
