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
  const [muted, setMuted] = useState(!!autoplay); // starts muted when autoplaying
  const [pillVisible, setPillVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setPillVisible(false), 4000);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    setPillVisible(true);
    if (!next) {
      // unmuted → make sure it's playing, then auto-fade the pill
      v.play().catch(() => {});
      scheduleHide();
    } else if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
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
        const v = videoRef.current;
        if (HlsLib.isSupported()) {
          const hls = new HlsLib({
            startLevel: -1,
            capLevelToPlayerSize: true,
            // Retry transient cold-load failures instead of giving up.
            manifestLoadingMaxRetry: 6,
            manifestLoadingRetryDelay: 500,
            levelLoadingMaxRetry: 6,
            fragLoadingMaxRetry: 6,
          });
          hlsInstance = hls;
          hls.on(HlsLib.Events.MANIFEST_PARSED, () => {
            if (autoplay) v.play().catch(() => {});
          });
          // Self-heal fatal errors so a single cold-load hiccup doesn't leave
          // the player permanently broken (the "fails on first load, works on
          // reload" symptom).
          hls.on(HlsLib.Events.ERROR, (_evt, data) => {
            if (!data.fatal) return;
            if (data.type === HlsLib.ErrorTypes.NETWORK_ERROR) {
              hls.startLoad();
            } else if (data.type === HlsLib.ErrorTypes.MEDIA_ERROR) {
              hls.recoverMediaError();
            } else {
              hls.destroy();
            }
          });
          hls.loadSource(src);
          hls.attachMedia(v);
        } else if (v.canPlayType("application/vnd.apple.mpegurl")) {
          v.src = src;
          if (autoplay) v.play().catch(() => {});
        }
      });
    }

    return () => {
      cancelled = true;
      if (hlsInstance) hlsInstance.destroy();
    };
  }, [active, src, autoplay]);

  // Autoplay (muted) when in view, pause when out. Once the user has taken
  // control (toggled mute), preserve their mute choice across scroll pauses.
  useEffect(() => {
    if (!active || !autoplay) return;
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [active, autoplay]);

  useEffect(() => () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

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
      onMouseEnter={() => setPillVisible(true)}
      onMouseLeave={() => { if (!muted) scheduleHide(); }}
    >
      <video
        ref={videoRef}
        poster={poster}
        preload="none"
        playsInline
        muted={muted}
        onClick={toggleMute}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          cursor: "pointer",
        }}
      />
      {autoplay && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          aria-pressed={!muted}
          aria-label={muted ? "Unmute video" : "Mute video"}
          style={{
            position: "absolute",
            right: 10,
            bottom: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            borderRadius: 999,
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            cursor: "pointer",
            opacity: pillVisible ? 1 : 0,
            pointerEvents: pillVisible ? "auto" : "none",
            transition: "opacity 250ms ease",
          }}
        >
          <span aria-hidden="true">{muted ? "🔊" : "🔇"}</span>
          <span>{muted ? "Tap to unmute" : "Tap to mute"}</span>
        </button>
      )}
    </div>
  );
}
