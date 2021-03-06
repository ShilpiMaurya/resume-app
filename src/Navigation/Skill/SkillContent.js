import React from "react";
import "./index.css";
function SkillContent(props) {
  return props.info.map((subSkills, index) => {
    return subSkills.map(({ name, level, logo }) => {
      // const imgSource = props.picture(`./${logo}`);
      return (
        <div key={index} className="skill_language_items">
          {/* <img
            className="skill_images"
            src={imgSource}
            alt="logo of following skill"
          /> */}
          <div className="skills_web-development_level">{name}</div>
          {/* <div className="skills_web-development_level">{level}</div> */}
        </div>
      );
    });
  });
}
export default SkillContent;
