import React from "react";
import "./index.css";
function SkillTitle(props) {
  return (
    <>
      <div className="skills_web-development-content">
        <div className="skills_web-development_heading_logo"></div>
        <div className="skills_web-development_heading">{props.heading}</div>
      </div>
    </>
  );
}
export default SkillTitle;
