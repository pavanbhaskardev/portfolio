"use client";
import React from "react";
import Button from "./commonComponents/Button";
import styles from "../styles/connect.module.css";

const Connect = () => {
  return (
    <section className={styles.parent_container}>
      <p className={styles.heading} data-scroll>
        Connect
      </p>

      <section data-scroll className={styles.connect_container}>
        <div className={styles.connect_btn_parent_container}>
          <Button>
            <a className={styles.connect_btn_container}>LinkedIn</a>
          </Button>
          <Button>
            <a className={styles.connect_btn_container}>Dribbble</a>
          </Button>
        </div>
        <div className={styles.connect_btn_parent_container}>
          <Button>
            <a className={styles.connect_btn_container}>Github</a>
          </Button>
          <Button>
            <a className={styles.connect_btn_container}>Instagram</a>
          </Button>
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
