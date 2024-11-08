import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { education } from "./data/constant";
import "react-vertical-timeline-component";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <div className="educs-container">
      <div className="educs-section">
        <h1 className="educ-title">Education</h1>
        <p className="educ-para">
          My education has been a journey of self-discovery and growth.My
          education details are as follow
        </p>
        <div>
            <VerticalTimeline lineColor="#000">
            {education.map((education) =>(
                <VerticalTimelineElement
                key={education.id}
                className="educs-verticaltimeline"
                iconStyle={{ background: "#000", color: "#fff" }}
                contentStyle={{ background: "#f9f9f9", color: "#333" }}
                >
                    <EducationCard education={education}/>
                </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
