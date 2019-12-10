import React from "react";
import "./index.css";
import EducationContent from "./EducationContent";
import EducationHeader from "./EducationHeader";
function Education(props, ref) {
  return (
    <div ref={ref} className="education">
      <EducationHeader heading="Education" />
      <EducationContent content={props.educationData} />
    </div>
  );
}
export default React.forwardRef(Education);
