"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LenisScroll from "@/app/components/commonComponents/LenisScroll";
import Navbar from "@/app/components/Navbar";
import CommonLoader from "@/app/components/commonComponents/CommonLoader";

const ProjectPage = ({ params }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  });

  const projectName = params.projectName;

  const capitalizedProjectName =
    projectName.charAt(0).toUpperCase() + projectName.slice(1);

  return (
    <>
      <LenisScroll />
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name={capitalizedProjectName} /> : null}
      </AnimatePresence>

      <Navbar />
      <div>ProjectPage</div>
    </>
  );
};

export default ProjectPage;
