const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v25-band v25-band--peach v25-stats">
      <div className="v25-container">
        <h3 className="v25-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v25-container v25-stats__grid">
        {STATS.map((s, i) => (
          <div className="v25-stat" key={i}>
            <div className="v25-stat__num">{s.num}</div>
            <p className="v25-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
