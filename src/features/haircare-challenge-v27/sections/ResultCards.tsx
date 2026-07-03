import { Placeholder } from "../primitives";

const CARDS = [
  {
    name: "Day-14 graduate",
    day: "Day 14 Results",
    quote: "The hardest part was throwing out all the products I thought were good for my hair.",
    tags: ["Product Overload", "Ingredients"],
  },
  {
    name: "Tania, Australia",
    day: "Day 14 Results",
    quote: "I feel more in control of the care I offer my hair. I can't wait to further my haircare journey with my newfound knowledge.",
    tags: ["Routine", "Confidence"],
  },
  {
    name: "Sarah J., United States",
    day: "Day 14 Results",
    quote: "I wanted to learn to make my own shampoo… so I'll save a lot of money and hope to see more positive results.",
    tags: ["Premium Products", "Cost"],
  },
  {
    name: "Chloe, United States",
    day: "Day 14 Results",
    quote: "Liked getting another perspective than the products influencers are paid to promote.",
    tags: ["Influencer Advice", "Trust"],
  },
];

export function ResultCards() {
  return (
    <section className="v27-band v27-band--white v27-cards">
      <div className="v27-container v27-cards__grid">
        {CARDS.map((c, i) => (
          <article className="v27-rcard" key={i}>
            <div className="v27-rcard__media">
              <Placeholder
                w={600}
                h={600}
                label="Day 14"
                alt="Day 14 result"
                fullBleed={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="v27-rcard__body">
              <div className="v27-rcard__head">
                <strong>{c.name}</strong>
                <span className="v27-rcard__day">{c.day}</span>
              </div>
              <p className="v27-rcard__quote">"{c.quote}"</p>
              <div className="v27-rcard__concerns">
                <span className="v27-rcard__concerns-label">Key Concerns:</span>
                <div className="v27-rcard__tags">
                  {c.tags.map((t) => (
                    <span className="v27-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
