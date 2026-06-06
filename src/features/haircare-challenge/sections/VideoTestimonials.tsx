import {
  Anno,
  Carousel,
  Reveal,
  StarRow,
  useIsMobile,
} from "../primitives";

export function VideoTestimonials() {
  const isMobile = useIsMobile();

  const cards = [
    <div key={0} className="video-card">
      <div className="video-thumb">
        <div className="ph" style={{ height: "100%", padding: 0 }}>
          <span className="ph-label" style={{ fontSize: 11 }}>
            Hannah, 39 — phone video, home setting. Speaks directly to camera. Hair visible. Natural lighting.
          </span>
        </div>
        <div className="video-play-wrap">
          <div className="video-play-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l9 5-9 5V5z" fill="var(--orange-600)" />
            </svg>
          </div>
        </div>
        <span className="video-duration">2:14</span>
      </div>
      <div className="video-body">
        <div className="video-meta">
          <div className="video-avatar">H</div>
          <div>
            <div className="video-name">Hannah, 39 🇬🇧</div>
            <div className="video-context">Mum of 2 · crown thinning at 37</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“I assumed this was just what happens after babies. I was so wrong.”</p>
      </div>
    </div>,
    <div key={1} className="video-card">
      <div className="video-thumb">
        <div className="ph cool" style={{ height: "100%", padding: 0 }}>
          <span className="ph-label" style={{ fontSize: 11 }}>
            Renee, 41 — filmed at home, emotional and genuine. Professional woman in her 40s.
          </span>
        </div>
        <div className="video-play-wrap">
          <div className="video-play-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l9 5-9 5V5z" fill="var(--orange-600)" />
            </svg>
          </div>
        </div>
        <span className="video-duration">3:02</span>
      </div>
      <div className="video-body">
        <div className="video-meta">
          <div className="video-avatar">R</div>
          <div>
            <div className="video-name">Renee, 41 🇺🇸</div>
            <div className="video-context">Corporate role · widening part at 38</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“The cortisol explanation was the first time anyone connected my job to my hair.”</p>
      </div>
    </div>,
    <div key={2} className="video-card">
      <div className="video-thumb">
        <div className="ph" style={{ height: "100%", padding: 0 }}>
          <span className="ph-label" style={{ fontSize: 11 }}>
            Carol, 43 — outdoor natural light, relaxed and warm. Real and unretouched.
          </span>
        </div>
        <div className="video-play-wrap">
          <div className="video-play-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l9 5-9 5V5z" fill="var(--orange-600)" />
            </svg>
          </div>
        </div>
        <span className="video-duration">1:48</span>
      </div>
      <div className="video-body">
        <div className="video-meta">
          <div className="video-avatar">C</div>
          <div>
            <div className="video-name">Carol, 43 🇨🇦</div>
            <div className="video-context">Perimenopausal · diffuse thinning</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“I’m 43, in perimenopause, and I finally have a routine built for my body now.”</p>
      </div>
    </div>,
  ];

  return (
    <section className="bg-white" style={{ paddingTop: 52, paddingBottom: 52 }}>
      <Anno>Added — Video testimonials (right after hero)</Anno>
      <div className="wrap-wide">
        {isMobile ? (
          <Carousel peek={0.88} ariaLabel="video testimonials">
            {cards}
          </Carousel>
        ) : (
          <Reveal>
            <div className="video-testi-grid">{cards}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export default VideoTestimonials;