"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { certifications } from "@/data";
import Reveal from "./ui/Reveal";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

/* ──────────────────────────────────────────────
   Slide direction tracker
   ────────────────────────────────────────────── */
const SWIPE_THRESHOLD = 50;

/* ──────────────────────────────────────────────
   Arrow Button – glassmorphic with glow
   ────────────────────────────────────────────── */
const ArrowButton = ({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: () => void;
}) => (
  <motion.button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.92 }}
    className={`
      relative z-10 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center
      border border-white/20 backdrop-blur-xl
      bg-gradient-to-br from-white/10 to-white/5
      shadow-[0_0_20px_rgba(59,130,246,0.15)]
      hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
      transition-all duration-300 group
      shrink-0
    `}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/70 group-hover:text-white transition-colors duration-200"
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  </motion.button>
);

/* ──────────────────────────────────────────────
   Main Component
   ────────────────────────────────────────────── */
const Certifications = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [isHovered, setIsHovered] = useState(false);
  const total = certifications.length;
  const current = useMemo(() => certifications[index], [index]);
  const dragX = useMotionValue(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Neighbours for peek effect
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Auto-play — pause on hover
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Swipe / drag handler
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  /* Slide animation variants – direction-aware */
  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
      rotateY: d > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.92,
      rotateY: d > 0 ? -8 : 8,
    }),
  };

  return (
    <section id="certifications" className="py-10 md:py-20 w-full">
      <div className="mb-10 md:mb-20"></div>
      <Reveal>
        <h3 className="mb-10 title text-center font-semibold">
          Licences &amp; {""}
          <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>
      </Reveal>

      {/* ── Carousel Container ── */}
      <div
        className="max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Row */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <ArrowButton dir="left" onClick={prev} />

          {/* ── Stage ── */}
          <div className="relative flex-1 flex items-center justify-center"
               style={{ perspective: "1200px" }}>

            {/* Ambient glow behind card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[70%] rounded-[60px] bg-blue-500/20 blur-[80px] animate-pulse" />
            </div>

            {/* ── Peek: Previous Card ── */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[18%] z-0">
              <motion.div
                className="rounded-xl overflow-hidden opacity-30 blur-[1px] border border-white/5"
                style={{ transform: "scale(0.85) rotateY(12deg)" }}
              >
                <img
                  src={certifications[prevIndex].img}
                  alt=""
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* ── Peek: Next Card ── */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[18%] z-0">
              <motion.div
                className="rounded-xl overflow-hidden opacity-30 blur-[1px] border border-white/5"
                style={{ transform: "scale(0.85) rotateY(-12deg)" }}
              >
                <img
                  src={certifications[nextIndex].img}
                  alt=""
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* ── Main Card ── */}
            <div className="relative z-10 w-full max-w-[85%] md:max-w-[65%]">
              {/* Animated border glow ring */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-blue-600/60 via-blue-400/30 to-blue-600/60 opacity-60 blur-sm pointer-events-none" />
              <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, rgba(59,130,246,0.5) 10%, transparent 20%, transparent 80%, rgba(59,130,246,0.5) 90%, transparent 100%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Card content */}
              <div className="relative rounded-2xl overflow-hidden bg-[#070d2a] border border-white/10">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    style={{ x: dragX }}
                    className="relative cursor-grab active:cursor-grabbing"
                  >
                    {/* Certificate Image */}
                    <img
                      src={current.img}
                      alt={current.title}
                      className="w-full h-auto max-h-[55vh] object-contain select-none"
                      draggable={false}
                    />

                    {/* Hover overlay – gradient + animated text */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end"
                      initial={false}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end group">
                        <div className="p-4 sm:p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                          {/* Issuer badge */}
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs md:text-sm font-medium mb-3">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            {current.issue}
                          </span>
                          <h4 className="text-base sm:text-lg md:text-2xl font-bold text-white leading-tight">
                            {current.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-white/80 mt-2 line-clamp-3">
                            {current.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <ArrowButton dir="right" onClick={next} />
        </div>

        {/* ── Bottom controls ── */}
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
          {/* Counter */}
          <span className="text-xs md:text-sm text-white/40 font-mono tabular-nums select-none">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Progress dots */}
          <div className="flex gap-1.5 items-center">
            {certifications.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className="group relative p-1"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  className="rounded-full"
                  animate={{
                    width: i === index ? 24 : 8,
                    height: 8,
                    backgroundColor:
                      i === index ? "rgba(96,165,250,1)" : "rgba(255,255,255,0.2)",
                    boxShadow:
                      i === index
                        ? "0 0 12px rgba(96,165,250,0.6)"
                        : "none",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            ))}
          </div>

          {/* Counter (end) */}
          <span className="text-xs md:text-sm text-white/20 font-mono select-none">
            ⏐
          </span>

          {/* Auto-play indicator */}
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{
                opacity: isHovered ? 0.3 : [0.3, 1, 0.3],
                scale: isHovered ? 1 : [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-[10px] md:text-xs text-white/30 select-none">
              {isHovered ? "Paused" : "Auto"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
