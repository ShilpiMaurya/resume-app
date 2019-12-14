import React from "react";
import "./index.css";
function Contact(props, ref) {
  return (
    <h2 ref={ref} className="contact">
      Contact
    </h2>
  );
}
export default React.forwardRef(Contact);
