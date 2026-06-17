import { Placeholder } from "../primitives";

const CARDS = [
  {
    name: "Day-14 graduate",
    quote: "The hardest part was throwing out all the products I thought were good for my hair.",
    tags: ["Product Overload", "Ingredients"],
  },
  {
    name: "Tania, Australia",
    quote: "I feel more in control of the care I offer my hair. I can't wait to further my haircare journey with my newfound knowledge.",
    tags: ["Routine", "Confidence"],
  },
  {
    name: "Sarah J., United States",
    quote: "I wanted to learn to make my own shampoo… so I'll save a lot of money and hope to see more positive results.",
    tags: ["Premium Products", "Cost"],
  },
  {
    name: "Chloe, United States",
    quote: "Liked getting another perspective than the products influencers are paid to promote.",
    tags: ["Influencer Advice", "Trust"],
  },
];

export function ResultCards() {
  return (
    <section className="v22-section v22-cards">
      <div className="v22-container v22-cards__grid">
        {CARDS.map((c, i) => (
          <article className="v22-card" key={i}>
            <Placeholder
              w={1080}
              h={1080}
              label="Day 14 Result"
              alt="Day 14 result"
              fullBleed={false}
              style={{ width: "100%", height: "auto", borderRadius: "18px 18px 0 0", display: "block" }}
            />
            <div className="v22-card__body">
              <div className="v22-card__head">
                <strong>{c.name}</strong>
                <span className="v22-card__label">Day 14 Results</span>
              </div>
              <p className="v22-card__quote">"{c.quote}"</p>
              <div className="v22-card__tags">
                {c.tags.map((t) => (
                  <span className="v22-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
