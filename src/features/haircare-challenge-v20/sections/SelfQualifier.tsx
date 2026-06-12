import { useState } from "react";
import { Anno, Button, Eyebrow, Icon, Reveal } from "../primitives";

export function SelfQualifier({ onCta }: { onCta?: () => void }) {
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (i: number) =>
    setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
  const count = checked.length;

  const btnStyle = (on: boolean): React.CSSProperties => ({
    display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: "pointer",
    background: on ? "var(--orange-50)" : "#fff",
    border: on ? "1.5px solid var(--orange-500)" : "1px solid var(--line)",
    borderRadius: 14, padding: "16px 18px", fontFamily: "var(--font-sans)",
    transition: "background var(--dur) var(--ease), border-color var(--dur) var(--ease)",
  });
  const boxStyle = (on: boolean): React.CSSProperties => ({
    flex: "none", width: 26, height: 26, borderRadius: 8,
    border: on ? "none" : "2px solid var(--line)",
    background: on ? "var(--orange-600)" : "transparent",
    display: "flex", alignItems: "center", justifyContent: "center",
  });

  const on0 = checked.includes(0);
  const on1 = checked.includes(1);
  const on2 = checked.includes(2);
  const on3 = checked.includes(3);
  const on4 = checked.includes(4);
  const on5 = checked.includes(5);
  const on6 = checked.includes(6);

  return (
    <section className="bg-white">
      <Anno>Added - self-qualifier</Anno>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 32 }}>
          <Eyebrow>Is this you?</Eyebrow>
          <h2 className="h2" style={{ marginTop: 12 }}>Tick every one that rings true.</h2>
          <p className="lead" style={{ marginTop: 12, fontSize: 17 }}>
            If you tick even three, this was built for you.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={() => toggle(0)} style={btnStyle(on0)}>
              <span style={boxStyle(on0)}>{on0 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>My hair seems to grow to a certain length and then just stops.</span>
            </button>
            <button onClick={() => toggle(1)} style={btnStyle(on1)}>
              <span style={boxStyle(on1)}>{on1 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>I've spent more on hair products this year than I want to admit.</span>
            </button>
            <button onClick={() => toggle(2)} style={btnStyle(on2)}>
              <span style={boxStyle(on2)}>{on2 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>I bleach, colour, or heat-style my hair and I'm not stopping.</span>
            </button>
            <button onClick={() => toggle(3)} style={btnStyle(on3)}>
              <span style={boxStyle(on3)}>{on3 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>My ends are wrecked and I'm tired of trimming the length off.</span>
            </button>
            <button onClick={() => toggle(4)} style={btnStyle(on4)}>
              <span style={boxStyle(on4)}>{on4 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>I see other girls' hair online and assume they were just born with it.</span>
            </button>
            <button onClick={() => toggle(5)} style={btnStyle(on5)}>
              <span style={boxStyle(on5)}>{on5 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>I had a baby and my hair hasn't come back yet.</span>
            </button>
            <button onClick={() => toggle(6)} style={btnStyle(on6)}>
              <span style={boxStyle(on6)}>{on6 && <Icon name="check" size={16} color="#fff" stroke={3} />}</span>
              <span style={{ fontSize: 16.5, color: "var(--ink)" }}>I'm done buying my way out of this and want to actually understand it.</span>
            </button>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 26, textAlign: "center" }}>
          <div style={{ minHeight: 28, marginBottom: 18, fontSize: 16.5, color: "var(--ink-soft)", transition: "opacity .3s" }}>
            {count === 0 ? (
              "Tick the ones that ring true above."
            ) : (
              <span>You ticked <strong style={{ color: "var(--orange-700)" }}>{count}</strong> - you're exactly who the challenge was built for. Join <strong>250,000+ women in their 20s and 30s</strong> who started here.</span>
            )}
          </div>
          <Button id="cta-self-qualifier" onClick={onCta} icon="arrow-right">Take charge of my hair</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default SelfQualifier;