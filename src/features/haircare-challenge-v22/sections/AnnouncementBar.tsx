import { Marquee } from "../primitives";

export function AnnouncementBar() {
  return (
    <div className="v22-announce">
      <Marquee
        variant="bar"
        items={[
          "HEALTHIER HAIR GUARANTEED",
          "14-DAY HAIR KNOWLEDGE CHALLENGE",
          "HEALTHIER HAIR GUARANTEED",
          "14-DAY HAIR KNOWLEDGE CHALLENGE",
        ]}
      />
    </div>
  );
}