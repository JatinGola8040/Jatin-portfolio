import React from "react";
import { workExperience } from "@/data";
import { Sparkle } from "./ui/Sparkle";

const Experience = (): JSX.Element => (
  <section id="experience" className="sm:py-20 w-full">
    <div className="mb-20"></div>
    <h3 className="title text-center font-semibold">
      My{' '}
      <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
        experience
      </span>
    </h3>

    <div className="w-full mt-12 space-y-10">
      {workExperience.map(({ id, company, title, period, location, desc, skills }) => (
        <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
          <div className="p-3 md:p-5 lg:p-10">
            <div className="text-start">
              <div className="flex justify-between"><div>
                <h3 className="text-justify text-lg lg:text-3xl font-bold">{company}</h3>
                <p className="text-xl md:text-2xl font-semibold mt-3">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </p>
              </div>

                <div className="text-end font-regular opacity-80">
                  <p>{period}</p>
                  <p>{location}</p>
                </div></div>

              <p className="my-5">{desc}</p>

              <div className="flex flex-wrap gap-2 mt-10">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/15 hover:ring-1 hover:ring-white/40 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition duration-200 ease-in-out"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Sparkle>
      ))}
    </div>
  </section>
);

export default Experience;
