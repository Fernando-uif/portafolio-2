"use client";
import { Children, useEffect, useId } from "react";
import { technologies } from "@/data/technologies/technologies";
import technologiesStyle from "@/sass/technologies/technologies.module.scss";

const Technologie = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any, index: number) => {

          if (entry.isIntersecting) {
            if (index % 2 === 0) {
              entry.target.classList.remove(
                `${technologiesStyle["technologie__wrapper-translateOffRight"]}`
              );
            } else {
              entry.target.classList.remove(
                `${technologiesStyle["technologie__wrapper-translateOffLeft"]}`
              );
            }
            entry.target.classList.add(
              `${technologiesStyle["technologie__wrapper-translateIn"]}`
            );
            // Remove the target, so the animation is off
            observer.unobserve(entry.target);
          } else {
            if (index % 2 === 0) {
              entry.target.classList.add(
                `${technologiesStyle["technologie__wrapper-translateOffRight"]}`
              );
            } else {
              entry.target.classList.add(
                `${technologiesStyle["technologie__wrapper-translateOffLeft"]}`
              );
            }

            entry.target.classList.remove(
              `${technologiesStyle["technologie__wrapper-translateIn"]}`
            );
          }
        });
      },
      {

      }
    );

    const technologies = document.querySelectorAll(
      `.${technologiesStyle["technologie__wrapper"]}`
    );

    technologies.forEach((tech) => {
      observer.observe(tech);
    });
  }, []);

  return (
    <>
      {Children.toArray(
        technologies.map((tech, index) => (
          <>
            <div
              className={`${technologiesStyle["technologie__wrapper"]} ${
                index % 2 === 0
                  ? technologiesStyle["technologie__wrapper-translateOffRight"]
                  : technologiesStyle["technologie__wrapper-translateOffLeft"]
              }`}
            >
              <span className={`${technologiesStyle["technologie__name"]}`}>
                {tech.name}
              </span>
              <span
                className={`${technologiesStyle["technologie__experience"]}`}
              >
                {tech.experience} Years Experience
              </span>
            </div>
          </>
        ))
      )}
    </>
  );
};

export default Technologie;
