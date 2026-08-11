const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v31-band v31-band--peach v31-stats">
      <div className="v31-container">
        <h3 className="v31-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v31-container v31-stats__grid">
        {STATS.map((s, i) => (
          <div className="v31-stat" key={i}>
            <div className="v31-stat__num">{s.num}</div>
            <p className="v31-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
