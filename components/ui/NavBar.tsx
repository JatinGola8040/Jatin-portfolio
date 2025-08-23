"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { navItems } from "@/data";

const NavBar = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hideOnHero, setHideOnHero] = useState<boolean>(true);

  useEffect(() => {
    const rootEl = document.querySelector(".overflow-y-scroll") as HTMLElement | null;

    // Observe only the sections we navigate to
    const ids = navItems.map(({ link }) => link.replace('#', ''));
    const getSections = () => ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    let sections = getSections();

    const getRelativeTop = (el: HTMLElement) => {
      if (!rootEl) return el.getBoundingClientRect().top;
      const rootRect = rootEl.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      return rect.top - rootRect.top;
    };

    const pickActive = () => {
      if (!sections.length) sections = getSections();
      if (!sections.length) return;

      const containerH = rootEl?.clientHeight ?? window.innerHeight;
      const viewportAnchor = containerH * 0.3; // 30% from the top of the scroll container

      let bestId = sections[0].id;
      let foundContaining = false;
      let minDist = Infinity;

      for (const el of sections) {
        const top = getRelativeTop(el);
        const height = el.getBoundingClientRect().height;
        const bottom = top + height;

        if (top <= viewportAnchor && bottom > viewportAnchor) {
          bestId = el.id;
          foundContaining = true;
          break;
        }

        const dist = Math.abs(top - viewportAnchor);
        if (!foundContaining && dist < minDist) {
          minDist = dist;
          bestId = el.id;
        }
      }

      setActiveSection(bestId);
    };

    // Toggle navbar visibility based on whether we are within the Hero (above #about)
    const aboutEl = document.querySelector("#about") as HTMLElement | null;

    let aboutTop = 0;
    const computeAboutTop = () => {
      if (!rootEl || !aboutEl) {
        setHideOnHero(false);
        return;
      }
      const rootRect = rootEl.getBoundingClientRect();
      const aboutRect = aboutEl.getBoundingClientRect();
      // Distance from top of scroll container to top of #about
      aboutTop = aboutRect.top - rootRect.top + rootEl.scrollTop;
    };

    const updateVisibility = () => {
      if (!rootEl || !aboutEl) return;
      const atHero = rootEl.scrollTop < Math.max(aboutTop - 1, 0);
      setHideOnHero(atHero);
    };

    // Initial calculations
    computeAboutTop();
    updateVisibility();
    pickActive();

    const onScroll = () => {
      updateVisibility();
      pickActive();
    };
    const onResize = () => {
      sections = getSections();
      computeAboutTop();
      updateVisibility();
      pickActive();
    };

    rootEl?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      rootEl?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-2 z-50">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: hideOnHero ? 0 : 1, x: hideOnHero ? -30 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-stretch w-max gap-2 sm:gap-20"
        style={{ pointerEvents: hideOnHero ? "none" : "auto" }}
      >
      {navItems.map(({ name, link }, index) => {
        const isActive = `#${activeSection}` === link;

        return (
          <Link
            key={`nav-item-${index}`}
            href={link}
            className={cn(
              "group flex items-center justify-center rounded-full p-2 sm:p-5 px-4 sm:px-4 w-full text-center text-xs sm:text-sm font-medium transition-all duration-200 ease-out transform rotate-90 origin-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
              isActive
                ? "bg-white/15 text-white ring-2 ring-white/40 shadow-[0_0_18px_rgba(255,255,255,0.35)] scale-[1.06]"
                : "text-white/60 hover:text-white hover:bg-white/10 hover:ring-1 hover:ring-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            )}
          >
            <span className="block w-full whitespace-nowrap text-center">{name}</span>
          </Link>
        );
      })}
      </motion.div>
    </div>
  );
};

export default NavBar;
