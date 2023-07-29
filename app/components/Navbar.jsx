"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Image src={"/logo.svg"} alt="logo" width={32} height={25} data-scroll />
      <div className={styles.hamburger_container} data-scroll></div>
    </header>
  );
};

export default Navbar;
