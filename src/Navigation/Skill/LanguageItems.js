import React from "react";
import data from "../../resume.json";
import "./index.css";
const skillImage = require.context("../../images/");
function LanguageItems() {
  return data.languages.map(subLanguages => {
    return subLanguages.map(({ language, fluency, logo }) => {
      const imgSource = skillImage(`./${logo}`);
      return (
        <>
          <div className="skills_language_content">
            <div className="skill_language_container">
              <img className="skill_images" src={imgSource} alt="pic" />
              <div className="skills_language_content_name">{language}</div>
              <div className="skills_language_content_level">{fluency}</div>
            </div>
          </div>
        </>
      );
    });
  });
}
export default LanguageItems;
