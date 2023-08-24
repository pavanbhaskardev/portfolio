"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/customcusrsur.module.css";
import cursorPosition from "./utils/cursorPosition";

const CustomCursur = forwardRef((props, ref) => {
  const { x, y } = cursorPosition();
  const size = 20;

  return (
    <motion.div
      animate={{
        x: x - size / 2,
        y: y - size / 2,
        height: size,
        width: size,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      className={`${styles.custom_cursor_style} custom_cursor`}
      ref={ref}
    ></motion.div>
  );
});

export default CustomCursur;
