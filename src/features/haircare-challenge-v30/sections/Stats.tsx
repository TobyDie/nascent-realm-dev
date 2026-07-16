const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v30-band v30-band--peach v30-stats">
      <div className="v30-container">
        <h3 className="v30-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v30-container v30-stats__grid">
        {STATS.map((s, i) => (
          <div className="v30-stat" key={i}>
            <div className="v30-stat__num">{s.num}</div>
            <p className="v30-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
