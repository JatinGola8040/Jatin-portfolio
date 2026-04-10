import React from "react";
import { Sparkle } from "./ui/Sparkle";
import { myTechStack } from "@/data";
import Reveal from "./ui/Reveal";

const About = () => {
  const frontendNames = new Set([
    "HTML", "CSS", "Python", "JavaScript"
  ]);
  const librariesToolsNames = new Set([
    "TensorFlow", "Scikit-learn", "Gradio", "Streamlit", "Seaborn", "Pytorch", "Matplotlib", "OpenCV", "Pandas", "NumPy", "Matlab"
  ]);
  const softwareNames = new Set([
    "PowerBI", "Tableau Public", "CorelDraw", "Adobe Photoshop", "Premier Pro", "After Effects", "Adobe Illustrator", "Canva", "Figma", "Microsoft Office", "MS Excel", "VS Code", "Git", "GitHub", "Antigravity"
  ]);

  const frontend = myTechStack.filter((s) => frontendNames.has(s.name));
  const librariesTools = myTechStack.filter((s) => librariesToolsNames.has(s.name));
  const software = myTechStack.filter((s) => softwareNames.has(s.name));

  return (
  <section id="about" className="py-20 w-full space-y-10">
    <div className="mb-20"></div>
    <Reveal>
      <h3 className="mb-10 font-semibold">
        About{' '}
        <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
          me
        </span>
      </h3>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <Sparkle
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-col text-left p-3 md:p-5 lg:p-10 gap-5 h-full"
      >
        <p>
          As a dedicated student with a keen interest in machine learning, artificial intelligence and deep learning, I am constantly exploring the vast terrain of technology and innovation. My learning journey has been characterized by a strong interest in developing and implementing innovative AI solutions and gaining insight into new technologies.
        </p>
        <p>
          Driven by my curiosity and desire to innovate, I have been involved in various projects in the field of machine learning. These hands-on experiences not only sharpened my technical skills but gave me a broader understanding of the techniques and challenges in machine learning and AI From designing systems to modeling and troubleshooting on top of handling complex types, I’ve been successful at pushing the limits of what technology can do .
        </p>
        <p>
          As a tech enthusiast, I am always looking for opportunities to learn and grow. Whether it’s on academic courses, personal projects, or collaborations, I’m always interested in expanding my horizons and staying abreast of the latest trends and innovations in AI and technology.
        </p>
      </Sparkle>

      <div
        className="relative h-full overflow-hidden rounded-3xl border border-blue-300 transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-10 "
      >
        <p className="text-lg lg:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
            My Tech Stack!
          </span>
        </p>

        <div className="space-y-6 py-4">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-wide opacity-70 mb-3">Technologies</p>
            <div className="flex flex-wrap gap-3">
              {frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/15 hover:ring-1 hover:ring-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition duration-200 ease-in-out flex items-center gap-2"
                >
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs md:text-sm uppercase tracking-wide opacity-70 mb-3">Libraries & Tools</p>
            <div className="flex flex-wrap gap-3">
              {librariesTools.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/15 hover:ring-1 hover:ring-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition duration-200 ease-in-out flex items-center gap-2"
                >
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs md:text-sm uppercase tracking-wide opacity-70 mb-3">Software</p>
            <div className="flex flex-wrap gap-3">
              {software.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/15 hover:ring-1 hover:ring-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition duration-200 ease-in-out flex items-center gap-2"
                >
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
