"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  const containerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ProjectsSectionRef = useRef(null);
  const customCursurRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef,
        smooth: true,
        smartPhone: { smooth: true },
        tablet: { smooth: true },
      });

      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2700);
    })();
  }, []);

  // scrolls to the project section
  const scrollToProjectSection = () => {
    const projectsSection = ProjectsSectionRef.current;
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CustomCursur ref={customCursurRef} />
      <AnimatePresence mode="wait">{loading && <Loading />}</AnimatePresence>

      <main data-scroll-container ref={containerRef}>
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
