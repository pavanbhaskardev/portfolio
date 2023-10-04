"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LenisScroll from "@/app/components/commonComponents/LenisScroll";
import Navbar from "@/app/components/Navbar";
import CommonLoader from "@/app/components/commonComponents/CommonLoader";
import projects from "@/app/components/json/projects";

const ProjectPage = ({ params }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  });

  const projectDetails = projects.filter(
    (details) => details.id === params.projectName
  );

  // destructured all the properties
  const { id, title, summary, imgSrc, siteUrl, featured } = projectDetails[0];

  return (
    <>
      <LenisScroll />
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name={title} /> : null}
      </AnimatePresence>

      <Navbar />
      <div>ProjectPage</div>
    </>
  );
};

export default ProjectPage;
