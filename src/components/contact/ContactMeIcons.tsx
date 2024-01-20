import Link from "next/link";
import Icon from "../Icons/Icon";
import contactIconStyle from "@/sass/contact/contactMeIcons.module.scss";

const ContactMeIcons = () => {
  return (
    <div className={`${contactIconStyle["contactIcons__wrapperName__icons"]}`}>
      <Link href={"http://wa.me/5523923346"}>
        <Icon
          name="phone"
          className={`${contactIconStyle["contactIcons__icon-phone"]}`}
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/fernando-sosa-fst/"}>
        <Icon name="linkedin" />
      </Link>
      <Link href={"https://github.com/Fernando-uif"}>
        <Icon name="github" />
      </Link>
    </div>
  );
};

export default ContactMeIcons;
