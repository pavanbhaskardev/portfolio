import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/app/components/json/projects";
import styles from "../styles/nextProject.module.css";

const NextProject = ({ details }) => {
  const nextProject = projects.filter(
    (data) => details.index + 1 === data.index
  );

  console.log(nextProject);

  // if next project is there shows it
  if (nextProject.length) {
    const { title, summary, imgSrc, id } = nextProject[0];

    return (
      <>
        <section className={`${styles.project_container} project-section`}>
          <Link href={`${id}`}>
            <div className={styles.project_image}>
              <Image src={imgSrc} alt={`${title} pic`} fill />
            </div>
          </Link>
          <div className={styles.project_content}>
            <p>{title}</p>
            <span>{summary}</span>
          </div>
        </section>
      </>
    );
  }

  // next project not there shows first project
  const { title, summary, imgSrc, id } = projects[0];

  return (
    <>
      <section className={`${styles.project_container} project-section`}>
        <Link href={`${id}`}>
          <div className={styles.project_image}>
            <Image src={imgSrc} alt={`${title} pic`} fill />
          </div>
        </Link>
        <div className={styles.project_content}>
          <p>{title}</p>
          <span>{summary}</span>
        </div>
      </section>
    </>
  );
};

export default NextProject;
