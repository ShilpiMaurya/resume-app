import React from "react";
import "./index.css";
function SkillTitle(props) {
  return (
    <>
      <div className="skills_web-development-content">
        <img
          className="skills_web-development_heading_logo"
          src={props.image}
          alt={props.pic_name}
        />
        <div className="skills_web-development_heading">{props.heading}</div>
      </div>
    </>
  );
}
export default SkillTitle;
