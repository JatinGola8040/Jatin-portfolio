"use client";

import { useEffect } from "react";
import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const scroller = document.querySelector(".overflow-y-auto") as HTMLElement | null;
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <main className="h-screen bg-[#02061f] flex">
      <NavBar />
      <div className="w-full overflow-y-auto mx-auto overflow-x-hidden">
        <div className="px-5 md:px-10 lg:px-40">
          <FloatingBar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Publications />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>

  );
};

export default Home;
