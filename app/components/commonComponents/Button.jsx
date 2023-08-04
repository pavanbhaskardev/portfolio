import React, { useEffect, useRef } from "react";
import styles from "../../styles/button.module.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

const Button = ({ children }) => {
  const circleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);
  }, []);

  const handleMouseEnter = (event) => {
    gsap.to(circleRef, { top: "-100%", duration: 0.5 });
  };

  const handleMouseLeave = (event) => {};

  return (
    <div
      className={styles.button_container}
      // style={{ overflow: "hidden" }}
      onMouseEnter={(e) => {
        console.log("hovered");
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {children}
      <div className={styles.circle} ref={circleRef}></div>
    </div>
  );
};

export default Button;
