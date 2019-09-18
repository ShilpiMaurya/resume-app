import React from "react";
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="button">
          <button
            onClick={() => {
              this.props.onNavClick("Homekey");
            }}
          >
            Home
          </button>
        </div>
        <div className="button">
          <button
            onClick={() => {
              this.props.onNavClick("Skillkey");
            }}
          >
            Skills
          </button>
        </div>
        <div className="button">
          <button
            onClick={() => {
              this.props.onNavClick("Educationkey");
            }}
          >
            Education
          </button>
        </div>
        <div className="button">
          <button
            onClick={() => {
              this.props.onNavClick("Contactkey");
            }}
          >
            Contact
          </button>
        </div>
        <div className="button">
          <button
            onClick={() => {
              this.props.onNavClick("Resumekey");
            }}
          >
            Resume
          </button>
        </div>
      </div>
    );
  }
}
export default NavBar;
