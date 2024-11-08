import React from "react";
import { projects } from "./data/constant";

function ProjectCard() {
  return (
    <div className="projectcard-section">
      {projects.map((project) => (
        <div className="projectcard-inner">
          <img className="pcard-img" src={project.image} alt="" />
          <div className="projectcard-item">
            <h3 className="pcard-tag">{project.tags}</h3>
            <h1 className="pcard-title">{project.title}</h1>
            <h5 className="pcard-date">{project.date}</h5>
            <p className="pcard-desc">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
