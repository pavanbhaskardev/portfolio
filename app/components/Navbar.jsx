"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import styles from "../styles/navbar.module.css";
import HamBurgerMenu from "./HamBurgerMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.container}>
      <Image src={"/logo.svg"} alt="logo" width={32} height={25} />
      <div
        className={`${styles.hamburger_container} ${
          open ? styles.close_hamburger : null
        }`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={styles.cross_icon} />
        <span className={styles.cross_icon} />
      </div>

      <AnimatePresence mode="wait">
        {open ? <HamBurgerMenu open={setOpen} /> : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
