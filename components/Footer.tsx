import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full pb-10 overflow-hidden">
      {/* Decorative background pulled upward so it's visible while on Contact */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 md:-top-40 h-48 md:h-72">
        <img
          src="assets/footer-img.svg"
          alt="footer background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center mt-6">
        <p className="md:text-base text-sm md:font-normal font-light mt-5 opacity-60">
          <a
            className="text-blue-400 font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            href="#hero"
          >
            Jatin Gola
          </a>
          {" "} crafted this while being caffeinated.
        </p>
        <a
          className="md:text-base text-sm md:font-normal font-light mt-5 opacity-60"
          target="_blank"
          href="https://www.instagram.com/grafix.cdr/"
          rel="noopener noreferrer"
        >
          Check out my designs here
        </a>
      </div>
    </footer>
  );
};

export default Footer;
