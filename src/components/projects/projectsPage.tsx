import React, { useEffect } from "react";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";
import AllProjects from "./allProjects";

import styles from "./styles/projects.module.css";

const Projects = (repo) => {
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
              I&apos;ve worked on a variety of projects over the years and
              I&apos;m proud of the progress I&apos;ve made. Many of these
              projects are open-source and available for others to explore and
              contribute to. If you&apos;re interested in any of the projects
              I&apos;ve worked on, please feel free to check out the code and
              suggest any improvements or enhancements you might have in mind.
              Collaborating with others is a great way to learn and grow, and
              I&apos;m always open to new ideas and feedback.
            </div>

            <div className={styles.projects_list}>
              <AllProjects repo={repo.repo} />
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
