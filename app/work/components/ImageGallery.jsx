import React from "react";
import Image from "next/image";
import styles from "../styles/imageGallery.module.css";

const ImageGallery = ({ imageGallery }) => {
  return (
    <div className={styles.image_gallery}>
      {imageGallery.map((src, index) => {
        return (
          <div className={styles.project_image} key={index}>
            <Image src={src} alt={`image_gallery_pic_${index}`} fill />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
