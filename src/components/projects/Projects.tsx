import { Children } from "react";
import ContactMe from "../contact/ContactMe";
import projectStyles from "@/sass/projects/projects.module.scss";
import SingleProject from "./SingleProject";
import { projects } from "@/data/projects/projects";

const Projects = () => {
  return (
    <section className={`${projectStyles["project"]}`}>
      <div className={`${projectStyles["project__wrapperTitle"]}`}>
        <h2 className={`${projectStyles["project__title"]}`}>Projects</h2>
        <ContactMe name="contact me" url="http://wa.me/5523923346"/>
      </div>
      <div className={`${projectStyles['project__wrapperProjects']}`}>
      {projects.map((project, index) => {
        return <SingleProject key={index} {...project} />;
      })}

      </div>
    </section>
  );
};

export default Projects;
