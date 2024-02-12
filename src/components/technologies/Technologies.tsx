import technologiesStyle from "@/sass/technologies/technologies.module.scss";

import Icon from "../Icons/Icon";
import Technoligie from "./Technologie";

const Technologies = () => {
  return (
    <>
      <h2 className={`${technologiesStyle["technologie__title"]}`}>
        technologies
      </h2>

      <section className={`${technologiesStyle["technologie"]}`}>
        <Technoligie />
        <div className={`${technologiesStyle["technologie__wrapperOval"]}`}>
          <Icon name="rings" />
        </div>
      </section>
    </>
  );
};

export default Technologies;
