import { useEffect, useRef, useState } from "react";

type Testi = {
  name: string;
  initials: string;
  context: string;
  text: string;
  image: string;
};

const TESTIS: Testi[] = [
  { name: "Kim", initials: "K", context: "Shedding every wash · hair loss", text: "I think I lost maybe half of the amount of hair I normally lose every time I wash.", image: "ba-1.webp" },
  { name: "Eline Mulders", initials: "E", context: "Dry hair · length plateau", text: "My hair feels softer, it's clean… I like my hair, it feels good, and cutting off the split ends feels amazing honestly, it helps also with less tangling.", image: "https://pub.hairqare.co/SP21/Long-Hair-Before-After-1.webp" },
  { name: "Andrea Burns", initials: "A", context: "Hair loss · dry, itchy scalp", text: "By the end of 14 days, I was losing maybe a palm size amount when I'd wash my hair, about a third of what I used to lose.", image: "ba-2.webp" },
  { name: "Elena", initials: "E", context: "General hair health", text: "My hair is soft and it truly is good. It's a good cleansing shampoo.", image: "https://pub.hairqare.co/SP21/ong-Hair-Before-After-2.webp" },
  { name: "Anna Koval", initials: "A", context: "Thinning · hair felt lifeless", text: "My hair definitely looks so much better. Feels softer. There's some life added back into it.", image: "ba-3.webp" },
  { name: "Alina Nuno", initials: "A", context: "Shine restoration", text: "My before and after photos were a wake up call! I could see how much length my hair has now compared to when I first joined. It is so much smoother and softer, lighter, fluffier! I am loving the way my hair feels, seeing the marked change reinforces that the work is working!", image: "https://pub.hairqare.co/SP21/Long-hair-Damage-and-Shine-Before-After.webp" },
  { name: "Yer Yang", initials: "Y", context: "New mother · postpartum hair loss", text: "My hair feels lighter, not as oily, not as weighed down. There's more volume and it just looks so much better.", image: "ba-5.webp" },
  { name: "Brianna Reetz", initials: "B", context: "Split ends · dull, brittle hair", text: "I kept eating what I should be, and just from that, my hair has already changed. It's already becoming a lot thicker, it's already have a bit more shine to it. I trimmed the split ends, and it's already going great. Now my hair is softer and longer.", image: "https://pub.hairqare.co/SP21/Long-hair-Damage-and-Shine-Before-After-4.webp" },
  { name: "Karen Patdu", initials: "K", context: "Thinning · hair loss", text: "You can see hair growing right here in the front. Slowly but surely it's coming back. My hair feels healthier, cleaner, not so oily.", image: "ba-13.webp" },
  { name: "Haydée Fernández", initials: "H", context: "Frizz · wants shine & volume", text: "As you can see my hair is shiny, it feels super soft, it has volume.", image: "https://pub.hairqare.co/SP21/Long-hair-Damage-and-Shine-Before-After-3.webp" },
];

const BA_WIDTHS = [400, 700, 1000, 1400];

function r2img(file: string, w: number) {
  if (file.startsWith("http")) {
    const i = file.indexOf("//");
    const slash = file.indexOf("/", i + 2);
    return `${file.slice(0, slash)}/cdn-cgi/image/width=${w},quality=80,format=auto${file.slice(slash)}`;
  }
  return `https://pub.hairqare.co/cdn-cgi/image/width=${w},quality=80,format=auto/glow/${file}`;
}
function r2srcset(file: string, widths: number[]) {
  return widths.map((w) => `${r2img(file, w)} ${w}w`).join(", ");
}

function Stars({ size = 13 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, color: "#F4A93C" }} aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.95 6.18 6.8.74-5.08 4.6 1.45 6.68L12 17.3l-6.12 3.4 1.45-6.68L2.25 9.42l6.8-.74L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ t }: { t: Testi }) {
  return (
    <div className="v30-testis__card">
      <div className="v30-testis__imgwrap">
        <img
          src={r2img(t.image, 700)}
          srcSet={r2srcset(t.image, BA_WIDTHS)}
          sizes="(max-width: 860px) 86vw, 360px"
          alt={`Before and after - ${t.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="v30-testis__body">
        <p className="v30-testis__quote">"{t.text}"</p>
        <div className="v30-testis__meta">
          <div className="v30-testis__avatar" aria-hidden="true">{t.initials}</div>
          <div className="v30-testis__who">
            <div className="v30-testis__name">{t.name}</div>
            <div className="v30-testis__ctx">{t.context}</div>
          </div>
          <Stars />
        </div>
      </div>
    </div>
  );
}

function useIsMobile(bp = 720) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < bp);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [bp]);
  return m;
}

export function TestimonialsCarousel() {
  const isMobile = useIsMobile();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = track.children[0] as HTMLElement | undefined;
        if (!first) return;
        const w = first.offsetWidth + 14;
        setIdx(Math.min(TESTIS.length - 1, Math.max(0, Math.round(track.scrollLeft / w))));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    track.scrollTo({ left: i * (first.offsetWidth + 14), behavior: "smooth" });
  };

  return (
    <section className="v30-band v30-band--white v30-testis" id="results">
      <div className="v30-container">
        <h2 className="v30-h2 v30-testis__h">From women who stopped buying and started learning</h2>

        {isMobile ? (
          <>
            <div ref={trackRef} className="v30-testis__track">
              {TESTIS.map((t, i) => (
                <div key={i} className="v30-testis__slide">
                  <Card t={t} />
                </div>
              ))}
            </div>
            <div className="v30-testis__dots">
              {TESTIS.map((_, i) => (
                <button
                  key={i}
                  className={`v30-testis__dot ${i === idx ? "is-on" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="v30-testis__grid">
            {TESTIS.map((t, i) => <Card key={i} t={t} />)}
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsCarousel;