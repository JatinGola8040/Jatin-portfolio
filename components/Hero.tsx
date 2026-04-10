"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const inter = Inter({
  subsets: ["latin"],
});

const HERO_NAME = "Jatin Gola!";

const VariableFontText = () => {
  const characters = HERO_NAME.split("");

  return (
    <span className={`${inter.className} inline-block`}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent"
          style={{ fontVariationSettings: `"wght" 700` }}
          animate={{
            fontVariationSettings: [
              `"wght" 100`,
              `"wght" 900`,
              `"wght" 100`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <div className="pb-10 pt-20 md:pb-20 md:pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="lightblue"
        />
        <Spotlight
          className="h-[100vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="blue" />
      </div>
      <div className="mb-16 md:mb-40"></div>
      <div className="text-center my-10 md:my-20 mx-auto max-w-[1300px] justify-center flex flex-col ">
        <Reveal delay={0.1}>
          <h1 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-light ">
            Hey, I&apos;m{' '}
            <VariableFontText />
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="title my-4 md:my-6 text-lg sm:text-xl md:text-3xl lg:text-5xl font-medium">
            I&apos;m an AI Enthusiast
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="max-w-[1000px] mx-auto text-sm sm:text-base md:text-2xl px-2">
            A designer, developer and Artificial Intelligence enthusiast who spends way too much time on exploring AI models and fashioning designs.
          </p>
        </Reveal>
        <a className="mt-10 mx-auto" href="#contact"><Reveal delay={0.4}>
          <Button
            title="Let's Connect"
            icon={<img src="assets/send.svg" />}
            position="right"
          /></Reveal>
        </a>
        <div className="mb-16 md:mb-40"></div>
      </div>
    </div>
  );
};

export default Hero;
