"use client";
import { useEffect, useState } from "react";

// gives the x & y positions
const cursorPosition = () => {
  const [cursurPosition, setCusrsurPosition] = useState({ x: null, y: null });

  const updateCursurPosition = (e) => {
    setCusrsurPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => updateCursurPosition(e));

    return () => {
      window.removeEventListener("mousemove", (e) => updateCursurPosition(e));
    };
  }, []);

  return cursurPosition;
};

export default cursorPosition;
