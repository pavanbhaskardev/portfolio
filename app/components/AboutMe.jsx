"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/about.module.css";

const AboutMe = () => {
  const spanRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    scrollAnimation();
  }, []);

  const phrase =
    "Helping brands to bring their ideas to life. Together lets build great things. No nonsense, always on the cutting edge.";

  const splitWords = () => {
    const wordsArray = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      wordsArray.push(<p key={`word_${index}`}>{letters}</p>);
    });

    return wordsArray;
  };

  const splitLetters = (word) => {
    const lettersArray = [];
    if (word !== undefined) {
      word.split("").forEach((letter, index) => {
        lettersArray.push(
          <span ref={(e) => spanRef.current.push(e)} key={`letter_${index}`}>
            {letter}
          </span>
        );
      });
    }

    return lettersArray;
  };

  const scrollAnimation = () => {
    gsap.to(spanRef.current, {
      opacity: 1,
      ease: "none",
      stagger: 3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-=300",
        end: "=100",
        scrub: true,
      },
    });
  };

  return (
    <section className={styles.about_container} ref={containerRef}>
      <p className={styles.heading} data-scroll>
        About Me
      </p>

      <main className={styles.about_content}>{splitWords()}</main>
    </section>
  );
};

export default AboutMe;
