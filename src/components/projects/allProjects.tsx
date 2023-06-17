import React from "react";

import Project from "./project";

import styles from "./styles/allProjects.module.css";
import type { Repositories, Repository } from "@saber2pr/types-github-api";

interface temp {
  repo: Repositories;
}

const AllProjects = ({ repo }: temp) => {
  return (
    <>
      <div className={styles.all_projects_container}>
        {repo.map((project: Repository, index) => (
          <>
            <div className={styles.all_projects_project} key={index}>
              <Project
                logo={`/${project.name}.png`}
                title={project.name}
                description={project.description || "haha"}
                linkText="View Project"
                link={(project.homepage as string) || project.html_url}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AllProjects;
