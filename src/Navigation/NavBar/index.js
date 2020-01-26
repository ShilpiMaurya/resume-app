import React, { useEffect, useRef } from "react";
import "./index.css";
const NavBar = props => {
  const navbarRef = useRef();
  const manageScroll = () => {
    if (document.documentElement.scrollTop >= 700) {
      navbarRef.current.style.visibility = "visible";
      navbarRef.current.classList.add("nav-bar-animation");
    } else {
      navbarRef.current.style.visibility = "hidden";
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", manageScroll);
    return () => {
      document.removeEventListener("scroll", manageScroll);
    };
  });
  return (
    <div className="nav-bar" ref={navbarRef}>
      <button
        onClick={() => {
          props.onNavClick("Homekey");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          props.onNavClick("Skillkey");
        }}
      >
        Skills
      </button>
      <button
        onClick={() => {
          props.onNavClick("Educationkey");
        }}
      >
        Education
      </button>
      <button
        onClick={() => {
          props.onNavClick("Contactkey");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          props.onNavClick("Resumekey");
        }}
      >
        Resume
      </button>
    </div>
  );
};
export default NavBar;
