import React from "react";
function Resume(props, ref) {
  return (
    <h2 ref={ref} className="resume-download">
      Resume
    </h2>
  );
}
export default React.forwardRef(Resume);
