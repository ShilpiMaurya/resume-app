import React from "react";
import "./index.css";
function EducationContent(props) {
  return (
    <div className="education_container">
      <div className="education_container_part1">
        <div className="education_date">
          {props.startdate}
          <br />
          {props.enddate}
        </div>
        <div className="education_logo" />
      </div>
      <div className="vertical_line" />
      <div className="education_container_part2">
        <div className="education_type">
          <div className="education_type_heading">{props.institution}</div>
          <div className="education_type_sub-heading">{props.area}</div>
        </div>
        <div className="horizontal_line" />
        <div className="education_description">{props.courses}</div>
      </div>
    </div>
  );
}
export default EducationContent;
