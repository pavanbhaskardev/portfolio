import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import styles from "../styles/slideimage.module.css";

const ImageSlide = ({ src }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  //   const isInView = useInView(containerRef, {
  //     once: true,
  //     margin: "-50%",
  //   });

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 1200);
  }, []);

  //   console.log("isInView", isInView);

  return (
    <section ref={containerRef} className={styles.container}>
      <Image
        src={src}
        alt="pavan_bhaskar_pic"
        style={{ opacity: isInView ? 1 : 0 }}
        fill
        priority
      />
      <div
        style={{
          backgroundColor: "#A7D451",
          width: "100%",
          height: "100%",
          position: "relative",
          top: 0,
          left: isInView ? "100%" : 0,
          zIndex: 1,
          transition: "left 0.6s cubic-bezier(0.12, 0, 0.39, 0)",
        }}
      ></div>
    </section>
  );
};

export default ImageSlide;
