"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import CustomCursor from "../components/CustomCursor";
import CommonLoader from "../components/commonComponents/CommonLoader";
import LenisScroll from "../components/commonComponents/LenisScroll";
import styles from "./styles/work.module.css";
import projects from "../components/json/projects";

const Work = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  return (
    <>
      <LenisScroll />
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="Work" /> : null}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />

      <main className={styles.parent_container}>
        <p className={styles.hero_text}>
          Have a look at some of the projects I’ve worked on...
        </p>

        {projects.map((details) => {
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
      </main>

      <Connect />
    </>
  );
};

export default Work;
