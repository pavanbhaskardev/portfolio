"use client";
import React, { useEffect, useRef } from "react";
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
  const containerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    })();
  });

  return (
    <>
      <CustomCursur />

      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <MyStack />
        <Experience />
        <Testimonials />
        <Connect />
      </main>
    </>
  );
};

export default Home;
