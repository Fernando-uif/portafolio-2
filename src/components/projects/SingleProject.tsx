import { Children } from "react";
import Image from "next/image";
import { ProjectsProps } from "@/data/projects/projects";
import singleProjectStyle from "@/sass/projects/singleProject.module.scss";
import ContactMe from "../contact/ContactMe";

const SingleProject = ({
  name,
  technologies,
  urlMedia,
  view,
}: ProjectsProps) => {
  return (
    <>
      <figure className={`${singleProjectStyle["singleProject"]}`}>
        <div className={`${singleProjectStyle["singleProject__wrapperImage"]}`}>
          {urlMedia.includes(".mp4") ? (
            <video
              src={urlMedia}
              muted
              loop
              className={`${singleProjectStyle["singleProject__video"]}`}
              onMouseEnter={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              onClick={(e) => {
                const video = e.currentTarget;
                if (video.paused) {
                  video.play().catch(() => {});
                } else {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            ></video>
          ) : (
            <Image
              src={urlMedia}
              alt={urlMedia}
              width={800}
              height={600}
              className={`${singleProjectStyle["singleProject__image"]}`}
              quality={75}
              sizes="(max-width: 600px) 80vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
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
              )),
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
              }),
            )}
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default SingleProject;
