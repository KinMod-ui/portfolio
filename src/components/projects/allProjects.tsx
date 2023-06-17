import React from "react";

import Project from "./project";

import styles from "./styles/allProjects.module.css";
import type { Repositories, Repository } from "@saber2pr/types-github-api";

interface temp {
  repo: Repositories;
  parent: string;
}

const AllProjects = ({ repo, parent }: temp) => {
  // console.log(repo);
  return (
    <>
      <div className={styles.all_projects_container} key={parent}>
        {repo.map((project: Repository) => (
          <div
            className={styles.all_projects_project}
            key={`${project.name} ${parent}`}
          >
            <Project
              logo={`/${project.name}.png`}
              title={project.name}
              description={project.description || "haha"}
              linkText="View Project"
              link={(project.homepage as string) || project.html_url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProjects;
