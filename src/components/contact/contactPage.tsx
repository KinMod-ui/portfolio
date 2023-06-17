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
            <div className={`title ${styles.contact_title}`}>
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact_subtitle">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly at
              &nbsp; <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
              . I make an effort to respond to all messages within 24 hours,
              although it may take me longer during busy periods. Alternatively,
              you can use the contact form on my website to get in touch. Simply
              fill out the required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on social media, you
              can find me on{" "}
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                {INFO.socials.instagram}
              </a>
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
