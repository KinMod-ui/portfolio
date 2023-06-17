import React from "react";

import Project from "./project";

import INFO from "../data/user";

import styles from "./styles/allProjects.module.css";

const AllProjects = () => {
  return (
    <div className={styles.all_projects_container}>
      {INFO.projects.map((project, index) => (
        <div className={styles.all_projects_project} key={index}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
