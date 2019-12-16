import React from "react";
import "./index.css";
const EducationContent = ({ content }) => {
  return content.map(item => {
    return item.map(
      ({ startDate, endDate, institution, area, courses }, index) => {
        return (
          <div key={index} className="education_container">
            <div className="education_container_part1">
              <div className="education_date">
                {startDate}
                <br />
                {endDate}
              </div>
              <div className="education_logo" />
            </div>
            <div className="vertical_line" />
            <div className="education_container_part2">
              <div className="education_type">
                <div className="education_type_heading">{institution}</div>
                <div className="education_type_sub-heading">{area}</div>
              </div>
              <div className="horizontal_line" />
              <div className="education_description">{courses}</div>
            </div>
          </div>
        );
      }
    );
  });
};
export default EducationContent;
