import React from "react";
import "./index.css";
import EducationContent from "./EducationContent";
import EducationHeader from "./EducationHeader";
import data from "../../resume.json";
function Education(props, ref) {
  return (
    <div ref={ref} className="education">
      <EducationHeader heading="Education" />
      <EducationContent content={data.education} />
    </div>
  );
}
export default React.forwardRef(Education);
