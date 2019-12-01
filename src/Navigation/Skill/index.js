import React from "react";
import "./index.css";
import SectionHead from "./SectionHead";
import SkillTitle from "./SkillTitle";
import SkillContent from "./SkillContent";
import LanguageTitle from "./LanguageTitle";
import LanguageItems from "./LanguageItems";
function Skills(props, ref) {
  return (
    <div ref={ref} className="skills">
      <SectionHead heading="SKILLS & KNOWLEDGE" subheading="How Good I'm" />
      <SkillTitle heading="Web development" />
      <SkillContent />
      <LanguageTitle heading="Languages" />
      <LanguageItems />
    </div>
  );
}
export default React.forwardRef(Skills);
