"use client";

import { Children, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ContactMe from "../contact/ContactMe";
import SingleProject from "./SingleProject";
import { projects } from "@/data/projects/projects";

import projectStyles from "@/sass/projects/projects.module.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const projects: HTMLDivElement[] = gsap.utils.toArray(
        container.current.children
      );

      projects.forEach((project) => {
        gsap.fromTo(
          project,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: project,
              start: "top center",
              markers: true,
            },
          }
        );
      });
    },
    { scope: container }
  );
  return (
    <section className={`${projectStyles["project"]}`}>
      <div className={`${projectStyles["project__wrapperTitle"]}`}>
        <h2 className={`${projectStyles["project__title"]}`}>Projects</h2>
        <ContactMe
          name="contact me"
          url="https://www.linkedin.com/in/fernando-sosa-fst/"
        />
      </div>
      <div
        ref={container}
        className={`${projectStyles["project__wrapperProjects"]}`}
      >
        {Children.toArray(
          projects.map((project, index) => {
            return <SingleProject key={index} {...project} />;
          })
        )}
      </div>
    </section>
  );
};

export default Projects;
