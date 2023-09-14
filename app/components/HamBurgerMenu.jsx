"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../styles/HamBurgerMenu.module.css";
import navLinks from "./json/navLinks";

const menuSlide = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0",
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  exit: {
    x: "100%",
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  },
};

const linkSlide = {
  initial: {
    x: 80,
  },
  enter: (index) => ({
    x: 0,
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    delay: 0.5 * index,
  }),
  exit: (index) => ({
    x: 80,
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    delay: 0.5 * index,
  }),
};

const HamBurgerMenu = ({ setOpen }) => {
  const pathName = usePathname();

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      initial="initial"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.links_container}>
        {navLinks.map((data, index) => {
          const { label, path } = data;
          return (
            <motion.div
              custom={index}
              variants={linkSlide}
              animate="enter"
              initial="initial"
              exit="exit"
              key={index}
            >
              <Link href={path} key={label}>
                {label}
                {pathName === path ? (
                  <span className={styles.link_icon}>•</span>
                ) : null}
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.social_links_container}>
        <a>Dribbble</a>
        <a>Github</a>
        <a>LinkedIn</a>
        <a>Instagram</a>
      </div>
    </motion.div>
  );
};

export default HamBurgerMenu;
