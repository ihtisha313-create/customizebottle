"use client";

import { useEffect, useRef } from "react";

const POSTER =
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=52";
const VIDEO =
  "https://videos.pexels.com/video-files/30039442/30039442-hd_1920_1080_30fps.mp4";

export default function HomeHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    // Keep the still poster on accessibility and low-bandwidth connections.
    if (
      motionPreference.matches ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g"
    ) {
      return;
    }

    let isInView = false;
    let hasRequestedVideo = false;

    const playWhenVisible = () => {
      if (!isInView || document.visibilityState !== "visible") return;

      if (!hasRequestedVideo) {
        hasRequestedVideo = true;
        video.load();
      }

      void video.play().catch(() => {
        // The optimized poster remains visible when autoplay is unavailable.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = Boolean(entry?.isIntersecting);
        if (isInView) playWhenVisible();
        else video.pause();
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") playWhenVisible();
      else video.pause();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, []);

  return (
    <div className="home-hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="home-hero-video"
        muted
        loop
        playsInline
        preload="none"
        poster={POSTER}
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
