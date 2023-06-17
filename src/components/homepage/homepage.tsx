import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Footer from "../common/footer";
import Navbar from "../common/navBar";
import Logo from "../common/logo";

import INFO from "../data/user";

import styles from "./styles/homepage.module.css";
import AllProjects from "../projects/allProjects";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = parseFloat(
        (Math.round(window.pageYOffset * 100) / 100).toFixed(2)
      );

      const newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle: React.CSSProperties = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <div className="page_content">
      <Navbar active="home" />
      <div className="content_wrapper">
        <div className={styles.homepage_logo_container}>
          <div style={logoStyle}>
            <Logo width={logoSize} link={true} />
          </div>
        </div>

        <div className={styles.homepage_container}>
          <div className={styles.homepage_first_area}>
            <div className={styles.homepage_first_area_left_side}>
              <div className={`title ${styles.homepage_title}`}>
                {INFO.homepage.title}
              </div>

              <div className={`subtitle ${styles.homepage_subtitle}`}>
                {INFO.homepage.description}
              </div>
            </div>

            <div className={styles.homepage_first_area_right_side}>
              <div className={styles.homepage_image_container}>
                <div className={styles.homepage_image_wrapper}>
                  <Image
                    src="/kinmod.png"
                    alt="about"
                    className={styles.homepage_image}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* here */}
          <div className={styles.homepage_socials}>
            {/* wowowow */}
            <Link href={INFO.socials.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.homepage_social_icon}
              />{" "}
            </Link>
            <Link href={INFO.socials.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.homepage_social_icon}
              />
            </Link>

            <Link
              href={`mailto:${INFO.main.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faMailBulk}
                className={styles.homepage_social_icon}
              />
            </Link>
          </div>

          <div className="homepage_projects">
            <AllProjects />
          </div>

          <div className="page_footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
