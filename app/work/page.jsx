"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import CustomCursor from "../components/CustomCursor";
import CommonLoader from "../components/commonComponents/CommonLoader";
import LenisScroll from "../components/commonComponents/LenisScroll";
import styles from "./styles/work.module.css";
import projects from "../components/json/projects";
import Image from "next/image";

const Work = () => {
  const [loading, setLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);

    setTimeout(() => {
      setIsInView(true);
    }, 1400);
  }, []);

  const heroText = "Have a look at some of the projects I’ve worked on...";

  const heroSectionTextAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      transition: {
        delay: 0.25,
        staggerChildren: 0.015,
      },
    },
  };

  const spanAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const ProjectSection = ({ title, summary, id, src }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, threshold: 0.5 });

    return (
      <section
        ref={containerRef}
        style={{
          transform: inView ? "none" : "translateY(70px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          overflow: "hidden",
        }}
        className={`${styles.project_container} project-section`}
      >
        <Link href={`work/${id}`}>
          <div className={styles.project_image}>
            <Image src={src} fill alt={`${title} pic`} />
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
    <>
      <LenisScroll />
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="Work" /> : null}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />

      <main className={styles.parent_container}>
        {/* <p className={styles.hero_text}></p> */}

        <motion.p
          className={styles.hero_text}
          variants={heroSectionTextAnimation}
          animate={isInView ? "animate" : ""}
          initial="initial"
        >
          {heroText.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>

        {projects.map((details) => {
          const { title, summary, id, imgSrc } = details;

          return (
            <ProjectSection
              title={title}
              summary={summary}
              key={id}
              id={id}
              src={imgSrc}
            />
          );
        })}
      </main>

      <Connect />
    </>
  );
};

export default Work;
