"use client";
import React from "react";
import styles from "../styles/projectsection.module.css";

const ProjectsSection = () => {
  return (
    <section className={styles.project_container} data-scroll-section>
      <div className={styles.project} data-scroll>
        <div className={styles.project_content_container}>
          <div className={styles.project_content}>
            <p style={{ fontSize: "0.6875rem" }}>Shades Generator</p>
            <p style={{ fontSize: "0.5rem" }}>Web app</p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.project} ${styles.project_col_span_2}`}
        data-scroll
      >
        <div className={styles.project} data-scroll>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p style={{ fontSize: "0.6875rem" }}>Track, Manage, Analyze</p>
              <span>
                <p style={{ fontSize: "0.5rem" }}>Web app</p>
                <p style={{ fontSize: "0.5rem" }}>Savingspree</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.project} ${styles.project_col_span_2}`}
        data-scroll
      >
        <div className={styles.project} data-scroll>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p style={{ fontSize: "0.6875rem" }}>
                Where lawyers & people meet
              </p>
              <span>
                <p style={{ fontSize: "0.5rem" }}>Website</p>
                <p style={{ fontSize: "0.5rem" }}>Mr.Lawyer</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.project} data-scroll>
        <div className={styles.project_content_container}>
          <div className={styles.project_content}>
            <p style={{ fontSize: "0.6875rem" }}>Clothing</p>
            <span>
              <p style={{ fontSize: "0.5rem" }}>Website</p>
              <p style={{ fontSize: "0.5rem" }}>Avis Tailors</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
