"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "starting" | "with-sound" | "muted" | "blocked";

/**
 * Full-bleed hero video: plays once with audio, then loops muted.
 * If the browser blocks unmuted autoplay, a one-tap control starts sound.
 * Poster-only when prefers-reduced-motion. Pauses when the tab is hidden.
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
  const [phase, setPhase] = useState<Phase>("starting");
  const playedWithSound = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const goMutedLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    setPhase("muted");
    void video.play().catch(() => {});
  }, []);

  const playWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    playedWithSound.current = true;
    video.muted = false;
    video.volume = 0.3;
    video.loop = false;
    video.currentTime = 0;
    setPhase("with-sound");

    void video.play().catch(() => {
      // Gesture still blocked somehow — fall back to muted loop.
      goMutedLoop();
      setPhase("blocked");
    });
  }, [goMutedLoop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const onEnded = () => {
      // After the spoken intro finishes, keep the visual looping silently.
      if (playedWithSound.current) goMutedLoop();
    };

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else void video.play().catch(() => {});
    };

    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisibility);

    // Try unmuted autoplay first; browsers usually block this without a tap.
    video.muted = false;
    video.volume = 0.3;
    video.loop = false;
    void video
      .play()
      .then(() => {
        playedWithSound.current = true;
        setPhase("with-sound");
      })
      .catch(() => {
        // Start the picture muted so the hero isn’t still, wait for one tap.
        video.muted = true;
        video.loop = true;
        void video.play().catch(() => {});
        setPhase("blocked");
      });

    return () => {
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion, goMutedLoop]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (phase === "with-sound") {
      goMutedLoop();
      return;
    }

    playWithSound();
  };

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

  const soundOn = phase === "with-sound";
  const needsTap = phase === "blocked" || phase === "starting";

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_20%]"
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundOn}
        title={
          soundOn
            ? "Mute"
            : needsTap
              ? "Play with sound"
              : "Replay with sound"
        }
        aria-label={
          soundOn
            ? "Mute hero video"
            : needsTap
              ? "Play hero video with sound"
              : "Replay hero video with sound"
        }
        className={`absolute top-20 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border backdrop-blur-md transition-colors sm:top-24 sm:right-6 ${
          needsTap
            ? "border-ember/50 bg-ember text-bg hover:bg-ember/90"
            : soundOn
              ? "border-ember/40 bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] text-ember"
              : "border-line-strong bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] text-muted hover:border-ember hover:text-ember"
        }`}
      >
        <SoundIcon on={soundOn} />
      </button>
    </>
  );
}

function SoundIcon({ on }: { on: boolean }) {
  if (on) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 10v4h3l4 4V6L7 10H4z" fill="currentColor" />
        <path
          d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 10v4h3l4 4V6L7 10H4z" fill="currentColor" />
      <path
        d="M18 9l4 6M22 9l-4 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
