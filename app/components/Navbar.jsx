"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.container}>
      <Image src={"/logo.svg"} alt="logo" width={32} height={25} data-scroll />
      <div
        className={`${styles.hamburger_container} ${
          active && styles.close_hamburger
        }`}
        data-scroll
        onClick={() => setActive((current) => !current)}
      >
        <span className={styles.cross_icon} />
        <span className={styles.cross_icon} />
      </div>
    </header>
  );
};

export default Navbar;
