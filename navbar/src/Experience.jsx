import React from "react";
import { experiences } from "./data/constant";
import ExperienceCard from "./ExperienceCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="exper-container">
      <div className="exper-section">
        <h1>Experience</h1>
        <p>
          My work experience front-end developer and workinng on different
          projects.
        </p>
        <div className="expercard-container">
          <VerticalTimeline linecolor="#000">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                Key={experience.id}
                className="exper-verticaltimeline"
                iconStyle={{ background: "#000", color: "#fff" }}
                contentStyle={{ background: "#f9f9f9", color: "#333" }}
              >
                <ExperienceCard experience={experience}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
