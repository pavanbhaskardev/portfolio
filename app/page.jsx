"use client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollingText from "./components/ScrollingText";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";

const Home = () => {
  return (
    <>
      <Navbar />
      <CustomCursur />
      <HeroSection />
      <ScrollingText />
      <ProjectsSection />
      <MyStack />
      <AboutMe />
      <Testimonials />
      <Connect />
    </>
  );
};

export default Home;
