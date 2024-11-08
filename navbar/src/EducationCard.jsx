import React from "react";

function EducationCard({ education }) {
  return (
    <div className="educas-card">
      <div className="educas-item-top">
        <img src={education.img} alt="" />
        <div>
          <h3>{education.school}</h3>
          <h4>{education.degree}</h4>
        </div>
      </div>
      <div className="educas-item-bottom">
        <h3>{education.grade}</h3>
        <p>
        {education.desc.length > 100
            ? `${education.desc.substring(0, 100)}...`
            : education.desc}
        </p>
        <h2>{education.date}</h2>
      </div>
    </div>
  );
}

export default EducationCard;
