import React from "react";
import data from "../../resume.json";
import "./index.css";
const skillImage = require.context("../../images/");
function SkillContent() {
  return data.skills.map(subSkills => {
    return subSkills.map(({ name, level, logo }) => {
      const imgSource = skillImage(`./${logo}`);
      return (
        <>
          <div className="skills_web-development_container">
            <div className="skills_web-development_column">
              <img className="skill_images" src={imgSource} alt="logo" />
              <div className="skills_web-development_name">{name}</div>
              <div className="skills_web-development_level">{level}</div>
            </div>
          </div>
        </>
      );
    });
  });
}
export default SkillContent;
