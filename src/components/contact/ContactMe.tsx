import Link from "next/link";
import React from "react";
import contactMeStyles from "@/sass/contact/contactMe.module.scss";
interface LinkToProps {
  name: string;
}
const ContactMe = ({ name }: LinkToProps) => {
  return (
    <div className={`${contactMeStyles["contactMe"]}`}>
      <Link className={`${contactMeStyles["contactMe__item"]}`} href={"#"}>
        {name}
      </Link>
    </div>
  );
};

export default ContactMe;
