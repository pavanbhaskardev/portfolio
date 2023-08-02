"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "../styles/mystack.module.css";
import { techStack } from "./json/techStack";

const MyStack = () => {
  const containerSliderRef1 = useRef(null);
  const container1Stack1 = useRef(null);
  const container1Stack2 = useRef(null);

  const containerSliderRef2 = useRef(null);
  const container2Stack1 = useRef(null);
  const container2Stack2 = useRef(null);

  const containerSliderRef3 = useRef(null);
  const container3Stack1 = useRef(null);
  const container3Stack2 = useRef(null);

  let xPercent = 0;
  let scrollDirection = -1;

  const containerScroll1 = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(container1Stack1.current, { xPercent: xPercent });
    gsap.set(container1Stack2.current, { xPercent: xPercent });
    xPercent += 0.25 * scrollDirection;
    requestAnimationFrame(containerScroll1);
  };

  const containerScroll2 = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(container2Stack1.current, { xPercent: xPercent });
    gsap.set(container2Stack2.current, { xPercent: xPercent });
    xPercent += 0.25 * scrollDirection;
    requestAnimationFrame(containerScroll2);
  };

  useEffect(() => {
    requestAnimationFrame(containerScroll1);
    requestAnimationFrame(containerScroll2);
  }, []);

  return (
    <section className={styles.my_stack_parent_container}>
      <p className={styles.heading}>My Stack</p>

      {/* 1st container */}
      <div className={styles.tech_stack_container} ref={containerSliderRef1}>
        <div className={styles.tech_stack} ref={container1Stack1}>
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

        <div className={styles.tech_stack} ref={container1Stack2}>
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
      </div>

      {/* 2nd container */}
      <div className={styles.tech_stack_container} ref={containerSliderRef2}>
        <div className={styles.tech_stack} ref={container2Stack1}>
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

        <div className={styles.tech_stack} ref={container2Stack2}>
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
      </div>

      {/* 3rd container */}
      {/* <div className={styles.tech_stack_container}>
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
      </div> */}
    </section>
  );
};

export default MyStack;
