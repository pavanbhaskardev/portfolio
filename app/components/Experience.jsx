import React from "react";
import styles from "../styles/experience.module.css";

const Experience = () => {
  return (
    <section>
      <p className={styles.heading}>Experience</p>

      <div className={styles.experience_container}>
        <h2>Now</h2>
        <span>
          <h2>Frontend Developer</h2>
          <p>Netenrich</p>
        </span>
      </div>

      <div className={styles.experience_container}>
        <h2>2022</h2>

        <span>
          <h2>Started Web Development</h2>
          <p>self learning</p>
        </span>
      </div>
    </section>
  );
};

export default Experience;
