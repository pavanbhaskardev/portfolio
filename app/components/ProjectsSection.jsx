"use client";
import React, { forwardRef } from "react";
import styles from "../styles/projectsection.module.css";
import projects from "./json/projects";

const ProjectsSection = forwardRef((props, ref) => {
  const featuredProjects = projects.filter((details) => details.featured);

  return (
    <section
      ref={ref}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
      className={styles.parent_container}
    >
      <p className={styles.heading}>Selected Work</p>

      {featuredProjects.map((details) => {
        const { title, summary, id } = details;

        return (
          <section
            className={`${styles.project_container} project-section`}
            key={id}
          >
            <div className={styles.project_image}></div>
            <div className={styles.project_content}>
              <p>{title}</p>
              <span>{summary}</span>
            </div>
          </section>
        );
      })}
    </section>
  );
});

export default ProjectsSection;
