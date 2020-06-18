import React, { useEffect, useRef, useCallback } from "react";
import "./index.css";
const NavBar = (props, ref) => {
  const navbarRef = useRef();
  const manageScroll = useCallback(
    e => {
      if (e.target.documentElement.scrollTop >= ref.current.offsetHeight) {
        navbarRef.current.classList.add("nav-bar-active");
      } else {
        navbarRef.current.classList.remove("nav-bar-active");
      }
    },
    [ref, navbarRef]
  );

  useEffect(() => {
    document.addEventListener("scroll", manageScroll);
    return () => {
      document.removeEventListener("scroll", manageScroll);
    };
  }, [manageScroll]);
  return (
    <div className="nav-bar" ref={navbarRef}>
      <div
        className="nav-bar_button"
        onClick={() => {
          props.onNavClick("Homekey");
        }}
      >
        Home
      </div>
      <div
        className="nav-bar_button"
        onClick={() => {
          props.onNavClick("Skillkey");
        }}
      >
        Skills
      </div>
      <div
        className="nav-bar_button"
        onClick={() => {
          props.onNavClick("Educationkey");
        }}
      >
        Education
      </div>
      <div
        className="nav-bar_button"
        onClick={() => {
          props.onNavClick("Contactkey");
        }}
      >
        Contact
      </div>
      <div
        className="nav-bar_button"
        onClick={() => {
          props.onNavClick("Resumekey");
        }}
      >
        Resume
      </div>
    </div>
  );
};
export default React.forwardRef(NavBar);
