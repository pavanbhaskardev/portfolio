"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./components/Loading";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const testimonialsRef = useRef(null);
  const ProjectsSectionRef = useRef(null);
  const customCursurRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // this is for loading animation
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2500);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // this is background change animation
    const sectionColor = document.querySelectorAll("[data-bgcolor]");
    sectionColor.forEach((colorSection, index) => {
      const previousBgColor =
        index === 0 ? "" : sectionColor[index - 1].dataset.bgcolor;

      const previousTextColor =
        index === 0 ? "" : sectionColor[index - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        start: "top 50%",
        onEnter: () => {
          gsap.to(".main_container", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(".main_container", {
            backgroundColor: previousBgColor,
            color: previousTextColor,
            overwrite: "auto",
          });
        },
      });
    });

    // cleanup functions
    return () => {
      lenis.destroy();
    };
  }, []);

  // scrolls to the project section
  const scrollToProjectSection = () => {
    const projectsSection = ProjectsSectionRef.current;
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main_container">
      <CustomCursur ref={customCursurRef} />
      <AnimatePresence mode="wait">
        {loading ? <Loading /> : null}
      </AnimatePresence>

      <Navbar />
      <HeroSection scrollToProjectSection={scrollToProjectSection} />
      <AboutMe />
      <ProjectsSection ref={ProjectsSectionRef} />
      <MyStack />
      <Experience />
      <Testimonials ref={testimonialsRef} />
      <Connect />
    </main>
  );
};

export default Home;
