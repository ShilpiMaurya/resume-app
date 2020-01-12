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
  handleScroll = () => {
    const currentHeight = document.documentElement.scrollTop;
    if (currentHeight > 3500) {
      const dateClassSelector = document.getElementsByClassName(
        "education_date"
      );
      for (let i = 0; i < dateClassSelector.length; i++) {
        dateClassSelector[i].classList.add("leftAnimation");
      }
      const descriptionClassSelector = document.getElementsByClassName(
        "education_description"
      );
      for (let i = 0; i < descriptionClassSelector.length; i++) {
        descriptionClassSelector[i].classList.add("rightAnimation");
      }
    }
  };
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <>
        <NavBar onNavClick={this.handleChange} />
        <div className="container">
          <Intro />
          <Home ref={this.homeRef} />
          <Skills ref={this.skillRef} />
          <Education ref={this.educationRef} educationData={data.education} />
          <Contacts ref={this.contactRef} />
          <Resume ref={this.resumeRef} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
