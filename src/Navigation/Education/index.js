import React from "react";
function Education(props, ref) {
  return (
    <h2 ref={ref} className="education">
      Education
    </h2>
  );
}
export default React.forwardRef(Education);
