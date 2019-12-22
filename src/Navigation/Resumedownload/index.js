import React from "react";
import "./index.css";
function Resume(props, ref) {
  return (
    <div ref={ref} className="resume-download">
      <div className="resume-download_logo"></div>
      <a
        className="resume-download_heading"
        href={"https://registry.jsonresume.org/ShilpiMaurya"}
        target={"_blank"}
      >
        Download Resume
      </a>
    </div>
  );
}
export default React.forwardRef(Resume);
