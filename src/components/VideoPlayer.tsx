import { useEffect, useRef, useState } from "react";
import type Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  /** When true, the video plays (muted) once scrolled into view. */
  autoplay?: boolean;
  aspectRatio?: string;
}

/**
 * Lazy HLS video player.
 * - `hls.js` is dynamically imported only when the player nears the viewport,
 *   so it stays out of the initial bundle and nothing buffers on page load.
 * - `preload="none"` + a poster image means the card shows instantly.
 * - With `autoplay`, the video starts (muted) when it enters the viewport and
 *   pauses when it leaves.
 */
export default function VideoPlayer({
  src,
  poster,
  autoplay,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false); // has entered the viewport at least once
  const [interacted, setInteracted] = useState(false); // user tapped → show native controls

  // First tap pauses the (muted, autoplaying) video and reveals native controls.
  const handleTap = () => {
    if (interacted) return;
    setInteracted(true);
    videoRef.current?.pause();
  };

  // Activate (mount HLS) when the player nears the viewport.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Once active, attach the source (native HLS or lazy hls.js).
  useEffect(() => {
    if (!active) return;
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;
    let cancelled = false;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      if (autoplay) video.play().catch(() => {});
    } else {
      import("hls.js").then(({ default: HlsLib }) => {
        if (cancelled || !videoRef.current) return;
        if (HlsLib.isSupported()) {
          hlsInstance = new HlsLib({ startLevel: -1, capLevelToPlayerSize: true });
          hlsInstance.loadSource(src);
          hlsInstance.attachMedia(videoRef.current);
          if (autoplay) videoRef.current.play().catch(() => {});
        }
      });
    }

    return () => {
      cancelled = true;
      if (hlsInstance) hlsInstance.destroy();
    };
  }, [active, src, autoplay]);

  // Autoplay (muted) when in view, pause when out. Once the user has taken
  // control (tapped to pause), never auto-resume — only keep pausing off-screen.
  useEffect(() => {
    if (!active || !autoplay) return;
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!interacted) video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [active, autoplay, interacted]);

  return (
    <div
      ref={wrapRef}
      className="rounded-xl"
      style={{
        aspectRatio,
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <video
        ref={videoRef}
        poster={poster}
        preload="none"
        playsInline
        muted={autoplay}
        controls={interacted}
        onClick={handleTap}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          cursor: interacted ? "default" : "pointer",
        }}
      />
    </div>
  );
}
