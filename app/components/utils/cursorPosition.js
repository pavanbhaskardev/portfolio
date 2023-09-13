"use client";
import { useEffect, useState } from "react";

// gives the x & y positions
const cursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });

  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => updateCursorPosition(e));

    return () => {
      window.removeEventListener("mousemove", (e) => updateCursorPosition(e));
    };
  }, []);

  return cursorPosition;
};

export default cursorPosition;
