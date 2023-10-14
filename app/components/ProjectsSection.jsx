"use client";
import React, { forwardRef, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/projectsection.module.css";
import projects from "./json/projects";

const ProjectsSection = forwardRef((props, ref) => {
  const featuredProjects = projects.filter((details) => details.featured);

  const Project = ({ title, summary, id, src }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, threshold: 0.5 });

    return (
      <section
        className={`${styles.project_container} project-section`}
        ref={containerRef}
        style={{
          transform: inView ? "none" : "translateY(70px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          overflow: "hidden",
        }}
      >
        <Link href={`work/${id}`}>
          <div className={styles.project_image}>
            <Image src={src} alt={`${title} pic`} fill />
          </div>
        </Link>
        <div className={styles.project_content}>
          <p>{title}</p>
          <span>{summary}</span>
        </div>
      </section>
    );
  };

  return (
    <section
      ref={ref}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
      className={styles.parent_container}
    >
      <p className={styles.heading}>Featured Work</p>

      {featuredProjects.map((details) => {
        const { title, summary, id, imgSrc } = details;

        return (
          <Project
            title={title}
            summary={summary}
            key={id}
            id={id}
            src={imgSrc}
          />
        );
      })}
    </section>
  );
});

export default ProjectsSection;
