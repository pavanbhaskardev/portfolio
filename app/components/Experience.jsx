import React from "react";
import styles from "../styles/experience.module.css";

const Experience = () => {
  return (
    <section data-bgcolor="#eeeeee" data-textcolor="#181818">
      <p className={styles.heading} data-scroll data-scroll-speed={0.03}>
        Experience
      </p>

      <div className={styles.experience_container}>
        <h2 className={styles.timeline}>Now</h2>
        <span>
          <h2>Frontend Developer</h2>
          <p>Netenrich</p>
        </span>
      </div>

      <div className={styles.experience_container}>
        <h2 className={styles.timeline}>2022</h2>
        <span>
          <h2>Started Web Development</h2>
          <p>self learning</p>
        </span>
      </div>
    </section>
  );
};

export default Experience;
