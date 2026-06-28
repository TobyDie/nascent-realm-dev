const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v26-band v26-band--peach v26-stats">
      <div className="v26-container">
        <h3 className="v26-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v26-container v26-stats__grid">
        {STATS.map((s, i) => (
          <div className="v26-stat" key={i}>
            <div className="v26-stat__num">{s.num}</div>
            <p className="v26-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
