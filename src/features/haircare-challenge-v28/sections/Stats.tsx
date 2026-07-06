const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v28-band v28-band--peach v28-stats">
      <div className="v28-container">
        <h3 className="v28-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v28-container v28-stats__grid">
        {STATS.map((s, i) => (
          <div className="v28-stat" key={i}>
            <div className="v28-stat__num">{s.num}</div>
            <p className="v28-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
