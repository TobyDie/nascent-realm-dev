const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v22-band v22-band--peach v22-stats">
      <div className="v22-container">
        <h3 className="v22-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v22-container v22-stats__grid">
        {STATS.map((s, i) => (
          <div className="v22-stat" key={i}>
            <div className="v22-stat__num">{s.num}</div>
            <p className="v22-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
