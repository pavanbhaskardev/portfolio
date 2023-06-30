"use client";
import styles from "../styles/customcusrsur.module.css";

const CustomCursur = () => {
  // targeted the cussor div
  const customCusrsor = document.getElementsByClassName(
    styles.custom_cursor
  )[0];

  // this function will change the cursor position
  const changeCusrsorPosition = (e) => {
    if (customCusrsor) {
      const positionX = e.clientX - customCusrsor.offsetWidth / 2;
      const positionY = e.clientY - customCusrsor.offsetWidth / 2;

      customCusrsor.style.top = `${positionY}px`;
      customCusrsor.style.left = `${positionX}px`;
    }
  };
  window.addEventListener("mousemove", (e) => changeCusrsorPosition(e));

  return <div className={styles.custom_cursor}></div>;
};

export default CustomCursur;
