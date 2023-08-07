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
  const ProjectsSectionRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: containerRef,
        smooth: true,
        // smartphone: { smooth: true },
        // tablet: { smooth: true },
      });
    })();

    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  // scrolls to the project section
  const scrollToProjectSection = () => {
    const projectsSection = ProjectsSectionRef.current;
    locomotiveScrollRef.current.scrollTo(projectsSection);
  };

  return (
    <>
      <CustomCursur />

      <main data-scroll-container ref={containerRef}>
        <AnimatePresence mode="wait">{loading && <Loading />}</AnimatePresence>

        <Navbar />
        <HeroSection scrollToProjectSection={scrollToProjectSection} />
        <AboutMe />
        <ProjectsSection ref={ProjectsSectionRef} />
        <MyStack />
        <Experience />
        <Testimonials />
        <Connect />
      </main>
    </>
  );
};

export default Home;
