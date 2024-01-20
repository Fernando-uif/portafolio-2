import ContactMe from "../contact/ContactMe";
import projectStyles from "@/sass/projects/projects.module.scss";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className={`${projectStyles["project"]}`}>
      <div className={`${projectStyles["project__wrapperTitle"]}`}>
        <h2 className={`${projectStyles["project__title"]}`}>Projects</h2>
        <ContactMe name="contact me"/>
      </div>
      <SingleProject />
    </section>
  );
};

export default Projects;
