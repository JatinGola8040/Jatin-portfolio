"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import DownloadCV from "./DownloadCV";
import { Socials } from "./Socials";

const NAV_CONTAINER_CLASSES = cn(
  "flex sm:gap-5 p-2 sm:px-5 sm:py-4 rounded-full border border-white/20"
);

const WRAPPER_CLASSES = cn("fixed z-[40] top-6 sm:top-10 left-1/2 -translate-x-1/2");

const NAV_CONTAINER_STYLES: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0)",
  backdropFilter: "blur(6px)",
};

const FloatingBar = () => {
  return (
    <AnimatePresence mode="wait">
      <div className={WRAPPER_CLASSES}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={NAV_CONTAINER_CLASSES}
          style={NAV_CONTAINER_STYLES}
        >
          <Socials />
          <DownloadCV fileUrl="assets/Jatin_Gola_Resume.pdf" fileName="Jatin Gola-Resume.pdf" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FloatingBar;
