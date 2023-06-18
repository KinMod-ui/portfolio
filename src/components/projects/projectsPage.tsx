import React, { useEffect } from "react";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";
import AllProjects from "./allProjects";

import type { Repositories } from "@saber2pr/types-github-api";

import styles from "./styles/projects.module.css";

interface temp {
  repo: Repositories;
}

const Projects = ({ repo }: temp) => {
  // console.log(repo);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page_content">
        <NavBar active="projects" />
        <div className="content_wrapper">
          <div className={styles.projects_logo_container}>
            <div className={styles.projects_logo}>
              <Logo width={46} link={true} />
            </div>
          </div>
          <div className={styles.projects_container}>
            <div className="title projects_title">
              Things I&apos;ve made trying to put my dent in the universe.
            </div>

            <div className="subtitle projects-subtitle">
              A showcase of my software and web development journey.
            </div>

            <div className={styles.projects_list}>
              <AllProjects repo={repo} parent="pp" />
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

export default Projects;
