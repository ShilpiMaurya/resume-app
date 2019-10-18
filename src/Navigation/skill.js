import React from "react";
function Skills(props, ref) {
  return (
    <div>
      <h2 ref={ref} className="skills">
        Skills
      </h2>
    </div>
  );
}
export default React.forwardRef(Skills);
