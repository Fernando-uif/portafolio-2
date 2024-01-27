import technologiesStyle from "@/sass/technologies/technologies.module.scss";

import Icon from "../Icons/Icon";
import Technoligie from "./Technologie";

const Technologies = () => {
  return (
    <>
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
