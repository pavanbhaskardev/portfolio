"use client";
import React from "react";
import styles from "../styles/connect.module.css";

const Connect = () => {
  return (
    <section data-scroll-section className={styles.parent_container}>
      <p className={styles.heading} data-scroll>
        Connect
      </p>

      <section data-scroll className={styles.connect_container}>
        <div className={styles.connect_btn_container}>
          <a>LinkedIn</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Dribbble</a>
        </div>

        <div className={styles.mail_number_container}>
          <div>
            <p>Email</p>
            <a>pavanbhaskardev@gmail.com</a>
          </div>

          <div>
            <p>Phone</p>
            <a>+91 9440 777 253</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Connect;
