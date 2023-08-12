"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "../styles/testimonials.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import testimonials from "./json/testimonials";

const Testimonials = () => {
  return (
    <section className={styles.about_me_container}>
      <p className={styles.heading}>What they said</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {testimonials.map((testimonial) => {
          const { name, message, imageSrc, position } = testimonial;
          return (
            <SwiperSlide className={styles.swiper_slide} key={name}>
              <Image
                src="/blockquote.svg"
                height={40}
                width={40}
                alt="blockquote_pic"
              />
              <p className={styles.testimonial_message}>{message}</p>

              <section className={styles.testimonial_container}>
                <Image
                  src={imageSrc}
                  height={40}
                  width={40}
                  alt="narasimha_narahari_pic"
                />

                <div>
                  <p className={styles.testimonial_name}>{name}</p>
                  <p className={styles.testimonial_position}>{position}</p>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
