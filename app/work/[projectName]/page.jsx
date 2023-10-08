"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LenisScroll from "@/app/components/commonComponents/LenisScroll";
import Navbar from "@/app/components/Navbar";
import CommonLoader from "@/app/components/commonComponents/CommonLoader";
import CustomCursor from "@/app/components/CustomCursor";
import Connect from "@/app/components/Connect";
import projects from "@/app/components/json/projects";
import Project from "../components/Project";

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

  console.log(projectDetails);

  return (
    <>
      <LenisScroll />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <CommonLoader
            name={projectDetails.length ? projectDetails[0].title : "Error"}
          />
        ) : null}
      </AnimatePresence>

      <Navbar />
      {(() => {
        if (projectDetails.length) {
          return <Project details={projectDetails[0]} />;
        }
        return null;
      })()}
      <Connect />
    </>
  );
};

export default ProjectPage;
