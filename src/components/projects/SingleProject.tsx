import { Children, useState, useEffect, useRef } from "react";

import Image from "next/image";

import { ProjectsProps } from "@/data/projects/projects";
import ContactMe from "../contact/ContactMe";
import singleProjectStyle from "@/sass/projects/singleProject.module.scss";

const SingleProject = ({
  name,
  technologies,
  urlMedia,
  view,
}: ProjectsProps) => {
  const [isTouch, setIsTouch] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsTouch(mq.matches);

    if (mq.matches && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <figure className={`${singleProjectStyle["singleProject"]}`}>
        <div className={singleProjectStyle["singleProject__wrapperImage"]}>
          {urlMedia.includes(".mp4") ? (
            <>
              <video
                ref={videoRef}
                src={urlMedia}
                muted
                loop
                playsInline
                controls={false}
                className={singleProjectStyle["singleProject__video"]}
                onMouseEnter={(e) => {
                  if (!isTouch) {
                    e.currentTarget.play().catch(() => {});
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isTouch) {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }
                }}
              />
            </>
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
