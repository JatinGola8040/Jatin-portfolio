"use client";

import { projects } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-20">
      <div className="mb-10 md:mb-20"></div>
      <Reveal>
        <h3 className="font-semibold">
          Recent{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
            projects</span>
        </h3>
      </Reveal>
      <BentoGrid className="w-full py-10 md:py-20">
        {projects.map((item, i) => (
          <BentoGridItem
            key={item.id}
            {...item}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;
