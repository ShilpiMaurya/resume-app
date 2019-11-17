import React from "react";
import "./index.css";
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <button
          onClick={() => {
            this.props.onNavClick("Homekey");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            this.props.onNavClick("Skillkey");
          }}
        >
          Skills
        </button>
        <button
          onClick={() => {
            this.props.onNavClick("Educationkey");
          }}
        >
          Education
        </button>
        <button
          onClick={() => {
            this.props.onNavClick("Contactkey");
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            this.props.onNavClick("Resumekey");
          }}
        >
          Resume
        </button>
      </div>
    );
  }
}
export default NavBar;
