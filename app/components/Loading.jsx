"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/loading.module.css";

const slideAnimation = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};

const words = [
  "బాగున్నారా",
  "नमस्ते",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const Loading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () => {
        setIndex((index) => index + 1);
      },
      index == 0 ? 1000 : 500
    );
  }, [index]);
  return (
    <motion.div
      variants={slideAnimation}
      initial="initial"
      exit="exit"
      className={styles.loading_container}
      data-scroll
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Loading;