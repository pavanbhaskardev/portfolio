"use client";
import React, { useEffect } from "react";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    })();
  });

  return (
    <>
      <CustomCursur />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <MyStack />
      <AboutMe />
      <Testimonials />
      <Connect />
    </>
  );
};

export default Home;
