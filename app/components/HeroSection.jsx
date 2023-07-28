"use client";
import Image from "next/image";
import styles from "../styles/herosection.module.css";

const HeroSection = () => {
  return (
    <section
      data-scroll-section
      className={styles.hero_section_container}
      id="hero-section-container"
    >
      <div className={styles.main_container} data-scroll-section>
        <div className={styles.heading} data-scroll-section>
          <h1 data-scroll>Pavan Bhaskar - Pavan Bhaskar</h1>
        </div>

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

        <div className={styles.cta_container} role="button" data-scroll-section>
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
    </section>
  );
};

export default HeroSection;
