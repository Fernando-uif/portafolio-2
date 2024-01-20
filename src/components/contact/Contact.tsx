import React from "react";
import contactStyle from "@/sass/contact/contact.module.scss";
import ContactMeIcons from "./ContactMeIcons";
import downloadStyle from "@/sass/buttons/download.module.scss";

const Contact = () => {
  return (
    <section className={`${contactStyle["contact"]}`}>
      <h2 className={`${contactStyle["contact__title"]}`}>Contact</h2>
      <p className={`${contactStyle["contact__description"]}`}>
        If you are interested in mi job, let&apos;s keep in touch.
      </p>
      <div className={`${contactStyle["contact__wrapperInfo"]}`}>
        <ContactMeIcons />
        <div className={`${downloadStyle["download"]}`}>
          <button className={`${downloadStyle["download__button"]}`}>
            download cv
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
