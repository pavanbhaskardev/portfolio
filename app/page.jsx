"use client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import CustomCursur from "./components/CustomCursur";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <CustomCursur />
      <HeroSection />
    </>
  );
};

export default Home;
