"use client";
import React, { useState } from "react";
import styles from "../styles/services.module.css";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.main}>
        <p className={styles.heading}>Services</p>
        <div className={styles.services_container}>
          <div className={styles.services_header}>
            <p>1</p>
            <p>Frontend development</p>

            <div
              className={`${styles.btn} ${isOpen ? styles.btn_rotate : null}`}
              onClick={() => setIsOpen((current) => !current)}
            >
              +
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
