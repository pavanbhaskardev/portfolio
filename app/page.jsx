"use client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <CustomCursur />
      <HeroSection />
      <ProjectsSection />
      <MyStack />
      <AboutMe />
      <Testimonials />
    </>
  );
};

export default Home;
