import React from "react";
import "./index.css";
import ContactSection from "./ContactSection";
function Contact(props, ref) {
  return (
    <div ref={ref} className="contact">
      <h1 className="contact_heading">Contact Me</h1>
      <div className="contact_container">
        <ContactSection
          heading="Phone-no"
          subheading={props.contactData.phone}
          imgsrc={require("../../images/phone-no1.png")}
          picInfo="phone logo"
        />
        <ContactSection
          heading="Email"
          subheading={props.contactData.email}
          imgsrc={require("../../images/email1.png")}
          picInfo="email logo"
        />
        <ContactSection
          heading="Location"
          subheading={props.contactData.location.country}
          imgsrc={require("../../images/location1.png")}
          picInfo="location logo"
        />
      </div>
    </div>
  );
}
export default React.forwardRef(Contact);
