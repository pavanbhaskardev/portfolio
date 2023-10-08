import React from "react";
import Image from "next/image";
import styles from "../styles/project.module.css";
import AnimatedButton from "../../components/commonComponents/AnimatedButton";
import NextProject from "./NextProject";
import ImageGallery from "./ImageGallery";
import RedirectArrow from "./RedirectArrow";

const Project = ({ details }) => {
  const {
    index,
    id,
    title,
    imgSrc,
    siteUrl,
    description,
    builtOn,
    services,
    imageGallery,
  } = details;

  return (
    <section className={styles.container}>
      <header className={styles.title_container}>
        <p className={styles.project_title}>{title}</p>

        <AnimatedButton>
          <a
            href={siteUrl}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.redirect_btn}
          >
            Live site
            <RedirectArrow />
          </a>
        </AnimatedButton>
      </header>

      <main className={styles.main}>
        <div className={styles.project_image}>
          <Image src={imgSrc} alt={`${title} pic`} fill />
        </div>

        <p className={styles.description}>{description}</p>
      </main>

      <div>
        <div className={styles.details_container}>
          <p>Services</p>
          <span>
            {services.map((details, index) => {
              if (index === services.length - 1) {
                return details;
              }
              return `${details}, `;
            })}
          </span>
        </div>

        <div className={styles.details_container}>
          <p>Built on</p>
          <span>
            {builtOn.map((details, index) => {
              if (index === builtOn.length - 1) {
                return details;
              }
              return `${details}, `;
            })}
          </span>
        </div>
      </div>

      <ImageGallery imageGallery={imageGallery} />

      <p className={styles.heading}>Next Case</p>
      <NextProject details={details} />
    </section>
  );
};

export default Project;
