"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/herosection.module.css";

const HeroSection = () => {
  useEffect(() => {}, []);

  return (
    <section data-scroll-section>
      <div className={`${styles.main_container}`}>
        <Image
          src={"/down_arrow.png"}
          alt="down_arrow"
          height={25}
          width={25}
          data-scroll
        />
        <p data-scroll>
          Creative Designer &<br /> Developer
        </p>
        <h1 className={`${styles.heading} heading`} data-scroll>
          Pavan Bhaskar
        </h1>

        <div className={styles.cta_container} data-scroll>
          <Image
            src={"/cta_arrow.png"}
            height={28}
            width={28}
            alt="see-my-work-arrow"
            className={styles.cta_arrow}
          />
          <Image
            src={"/cta.svg"}
            height={90}
            width={90}
            alt="see-my-work-button"
            className={styles.cta_text}
          />
        </div>
      </div>

      {[1, 2].map((e) => {
        return (
          <div key={e} data-scroll>
            <span
              className={styles.projects_banner_container}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={10}
            >
              <span>Fresh</span>
              <Image
                src={"/star_icon.png"}
                height={40}
                width={40}
                alt="star_icon"
              />
              <span>New</span>
              <Image
                src={"/star_icon.png"}
                height={40}
                width={40}
                alt="star_icon"
              />
              <span>Projects</span>
            </span>

            <span
              className={styles.projects_banner_container}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={-10}
            >
              <span>Fresh</span>
              <Image
                src={"/star_icon.png"}
                height={40}
                width={40}
                alt="star_icon"
              />
              <span>New</span>
              <Image
                src={"/star_icon.png"}
                height={40}
                width={40}
                alt="star_icon"
              />
              <span>Projects</span>
            </span>
          </div>
        );
      })}

      <div style={{ height: "100vh", background: "blue" }}></div>
      <div
        id="my_custom_div"
        style={{ height: "100vh", background: "red" }}
      ></div>
    </section>
  );
};

export default HeroSection;
