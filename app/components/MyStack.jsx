"use client";
import React from "react";
import styles from "../styles/mystack.module.css";
import Image from "next/image";
import { techStack } from "./json/techStack";

const MyStack = () => {
  return (
    <section>
      <p className={styles.heading}>My Stack</p>

      {/* 1st container */}
      <div className={styles.tech_stack_container}>
        {techStack.container1.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image src={src} height={30} width={30} alt={alt} />
              {name}
            </span>
          );
        })}

        {techStack.container1.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image src={src} height={30} width={30} alt={alt} />
              {name}
            </span>
          );
        })}
      </div>

      {/* 2nd container */}
      <div className={styles.tech_stack_container}>
        {techStack.container2.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image
                src={src}
                height={name === "Tailwindcss" ? 20 : 30}
                width={30}
                alt={alt}
              />
              {name}
            </span>
          );
        })}

        {techStack.container2.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image
                src={src}
                height={name === "Tailwindcss" ? 20 : 30}
                width={30}
                alt={alt}
              />
              {name}
            </span>
          );
        })}
      </div>

      {/* 3rd container */}
      <div className={styles.tech_stack_container}>
        {techStack.container3.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image src={src} height={30} width={30} alt={alt} />
              {name}
            </span>
          );
        })}

        {techStack.container3.map((data, index) => {
          const { name, src, alt } = data;
          return (
            <span key={index}>
              <Image src={src} height={30} width={30} alt={alt} />
              {name}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default MyStack;
