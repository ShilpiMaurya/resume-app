import React from "react";
import "./index.css";
import EducationContent from "./EducationContent";
import EducationHeader from "./EducationHeader";
import data from "../../resume.json";
function Education(props, ref) {
  return (
    <div ref={ref} className="education">
      <EducationHeader heading="Education" />
      <EducationContent
        startdate={data.education[0].startDate}
        enddate={data.education[0].endDate}
        institution={data.education[0].institution}
        area={data.education[0].area}
        courses={data.education[0].courses[0]}
      />
      <EducationContent
        startdate={data.education[1].startDate}
        enddate={data.education[1].endDate}
        institution={data.education[1].institution}
        area={data.education[1].area}
        courses={data.education[1].courses[0]}
      />
    </div>
  );
}
export default React.forwardRef(Education);
