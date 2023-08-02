"use client";
import React from "react";
import styles from "../styles/experience.module.css";

const Experience = () => {
  return (
    <section>
      <p className={styles.heading} data-scroll>
        Experience
      </p>

      <div className={styles.experience_container} data-scroll>
        <h2>Now</h2>
        <p>
          Fast forward today, i'm working as Frontend-developer at Netenrich
        </p>
      </div>

      <div className={styles.experience_container} data-scroll>
        <h2>2022</h2>
        <p>
          Back 2022, I decided to create a website for my father. That interest
          has led me to learn web-development.
        </p>
      </div>
    </section>
  );
};

export default Experience;
