import { Marquee } from "../primitives";

export function AnnouncementBar() {
  return (
    <div className="v22-announce">
      <Marquee
        variant="bar"
        items={[
          "JOIN 250,000+ WOMEN",
          "RESULTS OR YOUR MONEY BACK",
          "NO PRODUCTS TO BUY",
          "149 COUNTRIES",
        ]}
      />
    </div>
  );
}