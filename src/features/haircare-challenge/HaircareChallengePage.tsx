import "./haircare-challenge.css";
import { AgeStripe } from "./sections/AgeStripe";
import { Hero } from "./sections/Hero";

function scrollToStart() {
  const el = document.getElementById("start");
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
}

export function HaircareChallengePage() {
  return (
    <div className="hq-sp rooted">
      <AgeStripe />
      <Hero onCta={scrollToStart} />
    </div>
  );
}

export default HaircareChallengePage;