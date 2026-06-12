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
          <div className="video-avatar">E</div>
          <div>
            <div className="video-name">Evelyn, 37</div>
            <div className="video-context">10-Year Hair Loss Survivor · Excessive Hair Shedding</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“How I overcame 10 years of excessive hair loss in just 14 days.”</p>
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
          <div className="video-avatar">J</div>
          <div>
            <div className="video-name">Jacqueline, 35</div>
            <div className="video-context">Curly Hair Community Member · Dry, Lifeless Curls</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“My hair improved SOO dramatically in 14 days my friends had to join the Challenge too!”</p>
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
          <div className="video-avatar">D</div>
          <div>
            <div className="video-name">Danielle, 32</div>
            <div className="video-context">Natural Curly Hair Enthusiast · Expensive Product Dependence</div>
          </div>
          <StarRow size={13} style={{ marginLeft: "auto", alignSelf: "flex-start" }} />
        </div>
        <p className="video-quote">“How I found a more affordable (and more effective) way to care for my curls after a decade of overspending.”</p>
      </div>
    </div>,
  ];

  return (
    <section className="bg-white" style={{ paddingTop: 52, paddingBottom: 52 }}>
      <Anno>Added - Video testimonials (right after hero)</Anno>
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