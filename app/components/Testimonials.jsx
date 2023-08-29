"use client";
import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "../styles/testimonials.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import testimonials from "./json/testimonials";

const Testimonials = forwardRef((props, ref) => {
  return (
    <section
      className={styles.about_me_container}
      ref={ref}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
    >
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
          const { name, message, imageSrc, position, revealMessage } =
            testimonial;
          return (
            <SwiperSlide className={styles.swiper_slide} key={name}>
              <Image
                src="/blockquote.svg"
                height={40}
                width={40}
                alt="blockquote_pic"
                className={styles.blockquote_pic}
              />

              <div className={styles.testimonial_message_container}>
                <div className={styles.mask}>
                  <p className={styles.testimonial_message}>{revealMessage}</p>
                </div>

                <p className={styles.testimonial_message}>{message}</p>
              </div>

              <section className={styles.testimonial_container}>
                <Image
                  src={imageSrc}
                  height={40}
                  width={40}
                  alt={name}
                  className={styles.testimonial_pic}
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
});

export default Testimonials;
