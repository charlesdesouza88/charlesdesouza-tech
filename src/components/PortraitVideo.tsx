"use client";

import { useEffect, useRef, useState } from "react";

export default function PortraitVideo({
  src = "/img/charles.mp4",
  poster = "/img/charles.jpg",
  alt = "Charles DeSouza",
}: {
  src?: string;
  poster?: string;
  alt?: string;
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
    play();
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={poster}
        alt={alt}
        width={720}
        height={1280}
        className="aspect-[9/16] h-auto w-full object-cover object-top"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="aspect-[9/16] h-auto w-full object-cover object-top"
      width={720}
      height={1280}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
