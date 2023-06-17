import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../data/user";

import styles from "./styles/socials.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.social}>
        <Link href={INFO.socials.twitter} target="_blank" rel="noreferrer">
          <div className={styles.social_icon}>
            <FontAwesomeIcon icon={faTwitter} className={styles.social_icon} />
          </div>
          <div className={styles.social_text}>Follow on Twitter</div>
        </Link>
      </div>

      <div className={styles.social}>
        <Link href={INFO.socials.github} target="_blank" rel="noreferrer">
          <div className={styles.social_icon}>
            <FontAwesomeIcon icon={faGithub} className={styles.social_icon} />
          </div>
          <div className={styles.social_text}>Follow on GitHub</div>
        </Link>
      </div>

      <div className={styles.social}>
        <Link href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <div className={styles.social_icon}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.social_icon} />
          </div>
          <div className={styles.social_text}>Follow on LinkedIn</div>
        </Link>
      </div>

      <div className={styles.social}>
        <Link href={INFO.socials.instagram} target="_blank" rel="noreferrer">
          <div className={styles.social_icon}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.social_icon}
            />
          </div>
          <div className={styles.social_text}>Follow on Instagram</div>
        </Link>
      </div>

      <div className={styles.email}>
        <div className={styles.email_wrapper}>
          <Link
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.mail_icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className={styles.social_text}>{INFO.main.email}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
