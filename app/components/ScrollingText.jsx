"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/scrollingtext.module.css";

const ScrollingText = () => {
  return (
    <div data-scroll-section>
      {[1, 2, 3, 4].map((e) => {
        const myNumber = 2;
        return (
          <div className={styles.projects_banner_container} key={e}>
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={(myNumber + e) % 2 === 0 ? -20 : 20} // based on sign direction changes
              data-scroll-target="#hero-section-container"
            >
              Fresh
              <Image
                className={styles.star_logo}
                src={"/star_icon.png"}
                height={40}
                width={40}
                alt="star_icon"
              />
              New
              <Image
                src={"/star_icon.png"}
                className={styles.star_logo}
                height={40}
                width={40}
                alt="star_icon"
              />
              Projects
              <Image
                src={"/star_icon.png"}
                className={styles.star_logo}
                height={40}
                width={40}
                alt="star_icon"
              />
              Fresh
              <Image
                src={"/star_icon.png"}
                className={styles.star_logo}
                height={40}
                width={40}
                alt="star_icon"
              />
              New
              <Image
                src={"/star_icon.png"}
                className={styles.star_logo}
                height={40}
                width={40}
                alt="star_icon"
              />
              Projects
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollingText;
