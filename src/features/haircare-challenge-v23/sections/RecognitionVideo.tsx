import { Reveal, EditableImage } from "../primitives";

export function RecognitionVideo() {
  return (
    <section className="bg-video-section">
      <div className="wrap-wide" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Reveal delay={80}>
          <div className="vert-video-card">
            <div className="vert-video-thumb">
              <EditableImage
                h={560}
                label="Vertical testimonial video placeholder - woman speaking to camera, natural home setting, warm lighting. 9:16 phone video style."
                radius={20}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="vert-video-play-wrap">
                  <div className="vert-video-play-circle">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                <span className="vert-video-duration">2:14</span>
              </EditableImage>
            </div>

            <div className="vert-video-body">
              <div className="vert-video-meta">
                <div className="vert-video-avatar">H</div>
                <div>
                  <div className="vert-video-name">Hannah, 39 🇬🇧</div>
                  <div className="vert-video-context">Mum of 2 · crown thinning at 37</div>
                </div>
              </div>
              <p className="vert-video-quote">“I assumed this was just what happens after babies. I was so wrong.”</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}