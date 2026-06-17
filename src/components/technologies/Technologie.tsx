"use client";
import { Children } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { technologies } from "@/data/technologies/technologies";
import technologiesStyle from "@/sass/technologies/technologies.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Technologie = () => {
  useGSAP(() => {
    const allTechnologies = `.${technologiesStyle["technologie__wrapper"]}`;

    ScrollTrigger.batch(allTechnologies, {
      start: "top 50%",

      onEnter: (element) => {
        gsap.to(element, {
          opacity: 1,
        });
      },
    });
  });

  return (
    <>
      {Children.toArray(
        technologies.map((tech, index) => (
          <>
            <div className={`${technologiesStyle["technologie__wrapper"]} `}>
              <span className={`${technologiesStyle["technologie__name"]}`}>
                {tech.name}
              </span>
            </div>
          </>
        )),
      )}
    </>
  );
};

export default Technologie;
