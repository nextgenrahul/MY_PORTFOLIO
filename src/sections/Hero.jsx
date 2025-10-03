import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button, { Anchor } from "../components/Button";
import { words, resume, me } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <LazyLoadImage effect="blur" src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-col md:flex-row items-center justify-between md:px-20 px-5">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full gap-7">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <LazyLoadImage effect="blur"
                        src={word.LazyLoadImagePath}
                        alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-none bg-transparent"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I’m Rahul Shakya, Full-stack developer passionate about innovative solutions.
          </p>

          {/* Buttons side by side */}
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-full h-12"
              id="counter"
            />
            <Anchor
              text="Download Resume"
              className="md:w-80 md:h-16 w-full h-12"
              onClick={() => window.open(resume.LazyLoadImagePath, "_blank")}
            />
          </div>
        </header>

        {/* RIGHT: Hero Image */}
        <div className="hidden lg:flex lg:w-1/2 justify-end items-center mr-20">
          <LazyLoadImage
            effect="blur"
            src={me.LazyLoadImagePath}
            alt="Rahul Shakya"
            className="w-118 h-88 lg:w-190 lg:h-194 xl:w-122 xl:h-122 rounded-4xl object-cover shadow-lg transform transition-transform duration-300 hover:-translate-y-3"
          />
        </div>


      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
