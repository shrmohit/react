import React from "react";
import { projects } from "./data/constant";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="project-container">
      <div className="project-section">
        <h1 className=" project-titles">Projects</h1>
        <p>
          i have worked on a wide range of project.Here are some of my projects.
        </p>
        <div className="projectcard-container">
            <ProjectCard/>
        </div>
      </div>
    </div>
  );
}

export default Project;
