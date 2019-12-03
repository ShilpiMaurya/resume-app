import React from "react";
import data from "../../resume.json";
import "./index.css";
const skillImage = require.context("../../images/");
function SkillContent(props) {
  return data.skills.map(subSkills => {
    return subSkills.map(({ name, level, logo }) => {
      const imgSource = skillImage(`./${logo}`);
      return (
        <div className="skill_language_items">
          <img
            className="skill_images"
            src={imgSource}
            alt="logo of following skill"
          />
          <div className="skills_web-development_name">{name}</div>
          <div className="skills_web-development_level">{level}</div>
        </div>
      );
    });
  });
}
export default SkillContent;
