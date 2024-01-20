import { Children } from "react";
import technologiesStyle from "@/sass/technologies/technologies.module.scss";
import { technologies } from "@/data/technologies/technologies";
import Icon from "../Icons/Icon";

interface TechnologiesProps {
  name: string;
  experience: string;
}

const Technologies = () => {
  return (
    <>
      <section className={`${technologiesStyle["technologie"]}`}>
        {technologies.map((tech) => (
          <>
            <div className={`${technologiesStyle["technologie__wrapper"]}`}>
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
        ))}
        <div className={`${technologiesStyle["technologie__wrapperOval"]}`}>
          <Icon name="rings" />
        </div>
      </section>
    </>
  );
};

export default Technologies;
