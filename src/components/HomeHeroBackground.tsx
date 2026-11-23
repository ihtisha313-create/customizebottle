"use client";

import { useEffect, useRef } from "react";

const POSTER =
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1280&q=45";
const VIDEO =
  "https://videos.pexels.com/video-files/30039442/30039442-hd_1920_1080_30fps.mp4";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function HomeHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaRoot = video.closest(".home-hero-media");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    if (
      motionPreference.matches ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g"
    ) {
      mediaRoot?.classList.add("is-static");
      return;
    }

    // The CSS water and bubbles are the mobile visual. Do not download a large
    // full-HD background film on phones, tablets or weaker 3G connections.
    if (window.matchMedia("(max-width: 1023px)").matches || connection?.effectiveType === "3g") {
      mediaRoot?.classList.add("video-disabled");
      return;
    }

    const idleWindow = window as IdleWindow;
    const heroRoot = video.closest(".home-hero");
    let isInView = false;
    let isScrolling = false;
    let hasRequestedVideo = false;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    let scrollTimer: number | undefined;

    const cancelScheduledLoad = () => {
      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
        idleHandle = undefined;
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = undefined;
      }
    };

    const startVideo = () => {
      idleHandle = undefined;
      timeoutHandle = undefined;
      if (!isInView || document.visibilityState !== "visible" || hasRequestedVideo) return;

      hasRequestedVideo = true;
      video.load();
      void video.play().catch(() => {
        // The still poster and CSS water effects remain visible if autoplay is blocked.
      });
    };

    const playWhenVisible = () => {
      if (!isInView || isScrolling || document.visibilityState !== "visible") return;

      if (hasRequestedVideo) {
        void video.play().catch(() => {});
        return;
      }

      if (idleHandle !== undefined || timeoutHandle !== undefined) return;

      // Let the initial page, fonts and critical images settle before requesting video.
      if (idleWindow.requestIdleCallback) {
        idleHandle = idleWindow.requestIdleCallback(startVideo, { timeout: 4500 });
      } else {
        timeoutHandle = window.setTimeout(startVideo, 2200);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = Boolean(entry?.isIntersecting);
        if (isInView) playWhenVisible();
        else {
          cancelScheduledLoad();
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") playWhenVisible();
      else {
        cancelScheduledLoad();
        video.pause();
      }
    };

    const handleScroll = () => {
      if (!isInView) return;

      isScrolling = true;
      heroRoot?.classList.add("is-scrolling");
      mediaRoot?.classList.add("is-scrolling");
      video.pause();

      if (scrollTimer !== undefined) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        scrollTimer = undefined;
        isScrolling = false;
        heroRoot?.classList.remove("is-scrolling");
        mediaRoot?.classList.remove("is-scrolling");
        playWhenVisible();
      }, 180);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelScheduledLoad();
      if (scrollTimer !== undefined) window.clearTimeout(scrollTimer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      heroRoot?.classList.remove("is-scrolling");
      mediaRoot?.classList.remove("is-scrolling");
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

      <div className="home-hero-visual-effects">
        <span className="home-hero-light-rays" />
        <span className="home-hero-caustic-field" />
        <span className="home-hero-surface-ripple" />
        <span className="home-hero-glass-shimmer" />
        <div className="home-hero-bubble-field">
          {Array.from({ length: 90 }, (_, index) => {
            const left = (index * 37 + Math.floor(index / 24) * 13) % 97;
            const size = 5 + ((index * 17 + 5) % 27);
            const isAnimated = index < 24;
            const top = 5 + ((index * 23 + 11) % 88);
            const duration = 15 + ((index * 7) % 11);
            const delay = -(((index * 11) % 181) / 10);

            return (
              <i
                key={index}
                className={isAnimated ? "hero-bubble hero-bubble--animated" : "hero-bubble hero-bubble--static"}
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  ...(isAnimated
                    ? { animationDuration: `${duration}s`, animationDelay: `${delay}s` }
                    : { top: `${top}%` }),
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
