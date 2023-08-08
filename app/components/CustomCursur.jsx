"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/customcusrsur.module.css";

const CustomCursur = () => {
  // added to target cursor div
  const cursorRef = useRef();

  useEffect(() => {
    // targeted the cussor div
    const customCursor = cursorRef.current;
    console.log("my first commit from macbook");

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

    // custom cursor displays on big screens

    if (window.innerWidth < 1024) {
      customCursor.style.display = "none";
    }

    const handleResize = (e) => {
      const screenWidth = e.target.innerWidth;
      if (screenWidth < 1024) {
        customCursor.style.display = "none";
      } else {
        customCursor.style.display = "block";
      }
    };

    window.addEventListener("resize", (e) => handleResize(e));

    //cleanup function
    return () => {
      window.removeEventListener("mousemove", (e) => {
        changeCusrsorPosition(e);
      });

      window.removeEventListener("resize", (e) => handleResize(e));
    };
  }, []);

  return (
    <div
      className={`${styles.custom_cursor_style} custom_cursor`}
      ref={cursorRef}
    ></div>
  );
};

export default CustomCursur;
