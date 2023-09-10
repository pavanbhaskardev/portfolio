"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import CustomCursor from "../components/CustomCursor";
import CommonLoader from "../components/commonComponents/CommonLoader";

const Work = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="Work" /> : null}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <p>Work</p>
      <Connect />
    </>
  );
};

export default Work;
