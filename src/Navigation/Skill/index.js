import React from "react";
import "./index.css";
import SectionHead from "./SectionHead";
import SkillTitle from "./SkillTitle";
import SkillContent from "./SkillContent";
import LanguageItems from "./LanguageItems";
function Skills(props, ref) {
  return (
    <div ref={ref} className="skills">
      <SectionHead heading="SKILLS & KNOWLEDGE" subheading="How Good I'm" />
      <SkillTitle
        heading="Web development"
        image={require("../../images/web-dev-logo.png")}
      />
      <div className="skill_content">
        <SkillContent />
      </div>
      <SkillTitle
        heading="Languages"
        image={require("../../images/languages.png")}
      />
      <div className="skill_content">
        <LanguageItems />
      </div>
    </div>
  );
}
export default React.forwardRef(Skills);
