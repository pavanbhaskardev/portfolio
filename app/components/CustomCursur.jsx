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
    const changeCusrsorPosition = (e, interacting) => {
      if (customCusrsor) {
        const positionX = e.clientX - customCusrsor.offsetWidth / 2;
        const positionY = e.clientY - customCusrsor.offsetHeight / 2;

        const keyFrames = {
          transform: `translate(${positionX}px, ${positionY}px) scale(${
            interacting ? 8 : 1
          })`,
        };

        customCusrsor.animate(keyFrames, { duration: 800, fill: "forwards" });
      }
      console.log("interacting", interacting);
    };

    window.onmousemove = (e) => {
      const intractable = e.target.closest(".heading1"),
        interacting = intractable !== null;
      changeCusrsorPosition(e, interacting);
    };
  }, []);

  return <div className={styles.custom_cursor}></div>;
};

export default CustomCursur;
