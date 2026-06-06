import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  aspectRatio?: string;
}

export default function VideoPlayer({
  src,
  poster,
  autoplay,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hlsInstance = new Hls({
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(video);
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [src]);

  return (
    <div
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
        autoPlay={autoplay}
        playsInline
        muted={autoplay}
        controls
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
