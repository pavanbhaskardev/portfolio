"use client";
import LocomotiveScroll from "locomotive-scroll";
import { useRef, useEffect } from "react";
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

  console.log("lets see", ref.current);

  return (
    <>
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
