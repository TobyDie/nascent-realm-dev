const STATS = [
  { num: "__%", caption: "Noticed shinier, healthier-feeling hair during the challenge" },
  { num: "__%", caption: "Felt more confident about their hair" },
  { num: "__%", caption: "Said it fit easily into their daily routine" },
];

export function Stats() {
  return (
    <section className="v24-band v24-band--peach v24-stats">
      <div className="v24-container">
        <h3 className="v24-stats__title">Results from the 14-Day Challenge</h3>
      </div>
      <div className="v24-container v24-stats__grid">
        {STATS.map((s, i) => (
          <div className="v24-stat" key={i}>
            <div className="v24-stat__num">{s.num}</div>
            <p className="v24-stat__cap">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
