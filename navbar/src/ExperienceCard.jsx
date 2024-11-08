import React from "react";

function ExperienceCard({experience}) {
  return (
    <div className="expercard-container">
      <div>
        <img src={experience.img} alt="" />
        <div>
          <h1>{experience.role}</h1>
          <h3>{experience.company}</h3>
          <h4>{experience.date}</h4>
        </div>
      </div>
      <div>
        <p>{experience.desc}</p>
        <h4>Skills:{experience.skills}</h4>
      </div>
    </div>
  );
}

export default ExperienceCard;
