import React from "react";
import "./index.css";
import EducationContent from "./EducationContent";
import EducationHeader from "./EducationHeader";
const Education = ({ educationData }, ref) => {
  return (
    <div ref={ref} className="education">
      <EducationHeader heading="Education" />
      <EducationContent content={educationData} />
    </div>
  );
};
export default React.forwardRef(Education);
