"use client";
import React, { forwardRef } from "react";
import styles from "../styles/projectsection.module.css";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
      className={styles.parent_container}
    >
      <p className={styles.heading}>Projects</p>

      <section className={styles.project_container}>
        <div className={`${styles.project} project-section`}>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p className={styles.project_tagline}>Track, Manage, Analyze</p>
              <span className={styles.project_meta}>
                <p>Web app</p>
                <p>Savingspree</p>
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.project} project-section`}>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p className={styles.project_tagline}>Shades Generator</p>
              <p className={styles.project_meta}>Web app</p>
            </div>
          </div>
        </div>

        <div className={`${styles.project} project-section`}>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p className={styles.project_tagline}>Clothing</p>
              <span className={styles.project_meta}>
                <p>Website</p>
                <p>Avis Tailors</p>
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.project} project-section`}>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p className={styles.project_tagline}>
                Where lawyers & people meet
              </p>
              <span className={styles.project_meta}>
                <p>Website</p>
                <p>Mr.Lawyer</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});

export default ProjectsSection;
