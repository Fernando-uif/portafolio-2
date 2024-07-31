import Link from "next/link";
import React from "react";
import contactMeStyles from "@/sass/contact/contactMe.module.scss";
interface LinkToProps {
  name: string;
  url?: string;
  className?: string;
}
const ContactMe = ({ name, url, className }: LinkToProps) => {
  return (
    <div className={`${contactMeStyles["contactMe"]} ${className}`}>
      <Link
        className={`${contactMeStyles["contactMe__item"]}`}
        href={url || ""}
        target="_blank"
      >
        {name}
      </Link>
    </div>
  );
};

export default ContactMe;
