import React from "react";
import Link from "next/link";

import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <div className={styles.footer_links}>
          <ul className={styles.footer_nav_link_list}>
            <li className={styles.footer_nav_link_item}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.footer_nav_link_item}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.footer_nav_link_item}>
              <Link href="/projects">Projects</Link>
            </li>

            <li className={styles.footer_nav_link_item}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer_credits}>
          <div className={styles.footer_credits_text}>© 2023 Kin.mod</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
