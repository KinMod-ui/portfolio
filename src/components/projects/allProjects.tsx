import React, { useContext } from "react";

import Project from "./project";

import INFO from "../data/user";

import styles from "./styles/allProjects.module.css";

const AllProjects = (repo) => {
  const allowed = [
    "twitterClone",
    "Nasa-rocket-project",
    "NetworkConnector",
    "PostOffice",
    "portfolio",
  ];

  return (
    <>
      <div className={styles.all_projects_container}>
        {repo.repo.map((project, index) => (
          <div className={styles.all_projects_project} key={index}>
            <Project
              logo={`/${project.name}.png`}
              title={project.name}
              description={project.description || "haha"}
              linkText="View Project"
              link={project.homepage || project.html_url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProjects;
