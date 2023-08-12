"use client";
import React, { forwardRef } from "react";
import styles from "../styles/projectsection.module.css";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <p className={styles.heading}>Projects</p>

      <section className={styles.project_container}>
        <div className={styles.project}>
          <div className={styles.project_content_container}>
            <div className={styles.project_content}>
              <p style={{ fontSize: "0.6875rem" }}>Shades Generator</p>
              <p style={{ fontSize: "0.5rem" }}>Web app</p>
            </div>
          </div>
        </div>

        <div className={`${styles.project} ${styles.project_col_span_2}`}>
          <div className={styles.project}>
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

        <div className={`${styles.project} ${styles.project_col_span_2}`}>
          <div className={styles.project}>
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

        <div className={styles.project}>
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
    </section>
  );
});

export default ProjectsSection;
