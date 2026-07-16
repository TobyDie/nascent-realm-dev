import { Marquee } from "../primitives";

export function AnnouncementBar() {
  return (
    <div className="v30-announce">
      <Marquee
        variant="bar"
        items={[
          "250,000+ WOMEN COMMUNITY",
          "149 COUNTRIES",
          "NO PRODUCTS TO BUY",
          "VISIBLE RESULTS IN 14 DAYS",
          "250,000+ WOMEN COMMUNITY",
          "149 COUNTRIES",
          "NO PRODUCTS TO BUY",
          "VISIBLE RESULTS IN 14 DAYS",
        ]}
      />
    </div>
  );
}