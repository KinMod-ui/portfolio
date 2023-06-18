import React, { useEffect } from "react";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";
import Socials from "../about/socials";

import INFO from "../data/user";

import styles from "./styles/contact.module.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page_content">
        <NavBar active="contact" />
        <div className="content_wrapper">
          <div className={styles.contact_logo_container}>
            <div className={styles.contact_logo}>
              <Logo width={46} link={true} />
            </div>
          </div>

          <div className={styles.contact_container}>
            <div className={`title`}>
              Let&apos;s Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact_subtitle">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly at
              &nbsp;{" "}
              <span className="font-bold">
                <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
              </span>
              . I make an effort to respond to all messages as soon as possible
              , although it may take me longer during busy periods. Finally, if
              you prefer to connect on social media, you can find me on{" "}
              <span className="font-bold">
                <a
                  href={INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </span>{" "}
              or{" "}
              <span className="font-bold">
                <a
                  href={INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              . Thanks again for your interest, and I look forward to hearing
              from you!
            </div>
          </div>

          <div className={styles.socials_container}>
            <div className={styles.contact_socials}>
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

export default Contact;
