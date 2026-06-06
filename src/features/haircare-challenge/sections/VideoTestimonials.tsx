import VideoPlayer from "@/components/VideoPlayer";
import {
  Anno,
  Carousel,
  Reveal,
  StarRow,
  useIsMobile,
} from "../primitives";
import { r2img } from "../img";

export function VideoTestimonials() {
  const isMobile = useIsMobile();

  const cards = [
    <div key={0} className="video-card">
      <VideoPlayer
        src="https://videos.hairqare.co/from-hopeless-to-hair-happy-in-14-days-e-1ebc67cf/master.m3u8"
        poster={r2img("posters/video-hannah.webp", 700)}
        aspectRatio="1080/1920"
        autoplay
      />
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
      <VideoPlayer
        src="https://videos.hairqare.co/my-hair-finally-curled-again-14-days-tha-caba2635/master.m3u8"
        poster={r2img("posters/video-renee.webp", 700)}
        aspectRatio="1080/1920"
        autoplay
      />
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
      <VideoPlayer
        src="https://videos.hairqare.co/danielle-s-14-day-haircare-challenge-rep-ddc1023a/master.m3u8"
        poster={r2img("posters/video-carol.webp", 700)}
        aspectRatio="1080/1440"
        autoplay
      />
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