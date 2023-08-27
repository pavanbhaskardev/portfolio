"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import CustomCursur from "../components/CustomCursur";
import CommonLoader from "../components/commonComponents/CommonLoader";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="About" /> : null}
      </AnimatePresence>

      <CustomCursur />
      <Navbar />
      <p>About</p>
      <Connect />
    </>
  );
};

export default About;
