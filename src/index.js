import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./Navigation/Contact";
import Home from "./Navigation/Home";
import Skills from "./Navigation/Skill";
import NavBar from "./Navigation/NavBar";
import Education from "./Navigation/Education";
import Resume from "./Navigation/Resumedownload";
import Intro from "./Navigation/Intro";
import data from "./resume.json";
import "./index.css";
import "./theme.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.skillRef = React.createRef();
    this.educationRef = React.createRef();
    this.contactRef = React.createRef();
    this.resumeRef = React.createRef();
    this.introRef = React.createRef();
  }
  handleChange = key => {
    let offsetTop = 0;
    if (key === "Homekey") {
      offsetTop = this.homeRef.current.offsetTop;
    } else if (key === "Skillkey") {
      offsetTop = this.skillRef.current.offsetTop;
    } else if (key === "Educationkey") {
      offsetTop = this.educationRef.current.offsetTop;
    } else if (key === "Contactkey") {
      offsetTop = this.contactRef.current.offsetTop;
    } else if (key === "Resumekey") {
      offsetTop = this.resumeRef.current.offsetTop;
    }
    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <>
        <NavBar onNavClick={this.handleChange} ref={this.introRef} />
        <div className="container">
          <Intro ref={this.introRef} />
          <Home ref={this.homeRef} />
          <Skills ref={this.skillRef} />
          <Education ref={this.educationRef} educationData={data.education} />
          <Contacts ref={this.contactRef} contactData={data.basics} />
          <Resume ref={this.resumeRef} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
