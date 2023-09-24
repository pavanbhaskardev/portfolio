"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "../styles/customCursor.module.css";

const CustomCursor = forwardRef((props, ref) => {
  // added to target cursor div
  const cursorRef = useRef();
  const [insideProjectSection, setInsideProjectSection] = useState(false);

  useEffect(() => {
    // targeted the cursor div
    const customCursor = cursorRef.current;

    // this function will change the cursor position
    const changeCursorPosition = (e, inside) => {
      if (customCursor) {
        const positionX = e.clientX - customCursor.offsetWidth / 2;
        const positionY = e.clientY - customCursor.offsetHeight / 2;

        const keyFrames = {
          transform: `translate(${positionX}px, ${positionY}px) scale(${
            inside ? 6 : 1
          })`,
        };

        if (inside) {
          setInsideProjectSection(true);
        } else {
          setInsideProjectSection(false);
        }

        customCursor.animate(keyFrames, { duration: 800, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", (e) => {
      const insideProjectSection = e.target.closest(".project-section");
      const inside = insideProjectSection !== null;

      customCursor.dataset.type = inside ? "true" : "";

      changeCursorPosition(e, inside);
    });

    //cleanup function
    return () => {
      window.removeEventListener("mousemove", (e) => {
        changeCursorPosition(e);
      });
    };
  }, []);

  return (
    <div
      className={`${styles.custom_cursor_style} custom_cursor ${
        insideProjectSection ? styles.no_mix_blend : ""
      }`}
      ref={cursorRef}
    >
      <span>open</span>
    </div>
  );
});

export default CustomCursor;
