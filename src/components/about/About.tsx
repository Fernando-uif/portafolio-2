import aboutStyle from "@/sass/about/about.module.scss";
import Icon from "../Icons/Icon";
import Image from "next/image";
import Link from "next/link";
import ContactMe from "../contact/ContactMe";

const About = () => {
  return (
    <section className={`${aboutStyle["about"]}`}>
      <div className={`${aboutStyle["about__wrapperName"]}`}>
        <div className={`${aboutStyle["about__wrapperOval"]}`}>
          <Icon name="rings" />
        </div>
        <h1 className={`${aboutStyle["about__wrapperName__name"]}`}>
          Fernando Sosa
        </h1>
        <div className={`${aboutStyle["about__wrapperName__icons"]}`}>
          <Link href={"#"}>
            <Icon name="twitter" />
          </Link>
          <Link href={"#"}>
            <Icon name="linkedin" />
          </Link>
          <Link href={"#"}>
            <Icon name="github" />
          </Link>
        </div>
      </div>
      <figure className={`${aboutStyle["about__wrapperImage"]}`}>
        <Image
          src={"/assets/images/image-profile-mobile.webp"}
          alt="fernando sosa"
          height={242}
          width={174}
          className={`${aboutStyle["about__profileImage"]}`}
        />
        <svg
          className={`${aboutStyle["about__svg_circle"]}`}
          xmlns="http://www.w3.org/2000/svg"
          width="129"
          height="129"
        >
          <circle
            cx="830.5"
            cy="585.5"
            r="64"
            fill="none"
            stroke="#FFF"
            transform="translate(-766 -521)"
          />
        </svg>
      </figure>

      <div className={`${aboutStyle["about__wrapperAboutGreetings"]}`}>
        <div className={`${aboutStyle["about__wrapperGreetings"]}`}>
          <p className={`${aboutStyle["about__greetings"]}`}>
            Nice to meet you!
          </p>
          <p className={`${aboutStyle["about__greetings"]}`}>
            I&apos;m
            <span className={`${aboutStyle["about__name"]}`}>
              {" "}
              Fernando Sosa
            </span>
          </p>
        </div>
        <p className={`${aboutStyle["about__myGoal"]}`}>
          Located in Mexico City. I am a web developer passionate about building
          accessible web applications as well as learning new technologies that
          allow me to create interesting elements
        </p>
        <div className={`${aboutStyle["about__wrapperAboutMe"]}`}>
          <ContactMe name="contact me"/>
        </div>
      </div>
    </section>
  );
};

export default About;
