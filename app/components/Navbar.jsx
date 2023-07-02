import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container} data-scroll-section>
      <Image src={"/logo.svg"} alt="logo" width={32} height={25} />
      <div className={styles.hamburger_container}></div>
    </header>
  );
};

export default Navbar;
