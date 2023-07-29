"use client";
import React, { useEffect, useRef } from "react";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef,
      });
    })();
  });

  return (
    <>
      <CustomCursur />

      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <MyStack />
        <AboutMe />
        <Testimonials />
        <Connect />
      </main>
    </>
  );
};

export default Home;
