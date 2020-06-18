import React from "react";
import "./index.css";
const EducationHeader = props => {
  return (
    <div className="education_header">
      <div className="education_heading_logo" />
      <h1 className="education_heading"> {props.heading}</h1>
    </div>
  );
};
export default EducationHeader;
