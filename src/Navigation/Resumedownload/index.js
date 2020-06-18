import React from "react";
import "./index.css";
function Resume(props, ref) {
  return (
    <div ref={ref} className="resume-download">
      <div className="resume-download_logo"></div>
      <a
        className="resume-download_link"
        href="https://raw.githubusercontent.com/ShilpiMaurya/resume-app/develop/src/resume.json"
        target={"_blank"}
      >
        <h1 className="resume-download_heading">Download Resume</h1>
      </a>
    </div>
  );
}
export default React.forwardRef(Resume);
