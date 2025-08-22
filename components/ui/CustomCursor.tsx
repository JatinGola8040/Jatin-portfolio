"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const media = window.matchMedia("(pointer: coarse)");
    if (media.matches) {
      setEnabled(false);
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const speed = 0.2; // smoothing factor
    let raf = 0 as number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      x += (tx - x) * speed;
      y += (ty - y) * speed;
      if (cursorRef.current) {
        // Offset by half size (16px diameter)
        cursorRef.current.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => {
      cursorRef.current?.classList.add("scale-125", "opacity-80");
    };

    const onUp = () => {
      cursorRef.current?.classList.remove("scale-125", "opacity-80");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onUp, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Themed custom cursor */}
      <div
        ref={cursorRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none select-none rounded-full transition-transform duration-75 ease-out will-change-transform"
        style={{
          width: 16,
          height: 16,
          background: "rgba(59,130,246,0.15)", // tailwind blue-500 @ 15% opacity
          border: "1px solid rgba(59,130,246,0.6)",
          boxShadow: "0 0 20px rgba(59,130,246,0.25)",
        }}
      />

      {/* Hide default cursor globally */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body, * { cursor: none !important; }
          `,
        }}
      />
    </>
  );
};

export default CustomCursor;
