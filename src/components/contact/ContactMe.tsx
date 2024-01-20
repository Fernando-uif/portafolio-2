import Link from "next/link";
import React from "react";
import contactMeStyles from "@/sass/contact/contactMe.module.scss";
interface LinkToProps {
  name: string;
  url?: string;
}
const ContactMe = ({ name, url }: LinkToProps) => {
  return (
    <div className={`${contactMeStyles["contactMe"]}`}>
      <Link
        className={`${contactMeStyles["contactMe__item"]}`}
        href={url || ""}
      >
        {name}
      </Link>
    </div>
  );
};

export default ContactMe;
