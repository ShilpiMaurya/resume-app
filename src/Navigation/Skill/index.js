import React from "react";
import data from "../../resume.json";
import "./index.css";
function Skills(props, ref) {
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
          <div className="skills_web-development_content--part1">
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo1"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[0]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo2"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[1]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo5"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[3]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
          </div>
          <div className="skills_web-development_content--part2">
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo9"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[8]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo3"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[4]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo6"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[5]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
          </div>
          <div className="skills_web-development_content--part3">
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo7"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[6]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo8"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[7]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
            <div className="skills_web-development_column">
              <div className="skills_web-development_logo4"></div>
              <div className="skills_web-development_name">
                {data.skills.keywords[2]}
              </div>
              <div className="skills_web-development_level">Intermediate</div>
            </div>
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
}
export default React.forwardRef(Skills);
