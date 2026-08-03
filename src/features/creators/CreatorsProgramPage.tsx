import "./creators.css";

import {
  Faq,
  FinalCta,
  Hero,
  HowItWorks,
  Mission,
  Perks,
} from "./sections/Sections";
import { JourneySection } from "./sections/JourneySection";

/** Surface A — the program page, for people who haven't applied yet. */
export function CreatorsProgramPage() {
  return (
    <main className="hq-creators">
      <Hero />
      <Mission />
      <Perks />
      <JourneySection />
      <HowItWorks />
      <Faq />
      <FinalCta />
    </main>
  );
}
