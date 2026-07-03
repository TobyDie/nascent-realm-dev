const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v27-band v27-band--peach v27-stats">
      <div className="v27-container">
        <h3 className="v27-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v27-container v27-stats__grid">
        {STATS.map((s, i) => (
          <div className="v27-stat" key={i}>
            <div className="v27-stat__num">{s.num}</div>
            <p className="v27-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
