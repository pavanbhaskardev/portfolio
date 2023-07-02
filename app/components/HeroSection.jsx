import Image from "next/image";
import styles from "../styles/herosection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.main_container} data-scroll-section>
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
      <h1 className={styles.heading} data-scroll>
        Pavan Bhaskar
      </h1>
      <p>See my work - See my work</p>
    </section>
  );
};

export default HeroSection;
