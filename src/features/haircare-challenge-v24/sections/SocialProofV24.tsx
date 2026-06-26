const AVATARS = [
  "hero-avatar-11.webp", "hero-avatar-13.webp", "hero-avatar-14.webp", "hero-avatar-15.webp", "hero-avatar-16.webp",
  "hero-avatar-17.webp", "hero-avatar-18.webp", "hero-avatar-19.webp", "hero-avatar-20.webp", "profile-4.webp",
];

function avatarUrl(file: string, w = 96) {
  return `https://pub.hairqare.co/cdn-cgi/image/width=${w},quality=80,format=auto/glow/${file}`;
}

export function SocialProofV24() {
  return (
    <section className="v24-band v24-band--peach v24-sp22">
      <div className="v24-container v24-sp22__inner">
        <div className="v24-sp22__avatars" aria-hidden="true">
          {AVATARS.map((f) => (
            <img
              key={f}
              src={avatarUrl(f)}
              srcSet={`${avatarUrl(f, 96)} 1x, ${avatarUrl(f, 192)} 2x`}
              width={48}
              height={48}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
          <span className="v24-sp22__plus">+</span>
        </div>

        <h2 className="v24-sp22__h">
          <span className="v24-accent">250,000+</span> <span className="v24-accent">Women</span>
        </h2>
        <p className="v24-sp22__sub">have taken the challenge</p>

        <div className="v24-sp22__stats">
          <div className="v24-sp22__stat">
            <div className="v24-sp22__num">92%</div>
            <p className="v24-sp22__cap">saw results within 14 days</p>
          </div>
          <div className="v24-sp22__divider" aria-hidden="true" />
          <div className="v24-sp22__stat">
            <div className="v24-sp22__num">86%</div>
            <p className="v24-sp22__cap">called it life-changing</p>
          </div>
        </div>

        <a
          className="v24-sp22__tp-link"
          href="https://www.trustpilot.com/review/hairqare.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="v24-sp22__tp">
            <div className="v24-sp22__tp-row">
              <span className="v24-sp22__tp-name">
                <span className="v24-sp22__tp-dot" aria-hidden="true">★</span> Trustpilot
              </span>
              <span className="v24-sp22__tp-stars" aria-label="4.8 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span className="v24-sp22__tp-tile" key={i}>★</span>
                ))}
              </span>
            </div>
            <p className="v24-sp22__tp-meta">4.8/5 · 1,400+ reviews</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default SocialProofV24;