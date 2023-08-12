"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/herosection.module.css";

const HeroSection = ({ scrollToProjectSection }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let scrollDirection = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // when we scroll change the text direction
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "top",
        end: window.innerHeight,
        onUpdate: (e) => {
          scrollDirection = e.direction * -1;
        },
      },
      x: "-300px",
    });

    requestAnimationFrame(textScroll);
  }, []);

  const textScroll = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(textScroll);
    xPercent += 0.25 * scrollDirection;
  };

  return (
    <section className={styles.hero_section_container}>
      <div className={styles.sliding_text_container}>
        <div className={styles.sliding_text} ref={sliderRef}>
          <p ref={firstText}>Pavan Bhaskar -</p>
          <p ref={secondText}>Pavan Bhaskar -</p>
        </div>
      </div>

      <div className={styles.main_container}>
        <Image
          src={"/hero_section_arrow.svg"}
          alt="down_arrow"
          height={25}
          width={25}
        />
        <p>
          Creative Designer &<br /> Developer
        </p>

        <div
          className={styles.cta_container}
          role="button"
          onClick={() => scrollToProjectSection()}
        >
          <Image
            src={"/cta_arrow.svg"}
            height={28}
            width={28}
            alt="see-my-work-arrow"
            className={styles.cta_arrow}
          />
          <Image
            src={"/cta_text.svg"}
            height={90}
            width={90}
            alt="see-my-work-button"
            className={styles.cta_text}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
