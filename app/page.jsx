"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";
import CommonLoader from "./components/commonComponents/CommonLoader";
import LenisScroll from "./components/commonComponents/LenisScroll";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState();
  const containerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ProjectsSectionRef = useRef(null);
  const customCursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const alreadyLoaded = sessionStorage.getItem("initialLoading");
    setInitialLoading(alreadyLoaded);

    // this is for loading animation
    if (alreadyLoaded) {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
      }, 800);
    } else {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
        sessionStorage.setItem("initialLoading", true);
      }, 2500);
    }

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
          gsap.to(containerRef.current, {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(containerRef.current, {
            backgroundColor: previousBgColor,
            color: previousTextColor,
            overwrite: "auto",
          });
        },
      });
    });
  }, []);

  // scrolls to the project section
  const scrollToProjectSection = () => {
    const projectsSection = ProjectsSectionRef.current;

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CustomLoader = () => {
    if (initialLoading) {
      return <CommonLoader name="Home" />;
    }

    return <Loading />;
  };

  return (
    <>
      <LenisScroll />
      <CustomCursor ref={customCursorRef} />
      <AnimatePresence mode="wait">
        {loading ? <CustomLoader /> : null}
      </AnimatePresence>

      <main className="main_container" ref={containerRef}>
        <Navbar />
        <HeroSection scrollToProjectSection={scrollToProjectSection} />
        <AboutMe />
        <ProjectsSection ref={ProjectsSectionRef} />
        <MyStack />
        <Experience />
        <Testimonials ref={testimonialsRef} />
        <Connect />
      </main>
    </>
  );
};

export default Home;
