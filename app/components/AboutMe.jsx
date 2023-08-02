import React from "react";
import styles from "../styles/about.module.css";

const AboutMe = () => {
  return (
    <section className={styles.about_container}>
      <p className={styles.heading} data-scroll>
        About Me
      </p>

      <p className={styles.about_content}>
        Helping brands to bring their ideas to life. Together lets build great
        things. No nonsense, always on the cutting edge.
      </p>
    </section>
  );
};

export default AboutMe;
