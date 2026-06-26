import { Marquee } from "../primitives";

export function AnnouncementBar() {
  return (
    <div className="v24-announce">
      <Marquee
        variant="bar"
        items={[
          "STOP SEARCHING FOR THE PERFECT SHAMPOO",
          "250,000+ WOMEN",
          "149 COUNTRIES",
          "YOUR HAIR NEEDS TWO, NOT ONE",
          "STOP SEARCHING FOR THE PERFECT SHAMPOO",
          "250,000+ WOMEN",
          "149 COUNTRIES",
          "YOUR HAIR NEEDS TWO, NOT ONE",
        ]}
      />
    </div>
  );
}