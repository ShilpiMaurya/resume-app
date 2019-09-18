import React from "react";
function Contact(props, ref) {
  return (
    <h2 ref={ref} className="contact">
      Contact
    </h2>
  );
}
export default React.forwardRef(Contact);
