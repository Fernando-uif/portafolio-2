import React from "react";
import Oval from "./Oval";
import ovalStyle from "@/sass/components/oval.module.scss";
import aboutStyle from "@/sass/about/about.module.scss";
import Icon from "../Icons/Icon";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const numOvals = 5;
  const ovalsSpacing = 12;
  const ovals = Array.from({ length: numOvals }, (_, index) => (
    <Oval key={index} position={index * ovalsSpacing} />
  ));
  return (
    <section className={`${aboutStyle["about"]}`}>
      <div className={`${aboutStyle["about__wrapperName"]}`}>
        <div className={`${ovalStyle["oval__wrapper"]}`}>{ovals}</div>
        <h1 className={`${aboutStyle["about__wrapperName__name"]}`}>
          Fernando Sosa
        </h1>
        <div className={`${aboutStyle["about__wrapperName__icons"]}`}>
          <Icon url="#" name="twitter" />
          <Icon url="#" name="linkedin" />
          <Icon url="#" name="github" />
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
      </figure>

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
        <div className={`${aboutStyle["about__wrapperContactMe"]}`}>
          <Link className={`${aboutStyle["about__contactMe"]}`} href={"#"}>
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
