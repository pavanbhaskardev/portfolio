"use client";
import { useEffect } from "react";
import styles from "../styles/customcusrsur.module.css";

const CustomCursur = () => {
  useEffect(() => {
    // targeted the cussor div
    const customCusrsor = document.getElementsByClassName(
      styles.custom_cursor
    )[0];

    // this function will change the cursor position
    const changeCusrsorPosition = (e) => {
      if (customCusrsor) {
        const positionX = e.clientX - customCusrsor.offsetWidth / 2;
        const positionY = e.clientY - customCusrsor.offsetHeight / 2;

        const keyFrames = {
          transform: `translate(${positionX}px, ${positionY}px)`,
        };

        customCusrsor.animate(keyFrames, { duration: 800, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", (e) => {
      changeCusrsorPosition(e);
    });
  }, []);

  return <div className={styles.custom_cursor}></div>;
};

export default CustomCursur;
