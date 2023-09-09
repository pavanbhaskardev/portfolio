import React from "react";
import Image from "next/image";
import styles from "../styles/herosection.module.css";
import ImageSlide from "./ImageSlide";

const HeroSection = () => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.hero_section_container}>
          <p className={styles.heading}>
            Hi, I’m Pavan Bhaskar. A frontend developer & UI designer living in
            Hyderabad.
          </p>

          <div className={styles.image_container}>
            <ImageSlide
              src="/profile_pic.png"
              className={styles.hero_section_pic}
            />
          </div>
        </div>

        <p>It all started with a dream of creating a website to my father.</p>
      </section>
    </>
  );
};

export default HeroSection;
