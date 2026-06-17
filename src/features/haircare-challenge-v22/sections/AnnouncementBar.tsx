import { Marquee } from "../primitives";

export function AnnouncementBar() {
  return (
    <div className="v22-announce">
      <Marquee
        variant="bar"
        items={[
          "HEALTHIER HAIR GUARANTEED",
          "FREE 14-DAY CHALLENGE",
          "HEALTHIER HAIR GUARANTEED",
          "FREE 14-DAY CHALLENGE",
        ]}
      />
    </div>
  );
}