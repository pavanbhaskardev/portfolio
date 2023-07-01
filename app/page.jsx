"use client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import styles from "./styles/herosection.module.css";
import CustomCursur from "./components/CustomCursur";

const Home = () => {
  // these are to initialize locomotive scroll

  return (
    <>
      <section className={styles.main_container} data-scroll-section>
        <h1 className={`${styles.heading} heading1`} data-scroll>
          sateesh challa
        </h1>
      </section>
      <section className={styles.main_container} data-scroll-section>
        <h1 className={`${styles.heading} heading1`} data-scroll>
          Pavan Bhaskar
        </h1>
      </section>
      <CustomCursur />
    </>
  );
};

export default Home;
