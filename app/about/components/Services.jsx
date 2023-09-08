"use client";
import React, { useState, useRef } from "react";
import styles from "../styles/services.module.css";
import services from "@/app/components/json/services";

const Services = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  console.log("isOpen", isOpen);

  const handleIsOpen = (id) => {
    const newArray = isOpen.map((state, index) => {
      if (id === index) {
        return !state;
      }
      return false;
    });
    setIsOpen(newArray);
  };

  return (
    <>
      <section className={styles.main}>
        <p className={styles.heading}>Services</p>

        {services.map((data, index) => {
          const { title, content } = data;
          return (
            <div className={styles.services_container} key={index + 1}>
              <div className={styles.services_header}>
                <p>{index + 1}</p>
                <p>{title}</p>

                <div
                  className={`${styles.btn} ${
                    isOpen[index] ? styles.btn_rotate : null
                  }`}
                  onClick={() => handleIsOpen(index)}
                >
                  <span className={styles.plus_icon}></span>
                  <span className={styles.plus_icon}></span>
                </div>
              </div>
              <div
                className={`${styles.services_content_hide} ${
                  isOpen[index] ? styles.services_content_view : null
                }`}
              >
                {content}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Services;
