import React from "react";
import "./index.css";
function SectionHead(props) {
  return (
    <div className="skills_profile">
      <div className="skills_profile_logo" />
      <h1 className="skills_profile_heading">{props.heading}</h1>
      <h5 className="skills_profile_sub-heading">{props.subheading}</h5>
    </div>
  );
}
export default SectionHead;
