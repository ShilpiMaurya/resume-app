import React from "react";
import data from "../../resume.json";
import "./index.css";
function Skills(props, ref) {
  return data.skills.map(subSkills => {
    return subSkills.map(({ name, level, logo }) => {
      console.log(name);
      console.log(level);
      return (
        <>
          <div ref={ref} className="skills">
            <div className="skills_profile">
              <div className="skills_profile_logo"></div>
              <h1 className="skills_profile_heading">SKILLS & KNOWLEDGE</h1>
              <h5 className="skills_profile_sub-heading">How Good I'm</h5>
            </div>
            <div className="skills_web-development">
              <div className="skills_web-development-content">
                <div className="skills_web-development_heading_logo"></div>
                <div className="skills_web-development_heading">
                  Web development
                </div>
              </div>
              <div className="skills_web-development_column">
                <div className="skills_web-development_name">{name}</div>
                <div className="skills_web-development_level">{level}</div>
              </div>
            </div>
            <div className="skills_language">
              <div className="skills_language_container">
                <div className="skills_language_logo"></div>
                <div className="skills_language_heading">Languages</div>
              </div>
              <div className="skills_language_content">
                <div className="skills_language_content_column">
                  <div className="skills_language_content_logo1"></div>
                  <div className="skills_language_content_name">
                    {data.languages[0].language}
                  </div>
                  <div className="skills_language_content_level">
                    {data.languages[0].fluency}
                  </div>
                </div>
                <div className="skills_language_content_column">
                  <div className="skills_language_content_logo2"></div>
                  <div className="skills_language_content_name">
                    {data.languages[1].language}
                  </div>
                  <div className="skills_language_content_level">
                    {data.languages[1].fluency}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  });
}
export default React.forwardRef(Skills);
