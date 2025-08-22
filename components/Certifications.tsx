"use client";

import React, { useMemo, useState } from "react";
import { certifications } from "@/data";
import Reveal from "./ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const ArrowButton = ({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) => (
  <button
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className="bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-white/20"
  >
    <span className="sr-only">{dir === "left" ? "Previous" : "Next"}</span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6"></polyline>
      ) : (
        <polyline points="9 18 15 12 9 6"></polyline>
      )}
    </svg>
  </button>
);

const Certifications = () => {
  const [index, setIndex] = useState(0);
  const total = certifications.length;
  const current = useMemo(() => certifications[index], [index]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section id="certifications" className="py-20 w-full">
      <div className="mb-20"></div>
      <Reveal>
        <h3 className="mb-10 title text-center font-semibold">
          Licences & {""}
          <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">Certifications</span>
        </h3>
      </Reveal>

      <div className="max-w-6xl mx-auto flex items-center gap-1">
        <ArrowButton dir="left" onClick={prev} />
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl"></div>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={current.img}
                  alt={current.title}
                  className="mx-auto w-auto h-auto max-w-full max-h-[60vh] object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </AnimatePresence>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h4 className="text-lg md:text-2xl font-bold">{current.title}</h4>
                  <h3 className="text-justify text-lg md:text-2xl font-medium">Issued by: {current.issue}</h3>
                  <p className="text-sm md:text-base opacity-90 mt-2 max-w-3xl">{current.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {certifications.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-200 ${i === index ? "w-6 bg-white" : "w-2 bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <ArrowButton dir="right" onClick={next} />
      </div>
    </section>
  );
};

export default Certifications;
