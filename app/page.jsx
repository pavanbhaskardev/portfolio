"use client";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import CustomCursur from "./components/CustomCursur";
import styles from "./styles/herosection.module.css";

const Home = () => {
  // these are to initialize locomotive scroll
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
      });
    }
  }, []);

  return (
    <>
      <CustomCursur />
      <main data-scroll-container ref={ref}>
        <section className={styles.main_container} data-scroll-section>
          <h1 className={styles.heading} data-scroll>
            sateesh challa
          </h1>
        </section>
        <section className={styles.main_container} data-scroll-section>
          <h1 className={styles.heading} data-scroll>
            Pavan Bhaskar
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
