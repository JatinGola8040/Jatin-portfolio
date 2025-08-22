"use client";

import React from "react";
import { publications } from "@/data";
import { Sparkle } from "./ui/Sparkle";

const Publications = (): JSX.Element => (
  <section id="publication" className="sm:py-20 w-full">
    <div className="mb-20"></div>
    <h3 className="title text-center font-semibold">
      My{' '}
      <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
        publications
      </span>
    </h3>

    <div className="w-full mt-12 space-y-10">
      {publications.length === 0 && (
        <div className="text-center opacity-70">No publications added yet.</div>
      )}

      {publications.map(({ id, title, coAuthors, description, publication, publicationDate, url }) => (
        <Sparkle as="div" key={id} duration={Math.floor(Math.random() * 10000) + 10000}>
          <div className="w-full p-3 md:p-5 lg:p-10">
            <div className="text-start">
              <div className="flex justify-between">
                <div>
                  <h3
                    className="text-left text-lg lg:text-2xl font-bold overflow-hidden"
                    style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" as any }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-3 text-xl md:text-2xl font-semibold overflow-hidden"
                    style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" as any }}
                  >
                    <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                      {publication}
                    </span>
                  </p>
                  {(Array.isArray(coAuthors) && coAuthors.length > 0) && (
                    <div className="mt-2 opacity-80 text-sm md:text-base flex items-center gap-2 flex-wrap">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                      </svg>
                      <span className="flex items-center gap-1 flex-wrap">
                        {coAuthors.map((a: any, idx: number, arr: any[]) => (
                          <React.Fragment key={idx}>
                            {a.link ? (
                              <a
                                href={a.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-white/30 hover:decoration-white/60 hover:text-blue-300 transition-colors"
                              >
                                {a.name}
                              </a>
                            ) : (
                              <span>{a.name}</span>
                            )}
                            {idx < arr.length - 1 && <span>,</span>}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-end font-regular opacity-80 flex flex-col items-end gap-2">
                  <p>{publicationDate}</p>
                  {url && (
                    <button
                      type="button"
                      aria-label="Open publication"
                      className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 transition transform hover:scale-105"
                      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
                    >
                      <img src="assets/link.svg" alt="" className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {description && <p className="my-5">{description}</p>}

                          </div>
          </div>
        </Sparkle>
      ))}
    </div>
  </section>
);

export default Publications;
