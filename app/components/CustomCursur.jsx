"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/customcusrsur.module.css";

const CustomCursur = () => {
  // added to target cursor div
  const cursorRef = useRef();

  useEffect(() => {
    // targeted the cussor div
    const customCursor = cursorRef.current;

    // this function will change the cursor position
    const changeCusrsorPosition = (e) => {
      if (customCursor) {
        const positionX = e.clientX - customCursor.offsetWidth / 2;
        const positionY = e.clientY - customCursor.offsetHeight / 2;

        const keyFrames = {
          transform: `translate(${positionX}px, ${positionY}px)`,
        };

        customCursor.animate(keyFrames, { duration: 800, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", (e) => {
      changeCusrsorPosition(e);
    });

    //cleanup function
    return () =>
      window.removeEventListener("mousemove", (e) => {
        changeCusrsorPosition(e);
      });
  }, []);

  return (
    <a
      href="#my_custom_div"
      className={`${styles.custom_cursor_style} custom_cursor`}
      ref={cursorRef}
    ></a>
  );
};

export default CustomCursur;
