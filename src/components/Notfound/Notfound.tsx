import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../common/navBar";
import Logo from "../common/logo";

import styles from "./styles/404.module.css";
import projectStyles from "../projects/styles/projects.module.css";
import Footer from "../common/footer";

const NotFound = () => {
  const [link, setLink] = useState("");
  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const st = styles.not_found;

  if (!st) {
    return <div>Hey from Notfound</div>;
  }

  return (
    <div className={`${st} page_content`}>
      <NavBar active="none" />
      <div className="content_wrapper">
        <div className={styles.notfound_logo_container}>
          <div className={projectStyles.projects_logo}>
            <Logo width={46} link={true} />
          </div>
        </div>
        <div className={styles.notfound_container}>
          <div className={styles.notfound_message}>
            <div className={styles.notfound_title}>
              Oops! <FontAwesomeIcon icon={faFaceSadTear} />
            </div>
            <div className={styles.not_found_message}>
              We can&apos;t seem to find the page you&apos;re looking for.
              <br />
              The requested URL &quot;{link}&quot; was not found on this server.
            </div>
            <Link href="/" className={styles.not_found_link}>
              Go back to the home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
