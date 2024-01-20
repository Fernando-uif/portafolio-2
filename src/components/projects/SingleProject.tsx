import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects/projects";
import singleProjectStyle from "@/sass/projects/singleProject.module.scss";

const SingleProject = () => {
  return (
    <figure className={`${singleProjectStyle["singleProject"]}`}>
      <Image
        src={"/assets/images/projects/todo.png"}
        alt="alt"
        width={300}
        height={300}
        className={`${singleProjectStyle["singleProject__image"]}`}
      />
      <figcaption
        className={`${singleProjectStyle["singleProject__figcaption"]}`}
      >
        <span className={`${singleProjectStyle["singleProject__title"]}`}>
          DESIGN PORTFOLIO
        </span>
        <div
          className={`${singleProjectStyle["singleProject__useTechnologies"]}`}
        >
          <span
            className={`${singleProjectStyle["singleProject__useTechnologies-item"]}`}
          >
            HTML
          </span>
          <span
            className={`${singleProjectStyle["singleProject__useTechnologies-item"]}`}
          >
            CSS
          </span>
        </div>
        
      </figcaption>
    </figure>
  );
};

export default SingleProject;
