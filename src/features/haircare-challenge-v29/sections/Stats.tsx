const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v29-band v29-band--peach v29-stats">
      <div className="v29-container">
        <h3 className="v29-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v29-container v29-stats__grid">
        {STATS.map((s, i) => (
          <div className="v29-stat" key={i}>
            <div className="v29-stat__num">{s.num}</div>
            <p className="v29-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
