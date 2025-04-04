import Link from "next/link";
import Icon from "../Icons/Icon";
import contactIconStyle from "@/sass/contact/contactMeIcons.module.scss";

const ContactMeIcons = () => {
  return (
    <div className={`${contactIconStyle["contactIcons__wrapperName__icons"]}`}>
      
      <Link
        href={"https://www.linkedin.com/in/fernando-sosa-fst/"}
        className={`${contactIconStyle["contactIcons--item"]}`}
      >
        <Icon name="linkedin" />
      </Link>
      <Link
        href={"https://github.com/Fernando-uif"}
        className={`${contactIconStyle["contactIcons--item"]}`}
      >
        <Icon name="github" />
      </Link>
    </div>
  );
};

export default ContactMeIcons;
