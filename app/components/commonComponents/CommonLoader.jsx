import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/loading.module.css";

const slideAnimation = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const CommonLoader = ({ name }) => {
  return (
    <motion.div
      variants={slideAnimation}
      initial="initial"
      exit="exit"
      className={styles.loading_container}
    >
      <p>• {name}</p>
    </motion.div>
  );
};

export default CommonLoader;
