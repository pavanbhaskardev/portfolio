"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styles from "../styles/testimonials.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section data-scroll-section className={styles.about_me_container}>
      <p className={styles.heading} data-scroll>
        What they said
      </p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className={styles.swiper_slide}>
          Slide 1 lets see
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          Slide 2, this is slide 2
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          Slide 3, this is slide 3
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
