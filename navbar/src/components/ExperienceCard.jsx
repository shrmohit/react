import React from "react";

function ExperienceCard({experience}) {
  return (
    <div className="expercard-container">
      <div className="exper-section">
        <img src={experience.img} alt="" />
        <div className="exper-item">
          <h1 className="exper-role">{experience.role}</h1>
          <h3 className="exper-company">{experience.company}</h3>
          <h4 className="exper-date">{experience.date}</h4>
        </div>
      </div>
      <div className="expercard-botttom">
        <p className="exper-desc">{experience.desc}</p>
        <h4>Skills:{experience.skills}</h4>
      </div>
    </div>
  );
}

export default ExperienceCard;
