"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed hero background video. Muted loop; poster-only when
 * prefers-reduced-motion. Pauses when the tab is hidden.
 */
export default function HeroVideo({
  src = "/img/hero-effect.mp4",
  poster = "/img/hero-effect.jpg",
}: {
  src?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const play = () => {
      void video.play().catch(() => {
        /* autoplay can be blocked; poster remains visible */
      });
    };

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };

    play();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_20%]"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_20%]"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
