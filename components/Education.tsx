import React from "react";
import { education } from "@/data";
import { Sparkle } from "./ui/Sparkle";

const Education = (): JSX.Element => (
  <section id="education" className="py-10 sm:py-20 w-full">
    <div className="mb-10 md:mb-20"></div>
    <h3 className="title text-center font-semibold">
      My{' '}
      <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
        education
      </span>
    </h3>

    <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {education.map(({ id, school, degree, fieldOfStudy, grades, period, location }) => (
        <Sparkle key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
          <div className="h-full p-3 md:p-5 lg:p-10">
            <div className="text-start">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <h3 className="text-left text-lg lg:text-3xl font-bold">{school}</h3>
                  <p className="text-xl md:text-2xl font-semibold mt-3">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                      {degree}
                    </span>
                  </p>
                  {fieldOfStudy && (
                    <p className="mt-2 opacity-80">{fieldOfStudy}</p>
                  )}
                  {grades && (
                    <p className="mt-1 opacity-80">Grades: {grades}</p>
                  )}
                </div>
                <div className="text-start sm:text-end font-regular opacity-80">
                  <p>{period}</p>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
        </Sparkle>
      ))}
    </div>
  </section>
);

export default Education;
