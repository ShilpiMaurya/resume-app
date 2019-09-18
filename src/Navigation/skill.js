import React from "react";
function Skills(props, ref) {
  return (
    <h2 ref={ref} className="skills">
      Skills
    </h2>
  );
}
export default React.forwardRef(Skills);
