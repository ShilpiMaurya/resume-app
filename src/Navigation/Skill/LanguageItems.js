import React from "react";
import data from "../../resume.json";
import "./index.css";
const skillImage = require.context("../../images/");
function LanguageItems() {
  return data.languages.map(subLanguages => {
    return subLanguages.map(({ language, fluency, logo }) => {
      const imgSource = skillImage(`./${logo}`);
      return (
        <div className="skill_language_items">
          <img
            className="skill_images"
            src={imgSource}
            alt="logo of following skill"
          />
          <div className="skills_web-development_name">{language}</div>
          <div className="skills_web-development_level">{fluency}</div>
        </div>
      );
    });
  });
}
export default LanguageItems;
