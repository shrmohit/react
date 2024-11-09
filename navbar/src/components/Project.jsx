import React from "react";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="project-container" id="project">
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
