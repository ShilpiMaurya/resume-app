import React from "react";
import "./index.css";
import data from "../../resume.json";
import SectionHead from "./SectionHead";
import SkillTitle from "./SkillTitle";
import SkillContent from "./SkillContent";
const skillImage = require.context("../../images/");
function Skills(props, ref) {
  return (
    <div ref={ref} className="skills">
      <SectionHead heading="SKILLS & KNOWLEDGE" subheading="How Good I'm" />
      <SkillTitle
        heading="Web development"
        image={require("../../images/web-dev-logo.png")}
      />
      <div className="skill_content">
        <SkillContent info={data.skills} picture={skillImage} />
      </div>
      <SkillTitle
        heading="Languages"
        image={require("../../images/languages.png")}
      />
      <div className="skill_content">
        <SkillContent info={data.languages} picture={skillImage} />
      </div>
    </div>
  );
}
export default React.forwardRef(Skills);
