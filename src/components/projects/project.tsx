import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/project.module.css";
import Image from "next/image";

const Project = (props: {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className={styles.project}>
        <Link href={link}>
          <div className={styles.project_container}>
            <div className={styles.project_logo}>
              <Image src={logo} alt="logo" height={10} width={10} />
            </div>
            <div className={styles.project_title}>{title}</div>
            <div className={styles.project_description}>{description}</div>
            <div className={styles.project_link}>
              <div className={styles.project_link_icon}>
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className={styles.project_link_text}>{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Project;
