import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref1 = useRef(null);
  const project1Ref2 = useRef(null);
  const project1Ref3 = useRef(null);
  useGSAP(() => {
  const projects = [project1Ref1.current, project1Ref2.current, project1Ref3.current];
  
  projects.forEach((card, index) => {
    gsap.fromTo(
        card, 
        {
            y:50, opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100"
            }

        }
    )
    
  });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    sectionRef.current;
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple With a Powerful, User-Friendly App
                Called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & Tailwind for a fast,
                user-friendly experience
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project " ref={project1Ref2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Manage Platform" />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className="project" ref={project1Ref3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
