import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
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
      <div className="mb-40"></div>
      <div className="text-center my-20 mx-auto max-w-[1300px] justify-center flex flex-col ">
        <Reveal delay={0.1}>
          <h1 className="text-center text-4xl md:text-6xl lg:text-9xl font-light ">
            Hey, I&apos;m {''}
            <span className="bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent font-bold ">
              Jatin Gola!
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl font-medium">
            I&apos;m an AI Enthusiast
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="max-w-[1000px] mx-auto md:text-2xl">
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
        <div className="mb-40"></div>
      </div>
    </div>
  );
};

export default Hero;
