import React, { useEffect } from "react";
import "./index.css";
import EducationContent from "./EducationContent";
import EducationHeader from "./EducationHeader";
const Education = ({ educationData }, ref) => {
  const handleScroll = () => {
    if (document.documentElement.scrollTop >= ref.current.offsetTop) {
      const dateClassSelector = document.getElementsByClassName(
        "education_date"
      );
      for (let i = 0; i < dateClassSelector.length; i++) {
        dateClassSelector[i].classList.add("leftAnimation");
      }
      const descriptionClassSelector = document.getElementsByClassName(
        "education_description"
      );
      for (let i = 0; i < descriptionClassSelector.length; i++) {
        descriptionClassSelector[i].classList.add("rightAnimation");
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div ref={ref} className="education">
      <EducationHeader heading="Education" />
      <EducationContent content={educationData} />
    </div>
  );
};
export default React.forwardRef(Education);
