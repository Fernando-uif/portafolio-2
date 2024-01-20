import React from "react";
import contactStyle from "@/sass/contact/contact.module.scss";
import ContactMeIcons from "./ContactMeIcons";
import downloadStyle from "@/sass/buttons/download.module.scss";
import Link from "next/link";

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
            <Link
              target="_blank"
              href="/docs/CV_Fernando_Sosa_Torres.pdf"
              download
              className={`${downloadStyle["download__button-span"]}`}
            >
              download cv
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
