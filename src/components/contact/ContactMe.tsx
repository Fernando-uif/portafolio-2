import Link from "next/link";
import React from "react";
import contactMeStyles from "@/sass/contact/contactMe.module.scss";

const ContactMe = () => {
  return (
    <div className={`${contactMeStyles["contactMe"]}`}>
      <Link className={`${contactMeStyles["contactMe__item"]}`} href={"#"}>
      Contact me
      </Link>
    </div>
  );
};

export default ContactMe;
