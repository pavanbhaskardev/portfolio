"use client";
import Image from "next/image";
import styles from "../styles/herosection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero_section_container} id="scrolling_text">
      <div
        className={styles.main_container}
        id="hero-section-container"
        data-scroll
      >
        <div className={styles.heading} data-scroll>
          <h1>Pavan Bhaskar - Pavan Bhaskar</h1>
        </div>

        <Image
          src={"/hero_section_arrow.svg"}
          alt="down_arrow"
          height={25}
          width={25}
          data-scroll
        />
        <p data-scroll>
          Creative Designer &<br /> Developer
        </p>

        <div
          className={styles.cta_container}
          role="button"
          data-scroll
          id="hero-section-container"
        >
          <Image
            src={"/cta_arrow.svg"}
            height={28}
            width={28}
            alt="see-my-work-arrow"
            className={styles.cta_arrow}
          />
          <Image
            src={"/cta_text.svg"}
            height={90}
            width={90}
            alt="see-my-work-button"
            className={styles.cta_text}
          />
        </div>
      </div>

      <div>
        {[1, 2, 3, 4, 5].map((e) => {
          const myNumber = 2;
          const uniqueId = `projects_banner_${e}`;

          return (
            <div
              className={styles.projects_banner_container}
              key={uniqueId}
              data-scroll
            >
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={(myNumber + e) % 2 === 0 ? -20 : 20} // based on sign direction changes
                // data-scroll-target="#scrolling_text"
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
    </section>
  );
};

export default HeroSection;
