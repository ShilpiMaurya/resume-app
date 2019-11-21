import React from "react";
import data from "../../resume.json";
import "./index.css";
function Skills(props, ref) {
  return (
    <>
      <div ref={ref} className="skills">
        <div className="skills_background">
          <div className="skills_mask">
            <div className="skills_profile">
              <div className="skills_profile_logo"></div>
              <div className="skills_profile_heading">Skills & knowledge</div>
            </div>
            <div className="skills_names">
              <div className="skills_names_part1">
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[0]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[1]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text--special">
                    {data.skills.keywords[2]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[3]}
                  </div>
                </div>
              </div>
              <div className="skills_names_part2">
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[4]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[5]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[6]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[7]}
                  </div>
                </div>
                <div className="skills_keywords">
                  <div className="skills_keywords--text">
                    {data.skills.keywords[8]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.forwardRef(Skills);
