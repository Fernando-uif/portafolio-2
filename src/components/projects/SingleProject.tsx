import { Children } from "react";
import Image from "next/image";
import { ProjectsProps } from "@/data/projects/projects";
import singleProjectStyle from "@/sass/projects/singleProject.module.scss";
import ContactMe from "../contact/ContactMe";

const SingleProject = ({
  name,
  technologies,
  urlImage,
  view,
}: ProjectsProps) => {
  return (
    <>
      <figure className={`${singleProjectStyle["singleProject"]}`}>
        <div className={`${singleProjectStyle["singleProject__wrapperImage"]}`}>
          <div
            className={`${singleProjectStyle["singleProject__wrapperSources-hover"]}`}
          >
            {Children.toArray(
              view.map((src, index) => {
                if (!src?.name) return <></>;
                return (
                  <>
                    <ContactMe name={src.name} url={src.url} />
                  </>
                );
              })
            )}
          </div>

          <Image
            src={urlImage}
            alt={urlImage}
            width={800}
            height={600}
            className={`${singleProjectStyle["singleProject__image"]}`}
            quality={75}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <figcaption
          className={`${singleProjectStyle["singleProject__figcaption"]}`}
        >
          <span className={`${singleProjectStyle["singleProject__title"]}`}>
            {name}
          </span>

          <div
            className={`${singleProjectStyle["singleProject__useTechnologies"]}`}
          >
            {Children.toArray(
              technologies.map((techno) => (
                <>
                  <span
                    className={`${singleProjectStyle["singleProject__useTechnologies-item"]}`}
                  >
                    {techno}
                  </span>
                </>
              ))
            )}
          </div>

          <div
            className={`${singleProjectStyle["singleProject__wrapperSources"]}`}
          >
            {Children.toArray(
              view.map((src, index) => {
                if (!src?.name) return <></>;
                return (
                  <>
                    <ContactMe name={src.name} url={src.url} />
                  </>
                );
              })
            )}
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default SingleProject;
