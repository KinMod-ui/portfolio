import React, { useEffect } from "react";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";
import Socials from "./socials";

import INFO from "../data/user";

import styles from "./styles/about.module.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page_content">
        <NavBar active="about" />
        <div className="content_wrapper">
          <div className={styles.about_logo_container}>
            <div className={styles.about_logo}>
              <Logo width={46} link={true} />
            </div>
          </div>

          <div className={styles.about_container}>
            <div className={styles.about_main}>
              <div className={styles.about_right_side}>
                <div className={`title ${styles.about_title}`}>
                  {INFO.about.title}
                </div>

                <div className={`subtitle ${styles.about_subtitle}`}>
                  {INFO.about.description}
                </div>
              </div>

              <div className={styles.about_left_side}>
                <div className={styles.about_image_container}>
                  <div className={styles.about_image_wrapper}>
                    <Image
                      src="/kinmod.png"
                      alt="about"
                      className={styles.about_image}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                <div className={styles.about_socials}>
                  <Socials />
                </div>
              </div>
            </div>
            <div className={styles.about_socials_mobile}>
              <Socials />
            </div>
          </div>
          <div className="page_footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
