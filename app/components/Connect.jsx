import React from "react";
import AnimatedButton from "./commonComponents/AnimatedButton";
import styles from "../styles/connect.module.css";

const Connect = () => {
  const d = new Date();
  const offSetTime = d.getTimezoneOffset();
  const istOffset = 5 * 60 + 30;
  const totalOffset = offSetTime + istOffset;
  const istTime = new Date(d.getTime() + totalOffset * 60000);
  const amOrPm = () => {
    const hours = istTime.getHours();
    if (hours >= 12) {
      return "PM";
    }
    return "AM";
  };

  const formattedTime = `${
    istTime.getHours() > 12 ? istTime.getHours() - 12 : istTime.getHours()
  }:${istTime.getMinutes() + amOrPm()} IST`;

  return (
    <section
      className={styles.parent_container}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
    >
      <p className={styles.heading}>Connect</p>

      <footer>
        <p className={styles.connect_subheading}>Let's work Together!</p>

        <section className={styles.connect_links_container}>
          <AnimatedButton>
            <a className={styles.connect_links}>pavanbhaskardev@gmail.com</a>
          </AnimatedButton>
          <AnimatedButton>
            <a className={styles.connect_links}>+91 9440777253</a>
          </AnimatedButton>
        </section>

        <section className={styles.footer_details_container}>
          <div className={styles.footer_moredetails_container}>
            <div className={styles.footer_meta_container}>
              <span>Version</span>
              <p>2023 © Edition</p>
            </div>

            <div className={styles.footer_meta_container}>
              <span>Local Time</span>
              <p>{formattedTime}</p>
            </div>
          </div>

          <div className={styles.footer_meta_container}>
            <span>Socials</span>

            <div className={styles.social_links}>
              <a>LinkedIn</a>
              <a>Instagram</a>
              <a>Github</a>
              <a>Dribbble</a>
            </div>
            <hr className={styles.divider} />
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Connect;
