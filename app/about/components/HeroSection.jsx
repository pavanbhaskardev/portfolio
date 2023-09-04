import React from "react";
import Image from "next/image";
import styles from "../styles/herosection.module.css";

const HeroSection = () => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.hero_section_container}>
          <p className={styles.heading}>
            Hi, I’m Pavan Bhaskar. A frontend developer & UI designer living in
            Hyderabad.
          </p>

          <Image
            src={"/profile_pic.png"}
            alt="pavan_bhaskar_pic"
            height={300}
            width={235}
          />
        </div>

        <p>
          My Interest in web-development started by creating a website to my
          father.
        </p>
      </section>
    </>
  );
};

export default HeroSection;
