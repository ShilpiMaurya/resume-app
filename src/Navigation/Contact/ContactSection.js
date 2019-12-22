import React from "react";
import "./index.css";
function ContactSection(props) {
  return (
    <>
      <div className="contact_section">
        <img className="contact_logo" src={props.imgsrc} alt={props.picInfo} />
        <div className="contact_container_heading">{props.heading}</div>
        <div className="contact_container_sub-heading">{props.subheading}</div>
      </div>
    </>
  );
}
export default ContactSection;
