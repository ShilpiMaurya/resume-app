import React from "react";
import "./index.css";
function LanguageTitle(props) {
  return (
    <>
      <div className="skills_language_container">
        <div className="skills_language_logo"></div>
        <div className="skills_language_heading">{props.heading}</div>
      </div>
    </>
  );
}
export default LanguageTitle;
