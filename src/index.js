import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./Navigation/Contact/index";
import Home from "./Navigation/Home/index";
import Skills from "./Navigation/Skill/index";
import NavBar from "./Navigation/NavBar/index";
import Education from "./Navigation/Education/index";
import Resume from "./Navigation/Resumedownload/index";
import Intro from "./Navigation/Intro/index";
import "./index.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.skillRef = React.createRef();
    this.educationRef = React.createRef();
    this.contactRef = React.createRef();
    this.resumeRef = React.createRef();
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
  componentDidMount() {}
  render() {
    return (
      <>
        <NavBar onNavClick={this.handleChange} />
        <div className="container">
          <Intro />
          <Home ref={this.homeRef} />
          <Skills ref={this.skillRef} />
          <Education ref={this.educationRef} />
          <Contacts ref={this.contactRef} />
          <Resume ref={this.resumeRef} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
